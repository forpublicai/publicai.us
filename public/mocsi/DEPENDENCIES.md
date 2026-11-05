# What depends on what

Every figure in the grant package comes from two spreadsheets. This file says
which, so that changing an input never leaves a document behind.

## The chain

```
FacilityUpgrades/FacilityUpgradesModel.xlsx   (electrical, backup, cooling,
  |                                            the per-kW charge in both cases)
  |  charge per kW, design load, and capex, sized to each scenario's fleet:
  |  scripts/copyFacility.py (`make facility`) copies them into the compute
  |  workbook's Scenarios sheet, rows 13-16, writing only on change. Copied,
  |  not linked: a link between workbooks breaks when the files move.
  |  facts.py and scenarioSheets.py both refuse stale copies.
  v
NvidiaUsedLiquidCooledModel.xlsx              (fleet, revenue, cost, financing)
  |
  +--> scripts/sweep.py        --> build/sweep.json + FleetSweep sheet
  |                                build/launchRamp.json + LaunchRamp sheet
  +--> scripts/coolingCases.py --> build/coolingCases.json + CoolingCases sheet
  |                                (drives BOTH workbooks: sizes the facility
  |                                per case, then bills the compute its charge)
  |  Scenarios sheet: a live switch (B4) choosing the full build, the pilot,
  |  or the full build financed. It feeds the purchase shape
  |  (Class_NVIDIA_Datacenter B47, D47, D48, F48) and the facility terms
  |  (Inputs B44:B47). facts.py stops unless it is on "Full build".
  |
  +--> scripts/scenarioSheets.py --> build/scenarios.json + Scenario_Pilot,
  |                                  Scenario_FullBuild, and
  |                                  Scenario_FullBuildFinanced sheets
  |                                  (printable summaries; it proves the
  |                                  switch reproduces each one)
  |        each of the three records the model fingerprint it ran against
  |
  |  scripts/facts.py  proves both workbooks' stored values are current, then
  |                    runs the compute model three times (grant, half, financed)
  v                    and reads the fleet-size claims from build/sweep.json
scripts/build/facts.json                      (the single source of every
  |                                            figure the package quotes)
  +--> scripts/renderDocs.py --> ComputeNarrative.md
  |                              External/FacilitySummary.md
  |                              External/FinancialSummary.md
  |                              External/CoverLetter.md
  |                              Review/ReviewCoverNote.md
  |                              FacilityUpgrades/FacilityUpgradesMemo.md
  |                              Review/MaineColocationComparison.md
  |                              (colocation arithmetic: scripts/coloComparison.py)
  |                              ../README.md (file index from git ls-files and
  |                              templates/ReadmeFiles.json; an undescribed file stops the build)
  |                              (from templates/*.md.tmpl)
  +--> scripts/patchDeck.py  --> ComputeGrantDeck.pptx text boxes and notes
  |                              (from templates/DeckText.md), tables and charts
  |                              (from templates/deck.json)
  +--> scripts/makeDocs.py   --> External/*.pdf including the deck PDF,
  |                              docx copies, and Review/ copies of both
  |                              workbooks and the deck
  +--> scripts/testChecker.py      plants errors (49 assertions); the checker must catch all
  +--> scripts/checkConsistency.py proves every figure (below)
```

## The one command

```
GrantPackage/scripts/build.sh
```

It reads the workbooks, renders the eight documents (the repository README among them) and the deck, rebuilds every
PDF, docx, and package copy, runs the self-test, and checks every figure. It
fails loudly on the first problem.

| Flag | Adds |
|---|---|
| `--sweep` | re-runs the fleet-size and launch-ramp sweeps (about 40 recalculations, several minutes) |
| `--cooling` | re-runs the four cooling cases |
| `--scenarios` | re-runs the three scenario sheets |
| `--check` | verifies without writing anything (scratch goes to a temp directory); run it before a commit |

## What the check proves

- **Stored values are current.** `facts.py` recalculates a copy of each
  workbook and refuses if any stored value differs. openpyxl reads only
  stored values, so this is what stops a workbook saved without a recalc from
  feeding the package.
- **Every document equals its render.** A hand edit to a rendered file fails.
- **Every figure has a source.** A figure reaches a page either through a
  `{{token}}` (correct by construction) or as literal text. Every literal
  figure, whether money, a percent, a table amount, a count, a unit, a range,
  or spelled-out money, must be in `ALLOWED` in `checkConsistency.py`, which
  holds only outside facts, each with its source. Cited research may be typed
  between `<!-- sourced -->` and `<!-- /sourced -->`, where the citation sits
  in the text; a computed figure must still be a token.
- **The deck matches the model.** Every text box and note (`DeckText.md`) and
  every table cell `deck.json` lists must equal its render on the shape pinned
  to its address by shape id; a text box with no entry in `DeckText.md` stops
  the build; literal text may carry only allowlisted figures, and each chart's categories, series,
  and values must equal what `patchDeck.py` would draw.
- **Generated results are fresh.** Every `build/*.json` result records a
  fingerprint of both workbooks' formulas and inputs (generated sheets
  excluded). Anything built from a stale one fails, and `sweep.py
  --ramp-only` and `coolingCases.py --sheet-only` refuse to run on one.
- **Claims hold.** `facts.py` fails the build if "every fleet from 4 to 16
  servers returns more than it costs" stops being true in the sweep.
  `lib.CLAIM_SIZES` sets that range; `lib.HARDWARE_ENVELOPE` sets the $2M
  envelope.
- **Signs hold.** Prose quotes money as a positive amount. A scalar money
  token whose value turns negative stops the build and names itself; the
  fix is to reword the sentence and negate the token, as `sixYearCapex` does.
- **Shipped copies carry what their sources say.** Review workbook and deck
  copies must be byte-identical; every PDF and docx must contain every money,
  percent, and table figure of its source.

Rounding is half away from zero, as Excel displays (`lib.rint`, `lib.num`,
`lib.pct`). Python's own `round()` and format specs round half to even, which
once published 1,184 for a total of $1,184,500.

## If you change an input

| Change | What has to follow |
|---|---|
| Any cell on `Inputs` or `ServiceLines` | `build.sh --sweep --cooling --scenarios`; the fingerprint marks all three results stale |
| Purchase rows (`Class_NVIDIA_Datacenter` rows 47-48) | the same; the fleet table, the sizing slide, and the scenario sheets all move |
| Planned seat ramp (`ServiceLines` row 31) | the same; the capacity cap on row 27 reads from it |
| Anything in the facility workbook | recalculate it, copy the new charges (`Summary!F40`, `F37`, rounded) and design load (`F26`) into `Inputs!B45:B47`, then as above (a change to the compute's electricity rate, `Inputs!B11`, must also be copied into `Cooling!B70`); `facts.py` stops the build until the copy matches |
| Launch timing (`LaunchYearMonthly` B6-B10) or the cushion (`Financing` B7) | `build.sh --sweep --cooling --scenarios`; the ask is sized from them, so every financing figure moves |
| Loan rate, term, or cushion (`Financing` B5-B7) | `build.sh`; the ask, the repayment prose, and both cash tables move |
| Any wording | edit the template in `templates/` (`DeckText.md` for the deck's words, `deck.json` for its tables), never the rendered file |
| A slide's shapes | run `scripts/deckScan.py`, which prints each shape's address and id, and re-map `DeckText.md` headings and `deck.json` pins; `patchDeck.py` refuses a shape whose id no longer matches |

Scripts that change a workbook do it through `lib.editWorkbook`: they save to a
temp copy, recalculate it, and rename it over the original only on success.
Use the same helper for any new script.

## Generated files: do not edit

`build.sh` enforces this. `scripts/guard.py` runs first and stops the build if any
generated file differs from what the build last wrote (hashes in `scripts/generated.json`),
naming the source to edit. After moving the edit into its source, run
`python3 scripts/guard.py --accept <file>`.

Every rendered document (`ComputeNarrative.md`, the four `.md` files in
`External/` and `Review/`), every PDF and docx, and the copies in `Review/`.
In the deck, every word (`DeckText.md`) and every table and chart (`deck.json`);
layout, colour, images, and slide order stay in the `.pptx`.

The `FleetSweep`, `LaunchRamp`, `CoolingCases`, `Scenario_Pilot`,
`Scenario_FullBuild`, and `Scenario_FullBuildFinanced` sheets hold values, because each row or case is a separate
recalculation of the whole workbook. Their scripts rewrite them; a hand edit
produces numbers no model run gave. `FleetSweep` varies the year-4 fleet;
`LaunchRamp` holds it at the facility-filling size and varies the launch
purchase, which is the sheet that answers whether to start with a pilot.

`CoolingCases` varies how heat leaves the building. Because the facility is
sized per case, a small fleet pays the charge its own building earns (the
liquid pilot pays $814 per kW, grant-funded) and not the full build's $346.
The air path is priced by the `Cooling` sheet's air block, rows 38-64
(D-20260921-05). The flat $5,800 per kW row beside it is a legacy cross-check
that errs in both directions.

## Workbook quirks worth knowing

`Design!B30` selects a modular UPS with one N+1 module and lithium-ion
batteries (D-20260921-07). It raises `BackupPower` by rows 26 and 27, which
scale on UPS size (D-20260922-01), and lowers `Summary!F24`, because
lithium-ion lasts about 12 years against four and a half for VRLA. The
grant-funded charge goes down when it is switched on.

A count in an `Electrical` line description is per rack side, not per server:
rows 20 and 21 buy two branch circuits and two PDUs for each of six racks, and
`Electrical!I18` states the rule. The workbook mixes per-server, per-rack, and
per-rack-side counts, and only rows 19 to 21 are annotated.

`Class_NVIDIA_Datacenter` row 78 bills the facility on capacity:
`MAX(peak kW, Inputs!B47) × charge`, plus space rent (`Inputs!B52`) for the
floor. A small fleet pays for the whole design load from year 0.

`ServiceLines` row 27 caps seats at what the fleet can serve (`=MIN(planned
row 31, capacity row 52 / tokens per seat)`). The cap is inert at the base plan
and exists so the sweeps can run small fleets. Change the planned ramp on row
31, never row 27.

## What is not automated

- **The facility charges in the compute model.** `Inputs!B45:B47` are still
  literals copied from the facility workbook (Codex finding A13). `facts.py`
  now catches a stale copy, but it does not make the copy for you.
- **The year-end test uses annual cash.** The ask is sized from
  `LaunchYearMonthly` (month-ends of year 0) and `Financing` row 29 (year-ends
  after), and the year-end rows still assume a full year of year-0 revenue.
- **Bare numbers.** The literal scan misses numbers with no unit ("a
  switchboard 32 to 41"), numbers written as words, and dates (finding B18).

## Provenance

Each rendered document carries a stamp: the first seven characters of a hash
of `build/facts.json` (D-20260921-03). It changes when and only when a quoted
figure changes, and anyone holding the workbooks can reproduce it by running
`facts.py`. The outside review behind the current pipeline is
`CodexReview20260921.org` in this folder.

## Running it

`make` from the repository root runs the whole chain in order: `make facility`,
then `build.sh --sweep --cooling --scenarios`, then the marketing and one-pager
PDFs. `make check` verifies without writing. See the root README, "Rebuilding".
