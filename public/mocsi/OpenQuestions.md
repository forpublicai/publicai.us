# MOCSI Open Questions

Mutable — unlike DecisionLog.md and ConversationLog.md, this file is meant
to be edited. New questions are appended at the end. When a question
closes, its block is deleted from this file entirely; the answer and
reasoning live permanently in DecisionLog.md under the same ID (see the
`Answers:` field there). This file always reflects only what is currently
open.

Template:

```
## Q-YYYYMMDD-NN — <question, stated plainly>
**Raised:** YYYY-MM-DD (see ConversationLog.md)
**Context:** <why this is open / what's blocking a decision>
```

---

## Q-20260821-01 — Is "excess compute" actually the likely condition, or is MOCSI more likely to be capacity-constrained?
**Raised:** 2026-08-21 (see ConversationLog.md)
**Context:** `OnePager.md` frames for-profit sales as absorbing "excess"
compute capacity. Tom's utilization analysis (`analysis_record_of_inquiry_v9.md`,
`UsageEstimateFactors.md`) treats insufficient paying demand and a slow
utilization ramp as the severe, live risk — not oversupply. If that's
right, "excess" may rarely occur, and the for-profit channel described in
the one-pager may be describing a rare edge case rather than a real
revenue line. Needs resolution before the for-profit channel is sized or
relied on in any financial projection.

## Q-20260824-01 — Which email threads are in scope to archive?
**Raised:** 2026-08-24 (see ConversationLog.md)
**Narrowed:** 2026-08-24 — the location half was settled by D-20260824-03
(`~/mocsi/email/`, main checkout). Scope remains open.
**Context:** Candidates are threads involving the known MOCSI
participants (Matt Victor, Josh Tan, Kerem Durdag, Ben Polsky), a keyword
search on MOCSI / Pine Tree Compute regardless of sender, or a broad
search whose subjects and senders Fletcher reviews before anything is
fetched in full or written. Nothing has been fetched or archived yet.
Note that whatever the scope, the recipient test still excludes any
effectively 1:1 thread within it.

## Q-20260825-01 — What legal entity holds which assets, funded how — and is "community-owned" then accurate?
**Raised:** 2026-08-25 (see ConversationLog.md)
**Narrowed:** 2026-08-26 — D-20260826-01 makes non-zero community ownership
and control of the *host data center* a foundational siting requirement and
removed the `[TBD: partially or fully]` marker from `OnePager.md`. That fixes
a floor on the facility. It leaves this question — what entity holds which
assets, funded how, and whether MOCSI itself may be called community-owned —
entirely open.
**Blocks:** any claim in an external document that MOCSI is community-*owned*,
as distinct from the facility requirement now stated.
**Context:** The phrase originated in Fletcher's own draft — "our data
center is {partially,fully}-owned and controlled by the local community" —
and was preserved rather than resolved, because the degree of community
ownership is a governance decision nobody has made. Examining it showed the
question is ambiguous on more axes than partial-versus-full, and that the
partial/full framing is the wrong question to answer.

**The framing to answer instead:** *what legal entity, holding which
assets, funded how* — then describe the result accurately rather than
reaching for a label.

**Axes that are genuinely open:**
1. **Ownership and control are separate claims, and `OnePager.md` already
   makes the control one** ("a multi-stakeholder council rather than
   investors alone"), which is defensible. Adding "owned" asserts something
   stronger and different. **A 501(c)(3) has no owners at all** — the
   community can control it completely through board seats while owning
   nothing. A cooperative has real member-owners.
2. **What is owned.** Building, land, hardware and operating entity can each
   be held differently. A community land trust holding the building while a
   nonprofit owns the servers is workable, and would make "partially" a
   precise description rather than a hedge.
3. **Who "the community" is.** Geographic Maine, or the institutions served?
   A multi-stakeholder co-op can seat both, but they want different things —
   customers want low prices, the locality wants jobs and tax base.
4. **What "partially" would mean.** A minority stake alongside investors;
   the building but not the equipment; some decision rights but not others;
   or a phase-in. Four different claims.

**The consideration that probably decides it — this is a capital structure
question, not primarily a values question:**

| Structure | How ~$1.3M+ is raised | "Community-owned" is |
|---|---|---|
| 501(c)(3) nonprofit | Grants, donations, debt. **No equity, ever** | True as control, false as ownership |
| Cooperative | Member capital, patronage, debt | Genuinely true |
| For-profit + community stake | Equity available | **Partial by construction** |
| Nonprofit operator on CLT land | Grants; trust holds real property | Partial, and precisely describable |

**A fifth structure, surfaced 2026-08-25 — amend a municipal utility's
legislative charter so the utility itself can hold equity.** Source: Matt
Victor, 2026-08-25, archived at
`email/2026-08-24-current-status-location-and-fpga.md` (message 5).

Van Buren Light & Power was created by act of the Maine Legislature in
1917, and the Legislature amended its charter in 1997 to add fiber-optic
authority — precedent for layering new infrastructure onto existing
community ownership. The proposal is to ask the Legislature to amend it
again, giving the district express authority to serve, host, or co-own
compute infrastructure and to hold equity in a JV or co-op entity.

Why this is not simply a fifth row in the table above:
- It is the only option in which "the community" is an **existing
  democratic body with its own balance sheet**, rather than a governance
  layer MOCSI constructs. It answers axis 3 concretely — the community is
  the ratepayers of Van Buren, already constituted, already voting.
- It collapses axis 1: the utility would hold **equity**, not board seats,
  so ownership and control become the same claim rather than separate ones.
- It couples the ownership answer to the **siting** answer. Under every
  other structure in the table the two are independent; here, choosing the
  structure means choosing Van Buren, and choosing Van Buren makes the
  structure available. No other option has this property.
- Fallbacks named alongside it, should Van Buren not proceed: Calais
  (Eastern Maine Electric Co-op) and Madison (Madison Electric Works).

**Unassessed costs and risks — none of these are yet priced:**
- A charter amendment is an act of the Legislature. Session timing,
  sponsor, committee process and drafting are all unknown, and it is
  materially slower than incorporating an entity.
- It gives a municipal body a claim on MOCSI's assets, which interacts with
  the **Lifecycle** goal above differently from the nonprofit and co-op
  paths — dissolution would involve a public body.
- It is a dependency on a third party that has not agreed to it. Luke Dyer
  is recorded as supportive of *hosting*; nothing indicates the utility or
  the town has been asked about *holding equity*.

**It cuts against a standing decision.** D-20260824-08 concluded that
"local" does no selling work for the wider PHAC audience and that Maine
siting should be treated as an operational fact rather than a headline
claim. This option does the opposite: it makes siting maximally
load-bearing, and its whole value is that locality becomes literally true
rather than rhetorical. The argument for it is that demand is predicated on
the community/organic promise — which is a demand claim, not a values
claim, and is therefore testable against the same evidence D-20260824-08
relied on. That conflict is unresolved and should be resolved deliberately
rather than by whichever document is edited last.

**Timing pressure.** Counsel has been engaged to set up the legal framework
including community control (Fletcher, 2026-08-24, same archived thread,
message 1). Entity formation is proceeding now, so this option needs to be
on the table before drafting rather than after.

**If MOCSI needs equity investors to reach Stage 1, "fully community-owned"
is foreclosed the moment the first cheque clears.** If the build is grant-
and debt-funded, full community control is available — but "ownership" may
be the wrong word for a nonprofit. The answer therefore follows from the
funding plan and cannot be settled independently of it.

**Two of MOCSI's own standing design goals bear directly on this:**
- **Lifecycle.** Ownership structure determines what happens if MOCSI
  fails. A nonprofit's assets must pass to another nonprofit; co-op members
  may hold residual claims. Who gets the GPUs is decided by the structure
  chosen now.
- **Cost.** Co-op formation carries real legal expense and ongoing
  member-governance overhead; 501(c)(3) carries filing and compliance
  burden. Neither is free, and neither is currently costed.

**Working recommendation, held loosely:** a nonprofit operator with a
community-elected board, ideally on land or in a building held by a
community land trust. That yields a true and checkable claim, keeps the
grant path open, and makes "partially owned" a precise description. This is
a lawyer question that interacts with the fundraising plan — Josh Tan or
counsel should see it before anything goes in writing.

**The failure mode to avoid:** calling it community-owned when it means a
nonprofit with two community board seats. That would be the fifth instance
of the pattern recorded at D-20260821-06 (sovereignty), D-20260824-11
(open-source stack), D-20260824-12 (auditability) and D-20260824-19
("hybrid RAG") — a phrase doing more work than the facts support. Funders
and journalists will test this one.

## Q-20260902-02 — What exactly is the town offering in exchange for ownership or governance rights, and in what entity would it sit?
**Raised:** 2026-09-02 (see ConversationLog.md)
**Context:** Luke Dyer indicated the town would consider discounts — rent,
electricity — in exchange for ownership or governance rights (D-20260902-08,
Fletcher's report, unverified). This is the most consequential item to come out
of that conversation, and it is not a commercial term to settle later.

Four things are undetermined and they are not the same question:
1. **What right** — equity, a board seat, a class of membership, a contractual
   covenant, a revenue share. Four different instruments with four different
   legal homes.
2. **Held by whom** — the Town as a municipal corporation, the utility
   district, a community foundation, a residents' co-op. Q-20260825-01 already
   establishes the district likely cannot hold equity without a charter
   amendment.
3. **In what entity** — and this is the trap. A 501(c)(3) has no owners at all;
   a co-op has real member-owners. **The town's offer may effectively decide
   MOCSI's capital structure, and that decision must not be made by accident,
   in a meeting, in Van Buren.**
4. **What happens on exit** — if MOCSI winds down, is acquired, or leaves Van
   Buren. The item most likely to go unwritten and most damaging if it does.

**Two constraints already in force.** The host site may be partly
community-owned; **MOCSI itself must never be described as community-owned** —
whatever is agreed has to be describable without violating that. And a
preferential electricity rate to a single customer may not be lawful for a
Maine municipal utility, or may not survive a rate case.

**Relationship to Q-20260825-01.** This may be a cheaper and faster route to
the same end than amending the utility's legislative charter, or it may be a
different thing entirely. Dyer's own judgement on which is more tractable is
worth having before counsel is engaged.

**What closes it:** a written description of the proposed instrument, the
holding entity, the valuation of the discount against the stake given up, and
the unwind terms. Not a handshake.

## Q-20260906-01 — Should MOCSI deploy mixed hardware classes in one facility, rather than committing capital to a single class?
**Raised:** 2026-08-17, recovered 2026-09-06 (see D-20260906-03)
**Context:** Recorded as unknown **#82** in `gpu_capacity_model_v76.xlsx`, and
lost from view for seven weeks in an unmerged branch. The model treats the five
hardware paths as **mutually exclusive alternatives with no combined scenario**,
which may be an artifact of how it was built rather than a finding.

The constraint is not physical. FPGA and AMD Instinct parts share the PCIe/OAM
form factor with no bus-level conflict, and both are AMD product lines. The real
constraint is operational: separate ROCm and Vitis/HLS/XRT toolchains, and
separate workload routing.

**The shape of the option:** route pinned-model, latency-bound workloads
(medical imaging, sensor fusion) to FPGA, and general-purpose workloads to AMD
or NVIDIA. Ties to unknown #62, mixed model pool, also unmodelled.

**What it would take to answer:** its own capex/opex split and routing logic.
Until that exists it changes no result in the model.

**Bears on:** D-20260824-15 and D-20260824-17, which scope the FPGA tier to
build-to-order against a genomics commitment. A mixed deployment is a live
alternative to that framing and has never been costed against it.

## Q-20260906-02 — Is a 6-year retirement horizon right, when the resale market is running old chips to age 9?
**Raised:** 2026-08-18, recovered 2026-09-06 (see D-20260906-03)
**Context:** Recorded as unknown **#83** in `gpu_capacity_model_v76.xlsx`, from
the WSJ piece "New Jobs for Old AI Chips" (2026-08-18,
https://www.wsj.com/tech/ai/new-jobs-for-old-ai-chips-662bd533). The model
retires all classes after 6 years, which equals its analysis horizon, so
retirement is effectively dormant (see unknown #56).

**Two live sources pull in opposite directions.** CoreWeave is renting
2020-vintage A100s profitably into 2029, at age 9, its CFO citing "longer
utilization at higher prices... potential for significant further upside," and
depreciation ending at 4 to 6 years means fully-depreciated chips carry high
margin. Against that, Meta's Llama 3 training run implies a **~9%/yr chip
failure rate**, and older parts are far less power-efficient, which may force
early retirement whatever the profitability says.

**What it would take to answer:** a real depreciation-versus-failure-versus-power
tradeoff, not simply moving the horizon.

**Bears on two live decisions.** D-20260827-02 requires the initial site lease to
run **at least the equipment depreciation cycle**, so service life sets the lease
term MOCSI must negotiate with a host community. And D-20260821-03 keeps **used
NVIDIA datacenter GPUs** in the platform, which is a direct bet that old chips
have usable service life.

---

## Q-20260914-01 — What is the Dirigo Business Incentive Credit, and on what basis does MOCSI qualify?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** Asked originally against `ME - Public AI - Financials.xlsx`, which
D-20260821-02 superseded. The question survives the model swap, because
eligibility turns on Maine law and MOCSI's entity structure rather than on any
spreadsheet. "Dirigo" appears twice in this repository outside the original
question file, and neither hit addresses eligibility.
`gpu_capacity_model_v76.xlsx` books no credit at all, and its single tax input
(unknown #15, a 30% marginal rate) is income tax.

**Already exposed externally.** `UsageEstimateFactors.md:53` records that
"$105,500 in Dirigo credits and tax exemptions" appears verbatim in the Longview
RFP and the 2026-06-11 two-pager, and impeaches the $25,000 sales-and-use
component as matching no computable base (5.5% of $805K equipment capex is
$44,275; of GPUs alone, $35,200). Both documents have gone out. That makes this
a seventh instance of the pattern `CurrentState.md` already records six of, a
number doing more work than the facts support.

**What closes it:** a written eligibility determination from Maine counsel or a
CPA, and a derivation for any figure MOCSI publishes.
**Bears on:** `mocsi-longview-rfp.md.docx`, `Public AI Data Centers in Maine 2-pager - 2026_06_11.docx`, and any financial model that books a credit.

## Q-20260914-02 — How solid is MOCSI's sales-tax exemption qualification, and does it depend on customer mix?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** The one repository hit, `UsageEstimateFactors.md:53`, impeaches the
$25,000 figure without reaching the underlying question of whether MOCSI
qualifies at all. Nothing in `DecisionLog.md`, `CurrentState.md`, `TODO.md`, or
the 83 model unknowns addresses it.

The customer-mix half is live rather than hypothetical. D-20260821-07 sells
excess capacity to for-profit organizations, and D-20261017-03 opens the
customer base beyond Maine (Maine first, the coalition of equal standing). If qualification turns on the
non-profit share of revenue, both of those move it.

Adjacent and separate: property tax is now priced and modelled (D-20261006-01,
`research/20261006-PropertyTaxExposure.md`). Different tax, probably the same
advisor conversation.

**What closes it:** a qualification opinion that states the test and where
MOCSI's projected mix falls against it.
**Bears on:** Q-20260902-01 (answered by D-20261017-03: Maine first, open to anyone), D-20260821-07, and the same two external documents as Q-20260914-01.

## Q-20260914-03 — Should MOCSI offer an educational discount?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** No decision, open question, or model input addresses per-segment
pricing. `gpu_capacity_model_v76.xlsx` prices by hardware row in dollars per
module per month, so a discount schedule currently has nowhere to live.

Two near-misses that do not answer it: D-20260824-09 discounts two PHAC segments
as *prospects* rather than on price, and D-20260903-01 retired "low cost"
language in favour of "our pricing is competitive."

**What closes it:** a decision on whether Maine higher education pays a
published rate, and if not, what funds the gap.
**Bears on:** the Maine higher-education channel, and pricing language in `OnePager.md`.

## Q-20260914-04 — What does MOCSI spend to generate demand, beyond sales labour?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** Unknown #34 costs sales *effort* (80/40/6/60 hours by customer
class, rated SEVERE as the largest single swing found in the model). It covers
labour only. No marketing line exists anywhere in `Inputs`, in any class sheet,
or among the 83 unknowns: no demand generation, advertising, conference,
or content cost. The model assumes customers arrive.

**What closes it:** either a marketing budget with a basis, or an explicit
decision that MOCSI acquires customers through partnership and founder selling
alone, recorded so the assumption is visible.
**Bears on:** opex, and the go-to-market section of the business plan.

## Q-20260914-05 — What is MOCSI's recurring software bill?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** The only software opex in `gpu_capacity_model_v76.xlsx` is
"Tooling and monitoring base = 5000" plus "Tooling per unit per year = 400."
That row is one of the few `Inputs` entries carrying no basis note at all, where
almost every neighbouring row is marked ESTIMATED, SOURCED, or MARKET RANGE.
Billing, metering, monitoring, log storage, alerting, and identity are folded
into one unsourced number.

Unknown #44 covers NVIDIA licensing ($2,232,000 over six years at list, rated
SEVERE) and nothing else, so it does not stand in for this.

**What closes it:** a line-item list of the services MOCSI will actually pay
for, priced.
**Bears on:** opex, and the open-source stack claim in `OnePager.md`, which is separately blocked on a licence audit.

## Q-20260914-06 — What bad-debt provision does MOCSI's customer mix require?
**Raised:** 2026-07-22, migrated 2026-09-14 (see D-20260914-01)
**Context:** `gpu_capacity_model_v76.xlsx` carries no bad-debt provision.
Unknown #19 covers take-or-pay enforceability and partner credit on committed
capacity, which is counterparty default on a large contract, and it does not
reach small-receivables risk.

The mix makes this worth pricing. `RunningNotes.md` records that the non-profit
segment already produces the highest sales-and-support cost per dollar of
revenue, and that is the same segment carrying the collection risk.

**What closes it:** a provision rate with a basis, or a billing structure
(prepayment, quarterly in advance) that removes the need for one.
**Bears on:** opex, working capital, and any decision to prioritize public-interest customers on price.

## Q-20260916-01 — Does the email 1:1 rule also govern meeting transcripts?
**Raised:** 2026-09-16 (see ConversationLog.md)
**Context:** D-20260824-02 never archives an email thread with one or fewer
participants besides Fletcher, because 1:1 correspondence is more likely to be
private. A transcript of a two-person call (Fletcher with Bill Schofield, or
with Luke Dyer) is the spoken equivalent. The recommendation was to apply the
same participant count by default, with explicit per-meeting overrides.
Fletcher created `meetings/` (D-20260916-01) without deciding this.
**What closes it:** a yes or no from Fletcher, and if yes, whether the email
rule's per-thread override carries over unchanged.
**Bears on:** what may be saved into `meetings/`, starting with the Van Buren calls.

## Q-20260918-01 — A 15% premium over which reference price?
**Raised:** 2026-09-18 (see ConversationLog.md)
**Context:** D-20260918-01 sets the premium at 15% over "the market" without
fixing what the market price is. Published GPU-hour prices vary by more than the
premium itself, depending on whether the comparison is a hyperscaler's on-demand
rate, a neoclouds's rate, a reserved or spot rate, and which accelerator. The
premium is meaningless in the model, and indefensible to a funder, until the
reference is named and sourced. MOCSI's own accelerator choice is unresolved
(A.4), which limits how precise the comparison can be.
**What closes it:** a named, sourced reference price per accelerator-hour, with
the term and commitment it assumes, written into the model next to the premium
input.
**Bears on:** every revenue line, and the claim that customers will pay for
provenance.

## Q-20260918-02 — Will the retrofitted cold plates accept 40 °C facility water?
**Raised:** 2026-09-18 (see ConversationLog.md)
**Context:** The facility sub-project (D-20260918-02) assumes ASHRAE W32
(32 °C supply). At that class, dry coolers alone cannot hold supply for about
75–200 hours a year at the site, so the design carries a trim chiller (about
$28k mid and 12–18 kW of generator load), and the return water is too cool to
heat a 1940s building without a heat pump. At W40 the hourly weather model
needs no trim hours and direct heat recovery works.
**What closes it:** the cold-plate vendor's or integrator's written inlet
temperature limit for H100/H200 HGX retrofits.
**Bears on:** cooling capex, generator size, heat recovery, PUE.

## Q-20260918-03 — How much of the facility sub-project will grant money fund?
**Raised:** 2026-09-18 (see ConversationLog.md)
**Context:** The facility charge the compute model pays is $378/kW-yr if the
facility capex ($1.78M mid) is grant-funded, and about $1,793 if it must be
repaid at 6% over component lives. That moves the compute model's six-year
return from 29% to about 12%. Whether the utility-side transformer ($75k mid)
is MOCSI's cost at all depends on the utility's line-extension terms.
**What closes it:** a funding plan for the facility sub-project naming the
grant sources and the share each covers, and the utility's written terms for
the transformer.
**Bears on:** the facility charge (compute model Inputs B36), the grant ask.

## Q-20260920-01 — Does the facility design load rise to 112.8 kW to carry the agent-hosting CPU servers on the generator?
**Raised:** 2026-09-20 (see ConversationLog.md)
**Context:** Fletcher's decision of 2026-09-20 leaves the agent-hosting CPU
servers off the generator, which settles the backup question. The design load
in `FacilityUpgradesModel.xlsx` is still 110.4 kW and counts GPU servers only,
so the three CPU servers (about 2.4 kW) sit outside it. Carrying them on utility
power alone needs no generator change; carrying them at all still adds about
$16,600 of electrical distribution, cooling, and rack capacity at the mid
estimate. The models have not been changed; both still hold 110.4 kW and
$1,781,544.
**What closes it:** Fletcher's decision whether the CPU load enters the design
load, and if so, whether the $16,600 lands in the facility capex or the compute
capex.
**Bears on:** facility capex, the per-kW charge in both funding cases, the
fleet-size sweep's facility ceiling, the "12 servers fills the facility" claim
in the deck and the narrative.


## Q-20260920-03 — Does the 15% provenance premium stay, and on what evidence?
**Raised:** 2026-09-20 (see ConversationLog.md)
**Context:** Every revenue line is multiplied by 1.15 (Inputs B42). The premium
was adopted as an explicit guess (D-20260918-01), and no customer has agreed a
price. It contributes about $1.27M of the $9.71M six-year revenue. No external
document states that the figure is an assumption, so a funder reading the
narrative or the summary sees the premium as revenue rather than as a bet on
willingness to pay. Q-20260918-01 remains open on the reference price it sits
above.
**What closes it:** a decision to disclose it in the external documents, remove
it and reprice at benchmark, or evidence it with letters of intent.
**Bears on:** all four revenue lines, six-year revenue, revenue per dollar of
cost, the cash low point, and therefore the size of the ask.

## Q-20260920-04 — Is the working capital double-counted?
**Raised:** 2026-09-20 (see ConversationLog.md)
**Context:** The amount financed includes $756,990 for the cash low point. That
low point comes from an annual model in which year-0 revenue arrives against
year-0 hardware in the same period, so it already nets a full year of revenue
that will not exist on day one. The Financing sheet holds the figure as a
ramp-up reserve, which is defensible, and the note says so. Whether it is the
right size is untested, because the model has no monthly launch-year cash flow.
Raised independently by the Codex review (finding 5).
**What closes it:** a monthly cash flow for year 0 and year 1, or a decision
that the annual figure plus the $200k cushion is sufficient.
**Bears on:** the amount financed ($2.38M), the annual payment, total interest,
and the ask on deck slide 13.

## Q-20260920-05 — Which planning figures need a source before the package goes out?
**Raised:** 2026-09-20 (see ConversationLog.md)
**Context:** Three figures carry weight without a citation a reader can follow.
Used hardware prices ($1.42M of launch capex) come from market observation
rather than vendor quotes. The $156B of cancelled data center deals appears on
deck slide 2 with no source on the slide. The 78% heat capture is a design
target rather than a measured result, and depends on Q-20260918-02. The
facility estimate itself says budgetary quotes will narrow its range.
**What closes it:** vendor quotes for the launch servers, a citation on the
$156B slide, and either a vendor thermal design for the heat figure or wording
that marks it as a target.
**Bears on:** launch capex and the ask, the credibility of slide 2, and the
heat-recovery case for the facility grant.

## Q-20260920-06 — Which absolute claims need conditional wording?
**Raised:** 2026-09-20 (see ConversationLog.md)
**Context:** Several sentences state as fact what the model shows under one set
of assumptions. "Every size returns more than it costs" holds across the tested
range at mid-case inputs and at 100% utilisation of contracted capacity; it is
not a property of the business. "The host building reuses it for heat" describes
a design target with no agreement behind it. "Operating cash flow pays for the
year-2 and year-4 additions" holds if revenue lands as modelled. Raised in part
by the Codex review (findings 7 and 9).
**What closes it:** Fletcher's judgement on how much conditionality a
sympathetic funder should see, applied to the templates in
`GrantPackage/templates/` so the wording survives a rebuild.
**Bears on:** the narrative, the facility summary, and deck slides 4, 6, and 9.

## Q-20260921-01 — What is the $15,000 "Facility base" in the compute model meant to cover?
**Raised:** 2026-09-21 (see ConversationLog.md)
**Context:** `Class_NVIDIA_Datacenter` row 78 charges the facility as
`=$B$25 + B72*$B$26`: a fixed $15,000 a year plus nameplate kW times the
per-kW charge. `B25` carries no note, no source, and no label beyond "Facility
base," which puts it among the v76 unknowns. It matters because the per-kW
charge was derived in `FacilityUpgradesModel.xlsx` as the facility's annual
cost divided by the design load, with no fixed base assumed on top. At full
build the compute therefore pays $56,731 a year against $41,695 of facility
O&M, over-recovering by about $15,036 a year. Either the $15,000 covers
something genuinely outside the facility upgrade model (building space,
connectivity, physical security, building insurance) or the two models
double-count.
**What closes it:** Tom Law's account of what the line was for in v76, and
either a note on `B25` naming what it covers or its removal.
**Bears on:** the facility charge in all six years, six-year operating cost,
revenue per dollar of cost in both funding cases, the cash low point, and
therefore the size of the ask.
**Resolved:** 2026-09-22. Tom Law: in earlier models it covered the cost of
locating in a colocation data center. It stays, renamed **space rent**, the
charge for the floor space the equipment occupies in the host building, and
it is separate from the facility charge (D-20260922-04).

## Q-20260921-02 — Which grant-share input governs, and should the unwired one go?
**Raised:** 2026-09-21 (see ConversationLog.md)
**Context:** There are two inputs with the same name in two workbooks.
`NvidiaUsedLiquidCooledModel.xlsx` `Inputs!B44` is the live control, set to
100% and now percent-formatted and validated (D-20260921-02).
`FacilityUpgradesModel.xlsx` `Design!B29`, "Share of facility capex funded by
grant," is set to 0 and **no formula anywhere reads it**. The facility model
computes both endpoint charges regardless. Two controls with one name, one of
them inert and holding the opposite value, will mislead a reviewer working from
the workbooks alone, which is how Matt Victor has them.
**What closes it:** a decision to delete `Design!B29`, or to wire it so the
facility model's own outputs respond to it and the compute model reads from it
rather than from the hardcoded endpoints on `Inputs!B45` and `B46`.
**Bears on:** the facility charge endpoints, reviewer confidence in the
workbooks, and D-20260921-02.

## Q-20260921-03 — Who covers the facility loan during the ramp in the financed case?
**Raised:** 2026-09-21 (see ConversationLog.md)
**Context:** The facility charge bills per installed kW, so an under-filled
building collects less than its costs. In the financed case the compute's
capital-recovery payments fall short of the facility's own $172,985 annual loan
payment while the fleet is still growing: $57,654 short in year 0, $56,400 in
year 1, $13,151 in year 2, and $11,897 in year 3, clearing from year 4.
**$139,102 over six years.** The model does not say who funds that gap. The
same mechanism makes a pilot launch worse: at 16 GPUs the shortfall is larger
and starts earlier. Note the offsetting $15,000 base in Q-20260921-01, which
reduces but does not close the gap.
**What closes it:** either a decision that the host community or a grant
absorbs the ramp-year gap, a charge that steps down over time rather than
billing flat per kW, or a facility sized to phase 1 and expanded later (which
buys a second outage and a 40-to-65-week transformer lead time).
**Bears on:** the financed-facility case in every document, the facility
funding plan, Q-20260918-03, and the launch-size decision.

## Q-20260921-04 — What does an air-cooled plant actually cost, and does air survive at full build?
**Raised:** 2026-09-21 (see ConversationLog.md)
**Context:** The new `CoolingCases` sheet runs air against liquid at pilot
scale and at full build, each case sizing the facility to its own load. At
pilot scale (8 GPUs growing to 16) air cuts the combined ask from $1,271,359
to $1,078,796. At full build it appears to cut $4,162,510 to $3,626,774, a
$535,736 saving with a **higher** NPV ($2,844,868 against $2,761,670).

That full-build result is not trustworthy, and the reason is a modelling
artifact rather than a finding. `FacilityUpgradesModel.xlsx` prices a liquid
plant on its `Cooling` sheet. An air case is built by setting `Design!B10`
(share of heat to the liquid loop) to zero, which removes the liquid plant
without adding what air needs in its place: in-row or perimeter units,
hot-aisle containment, and an air-side economizer. The model returns $297,091
for a 122.4 kW air plant, which is $2,427 per kW. This repository's own
rate-based figure in `research/20260918-CoolingSystemEstimate.md` is $5,800
per kW, or $709,920. Substituting it, the full-build saving falls from
$535,736 to $122,907, which is inside the estimate's own error bars.

The same substitution at pilot scale moves the air case from $1,078,796 to
$1,123,040, so the pilot-scale advantage survives it and the full-build
advantage does not. **Air is a real option for a pilot and an open question
at scale**, and the sheet must not be read as settling the second.

Air also forfeits heat recovery outright: the $18,050 Efficiency Maine
incentive and $13,404 a year of displaced heating oil both go to zero. That
is about $98,474 across six years, and more importantly it removes the
premise under which an energy or infrastructure funder pays for the building
at all.
**What closes it:** a quoted air-cooling design at the pilot load from a
mechanical contractor, priced against the same scope the liquid plant carries,
plus a decision on whether the heat-recovery story is load-bearing in the
funding case. Failing a quote, replacing the `Cooling` sheet's air path with
the rate-based figure so the model stops reporting a number it cannot support.
**Bears on:** the launch-size decision, the facility funding plan, the
heat-recovery narrative in `ComputeNarrative.md` and `FacilitySummary.md`,
Q-20260921-03 (the ramp-year shortfall, which air makes smaller by shrinking
the building), and `research/20260921-AirVsLiquidCooling.md`.

**Update 2026-09-21, partly answered:** `research/20260921-AirCoolingCostAtFullBuild.md`
estimates the air plant bottom-up at **$555,274 at full build** (range
$330,844 to $1,133,194, or $4,537 per kW) and **$161,136 at pilot scale**
($7,899 per kW). The method reproduces the 50 kW estimate it scales from to
three significant figures, and a single power law agrees within 2.3%.

Three corrections follow. First, the defect is worse than described above: 20
of the `Cooling` sheet's 21 lines scale on the liquid-loop load, so an air
case zeroes all of them and reports **equipment only**, with no labour,
electrical, controls, commissioning, engineering, permits, freight, or
building work. Second, the $5,800 per kW check erred in **both** directions,
overstating the full build by $155,000 and understating the pilot by $43,000,
because cooling capex per kW falls with scale. Third, correcting both columns
moves the combined asks to $1,165,856 (air pilot) and $3,884,957 (air full
build), so air remains cheaper on capital at both scales.

The part that is not closed, and now looks more important than the capex: over
a 15-year plant life at 6%, air loses 10 of 16 load, rate, and heat-accounting
combinations, and **every case air wins is one where the recovered heat is
worth nothing**. The cooling decision is therefore a proxy for whether the
waste-heat reuse is real. That is a commercial question for the host, not an
engineering one, and it should be settled before the cooling type is.

**Update 2026-09-21, model fixed (D-20260921-05):** the `Cooling` sheet now
prices an air plant in its own block, and the figures above are superseded by
the model's own: **$163,715 at pilot scale and $548,633 at full build**, both
within 2% of the independent estimate. Combined asks become $1,170,826 (air
pilot) and $3,887,352 (air full build).

What remains open is no longer the capex. Air's NPV lead over liquid is now
**$8,215 at pilot scale and $24,790 at full build**, 0.4% and 0.9%, which is
inside the noise of a model whose air figures all descend from a single 35 kW
list price. Neither figure counts the forfeited $18,050 incentive or the
$13,404 a year of displaced oil, and counting those reverses the ranking at
both scales.

So the question is now narrow and commercial: **is the waste-heat reuse real?**
If the host building genuinely burns less oil, liquid wins and no further
cooling analysis is needed. If it does not, the two are within a rounding
error of each other and the choice should be made on lead time, rack density,
and who can service the plant in Aroostook. Three vendor quotes on the cooling
units would settle the residual, and nothing short of them will.

**Update 2026-09-21, the capex question is closed (D-20260921-06):** levelling
air to N+1, which the liquid lines always claimed, reverses the answer. Air
cooling costs $219,815 at pilot scale and $754,670 at full build, against
liquid's $260,666 and $777,753. **Liquid wins on NPV at both scales** ($2,199
and $4,414), before counting the $18,050 incentive and $13,404 a year of oil
that air forfeits. Counting those, liquid wins by a wide margin at both scales
and the cooling question is settled: **build liquid.**

Air keeps one advantage, and it is not the building. Its servers need no
cold-plate kits, which is why its combined ask stays $43,237 to $64,602 below
liquid's. The air *facility* at full build now costs **more** than the liquid
one ($1,830,151 against $1,781,544), because air draws 122.4 kW rather than
110.4 and needs more electrical service and more backup to carry it.

**Two questions this raised and did not answer, both now the live ones:**

1. **Power is N everywhere, and nothing says so.** One transformer, one
   switchboard, one ATS, one generator, one UPS. A fault in any of them takes
   the site down with both power sources healthy. Utility plus standby
   generator plus UPS is source diversity, not N+1, and the funding documents
   describe no availability target at all. We are selling trust to town clerks
   and universities who will ask what happens when it breaks.
2. **The A/B panelboards are funded and unusable.** `Electrical` row 19 buys
   critical A/B panelboards at $32,311, while rows 20 and 21 buy 12 branch
   circuits and 12 rack PDUs for 12 servers. HGX servers have redundant power
   supplies and can be dual-corded, which is what A/B panels are for. At one
   circuit per server nothing is dual-corded. Either the circuits should be
   24, or the A/B panels are decoration.

**Also unresolved, same root cause as the original defect:** the liquid
block's N+1 is not funded below its reference load. At the pilot, row 17
prices "in-row DX 2 × 30 kW, N+1" at $22,783 and row 13 prices "2 × ~100 kW
CDUs, N+1 pumps each" at $12,022, against the one list price in this market of
$25,500 for a single 35 kW indoor unit before its condenser. Power-law scaling
is a cost model and does not preserve equipment count away from the reference,
so redundancy named in a line description quietly stops being paid for. The
air block has a minimum-unit floor for this reason; the liquid block has none.
That affects `liquid-pilot`, the low rows of `FleetSweep`, and the low end of
`LaunchRamp` — every place the pilot argument gets made.

**Update 2026-09-21, redundancy settled (D-20260921-07):** the facility takes a
modular UPS with one spare module and lithium-ion batteries. It costs $65,473
at full build and $35,561 at the pilot, and it **lowers** annual operating
cost by $3,574 and $573, because lithium-ion cuts the battery replacement
reserve and removes a service trip to Aroostook every four and a half years.
The grant-funded charge falls from $378 to $345 per kW. Net over 15 years is
about $30,000 either way.

**Correction to the second item logged above.** The A/B panelboards are not
decoration and the racks were never un-corded. `Electrical` rows 20 and 21 buy
two branch circuits and two PDUs per rack across **six** racks, which is what
the 12s mean; `Electrical!I18` has said so all along ("415 V lets two 60 A
PDUs carry a 20 kW rack A/B") and `Cooling!A14` prices manifolds for six
racks. I misread them as per-server. Rows 19 to 21 now carry notes so the next
reader does not repeat it.

What remains open is the first item, unchanged and now the only one: the
transformer, the switchboard, the transfer switch, and the generator are each
single, and any one of them stops the site. A fully redundant electrical path
was priced at about $640,000 and judged not worth it at this scale. That is a
budget decision rather than an engineering one, and the narrative and facility
summary now say so outright rather than leaving availability unstated. **The
question that stays open is what availability we promise a customer in
writing**, which no document answers and which a letter of intent is the wrong
place to discover.

## Q-20260921-05 — Who is on site, who pays for them, and how do we recruit under the quiet rule?
**Raised:** 2026-09-21 (see `SiteHandsRequirements.md`)
**Context:** The availability work found that time-to-hands, not equipment,
binds service quality. Five hours to site against one hour is the difference
between about 99.86% and 99.97%, or ten hours of downtime a year. A fully
redundant electrical path costs roughly $55,800 a year annualized and fixes
none of the faults that need a person.

Two findings sit under that, both new.

**The operating model does not fund a site presence.** It carries a 0.25 FTE
staffing floor (450 hours) and maintenance at two hours per server per month
(288 hours), all at a $75 loaded rate: 738 hours and $55,350 a year. **There
is no travel time, no on-call retainer, no call-out premium, and no local
contractor line anywhere in the compute model.** The plan assumes 738 hours of
work happen at a building nobody is budgeted to reach. The gap is $25,000 to
$40,000 a year, about 1.9% of six-year revenue, and the ask does not carry it.

**Sourcing is the easy part; priority during a regional emergency is not.**
Corrected 2026-09-21: 51 Main is the Town's Connectivity Center, the Council
owns it, the Water District keeps an office at #102, and Pioneer Broadband
already has equipment in the building and runs a data center at Presque Isle.
Between the Town, VBL&P, and Pioneer, finding people is a commercial
conversation rather than a recruitment search, and the quiet rule does not
bite inside that circle. A remote-hands agreement with Pioneer is the shortest
route to Tiers 0 and 1 and **has not been asked for**.

What sourcing does not solve: **the demand is correlated with the suppliers'
own emergencies.** The ice storm that drops the grid puts the Town's crew on
the plough, all three VBL&P field staff on the lines, and Pioneer on its own
network, at exactly the hour MOCSI needs the building attended. The answers
are a contractual priority commitment, a second source with no storm duty, or
telling customers plainly that MOCSI is second in line during regional events.
**What closes it:** a priced remote-hands agreement with Pioneer; a decision
on emergency priority; an operating line in the compute model for site
presence; and an availability target, without which "one hour" and "four
hours" are preferences rather than requirements.
**Bears on:** `SiteHandsRequirements.md`, D-20260916-02, D-20260921-07,
D-20260921-08, the compute model's operating cost and therefore the ask, the
community-ownership commitment, and the unasked VBL&P outage history in
`research/20260914-SchofieldCallSheet.md` item 6.

## Q-20260921-06 — Does Van Buren traffic transit Canada, and what do we tell customers?
**Raised:** 2026-09-21 (see `PioneerSlaRequirements.md` §5)
**Context:** `ComputeNarrative.md` promises customers "We disclose our
jurisdiction and use no foreign subprocessors." `MaineColocationComparison.md`
records Pioneer Broadband's Presque Isle facility as having diverse paths to
Portland **and to Woodstock, New Brunswick**. Van Buren sits on the border
directly across from Saint-Léonard, so the shortest diverse path out of the
valley may be a Canadian one.

Transit is not processing, and a packet crossing New Brunswick does not make
Canada a subprocessor in the sense that sentence means. But a university
procurement officer or a town attorney running data-residency diligence will
ask, and the answer should be prepared rather than improvised. There is a
genuine trade behind it: requiring a US-only path may mean giving up the
second path entirely, which converts a residency question into an availability
one.
**What closes it:** Pioneer's answer on whether any Van Buren traffic transits
Canada today, on the primary path or on failover; a decision on whether to
require a US-only path and at what cost in diversity; and customer-facing
language saying which, together with what is encrypted in transit and under
whose keys.
**Bears on:** the "no foreign subprocessors" sentence in `ComputeNarrative.md`
and wherever it is echoed, the second fiber entrance (D-20260921-08), the
single-provider fiber risk in `CurrentState.md`, Q-20260921-05, and any
customer contract.

## Q-20260921-07 — What rate should the model use for electricity?
**Raised:** 2026-09-21
**Context:** `Inputs!B11` and `B74` price electricity at **$0.22/kWh**.
`D-20260918-02` records what that is: *"Electricity stays at v76's $0.22/kWh
placeholder in the model."* It is inherited from Tom Law's v76, and 22 ¢ is
the Maine state average from the `12.5 ¢ / 22 ¢` spread this repo bars from
external use as a blended 2023 marketing figure.

The estimated VBL&P all-in rate is **10.15 ¢ before tax and 10.7 ¢ with
Maine's 5.5% sales tax** (delivery 3.949 ¢, Standard Offer supply 6.200 ¢, a
$5 monthly customer charge, no demand charge found). The model therefore
prices power at roughly **double** the site's likely rate, and above even the
post-2029 downside.

Six-year electricity in the model is $629,930. At 10.71 ¢ it is about
$306,700, a difference of **roughly $323,000** against six-year operating cost
of $3.92M. Two consequences: the Van Buren siting argument is entirely absent
from the financial case, which returns 1.93 revenue per dollar while paying
Portland-area power prices; and the air-versus-liquid energy penalty in
`research/20260921-AirCoolingCostAtFullBuild.md` is overstated at 22 ¢, where
the full-build figure falls from $278,605 to $135,504 in present value at the
lower rate.

There is a real argument for holding 22 ¢ until the rate sheet arrives and the
2029 supply question resolves. **If it stays, it should be a documented choice
rather than an inherited placeholder.**
**What closes it:** VBL&P's written rate sheet (asked of Bill Schofield by
phone on 2026-09-21, and previously after the 2026-09-17 call), then a
decision on whether to model today's rate, a blended rate across the Standard
Offer expiry, or the downside. Check the sheet for a demand charge: no public
source shows one, and one would be material at 110 kW.
**Bears on:** every figure in the grant package, revenue per dollar of cost,
the cash low point and therefore the ask, the cooling comparison in
Q-20260921-04, the Maine colocation comparison, and the siting case for Van
Buren.

**Update 2026-09-21 (D-20260921-09):** adopted **12.5 ¢** as the interim,
Luke Dyer's figure from VBL&P's published line. It is conservative against our
own 10.71 ¢ estimate, and the 1.8 ¢ gap reconciles as the $5 monthly customer
charge spread over a residential 300-350 kWh month, which is negligible at our
volume. Revenue per dollar of cost is now **2.04**, crossing 2.0, and that
headline rests on the weakest-sourced input in the workbook.

The question stays open on two counts. The rate sheet is still outstanding
(chased by phone 2026-09-21) and should be checked for a demand charge, which
no public source shows and which would be material at 110 kW. And the
post-2029 Standard Offer reprice, to roughly 19.9 ¢ with tax, is unmodelled;
if a downside belongs in the plan it is that figure, chosen and labelled,
rather than a placeholder.

## Q-20261006-01 — What stake does the host community hold in the facility?
**Raised:** 2026-10-06 (see ConversationLog.md)
**Context:** D-20261006-06 replaced "partly owned by the host community" with
"the host community is a stakeholder" across the deck, because no site is
selected. D-20260826-01 still makes partial community ownership a requirement
of the host site. Either the requirement stands and the wording returns once
a site is chosen, or the requirement is revised by a decision that says so.
**What closes it:** site selection and the public engagement process that
sets the form of the stake (ownership share, lease, governance seat, or
benefit agreement).
**Bears on:** the stack diagram, slides 3 and 9, the narrative, the
colocation comparison (section 5), and every Marketing and Website page that
still says "partly owned".

## Q-20261007-01 — What model would earn confidence?
**Raised:** 2026-10-07 (see ConversationLog.md)
**Context:** D-20261007-01 set aside the staged three-project model
(`models-staged-v1`, b1515cd) because Fletcher had no confidence in it. The
launch order (Software and Services on cloud first, then a Compute pilot in
colocation, then the facility) was not withdrawn, so the record says one
thing and the model another. The deck already presents three projects, but
funds only Compute.
**Partly answered:** D-20261019-01 (2026-10-19) withdrew the launch order:
the three projects are all under way with no fixed order of completion.
**What closes it:** which assumptions of the staged model failed (pilot size, market-rate
inference, colocation cost, loan structure, or the Software and Services
staffing).
**Bears on:** the model, every figure in the package, the ask, slides 3
and 14.
