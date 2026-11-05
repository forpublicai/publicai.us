# Facility renewal: what wears out, and who pays

Draft for discussion, 2026-10-06. Figures are the mid case of
`GrantPackage/FacilityUpgrades/FacilityUpgradesModel.xlsx`, using the
component lives added that day for property tax (column J of the Electrical,
BackupPower, and Cooling sheets).

## The gap

The facility's $2.05M of electrical, backup power, and cooling equipment
wears out on very different clocks. Rack power distribution units, hoses,
and monitoring last about seven years; controls and leak detection eight;
branch circuits ten; the UPS (uninterruptible power supply) and the cooling
distribution units twelve; the transformer, switchboard, and piping 25 to 30.

The plan funds almost none of the replacements. The facility charge the
compute pays covers maintenance, a reserve for UPS batteries ($3,811 a
year), and property tax. Nothing else accumulates. Two consequences:

- **Grant-funded case.** The grant builds the facility once. Every
  replacement after that is unfunded.
- **Financed case.** The loan repays the first set of equipment over 20
  years, while most of it needs replacing at least once before the loan ends.

The six-year model hides this. Only the glycol ($11,718, year 5) comes due
inside it. The first real wave arrives in year 7.

## The bill

| Year | Due | What |
|--:|--:|---|
| 5 | $11,718 | glycol and loop fluid |
| 7 | $148,214 | rack PDUs, monitoring, hoses and quick disconnects |
| 8 | $67,943 | controls and building management, leak detection |
| 10 | $76,228 | rack branch circuits; glycol again |
| 12 | $523,868 | UPS, cooling distribution units, in-row air cooling, batteries |
| 14 to 16 | $284,897 | second round of the seven- and eight-year items; pumps, filtration, fire tie-in |
| 20 | $455,641 | ATS, UPS feeders, dry cooler, trim chiller, heat recovery, mechanical feeds; branch circuits and glycol again |
| **Through year 20** | **$1,568,509** | |

Spread evenly, renewal costs **$133,881 a year**, or **$1,213 per kilowatt
per year** at the 110.4 kW design load. The workbook's own note on the
grant-funded case (Design row 29) says the charge "recovers maintenance and
replacements only"; it recovers maintenance, batteries, and property tax, and no other replacement. An earlier
estimate put the gap near $106,000 a year; component lives put it higher.

These lives are estimates, chosen at the short end of the ranges the
workbook cites. Experience with corporate data rooms suggests that end is
the realistic one.

## Ways to handle it

1. **Fund it in the facility charge.** A sinking fund (money set aside each
   year so it is there when the equipment wears out) raises the grant-funded
   charge from $598 to about $1,811 per kW per year. The compute pays about
   $803,000 more over six years. This is the honest full cost of owning the
   facility, and it moves every headline figure: revenue per dollar, both
   cash figures, and the colocation comparison.
2. **Fund the short-lived layer only.** Items lasting ten years or less cost
   $38,461 a year ($348 per kW). Charge for those, and plan to meet the
   year-12 and year-20 waves with a new loan or capital grant when they come.
   Smaller charge; two large lumps left to a future board.
3. **Lease or contract the fast-turning gear.** UPS service agreements,
   leased PDUs, and subscription controls turn lumps into operating cost,
   usually at a premium, and move the renewal risk to a vendor.
4. **Design for fewer replacements.** Specify the UPS batteries
   (lithium-ion, which the 12-year reserve already assumes), choose fewer
   data-center-specific layers, and standardize parts. This lowers the bill
   without removing it.
5. **Let a landlord carry it.** Colocation (Loring, as an interim home) puts
   renewal inside the landlord's rate. The colocation comparison already
   prices that rate and leaves out the owned facility's renewal, which
   flatters ownership by up to $803,000 over six years on the set-aside basis.

Any choice needs two things alongside it: a line in the funder package
stating how renewal is funded (today the package is silent), and an owner,
since the Facilities Project entity and the host community will hold the
building and should hold the reserve.

## Questions for the group

1. Should the facility charge carry the full sinking fund, part of it, or
   none, with renewal disclosed as a future capital need?
2. Who holds the reserve: the facility owner, the compute operator, or a
   joint account?
3. Do we take the short lives in this note as the planning basis, or ask a
   facilities engineer to set them?
