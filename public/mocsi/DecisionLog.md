# MOCSI Decision Log

Append-only. Never edit or delete a past entry. A correction to a past
decision is a new entry that points back via `Revises:` — the old entry
stays as written, including if it was wrong.

An entry is warranted when there was a real alternative on the table and one
was chosen over it for a stated reason. Pure execution — where there was
only one reasonable way to do the thing — doesn't need an entry.

Template:

```
## D-YYYYMMDD-NN — <short title>
**Date:** YYYY-MM-DD
**Decision:** <the decision, stated plainly>
**Reasoning:** <why>
**Alternatives rejected:** <what else was considered, and why not>
**Dissent:** <optional — what was argued against this, and why it was overridden>
**Answers:** <optional — Q-YYYYMMDD-NN, if this closes an open question>
**Revises:** <optional — D-YYYYMMDD-NN, if this changes a prior decision>
```

---

## D-20260821-01 — Adopt DecisionLog/ConversationLog/OpenQuestions.md protocol
**Date:** 2026-08-21
**Decision:** MOCSI project decisions are recorded going forward using three
files: DecisionLog.md (append-only, structured decision records),
ConversationLog.md (append-only, narrative record of decision and
question-opening events), and OpenQuestions.md (mutable, current open
questions only). A decision file entry is required in the same git commit
as any content-file change it justifies, enforced by a pre-commit hook
(`hooks/pre-commit`) with `git commit --no-verify` as the escape hatch for
purely mechanical commits.
**Reasoning:** Reused from a protocol the user has used successfully on
other projects. Append-only logging avoids the retrospective-narrative
decay documented in `analysis_record_of_inquiry_v9.md` (conclusions stated
more firmly than evidence, specifics invented under narrative pressure) —
that decay came from writing a synthesis after the fact, not from logging
contemporaneously. Git commit history alone was considered and rejected as
sufficient on its own, since it captures only resulting file states, not
the deliberation, rejected alternatives, or dissent behind a decision.
**Alternatives rejected:** Relying solely on git commit messages as the
decision record (insufficient granularity, doesn't capture non-file-change
strategic decisions or rejected alternatives). A single combined log file
instead of three (loses the useful distinction between mutable
current-state questions and immutable historical record).

---

*Entries below are backfilled retroactively on 2026-08-21, the date the
DecisionLog was adopted, for decisions made earlier the same session,
before the log existed.*

## D-20260821-02 — Adopt Tom's intermediate work as analytical foundation
**Date:** 2026-08-21
**Decision:** `gpu_capacity_prospectus_v76.pdf`, `gpu_capacity_model_v76.xlsx`,
`analysis_record_of_inquiry_v9.md`, and `local_compute_differentiation_combined_v2.md`
(authored by "Tom," untracked in the main checkout) are MOCSI's working
foundation going forward, superseding the older analysis implicit in the
committed README/deck/RFP drafts.
**Reasoning:** This work is more analytically rigorous than what's
currently committed — sourced premium research, per-hardware-class ROI
modeling, an explicit self-audit of its own reliability — and represents
weeks of independent modeling the user wants built on rather than
re-derived.
**Alternatives rejected:** Treating the existing committed docs (README,
deck, RFP drafts) as authoritative and reconciling Tom's work into them
instead of the reverse.

## D-20260821-03 — Hardware platform narrowed; Stage 1 capex reopened
**Date:** 2026-08-21
**Decision:** Hardware platform is a blend of FPGA, AMD Instinct, and used
NVIDIA datacenter GPUs only. NVIDIA GH200, NVIDIA consumer, and Apple
unified memory are fully dropped, not just deprioritized. The $1.3M/16-GPU
Stage 1 capex figure in `README.md` is explicitly open, not just the
hardware line within it.
**Reasoning:** Tracks the ROI ranking in Tom's model (FPGA 67%, AMD
Instinct 53%, used NVIDIA datacenter 36% vs. NVIDIA consumer 6%, Apple
−7%, all at $0.22/kWh, six-year horizon). GH200 does not appear as a
modeled class at all.
**Alternatives rejected:** Keeping GH200/consumer/Apple as open
possibilities alongside the top three; keeping the $1.3M capex figure and
only revising the hardware line items within it.

## D-20260821-04 — Sell beyond Maine
**Date:** 2026-08-21
**Decision:** MOCSI will sell to customers outside Maine, not only
in-state.
**Reasoning:** User-directed expansion of target market while updating
`OnePager.md`; no in-conversation reasoning beyond the direct instruction.
**Alternatives rejected:** Maine-only customer base (the implicit scope in
the original README/deck framing).

## D-20260821-05 — One-pager product scope: four layers, all open source
**Date:** 2026-08-21
**Decision:** MOCSI sells four layers, each open source and auditable:
raw compute, hosted inference, context layer (hybrid RAG), and a
harness/sandbox layer for institutional agent workloads.
**Reasoning:** Mapped against `Overview.md`'s target segments: most
segments (K-12, municipal government, healthcare, foundations/co-ops,
advocacy) are inference/RAG consumers, not raw-compute buyers, per Tom's
"institutions buy applications, not compute" finding. Public higher ed is
the one segment that behaves like a traditional compute buyer. The
harness/sandbox layer was added after discussion identified it as a gap in
both Tom's model and the project's own `OpenSourceStackInventory.md` —
neither priced or catalogued multi-step, tool-using agent workloads.
**Alternatives rejected:** Selling only raw GPU-hours (doesn't match how
most target segments actually consume AI); omitting the harness/sandbox
layer (leaves out what was identified as the most concrete, verifiable
form of "inspect the stack" available).

## D-20260821-06 — Positioning: "certified local," not "sovereign"
**Date:** 2026-08-21
**Decision:** MOCSI's positioning language uses "certified local" and does
not claim data sovereignty, for either foreign or domestic customers.
**Reasoning:** The CLOUD Act binds any US-incorporated operator regardless
of where hardware sits — this is not a limitation that can be engineered
around, it follows from incorporation. For domestic customers specifically,
"sovereignty" is a category error: there is no foreign jurisdiction being
avoided, so the term doesn't meaningfully apply even loosely. What MOCSI
can honestly claim: disclosed jurisdiction, named operator, inspectable
infrastructure, no foreign subprocessors, reduced practical (not legal)
exposure.
**Alternatives rejected:** Marketing "data sovereignty" to domestic
regulated buyers (healthcare, government) on the theory that it means
something different for a domestic audience — examined directly and
rejected as the same overclaim problem aimed at a different audience.

## D-20260821-07 — Target segments: "non-profits in general"; excess compute to for-profits with public-interest priority
**Date:** 2026-08-21
**Decision:** Target customer list collapses "unions and advocacy
organizations" into "non-profits in general." Excess compute capacity may
be sold to for-profit organizations, with public-interest organizations
always having priority.
**Reasoning:** User-directed edit to `OnePager.md`.
**Dissent:** Initial "excess compute" wording (with no priority clause) was
challenged as contradicting the "non-extractive" mission language two
paragraphs earlier, and as assuming a demand condition (excess capacity)
contrary to the utilization risk Tom's own model treats as severe. User
added the public-interest-priority clause in response, which resolves the
mission-contradiction objection. The demand-condition objection (whether
"excess" is actually the likely condition, versus capacity-constrained) was
raised but not resolved — left as an implicit open question rather than
formally tracked, since the log didn't exist yet at that point in the
conversation.
**Alternatives rejected:** Leaving "unions and advocacy organizations" as
its own listed segment; leaving the excess-compute sentence without a
priority clause.

## D-20260823-01 — Add TODO.md as a fourth tracking file
**Date:** 2026-08-23
**Decision:** Add `TODO.md` alongside DecisionLog/ConversationLog/
OpenQuestions, for lightweight tasks that aren't decisions. Items are
appended to an Active section as they come up; on completion an item
moves to a Completed section, annotated with date, time, and a
one-sentence description of how it was completed. `TODO.md` is exempt from
the pre-commit hook's same-commit-as-DecisionLog rule, alongside
ConversationLog.md and OpenQuestions.md — the same change was made to the
canonical `tracking-decisions` skill (`~/.claude/skills/tracking-decisions/`)
so it scaffolds into future projects too.
**Reasoning:** A task ("go do X") is not the same thing as a decision
("we chose X over Y for reason Z") — the existing decision test doesn't
fit task tracking, and forcing tasks through DecisionLog would either
flood it with non-decisions or leave tasks untracked entirely.
**Alternatives rejected:** Folding tasks into OpenQuestions.md (conflates
"open question needing a decision" with "known task needing execution" —
different lifecycles, since a task doesn't get "answered," it gets done).
Making TODO.md append-only like DecisionLog/ConversationLog (rejected per
the user's explicit choice, via AskUserQuestion, that completed items move
to a Completed section rather than staying in place — a lighter-weight
mutability model than the append-only logs, appropriate since a completed
task isn't a decision worth preserving in its original position).

## D-20260823-02 — Attribute "MOCSI - Alignment.md" to Matt Victor before tracking it
**Date:** 2026-08-23
**Decision:** Added a header "**Author: Matt Victor**" to the top of
`MOCSI - Alignment.md` before adding the file to git tracking.
**Reasoning:** User-directed: track the file, but attribute authorship to
Matt Victor first. No independent verification of authorship was performed
— the attribution rests solely on the user's instruction.
**Alternatives rejected:** Tracking the file without an authorship header
(rejected — user explicitly asked for attribution before tracking).

## D-20260824-01 — Add RunningNotes.md for working analytical notes
**Date:** 2026-08-24
**Decision:** Added `RunningNotes.md` as a fifth tracked file: working
notes and analytical observations that are not decisions, open questions,
or tasks. Mutable (revisable), newest entries at the end. It is *not*
exempt from the pre-commit hook — a substantive note is content, and
carries a DecisionLog entry when it records a real choice.
**Reasoning:** Research observations accumulating toward later synthesis
have no home in the existing four files. They are not decisions (nothing
was chosen over an alternative), not open questions (nothing is blocked
awaiting resolution), and not tasks (nothing needs doing). Forcing them
into DecisionLog would dilute the decision record with material that
fails its own decision test.
**Alternatives rejected:** Folding analytical notes into
`OpenQuestions.md` (conflates "unresolved and blocking" with "observed and
worth keeping" — a note isn't waiting on an answer). Folding them into
`DecisionLog.md` (they fail the decision test by construction, and
append-only is wrong for notes that should be revisable as understanding
improves). Adding `RunningNotes.md` to the hook's exemption list alongside
TODO.md (rejected — unlike a task checkbox, a substantive note can carry
real analytical claims, and those should travel with the same commit
discipline as any other project content).

**First entry:** the aggregator channel for the non-profit segment — sell
to Maine Community Foundation, United Way, or a state non-profit
association buying on behalf of member organizations, rather than selling
to individual non-profits whose unit economics cannot support the cost of
sale.

## D-20260824-02 — Email archiving: gitignored, and never 1:1
**Date:** 2026-08-24
**Decision:** Email may be archived into an `email/` directory as one
markdown file per thread. Two constraints govern it:
(a) `email/` is **gitignored**, not committed;
(b) a thread whose participants, excluding Fletcher's own addresses,
number **one or fewer is never archived** — evaluated across every
message in the thread, not just the first.
Built as a reusable skill, `~/.claude/skills/archiving-email/`, with a
dependency-free checker (`check-archive.py`) that re-derives the
participant count from each file's frontmatter and exits non-zero on any
violation.
**Reasoning:** Archived correspondence contains third parties' words and
addresses, and those parties did not choose to have them filed into a
project repository. Git history is permanent — deleting a file later does
not remove it, and a private repo can gain collaborators or be made
public. Gitignoring is therefore the reversible choice ("we can always add
them later"); committing is not. The 1:1 rule is deliberately structural
rather than topical: it never asks whether content *looks* private,
because that judgment is unreliable and erodes under pressure, whereas
counting recipients is mechanical and cannot be rationalized away.
**Alternatives rejected:** Committing archived email to the repo (rejected
as irreversible — the exposure it creates cannot be undone, while the
benefit it adds can be obtained later at any time). Committing with
addresses redacted (still puts third-party correspondence permanently in
history; redaction reduces exposure without making it reversible).
Relying on case-by-case judgment about whether a thread seems private
instead of a mechanical recipient count (rejected — this is exactly the
kind of judgment that degrades under time pressure, and it leaves no
auditable trace). Adding `email/` to the pre-commit hook's exemption list
(unnecessary — gitignored files never reach the hook at all).
**Still open at time of writing:** where the archive directory should
physically live. Recommended the **main checkout** rather than this
worktree, because gitignored files in a worktree have no git copy and are
lost when the worktree is removed — but this was not put to Fletcher
before this entry was written, so it is a recommendation, not a settled
choice. Also unsettled: which threads are in scope to archive.

## D-20260824-03 — Archive location, and three email-handling modes
**Date:** 2026-08-24
**Decision:** (a) The archive lives at `<project root>/email/`, where
project root is the **main checkout** — for MOCSI, `~/mocsi/email/`, not
this worktree. (b) Three modes are supported: **read** (fetch and
discuss, nothing written, recipient test does not apply), **archive**
(write eligible threads, report a manifest only, recipient test applies),
and **read + archive** (both).
**Reasoning:** Location — gitignored files inside a worktree have no git
copy and are destroyed when the worktree is removed, so a worktree is the
one place archived mail must not live. Modes — reading and filing are
different acts with different exposure: reading a 1:1 thread creates no
durable third-party record, filing one does. Scoping the recipient test
to the modes that write to disk keeps it strict where it matters without
making ordinary mail reading needlessly awkward.
**Alternatives rejected:** Archiving into the worktree (data loss on
worktree removal). Relying on the project's main `.gitignore` alone
(rejected as the weaker guarantee — it lives on one branch and is absent
from every branch predating it; confirmed today that `~/mocsi/.gitignore`
still lacks the rule because D-20260824-02's commit is on this branch
only). Applying the recipient test to read mode as well (rejected —
reading writes nothing, so it creates no durable record of a third
party's private correspondence).
**Implementation note:** `~/mocsi/email/` was created with a
self-contained `.gitignore` containing `*`, which ignores the directory
including itself and therefore holds regardless of branch or worktree.
The pattern was verified in a scratch repository: `git add -A` staged
only files outside the directory.
**Partially answers:** Q-20260824-01 — the location half. Scope, meaning
which threads to archive, remains open and the question has been narrowed
to that.

## D-20260824-04 — Correction: attachments are retrievable; second owner address
**Date:** 2026-08-24
**Decision:** Two corrections to the email archiving design.
(a) **Attachments can be retrieved**, contrary to what was recorded on
2026-08-23 and 2026-08-24. The route is `messageFormat: RAW`, which
returns the full RFC822 message with attachments base64-encoded inline;
when that response exceeds the context limit the harness spills it to a
file, and `extract-attachments.py` (added to the skill) reads that file
and writes the attachments out. Attachment bytes travel disk-to-disk and
never enter context. Verified end to end against a real message: a
1,968-byte `invite.ics` was extracted byte-exact and confirmed valid.
(b) **Fletcher has a second address**, `fletcher@kittredge.com`, in
addition to `fkittred@gmail.com`. Both must be excluded when applying the
recipient test.
**Reasoning:** (a) The earlier claim was asserted without being tested.
Checking it revealed that no attachment-download tool is exposed — that
part was right — but that RAW format plus the harness's oversized-result
spill achieves the same end, and does so with *better* context behavior
than a dedicated download tool would have. (b) Discovered while searching
for a test message: threads were addressed to both of Fletcher's
addresses. This is the most dangerous possible error in the recipient
test, because it fails *open* rather than closed — an unrecognized owner
address counts as a third party, so a genuinely 1:1 thread shows two
"other" participants and wrongly passes. Every archive written under the
incomplete address list would have been silently over-permissive.
**Alternatives rejected:** Continuing to treat attachments as
unavailable and asking Fletcher to download them by hand (rejected — it
was simply untrue, and would have imposed manual work for no reason).
Extracting attachments by reading the base64 through context (rejected —
works only for trivial files and wastes context proportional to file
size; the spill-file route has no such ceiling).
**Revises:** D-20260824-02, whose ConversationLog entry recorded that
"attachment contents are not retrievable through the available tools."
That statement was wrong. The original entry stands unedited, as the
protocol requires.

## D-20260824-05 — Never select among multiple matching email threads
**Date:** 2026-08-24
**Decision:** When an email search matches more than one thread, present
the matches — subject, sender, date, message count — and ask which to
include. Never pick one, including when a single match appears
unambiguously correct. A single match may be acted on directly.
**Reasoning:** Fletcher's instruction, given after a search for a
specific subject line returned six threads and one was selected for him
without being asked. The narrowing itself is the problem rather than the
particular choice made: he may want several of the matches, or one that
would have been discarded as noise, and silently resolving to a best
guess removes a decision without his knowing there was one to make. The
same reasoning as the recipient test — mechanical deference beats
confident judgment where the cost of being wrong is borne by someone
else.
**Alternatives rejected:** Auto-selecting the best match and reporting
which was chosen (rejected — reporting after the fact still means the
choice was made unilaterally, and in practice a report is easy to skim
past). Asking only when matches are genuinely ambiguous (rejected — this
restores exactly the judgment call the rule exists to remove, and
"obviously right" is precisely how the original error was reached).
**Also recorded here:** Fletcher has a **third** address,
`fletcher@publicai.co`, alongside `fkittred@gmail.com` and
`fletcher@kittredge.com`. All three must be excluded when applying the
recipient test. See D-20260824-04 on why an unknown owner address is the
dangerous case: the test fails open, not closed.

## D-20260824-06 — PHACDirectory.md: organizations only, tracked in the repo
**Date:** 2026-08-24
**Decision:** The Pro-Human AI Coalition membership map is recorded as
`PHACDirectory.md` at the repo root — tracked, not in `email/`. It
captures the 54 member organizations by primary domain plus the
coalition's structural metadata. It deliberately **excludes individuals
and all contact details**.
**Reasoning:** Location — `email/` is for archived threads; this is
reference data pulled from a web source, and the repo's convention for
reference documents is a root-level CamelCase markdown file
(`WhoIsWho.md`, `MaineHigherEdComputeAnalysis.md`). This is the external
counterpart to `WhoIsWho.md`. Exclusions — the individuals grid is
virtualised (about 37 of 155 render at once) and the rendered text has no
delimiter between job title and organization, so parsing yielded mangled
and in places wrong affiliations. Recording those would have put
fabricated-looking specifics into the repo, which is the precise failure
mode `analysis_record_of_inquiry_v9.md` warns about. Contact details were
left out separately: members can opt out of displaying them and the
directory is password-gated, so an organizational map is defensible where
a harvested contact list is not.
**Alternatives rejected:** Putting it in `email/` (wrong category, and
would have made a strategy artifact invisible to the repo). Including the
partial individuals list with a caveat (rejected — a caveat at the top
does not stop a wrong affiliation being read as fact three months later;
the data was not good enough to record at all). Capturing email addresses
alongside names (rejected — turns a structural map into a contact list,
against the opt-out settings members chose).
**Notable finding recorded in the file:** Technology & Infrastructure,
whose coalition definition is "infrastructure that reduces dependence on
hyperscalers", holds 6 of 54 members and contains no compute operator,
while Policy & Governance holds 20. Public AI is filed under Policy &
Governance rather than Technology & Infrastructure.

## D-20260824-07 — PHACContacts.md in a gitignored private/ directory
**Date:** 2026-08-24
**Decision:** Coalition contact data lives in `private/PHACContacts.md`,
gitignored via a self-contained `private/.gitignore` containing `*` plus a
`private/` entry in the project `.gitignore`. It pairs each address from
the coalition's meeting-invitation recipient list with the directory's
name, title, organization and role, matched by script with an explicit
confidence tier per row.
**Reasoning:** Fletcher argued that harvesting is a problem only where
data is used outside its intended purpose, shared with third parties, or
stored insecurely — and that none of those apply to a coalition member
using a member directory for partnership and strategy, which is the
directory's own stated purpose. That reasoning holds, and one point I had
raised cuts his way rather than mine: because members can opt out of
displaying contact details, what the directory shows him already *is* the
consented-to-member-visibility set.
The one objection that survives good intent is revocability. The source
supports opt-out and changes over time; git history does neither, and
`git rm` does not remove a file from history. Gitignoring resolves it
without costing any working use: the copy stays refreshable and
deletable, repo collaborators do not silently inherit it, and nothing
becomes permanent. Same structure, and the same reasoning, as
D-20260824-02 for `email/`.
**Alternatives rejected:** Committing the contacts (irreversible, and
makes future coalition opt-outs unhonourable in this copy). Not capturing
at all (rejected — Fletcher's argument is sound and the restriction would
have been caution without a rationale). Putting it in `email/` (wrong
category; that directory is for archived threads).
**Method note, and a bug caught:** the first matcher assigned addresses
greedily in list order and mis-assigned every collision — it swapped
Andrew Broz and Andrew Trask between `andrew@civilizationresearch.org`
and `andrew@openmined.org`, gave Ben Scott's `ben@reset.tech` to Ben
Cumming, and dropped David Hsu because its initial+surname rule required
a surname longer than three characters. Rewritten to score all
person-address pairs and assign globally best-first, with organization-to-
domain affinity as the disambiguator. Verified by inspection afterwards.
**Coverage:** 33 of 37 known directory names matched; 123 addresses still
have no directory name, because only about 37 of 155 directory rows have
been captured. The bottleneck is the directory's virtualised grid, not
the addresses. A CSV export would close it.

## D-20260824-08 — PHAC member organizations are target customers
**Date:** 2026-08-24
**Decision:** The 54 member organizations of the Pro-Human AI Coalition
are target customers, of equal standing with Maine-based buyers. The
target market is Maine institutions **and** the wider ethical-AI
ecosystem, not Maine with the ecosystem as an afterthought.
**Reasoning:** Fletcher's call. Analytically it holds up better than the
Maine-only framing, because the ecosystem segment supplies something the
Maine segment cannot: *documented* compute demand. Two PHAC workloads are
named in writing rather than inferred — the coalition's US tech
legislation tracker (500+ bills, continuously ingested) and Seismic's
4,000-person survey — against a Maine segment whose buyer evidence Tom's
own table rates speculative to highly speculative.
**Alternatives rejected:** Maine-first with the ecosystem as a secondary
market (rejected — it inverts where the evidence actually is). Ecosystem
only (rejected — community governance and the host-community relationship
are load-bearing for the whole thesis and require a place).
**Consequences recorded in `RunningNotes.md`:**
1. The two segments have **opposite model-churn profiles**, and churn is
   the FPGA qualifier. Maine runs a pinned model for years, which is
   FPGA's regime. PHAC safety orgs change the model constantly because
   evaluating models *is* the job, which is FPGA-hostile and requires
   GPUs. This maps the already-chosen blended fleet onto segments rather
   than treating it as generic diversification.
2. It unlocks a positioning claim unavailable in the Maine framing —
   **independent evaluation requires independent compute** — which passes
   the four-property test better than locality does. Rated speculative:
   no safety organization has said they need it.
3. **The CLOUD Act now bites.** A large share of PHAC is non-US (Oxford,
   Cambridge, McGill, Mila, AI Safety Asia, ISD Global, The Elders,
   Minderoo, JEDI). For them US incorporation is a genuine liability and
   "certified local" does not travel — we cannot sell them what they
   would actually want. This was a non-issue while the audience was
   domestic.
4. **"Local" stops doing work.** Already worth zero on price; across a
   globally distributed membership it is not even a door-opener. What
   survives is independence, inspectability, and efficiency measurable at
   the meter — none of them geographic. Argues for treating Maine siting
   as an operational fact rather than a headline claim, which cuts
   against how `OnePager.md` currently reads.

## D-20260824-09 — Correction: non-US members and safety orgs are discounted
**Date:** 2026-08-24
**Decision:** Two segments identified in D-20260824-08 are discounted as
prospects. (a) **Non-US PHAC members** — Oxford, Cambridge, McGill, Mila,
AI Safety Asia, ISD Global, The Elders, Minderoo, JEDI, roughly a fifth of
the coalition — are unlikely buyers, because data sovereignty is a
principal reason they would seek independent compute and a US-incorporated
operator cannot supply it. (b) **AI safety and evaluation organizations**
are not early adopters: their work targets frontier models that cannot be
self-hosted, and their compute needs are met by API access to the labs
being evaluated.
**Reasoning:** Both are Fletcher's corrections and both are right. On (a),
D-20260824-08 framed the CLOUD Act as a weakened pitch to those members;
it is worse than that — sovereignty is the motivation, so we are not a
degraded option but the wrong vendor. On (b), the correction exposes a
logical hole in the "independent evaluation requires independent compute"
claim recorded in D-20260824-08: that argument only holds where the model
under evaluation runs on our hardware. Evaluating a frontier model means
calling that lab's API regardless of whose GPUs the harness runs on, so
independent compute does not remove the conflict. The claim was reasoned
from the shape of the buyer rather than the shape of the work. It survives
only in the narrower case of evaluating open-weight models at scale, and
those buyers are still not first customers.
**Alternatives rejected:** Retaining the safety segment at a lower
evidence rating (rejected — the problem is not weak evidence, it is that
the workload is structurally not ours). Retaining non-US members as a
secondary market (rejected — the mismatch is jurisdictional and cannot be
closed by pricing or service).
**Consequence — the churn conclusion in D-20260824-08 largely reverses.**
That entry argued the ecosystem segment was high-churn and therefore
justified the GPU half of the blended fleet. Removing the safety orgs and
the non-US academics removes both high-churn groups, leaving demand across
Maine and PHAC alike that is predominantly **low-churn pinned-model work**
— document pipelines, classification, RAG. That is more FPGA-favorable,
and it leaves a thinner GPU case than D-20260824-08 stated. What still
requires GPUs: Maine public higher ed (fine-tuning and eval sweeps, high
churn, D-rated), regional AI product companies (moderate churn, D-rated),
and CUDA-dependent tooling. Two buyer types rather than a segment.
**Raises the stakes on an existing unknown:** per-model FPGA porting cost.
"Low churn" for a validated clinical model is near zero; for a policy
org's classification pipeline it is closer to quarterly as better open
models ship. Whether quarterly recompilation is FPGA-viable depends on
porting cost, which Tom's register lists as open and unpriced — and more
of the projected demand now rests on it.
**Revises:** D-20260824-08.

## D-20260824-10 — Record FPGA porting-cost analysis; three findings
**Date:** 2026-08-24
**Decision:** Analysis of per-model FPGA porting cost recorded as
`FPGAModelPortingCosts.md` at the repo root — tracked, following the
existing reference-document convention. It contains three findings that
change how the FPGA path should be evaluated.
**Reasoning:** The FPGA class carries the highest return in the model
(67 percent, and the only class viable at list prices), and D-20260824-09
made porting cost more load-bearing by narrowing demand toward pinned-model
work. The analysis was worth recording rather than leaving in conversation
because it changes what we should be asking suppliers.
**Findings:**
1. **Porting cost is a function of distance, not of change.** A fine-tune
   of an already-ported model is near zero; same family different size is
   days; a new primitive such as Mixture-of-Experts is weeks to months.
   This means the `UseCases` sheet's treatment of model churn as a single
   axis is too coarse for the buying decision — a customer moving within
   an architecture family sits in a completely different cost regime from
   one adopting a new architecture.
2. **Efficiency and portability are in direct tension, and the operating
   point MOCSI needs is unpublished.** A fully specialised circuit gives
   maximum efficiency and maximum porting cost; a generic overlay
   collapses porting cost and much of the efficiency advantage with it.
   The FlightLLM figures anchoring the model's FPGA pricing come from the
   specialised end; a multi-model hosting service needs the overlay end.
   No public numbers exist for that point.
3. **Versal is structurally a different bet.** It is not a pure FPGA but
   an adaptive SoC whose hardened AI Engines are *programmed rather than
   synthesised*, which is the overlay architecture delivered in silicon.
   Per-model porting cost on a Versal part should be materially lower.
   The caution: the Versal VHK158 throughput figure of 1.2x an A100 is
   simulated rather than measured, so the part that most plausibly solves
   the porting problem is the one whose performance is least verified.
**Also corrected:** earlier phrasing in conversation treated "AMD Alveo,
Altera Agilex, Achronix Speedster" as parallel. They are not — Alveo is a
card brand carrying Versal or UltraScale+ silicon, while Agilex and
Speedster7t are silicon families that reach a buyer as BittWare boards.
Only AMD publishes list prices, which is why the model can price only the
Alveo line.
**Consequence for the supplier conversation:** the existing ask (batch
1/8/32 throughput) should be extended to require the same figures for a
second model in a different architecture family, with the engineering
time between them, asked on both a Versal and a fabric-only part. A
supplier unable to answer has priced the largest hidden opex in the FPGA
path by declining to.
**Alternatives rejected:** Leaving the analysis in conversation only
(rejected — it changes the supplier ask, which is actionable). Putting it
in `RunningNotes.md` (rejected — long enough and reference-shaped enough
to warrant its own document; `RunningNotes.md` links to it).

## D-20260824-11 — The "open source stack" claim is not currently true
**Date:** 2026-08-24
**Decision:** No MOCSI document may claim a uniformly open-source
implementation stack until a licence audit of the dependency tree has been
done. The line in `OnePager.md` — "our implementation stack is open
source, open weight, transparent, and auditable" — is **blocked pending
that audit**, and one of three resolutions must be chosen: state it
precisely with a published licence inventory, replace the offending
components, or accept and disclose.
**Reasoning:** Investigating LibreChat as the client layer surfaced that
it depends on MongoDB, which has been under the Server Side Public Licence
since 2018. MongoDB's own FAQ states that **"the SSPL has not been
approved by the OSI"** — it is source-available, not open source under the
Open Source Definition, and Debian, Fedora and Red Hat all removed MongoDB
over it. Shipping it makes the claim inaccurate as written.
Note this is *not* a legal problem. The same FAQ confirms the Section 13
copyleft condition "applies only when you are offering the functionality
of MongoDB ... to third parties as a service. There is no copyleft
condition for other SaaS applications that use MongoDB as a database" —
hosting LibreChat with MongoDB as its internal datastore is the blessed
case. The problem is one of positioning integrity, aimed at the audience
least likely to let it pass: the PHAC membership tracks licensing
closely, and "we said open source and shipped SSPL" costs credibility out
of proportion to the component's importance.
**Alternatives rejected:** Leaving the claim and treating SSPL as
close-enough to open source (rejected — MongoDB itself says it is not
OSI-approved; this is the project's characteristic overclaiming failure,
and it would be caught). Quietly dropping MongoDB without auditing the
rest (rejected — Redis relicensed in 2024 before returning to AGPL in
2025 and Meilisearch is MIT; the problem is the absence of an audit, not
one component).
**Also recorded:** LibreChat itself is a strong fit — MIT, actively
developed, custom endpoints via `baseURL`/`apiKey` in the
**OpenAI-compatible** shape so vLLM connects with no translation proxy,
and it covers three of the four `OnePager.md` product lines (hosted
inference, RAG, and the harness/sandbox layer that was previously a gap).
It also inverts the earlier channel conclusion: because MOCSI hosts the
client, institutional staff get a ChatGPT-shaped application at a MOCSI
URL, which makes a **direct-to-institution product** viable where
D-20260824-08's reasoning had pushed everything toward B2B2G. Open
questions on it are in `TODO.md`: Code Interpreter hosting model,
organisation-level multi-tenancy, and the ClickHouse stewardship change.

## D-20260824-12 — "Auditable" means open weights, for now
**Date:** 2026-08-24
**Decision:** For the present, MOCSI's use of "auditable" in relation to
models means **open weights**: the weights are published, we can host them
ourselves, and a customer can be told exactly which model and version ran.
It does **not** mean the training data, training code, or intermediate
checkpoints are available. **This decision is provisional and must be
revisited periodically** — see the revisit triggers below.
**Reasoning:** Practical. Nearly every model with competitive capability
is weights-available and data-closed. The models that publish training
data as well (OLMo and its lineage) lag on capability, and restricting the
service to them would make it uncompetitive for the workloads in
`RunningNotes.md`. Serving a model we host, whose weights can be
inspected and whose version can be pinned, is a real and defensible
difference from a closed API — it is simply narrower than the word
suggests.
**Known problems with this definition — recorded deliberately:**
1. **Behaviour is auditable; provenance is not.** With weights alone you
   can evaluate, red-team and reproduce *outputs*. You cannot answer what
   the model was trained on: whether copyrighted material was used,
   whether personal data was in the corpus, whether the data was poisoned,
   or what biases data selection introduced. Those are the questions a
   sceptical public-sector buyer actually asks.
2. **It fails a stated target segment.** `Overview.md` lists research
   institutions and consortia needing "open/auditable models for
   reproducibility". Reproducibility in the research sense requires data
   and training code, not weights. For that segment this definition does
   not meet the stated need.
3. **"Open weight" is not "open source".** Llama's Community Licence and
   Gemma's terms are not OSI-approved and carry usage restrictions. Using
   the two phrases interchangeably repeats the error in D-20260824-11.
4. **This is the third instance of the same failure pattern.** Sovereignty
   (D-20260821-06), the open-source stack claim (D-20260824-11), and now
   auditability — each time a word was doing more work than the underlying
   fact supported. That recurrence is itself the finding.
5. **There is an external yardstick.** The Stanford HAI Foundation Model
   Transparency Index scores models on exactly these dimensions, so the
   gap is measurable by a third party and not a matter of opinion.
**Alternatives rejected:** Serving only fully-open models such as OLMo
(rejected — capability gap would make the service uncompetitive, though
OLMo should still be *offered* precisely because it is the one model where
the strong claim holds). Dropping the word "auditable" entirely (rejected
— the narrow version is true and worth saying). Using "auditable" without
qualification in funder materials (rejected — that is the overclaim).
**Revisit triggers — this decision is explicitly temporary:**
- **Periodically, at least quarterly**, and whenever the model roster is
  reviewed.
- When a fully-open model (published data and training code) reaches
  capability parity for MOCSI's actual workloads — document QA,
  classification, drafting — rather than on general benchmarks.
- **Before any funder-facing or customer-facing document uses "auditable"
  without qualification.** That is a hard gate, not a reminder.
- If a customer or funder asks a provenance question this definition
  cannot answer, which should be treated as evidence the definition is
  too narrow for that buyer.
**How to say it correctly meanwhile:** "open weights, self-hosted, version
pinned, and inspectable" — all true. Reserve "auditable" for OLMo-class
models where training data is published, and say which models those are.

## D-20260824-13 — Mixture of Experts is the dominant open-weight architecture
**Date:** 2026-08-24
**Revises:** the candidate model roster stated in conversation preceding
D-20260824-12
**Decision:** MOCSI plans on the basis that **MoE is now the default
architecture for frontier open-weight models**, and that the trend
continues. Dense survives as a band at roughly **32B and below**, which is
where model selection for any memory-constrained tier must sit.
**Evidence (D — demonstrated by current releases):** Every frontier-class
open-weight release in roughly the last twelve months is MoE. DeepSeek V4
Pro 1.6T/49B active (3.1%), Mistral Large 3 675B/41B (6.1%), Llama 4
Maverick 400B/17B (4.2%), Qwen 3.5 397B/17B (4.3%), Kimi K2.5 ~1T/32B
(~3.2%), GLM-5.2 744B/~40B. Exact digits come from secondary aggregators
and are approximate; the trend is corroborated across independent sources
including Raschka's architecture surveys.
**The load-bearing sub-finding — the sparsity ratio is collapsing.**
Mixtral 8x7B (2023) 47B/13B = 28% active; DeepSeek V3 (2024) 671B/37B =
5.5%; DeepSeek V4 Pro (2026) 1.6T/49B = 3.1%. Roughly 9x compression in
two years, monotone. Total-to-active has gone from ~3.6x to ~20-30x.
Memory **capacity** demand tracks total parameters; compute and
**bandwidth** demand track active parameters. The industry is therefore
moving fast along the single axis on which FPGA accelerator cards are
weakest, and the gap widens each release cycle.
**Correction recorded:** **Mistral Small 4 (March 2026) is a 128-expert
MoE** — 119B total, 4 experts active per token, ~6B active, Apache 2.0,
256K context, multimodal. Confirmed against Mistral's own release page and
the Hugging Face model card, so this is primary-source. It was named in
this session as a dense FPGA candidate; that was true of Mistral Small 3
and is false now. Removed from the dense roster — and simultaneously
promoted to the best *GPU* serving target (see D-20260824-14).
**Dense models that remain current:** Qwen 3.5 dense to 32B; Gemma 3/4
(1B-27B); Granite 4.1 8B and 30B, Apache 2.0, 512K context, benchmarking
above Gemma at that tier on code; OLMo, still the one genuinely
reproducible family and therefore the one where D-20260824-12's strong
"auditable" claim actually holds; Devstral 2 at 123B dense, an outlier too
large for any FPGA card.
**Second-order consequence:** MoE is a *competing* answer to the same
efficiency question the FPGA path answers. Sparse activation avoids the
FLOPs rather than making them cheaper, is delivered in software, is
portable across hardware, and improves on its own schedule. It erodes the
FPGA efficiency argument independently of any porting-cost question.
**Alternatives rejected:** Treating MoE as one primitive among many that
might need FPGA support (rejected — it is the dominant architecture, not
an edge case, and scoping it as a roadmap item understates it).

## D-20260824-14 — LLM serving runs on the GPU tier
**Date:** 2026-08-24
**Decision:** MOCSI's hosted-LLM product line is served from **GPUs**, not
FPGAs. Reference architecture: **AMD MI300X** (192GB HBM3) as the primary
part, **vLLM** on ROCm as the serving engine, **LiteLLM** for protocol
translation, **LibreChat** as the user-facing surface. Commercially, sell
**reserved capacity**, not tokens.
**Reasoning:**
1. **Capacity is the binding constraint, not FLOPs.** MoE requires every
   expert resident while computing only a few, so the purchase is memory.
   MI300X at 192GB is 2.4x H100's per-device capacity, and that advantage
   is exactly aligned with what MoE demands. This is an independent second
   reason pointing at the part the model already ranked at 53%.
2. **KV cache, not weights, exhausts memory** at long context and real
   concurrency, frequently exceeding the model itself. Every "will it fit"
   estimate computed on weights alone is wrong by a large factor. Third
   independent argument for 192GB parts.
3. **Risk profile.** Serving open models on GPUs with vLLM is a solved
   operational problem. The FPGA path carried technical risk — unmeasured
   concurrency, unpriced porting. The GPU path carries almost none of that
   and essentially all commercial risk instead. That is the better trade:
   commercial risk is testable with one node and a dozen customers;
   technical risk is only retired by buying the hardware.
**Model tiering:**
- **Workhorse — Mistral Small 4.** ~119GB at FP8 fits a *single* MI300X
  with room for KV cache. 119B of knowledge at ~6B of compute cost, one
  device, Apache 2.0, instruct + reasoning + vision + coding unified.
- **Cheap tier — Qwen 3.5 32B dense, Gemma 3 27B, Granite 4.1 30B.** Where
  most institutional traffic actually lands: classification, extraction,
  summarisation, routing, RAG generation.
- **Credibility tier — one frontier MoE** sharded across the node. May not
  pay for itself; carries the "real alternative to ChatGPT" claim, which a
  32B dense model does not support in a demo.
**Procurement constraint recorded (I — inferred from architecture):** MoE
at scale uses expert parallelism, with an all-to-all exchange per token.
Interconnect is therefore first-order. **PCIe-form-factor cards, which are
much of the secondary market, will bottleneck on that all-to-all.** SXM
with NVLink or Infinity Fabric is required, and used SXM parts generally
trade as whole HGX baseboards rather than individual cards — which changes
both minimum purchase size and the set of possible sellers. Anyone
quoting loose PCIe A100s is selling hardware that will not do this job.
**Against used A100 specifically:** Ampere has no native FP8. FP8 halves
the weight footprint, so an A100 fleet serves MoE at BF16 or software
INT8 and needs roughly twice the cards. Used A100s are the cheapest thing
on the secondary market and the wrong cheap thing for this workload. Used
**H100** is the alternative buy, at a worse price.
**Commercial decision — sell reserved capacity, not tokens.** Pricing per
token against DeepInfra, Together and Fireworks loses: they have scale,
better hardware pricing, and no reason to hold margin. Reserved slices on
annual contracts instead convert a utilisation problem into a sales
problem, match how universities, hospitals and non-profits budget, and
leave troughs fillable with latency-insensitive batch work — embedding
backfills, document processing, evaluation runs. Differentiation is
contractual data handling, no training on customer data, an inspectable
stack, community ownership, and sector compliance (BAA, FERPA) — none of
which a commodity API vendor will offer a 40-person non-profit.
**Operating cost, computed:** 8x MI300X is ~6kW of GPU plus host, call it
8-10kW a node. At $0.22/kWh with cooling overhead that is on the order of
**$20K/year in electricity per node** at full utilisation, against perhaps
$150-200K of capex amortised over six years. **Power is therefore roughly
60-80% of annualised capital cost** — not a rounding error, and the reason
the efficiency question mattered in the first place. Capex figures are
stale and flagged for verification; the ratio is the durable point.
**Alternatives rejected:** Ollama for production multi-tenant serving
(rejected — development tool). TGI (rejected — less momentum than vLLM).
SGLang was *not* rejected: its RadixAttention prefix caching is directly
relevant to RAG, where every request shares a long system prompt and
retrieved context, and it should be benchmarked against vLLM.
**Stage 1 shape:** One node, 8x MI300X. Sell reserved slices to a handful
of anchor customers before buying node two. A single-node commitment is
the right size for a business whose main unknown is demand, not
feasibility.

## D-20260824-15 — FPGAs serve models that do not change; capacity is build-to-order
**Date:** 2026-08-24
**Supersedes** the working framing of FPGAs as a cheap LLM-serving tier.
**Decision:** The FPGA tier is scoped to **models that do not change**.
There are exactly two reasons a model does not change, and both qualify:
1. **The model class is mature** — embedding models (BGE, E5, GTE),
   rerankers, ASR (Whisper), OCR and layout analysis, CV encoders. These
   have moved far less in three years than LLMs have in six months.
2. **The customer is frozen** — a model pinned by contract or by
   regulation, where a deployed model is validated and changing it
   triggers revalidation. Real in clinical and some financial settings.
Everything generative is served from the GPU tier.
**Consequent capital decision:** FPGA capacity becomes **build-to-order,
not speculative**. Racks are bought when a customer signs for a pinned
workload, or when embedding/ASR volume is *measured* and large enough to
amortise a port — never on a forecast. The FPGA line in the capacity model
should therefore be reformulated as **contingent capex rather than Stage 1
capex**. This is a materially better capital risk profile than betting
Stage 1 money on model-architecture trends now running against us.
**Why the cheap dense tier is NOT an FPGA target**, despite being dense:
- **Memory arithmetic (D).** Qwen3 32B at INT8 is ~32GB against a V80's
  32GB, leaving *zero* for KV cache. Workable configurations are INT4 and
  <=12B on a U55C, <=32B on a V80 — and INT4 quality on a general chat
  product is its own open question.
- **It is already nearly free on GPU.** A 27B dense model is a fraction of
  one MI300X. The engineering would be spent saving power on the cheapest
  thing in the fleet.
- **Concurrency is still unmeasured**, and interactive chat is the most
  concurrency-sensitive workload there is. Putting the unmeasured hardware
  on the most sensitive workload is backwards.
- **Two serving stacks** for one customer-visible product doubles routing,
  monitoring, failover and capacity planning for a small team.
**On the porting-cost argument — foundation explicitly marked soft.**
Fletcher challenged the churn reasoning directly: with modern tooling,
recompiling for a new release of a low-tier dense model should not be a
heavy lift. **The challenge was correct and is recorded as such.** Two
admissions:
- The "days to a week" and "weeks to months" figures used in this session
  and in `FPGAModelPortingCosts.md` are **estimates, not measurements**.
  That document says outright that the LLM porting number is undocumented.
  Repetition across turns hardened an estimate into an apparent fact.
- The churn argument **contradicted our own cost table**. Qwen 2.5 -> 3 ->
  3.5 at 32B share primitives (RoPE, RMSNorm, SwiGLU, GQA), which the
  table prices at days. Days, two or three times a year, is not obviously
  prohibitive. As stated, the argument did not hold.
**What the evidence does show (checked, not recalled):** the push-button
flow exists — Vitis AI quantises FP32->INT8, compiles to an `.xmodel`, and
the DPU runtime executes it, with no place-and-route and no timing
closure. **But AMD's Vitis AI documentation states transformer models are
not supported by the DPU IP**; the DPU targets CNNs (VGG, ResNet, YOLO,
SSD, MobileNet). The automated path exists for the wrong model class.
Corroborating: 2026 published FPGA LLM work still uses hand-written HLS
kernels with Vitis HLS tuning individual operators (matmul, softmax,
layernorm), and the 2026 MDPI paper ran on a **ZCU102 evaluation board**,
an embedded Zynq part, not a datacenter Alveo card. Fletcher's intuition
about tooling is right in general and right for vision; it is not yet
right for decoder LLMs. **Confidence caveat:** the "not supported" line
traces to Vitis AI 3.5 documentation and was not confirmed against the
current release. That is a named reversal trigger, not a settled fact.
**The argument that survives regardless of tooling (I, and the one to
lead with):** *"Porting is easy" and "FPGAs are 6x more energy efficient"
are claims about opposite ends of the same curve, and cannot both be
cited.* The 6x energy and 1.8x cost figures come from FlightLLM, a
**specialised** design. A world where a new model is a recompile is the
**overlay** world — a small general-purpose matrix engine synthesised onto
fabric — which gives back most of what made the FPGA worth buying. The
genuinely unpublished number is therefore not "what does porting cost" but
**"how much efficiency remains at the portable operating point."** This is
structural and does not depend on how good the tools get, which is why it
is a better foundation than the churn argument it replaces.
**Reversal triggers:**
- AMD ships transformer/decoder support in the DPU IP, or the Versal AI
  Engine path matures for decoder LLMs. Either collapses porting cost and
  reopens the cheap-dense-tier question.
- A supplier produces measured efficiency at a *portable* operating point
  — the number that does not currently exist.
- A named customer signs for a multi-year pinned model, which makes the
  economics work on that contract alone regardless of the general case.

## D-20260824-16 — The FPGA/LLM evidence base, established by research
**Date:** 2026-08-24
**Amends:** D-20260824-15, whose conclusion is unchanged and whose reasoning
is now replaced for the second time. D-15 rested first on a churn argument
Fletcher correctly demolished, then on the efficiency/portability trade.
Both were inference. What follows is evidence.
**Impeaches:** the FPGA efficiency inputs to `gpu_capacity_model_v76.xlsx`
— see §1. This is the most consequential item in this entry.
**Decision:** MOCSI treats "FPGAs are not a datacenter LLM serving
platform" as **established** and stops re-litigating it. The FPGA tier
stays scoped per D-20260824-15 and stays build-to-order.

### 1. The model's FPGA efficiency numbers do not survive contact with their source
`gpu_capacity_model_v76.xlsx` carries FlightLLM's **6x energy and 1.8x
cost** advantage, and a Versal VHK158 figure of **1.2x an A100**. Both were
run down to the primary artifact.
- **The VHK158 number involves no hardware.** FlightLLM's own
  reproducibility README states the flagship results "are based on the
  software run and **no hardware is involved**." It is a simulation. The
  session had already flagged it as simulated; the artifact confirms it.
- **Against a properly optimised GPU, FlightLLM is at parity.** Its six
  published cases are all batch 1. Speedups versus vLLM: 1.097, 1.099,
  1.072, 0.918, 0.984, 0.969 — **mean 1.02x, and slower in three of six.**
  The widely-quoted 2.1x is against unoptimised HuggingFace FP16.
- **The 6x energy figure is measured against a V100S — a 2018 GPU.**
**Consequence: the 67% FPGA ROI in the model is built on impeached
inputs and must be rebuilt or withdrawn.** This supersedes the softer
"does not transfer to a different workload" note in D-20260824-15; the
numbers do not hold for the LLM workload they were computed for either.

### 2. Prefill is 19-32x slower, and nobody foregrounds it
A finding no paper advertises. FlightLLM's artifact: 289.9ms vs 15.5ms at
128 tokens (18.7x), 1181.4ms vs 40.7ms at 512 tokens (29x). StreamTensor's
TTFT penalty against an A100 scales 3.97x -> 6.99x -> 14.49x -> **31.99x**
as input grows 32 -> 256 tokens. CD-LLM, the best system in the field,
**excludes prefill entirely**: "prefill operations are not considered."
At realistic 2k-8k prompts this is disqualifying for interactive serving.
**This also lands on our own fixed-function tier and must not be waved
past.** The session recorded that RAG is prefill-heavy, and embedding and
reranking are single-forward-pass, prefill-like workloads. These published
penalties come from designs *optimised for decode*, so they are not a
direct measurement of an embedding accelerator — but the burden of proof
has shifted, and D-20260824-15's Tier 1 workloads now need measurement
before any capex, not assumption.

### 3. The one credible datacenter result, and its cost arithmetic
**CD-LLM** (Tsinghua/Infinigence, TRETS 2026) is the only paper in the
corpus running a large model under real serving concurrency on real
silicon: **Llama-3.1-70B at 3.45-bit, batch 256**, one Alveo V80 plus eight
U250s, Verilog, on-board power sensors, against a *measured* 8xA100 node
running TensorRT-LLM. Accuracy loss <=1.22%. Genuinely good engineering,
and the only work that engages an operator's actual questions.
Its results, stated fairly:
- **2721.79 tok/s vs the A100 node's 3835.66 — 0.71x throughput**
- 1310W vs 2564W — **1.39x better energy efficiency**
- **Capital cost per unit throughput: 28.65 vs 28.20 tok/s per $1k —
  parity.**
The paper's claimed 3.70x TCO advantage rests on an in-house card priced
from **5,000-10,000 unit chip quotes** plus five years of energy. At retail
— V80 near $9,495 with a ten-week lead time, U250 roughly $5,300 used to
$9,100 new — **a small operator cannot access that pricing and the
advantage inverts.** That is the direct answer to MOCSI's question.
The authors also concede: "CD-LLM attains 59.90 TOPS on a Xilinx VU13P,
still less than one-twentieth of the peak performance of an A100." One
twentieth of an A100 is roughly one hundredth of an H100.

### 4. Correction: our MoE-is-FPGA-hostile analysis has a counterexample
Recorded against interest. The MoE/FPGA argument developed in this session
and in D-20260824-13 was reasoned from first principles — dynamic routing
defeats static scheduling, capacity demand exceeds card memory, batching
scatters weight reuse. **Hummingbird+ (ISFPGA 2026) runs Qwen3-30B-A3B, an
MoE model, at >18 tok/s decode on a Zynq XCZU2CG with 24GB and a sub-$150
volume BOM.** The mechanism cuts the other way from our reasoning: MoE's
*low arithmetic intensity per token* suits a bandwidth-rich, compute-poor
device.
Caveats that keep this from overturning the conclusion: one paywalled
paper, no preprint, no code, unverified beyond its abstract, an edge form
factor, and batch 1 — and at batch 1 few experts activate, whereas at batch
256 routing touches nearly all of them and the capacity problem returns in
full. Beyond it the gap is near-total: an arXiv query for MoE+FPGA returns
**only vision transformers**; CD-LLM discusses MoE prospectively and
demonstrates nothing.
**Net: the direction of D-20260824-13 stands, but "close to a new design
rather than a port" was stated with more confidence than the evidence
supported, and one counterexample now exists.**

### 5. The field is small, peaked, and thinly reviewed
- arXiv papers on running LLMs *on* FPGAs, hand-tagged by two independent
  agents with slightly different totals — **~14 (2024) -> 22-29 (2025) ->
  11-12 in the first eight months of 2026.** Take the direction, not the
  digits. Both agree on the direction, and the second is sharper about it:
  **on-FPGA output is down roughly 30-40% in 2026**, while every bit of
  growth in the FPGA-plus-LLM intersection is **LLM-for-EDA** — LLMs
  writing Verilog. That pivot is now institutionalised as **ICLAD** (2nd
  IEEE International Conference on LLM-Aided Design, Stanford, July 2026),
  sponsored by AMD, Intel, NVIDIA, Cadence, Synopsys, Siemens, Google, IBM
  and TSMC. **No comparable venue exists for LLMs-on-FPGAs.**
- **Zero** FPGA LLM inference papers at ISCA 2024/2025 or HPCA
  2024/2025/2026; exactly one at MICRO 2025. Verified against official
  accepted lists: **MICRO 2025 contains no FPGA papers at all; ISCA 2026
  contains exactly one FPGA paper in the entire program (XtraMAC, NUS);
  HPCA 2026 zero.** Of 41 taggable 2025 papers only ~20% reached a strong
  venue; the rest are arXiv-only, IEEE Access, or MDPI-class. Four or more
  surveys in a field this size is saturation.
- **Ma & Patterson, "Challenges and Research Directions for LLM Inference
  Hardware," IEEE Computer 2026 (arXiv 2601.05047), never mentions FPGAs.**
- **No independent replication of any result exists.** Every public repo is
  the original authors'. Papers cite each other's numbers as baselines
  without re-measuring; CD-LLM's "16.15x over FlightLLM" is
  simulation-versus-measurement extrapolated across eight cards "assuming
  ideal linear scaling."
- **No FPGA system has ever submitted to MLPerf Inference.** Every vendor
  claim — Positron, Achronix, ElastixAI — is self-reported and unaudited.
- **Integrity flag:** CXL-SpecKV (ISFPGA 2026, pp.56-66) is a peer-reviewed
  full paper at the field's top venue whose stated hardware **does not
  exist** — Agilex-7 with 64GB HBM at 1.6TB/s when the real part maxes at
  32GB/820GB/s — shipping a 93KB stub repo. **Do not cite it.** arXiv
  2512.24713 was withdrawn by its own authors. That a fabricated-spec paper
  cleared review is itself a datum about the reviewing pool.

### 6. Batch-1 is a premise, not a limitation — and capacity is dodged
Of ~30 verified papers, **one** does real serving concurrency. Authors
state batch 1 as a design premise: GLITCHES, "many latency-sensitive
scenarios favor batch size = 1"; SpecMamba, "we set the batch size to 1."
**No FPGA work anywhere implements continuous batching or paged
attention.** CD-LLM's own introduction indicts the field: existing work
"fails to meet the computational requirements of batched LLM decoding,
resulting in performance gaps of up to 7.96x."
Nobody solves memory capacity; everyone dodges it — shrink until it fits,
scale across cards, spill to flash, tier into NAND, or exclude it.
StreamTensor, a MICRO paper: "Model parameters are excluded in this study,
as they are too large to fit on-chip." **HFRWKV is the tell: 14.46x over a
GPU at 169M parameters, collapsing to 0.55x an RTX 3090 at 7B.** The
advantage evaporates exactly where the model stops fitting — which is the
capacity argument, demonstrated.

### 7. Commercial and vendor evidence
**One operator: Positron AI** — 8x Altera Agilex 7, 256GB in-package HBM2e,
customers Cloudflare and Parasail, $230M Series B at >$1B (2026-02-04) —
raised explicitly to fund the **Asimov ASIC** (tape-out late 2026). Their
site has scrubbed the word FPGA. Note their machine is **not the one in our
model**: 256GB of in-package HBM against our 16GB U55Cs and 32GB V80s.
**The strongest single signal: Infinigence AI, the FlightLLM spinout, sells
GPU/NPU middleware and no longer sells FPGA inference at all.** The authors
of our load-bearing efficiency number did not commercialise it.
**Microsoft Brainwave is over** — Azure NP-series (Alveo U250) retiring,
reservations ended 2026-04-02, deallocation after 2027-05-31, every
migration path a GPU. FPGAs survive there for networking only; AI went to
Maia. **HyperAccel** ships a real 8x U55C server running OPT-66B and is
taping out a Samsung 4nm ASIC; its measured advantage over 2xH100 is
**1.33x energy**, and its headline latency figures are simulated ASIC.
**The pattern is unambiguous: Microsoft -> Maia, Speedata -> Callisto,
Positron -> Asimov, HyperAccel -> ASIC. FPGA is a bridge to ASIC in this
market, not a destination.** The durable niches are financial low-latency
(Myrtle VOLLO, STAC-audited) and physics triggers (hls4ml at ~10us) —
small models where determinism beats throughput.
**No vendor markets FPGAs for LLM inference.** AMD's Advancing AI 2026
carried no FPGA inference positioning; all inference is Instinct. **The
Alveo V80 page — our card — sells "hardware-adaptable acceleration for
memory-bound compute" for genomics, molecular dynamics, analytics, network
security, sensor processing, computational storage and fintech.** That list
is close to D-20260824-15's workload reframing, reached independently.
Altera's CEO: "If GPU is the brain, the FPGAs are the nervous system."
Microchip's PolarFire sensor bridge is sold as the I/O front-end *feeding*
an NVIDIA Jetson. The 3.5x figure in circulation is **Positron's customer
testimonial inside an Altera release**, not a first-party vendor claim.
Achronix: demoed Llama 3.3 70B at SC25 with no tok/s, no latency, no named
GPU, and **zero press releases in 2026**. **ElastixAI** came out of stealth
2026-02-23 with $18M seed and vendor-agnostic FPGA inference software
claiming 50x TCO — **no named customers and no validation**; note only, do
not rely on.
**Two source conflicts to flag rather than silently resolve.** Agents
disagreed on Altera's listing plans — one reported Hussain preparing an
"eventual public listing," another that the IPO was cancelled. Unresolved;
check before citing. They also disagreed on Hummingbird+'s exact part
(XCZU2CG vs XCZU3EG). Neither conflict changes any conclusion here.
AMD's Embedded segment TTM revenue is roughly $3.66B against a mid-2023
peak near $5.72B — **about -36%**, recovering only slightly, with the AI
story entirely Instinct.

### 8. Ternary — the D-15 trigger fires and changes nothing
**Correction first.** This session stated that ternary requires
quantisation-aware training, that existing open-weight models cannot be
converted post hoc, and that this was "a far larger barrier than porting
cost." **That is false.** Post-training ternarisation is peer-reviewed and
works: **PT2-LLM** (ICLR 2026) and **TWLA** (June 2026), the latter
converting **LLaMA-2-70B and Qwen3-32B in ~82 minutes on one A6000**, 128
calibration samples, no retraining, public code.
The category is real at scale: **Ternary Bonsai 27B** (PrismML, Apache 2.0,
from Qwen3.6-27B, 1.71 bits/weight, 7.2GB) retains **94.6% of FP16** and
drew ~2.4M downloads in 30 days — well past our 7B threshold.
**And the FPGA case is still not rescued.** Demand is on **Apple silicon
and phones**, where the win is memory footprint, not multiplier
elimination: download mix 1.89M MLX against 545k GGUF, and **MLX has no
native ternary kernels**, so PrismML deploys via a 2-bit path and pays a
1.9x energy penalty. Almost nobody exercises the property the FPGA argument
needs. Also: **no native ternary support in vLLM or SGLang**; **no FPGA
vendor has announced ternary IP** — AMD, Altera, Achronix all zero; all
ternary FPGA work is academic on edge Zynq parts. Meanwhile **FP4 has the
whole NVIDIA stack behind it** (Blackwell native NVFP4/MXFP4, published FP4
pretraining) — the GPU-native answer to the same problem. Concentration
risk is acute: one startup, undisclosed method, no methods section, and
weights at group-128 that are **incompatible with upstream llama.cpp**,
which merged group-64.
**Revised trigger, replacing the one drafted for D-20260824-15.** "Does a
ternary model exist at >=7B" is the wrong question — it is yes, and it
changed nothing. The trigger is **native ternary kernels landing in vLLM or
SGLang, or an FPGA vendor shipping ternary IP.** Either would mean someone
intends to serve this in a rack. Neither has happened.

### 9. Resolved as a side effect — genomics confirmed
AWS F1 and F2 are current-generation and priced (live catalogue, not
marketing): f2.6xl at $1.98/hr, up to 8x Virtex UltraScale+ HBM, 16GB at
460GB/s. **AWS's named F2 workloads are genomics, networking, multimedia,
analytics and ASIC emulation — AI inference is not among them**, and the
flagship is Illumina DRAGEN. The precedent flagged for verification is real
and current on hardware rentable today. Genomics stands as the one
FPGA-suitable workload with a live commercial anchor, strengthening the
case for scoping Jackson Laboratory / MDI / UMaine.

### 10. Practical note for the used-hardware plan
Azure's NP retirement should release Alveo U250s to the secondary market
before May 2027. But **U250 is 64GB DDR4 with no HBM**, and both Positron's
and CD-LLM's economics depend on HBM. Cheap secondary Alveo boards do not
reproduce those results — cheap and useful are different cards here.

**Evidence quality.** Primary-source: FlightLLM's artifact README and test
matrix, CD-LLM's published tables, vendor product pages, Azure retirement
dates, AWS pricing catalogue, Hugging Face counts and licences, llama.cpp
merge status, ICLR 2026 acceptances. Approximate: conference paper counts
(FPL 2026 and MICRO 2026 lists are not public). **Vendor-supplied and
unaudited — do not repeat as established:** Positron's 3.08x perf/$ and
4.54x perf/W. Inferred, not stated: no formal Microsoft statement kills
Brainwave, though the NP retirement and documentation changes make it
strong. Hummingbird+ is known only from its abstract.

**What this does not settle.** Whether D-20260824-15's fixed-function tier
— embeddings, ASR, OCR, encoders — pays for itself. No research addressed
it because none exists, and §2's prefill finding now argues for measuring
rather than assuming. That is a demand-and-measurement question to answer
with customers and a rented card, not with papers.

## D-20260824-17 — What FPGAs are actually for, and the gate on any FPGA capex
**Date:** 2026-08-24
**Follows:** D-20260824-15 (FPGA tier scoped to models that do not change,
build-to-order) and D-20260824-16 (the evidence base). This entry answers
the remaining question — if not LLM serving, then what — and **demotes a
workload this session had previously ranked first.**
**Decision:** MOCSI carries FPGAs as **one named opportunity with one named
customer type — genomics — and not as a fleet tier.** No FPGA capex is
committed until a genomics conversation produces a multi-year commitment.
If that conversation fails, FPGAs leave the plan entirely.

### What FPGAs are actually sold for (D — vendor and deployment evidence)
The question was answered from vendor positioning and live deployments
rather than from reasoning, which is why this supersedes the more
speculative workload list developed earlier in the session.
- **AMD's Alveo V80 page** — the card in `gpu_capacity_model_v76.xlsx` —
  sells it as "hardware-adaptable acceleration for **memory-bound
  compute**": genomics, molecular dynamics, analytics, network security,
  sensor processing, computational storage, fintech.
- **AWS F2** names genomics, networking, multimedia, analytics and ASIC
  emulation. Flagship customer **Illumina DRAGEN**. AI inference is absent.
- **Microsoft kept FPGAs after killing Brainwave — for networking only.**
  Azure Boost SmartNICs on Agilex across 1M+ hosts, plausibly the largest
  FPGA deployment anywhere, and it moves packets.
- **Durable independent businesses:** Myrtle.ai VOLLO in financial
  low-latency (STAC-audited) and hls4ml running physics triggers in ATLAS
  and CMS at ~10us.
- **AMD's Embedded segment** (~$977M last quarter, >$18B of 2026 design
  wins) is driven by networking, comms, test and measurement, aerospace
  and defence.

### The unifying property — neither of which is throughput
Every FPGA win rests on one of two things:
1. **Hard real-time determinism.** Finance, physics triggers, industrial
   control, ADAS. The product is a guaranteed tail latency. A GPU cannot
   promise 10us at any price.
2. **Memory-bound irregular access at line rate.** Genomics alignment,
   packet processing, columnar scan, compression, computational storage.
   Pointer-chasing and streaming, not dense matrix multiply — precisely
   where a GPU's arithmetic units idle.
**Note what is absent from every vendor list: anything resembling general
AI inference. That absence is itself evidence**, and it is consistent with
D-20260824-16 from an entirely independent direction.

### Mapping onto MOCSI's customer base
| Workload | Evidence | Sellable by MOCSI |
|---|---|---|
| **Genomics** | AWS F2 flagship; AMD's first-listed V80 workload; Jackson Laboratory, MDI Bio Lab, UMaine locally | **Yes** |
| Network / line-rate | Largest FPGA deployment in the world | No — our infrastructure, not a product |
| Low-latency finance | Real, audited, durable | Wrong market |
| Physics triggers | Real, deployed | Tiny and highly specialised |
| Computational storage, compression | AMD markets it | Infrastructure, not revenue |
| Embeddings / ASR / OCR | **Absent from every vendor list** | **Unproven — demoted, see below** |
| FHE / privacy-preserving compute | Aligns with our positioning | Research-grade, no buyer |
MOCSI's customers — non-profits, universities, healthcare, PHAC members —
have essentially none of the determinism workloads and only genomics among
the memory-bound ones.

### Demotion recorded: embeddings, reranking, ASR and OCR
Earlier in this session these were ranked the **strongest** FPGA candidates
for MOCSI, on the reasoning that the models are mature, stable and pinnable
— which suits the D-20260824-15 criterion. That reasoning still holds on
its own terms, but two findings have since cut against it:
1. **The prefill penalty (D-20260824-16 §2).** These are all
   single-forward-pass workloads, and published FPGA prefill runs 19-32x
   slower than an A100 and worsens with sequence length. The published
   figures come from decode-optimised designs, so they are not a direct
   measurement of an embedding accelerator — but they shift the burden.
2. **Absence from vendor marketing.** Neither AMD nor AWS lists embedding,
   speech or OCR acceleration among FPGA workloads. If it were a good FPGA
   business, the companies selling FPGAs would say so.
**Status: unproven, not refuted.** It must be measured on a rented card
before it earns a line in any model or document.

### The gate — and the question it forces
If genomics is the only FPGA workload MOCSI can sell, the honest question
is whether MOCSI should be in the FPGA business at all. A second hardware
platform means different cards, a different toolchain (Vivado/Vitis),
different engineering skills, separate procurement and separate operations
— to serve one workload with perhaps one or two customers.
**And the competitive reality is that the Jackson Laboratory can rent an
AWS `f2.6xl` today at $1.98/hour with DRAGEN already running on it.** To
beat that, MOCSI must win on data residency, sustained-volume pricing, or
bundled service. It cannot win on the hardware, which is identical.
**This is a sales question, not a hardware question, and it is answerable:
go and ask them.** A multi-year commitment vindicates the build-to-order
framing of D-20260824-15. No commitment means FPGAs leave the plan and the
architecture gets simpler.
**Framing for funders, which follows:** MOCSI is **a GPU operation with a
possible genomics accelerator attached**, not a heterogeneous-compute
company. That is both more defensible and easier to explain.
**Alternatives rejected:** Retaining FPGAs as speculative Stage 1 fleet
capacity (rejected — no workload justifies it, and D-20260824-16 removed
the ROI basis). Dropping FPGAs immediately (rejected — genomics has a real
anchor, a live commercial precedent and local customers; the option is
worth keeping open at zero capex cost until the sales conversation
happens). Pursuing the embeddings/ASR tier on present evidence (rejected —
unproven, and measurable cheaply before committing anything).

## D-20260824-18 — Funder-facing FPGA summary, and the claim discipline applied to it
**Date:** 2026-08-24
**Decision:** Produce `FPGAExecutiveSummary.md` as a standalone,
externally-shareable statement of why FPGAs do not fit MOCSI's expected
workload, derived from D-20260824-13 through D-20260824-17.
**Reasoning:** The conclusion is now settled and is likely to be asked
about repeatedly — by Tom, whose model contains the FPGA line, and by
funders who will reasonably want to know why a differentiating hardware
story was dropped. Leaving the answer distributed across five decision
entries and a conversation makes it likely to be restated badly.
**Claim discipline applied — this is the substantive part.** This project
has three logged instances of a word doing more work than the facts
supported: sovereignty (D-20260821-06), the open-source stack claim
(D-20260824-11) and auditability (D-20260824-12). D-20260824-12 recorded
that recurrence as itself the finding. The summary was therefore written
under deliberate constraints:
- **Only primary sources.** Published reproducibility artifacts, authors'
  own results tables, vendor product documentation, live cloud pricing
  catalogues. Nothing from secondary blogs.
- **Vendor claims lacking independent audit are excluded entirely** — in
  particular Positron's 3.08x perf/$ and 4.54x perf/W, which
  D-20260824-16 flagged as unaudited. They would have strengthened the
  narrative and are left out because they cannot be stood behind.
- **Approximate figures are not given false precision.** Conference paper
  counts, which two agents counted differently, are omitted rather than
  quoted to a digit.
- **The counter-case is stated, not buried.** The document closes by
  affirming the original interest was sound, since at $0.22/kWh power is
  60-80% of annualised capital cost per node.
- **No claim that FPGAs are bad in general.** The scope is explicitly our
  workload, and genomics is presented as a live opportunity rather than a
  consolation.
**Alternatives rejected:** Presenting the conclusion as a straightforward
hardware-selection decision without disclosing that our own model's inputs
were impeached (rejected — Tom's model is the artifact most affected, and
concealing that from the person who built it would be both dishonest and
tactically foolish, since he will find it). Including the vendor benchmark
claims to strengthen the case (rejected — same failure pattern the three
prior entries record). Deferring the document until the capacity model is
rebuilt (rejected — the conclusion does not depend on the rebuild, and the
rebuild is a TODO of unknown duration).
**Note on standing:** this summary states a conclusion, not an approved
external communication. Circulation is Fletcher's call.

## D-20260824-19 — Retrieval terminology, and bringing OnePager.md into line
**Date:** 2026-08-24
**Decision, part one — terminology.** MOCSI describes its context layer by
**naming the retrieval substrates it uses** rather than by an umbrella
shorthand. The standing phrase in `OnePager.md`, "**hybrid RAG**," is
replaced with "**vector, lexical, and graph retrieval**."
**Reasoning:** In conventional usage *hybrid retrieval* means **dense plus
sparse** — vector similarity fused with BM25 lexical matching, typically by
reciprocal rank fusion. It does **not** conventionally include graph
retrieval. If we mean vector plus graph and write "hybrid RAG," a technical
reader will understand something different from what we do. **This is the
same failure pattern recorded three times already** — sovereignty
(D-20260821-06), the open-source stack claim (D-20260824-11), auditability
(D-20260824-12) — a shorthand doing more work than the facts support.
Naming the substrates is both more precise and more impressive than the
shorthand.
**Terminology reference, for consistency:**
- The precise academic umbrella covering all external retrievable stores is
  **non-parametric memory** (Lewis et al., 2020) — as against *parametric*
  knowledge held in model weights. Correct and citable, but jargon; not for
  external documents.
- Engineering usage: both a vector index and a knowledge graph are
  **retrieval substrates** or **retrieval backends** over a corpus. Not
  standardised, but immediately understood.
- Common usage: both are simply **RAG**, distinguished as **vector RAG** and
  **GraphRAG** (the latter after Microsoft's 2024 paper, now the standard
  name). No umbrella term is actually required.
- The full taxonomy is four substrates, not two: **dense/vector** (semantic
  similarity), **sparse/lexical** (BM25 — still superior on rare terms,
  proper nouns and identifiers), **graph** (traversal over entities and
  relations), and **structured** (SQL and exact predicates).
**Cost note carried forward:** graph retrieval is materially more expensive
to build than vector retrieval, requiring entity and relation extraction
across the corpus as an LLM-heavy preprocessing step. That is real compute
we would sell, and real cost we would carry. It bears on context-layer
margins and is not yet modelled.

**Decision, part two — `OnePager.md` updated to current state of play.**
Changes made, each traceable to a recorded decision:
- **Hardware section rewritten.** The "blended fleet of FPGA, AMD Instinct
  and used NVIDIA" is replaced by GPU-based on high-memory MI300X-class
  parts, with the MoE capacity rationale stated (D-20260824-13,
  D-20260824-14). FPGAs are stated as evaluated and not used for
  language-model serving, held open for genomics against a signed
  commitment (D-20260824-15, -16, -17). **Framing it as an evaluation we
  ran and a conclusion we reached is a credibility signal to a funder, not
  a retreat** — and it pre-empts the question being asked adversarially.
- **"Our implementation stack is open source, open weight, transparent, and
  auditable" removed.** It was blocked by D-20260824-11 pending the licence
  audit — MongoDB's SSPL is not OSI-approved — and remains blocked.
  Replaced with a claim we can stand behind, plus an explicit statement
  that the licence inventory will be **published rather than asserted**.
- **"Auditable" is now defined in the document itself**, in the narrow
  sense fixed by D-20260824-12: published weights, self-hosted, version
  pinned, precise disclosure of what ran — explicitly *not* training data
  or code. D-20260824-12 set a hard gate that no external document use the
  word unqualified; this satisfies it by qualifying it in place.
- **Target customers widened** to state Maine as home and first market
  while naming the PHAC membership as squarely in scope, carrying forward
  both honest qualifications from D-20260824-09: non-US organisations are
  less likely for data-residency reasons, and AI safety organisations
  largely need frontier models we cannot self-host.
- **Commercial model added** — reserved capacity on annual terms rather
  than per-token pricing (D-20260824-14), with the differentiation stated
  plainly as data handling, inspectability, ownership and compliance rather
  than undercutting commodity vendors on price.
- **Aggregator channel added** — community foundations, United Way, state
  nonprofit associations — from `RunningNotes.md`.
- **"Excess compute" line corrected** to Fletcher's exact formulation:
  public-interest organisations always having priority.
**Left unresolved and marked in the document:** the `{partially,fully}`
placeholder on community ownership is now an explicit **[TBD: partially or
fully]** marker. Degree of community ownership is a governance decision
that has not been made, and it is not mine to make. The marker is
deliberately conspicuous so the document cannot circulate with it.
**Alternatives rejected:** Silently choosing "fully" to make the document
read cleanly (rejected — it is a substantive governance claim nobody has
decided, and asserting it would be exactly the overclaiming pattern this
project keeps logging). Leaving the open-source line in with a footnote
(rejected — the claim is either supportable or it is not, and the audit is
not done). Keeping "hybrid RAG" because it is familiar to funders (rejected
— familiarity is not the test; a technical reader would be misled).

## D-20260825-01 — PHACContacts.md is tracked in git
**Date:** 2026-08-25
**Revises:** D-20260824-06, which gitignored `private/PHACContacts.md`.
That decision is reversed.
**Decision:** `private/PHACContacts.md` — 33 matched name-to-address pairs
with confidence tiers, 4 named individuals without addresses, and 123
addresses without names — is **tracked in git** and pushed to the private
GitHub repository.
**Fletcher's reasoning, in his own framing:**
1. **The addresses came off a large multi-recipient email list** that could
   have been, and probably was, forwarded onward to further recipients. The
   information is hardly private.
2. The repository is **private** (verified: `github.com/fkittredge/mocsi`,
   `isPrivate: true`).
3. **Membership of that repository is tightly controlled.**
4. Public **work** email addresses of people operating in the public sphere
   are not particularly sensitive.
**Why this answers the original objection rather than overriding it.**
D-20260824-06 turned on a single surviving point: git history is not
revocable, so gitignoring kept the choice reversible. Point 1 above answers
that directly rather than dodging it — **irreversibility only matters if
the content might ever need withdrawing**, and an address already
distributed across a widely-forwarded list is not in that category. The
harvesting question had already been settled in Fletcher's favour in
D-20260824-06 itself; permanence was the only thing left, and it is now
addressed.
**Recorded qualification.** A domain tally was run before committing: **12
of the addresses are `gmail.com`** — personal, not work. Point 4 therefore
does not cover the whole set. Points 1 through 3 do, and Fletcher was told
this before the commit. Noted so the record is accurate, not because it
changes the decision.
**Implementation.** `private/.gitignore` was rewritten from a bare `*` to
default-deny with explicit exceptions:
```
*
!.gitignore
!PHACContacts.md
```
Two reasons for this shape rather than a forced add. First, **the ignore
rule now travels with the repository** — under the previous self-ignoring
`*`, the `.gitignore` was itself untracked, so a clone would receive the
contacts file with no protection for anything else placed alongside it.
Second, anything else dropped into `private/` still stays out of git by
default, so this decision applies to one named file rather than becoming a
blanket policy. The file header carries a warning that adding an exception
makes a file permanent.
**Alternatives rejected:** `git add -f` leaving the bare `*` in place
(rejected — the protection would not survive a clone). Un-ignoring
`private/` entirely (rejected — turns a decision about one file into a
standing policy, and the next sensitive file dropped there would be
committed silently). Committing a redacted version keeping names and
confidence tiers but stripping addresses (rejected — Fletcher's reasoning
addresses the addresses specifically, and a redacted file would lose the
utility that motivated building it).
**Unchanged:** `email/` remains gitignored. This decision covers
`PHACContacts.md` only and does not reopen the email archive question.
**Operational note:** the identical file also exists untracked at
`~/mocsi/private/PHACContacts.md` in the main checkout. When this branch is
merged or checked out there, git may refuse with "untracked working tree
files would be overwritten." Contents are identical, so deleting the
untracked copy first resolves it.

## D-20260825-02 — Van Buren is the intended site; proceed until a stated threshold is crossed
**Date:** 2026-08-25
**Decision:** MOCSI proceeds toward **Van Buren as the intended Stage 1
site**, rather than evaluating candidate sites neutrally. The work now is
to establish the technical, timing and financial requirements for using
Van Buren, and to keep marching toward it until doing so is demonstrably
impractical. Diligence is organised in `VanBurenSiteDiligence.md`.
**Reasoning:** Fletcher's framing, recorded in his words: Matt wants Van
Buren for mission reasons, and the job is to march toward that goal until
it is impractical. This is a deliberate choice of *posture*, not a claim
that Van Buren is technically superior — on the evidence to date it is
probably technically inferior to 340 Cumberland, which is the only
candidate believed capable of Tier III. The posture is justified because
the mission case is the demand case: Matt's position, unrebutted, is that
the observed demand indicators are "largely predicated on the
community/organic promise," and a consumer-owned utility town is the only
option that makes that promise literally true. Adopting a preferred site
also converts an open-ended comparison into a bounded engineering
question, which is answerable; neutral multi-site evaluation has been open
since July and has produced no decision.
**Alternatives rejected:**
- *Neutral evaluation of 340 Cumberland, Brunswick Landing and Van Buren in
  parallel.* Rejected as the status quo that has not converged, and as
  three times the diligence cost for a decision that is ultimately going to
  be made on mission grounds anyway.
- *Default to 340 Cumberland on SLA grounds and treat Van Buren as
  aspirational.* Rejected because it forecloses the differentiation the
  demand rests on, and because Kerem's caution — that a Portland colocation
  should be a short, time-defined stay if our values are to match our deeds
  — indicates the team does not regard it as a resting place either.
**Dissent:** Two qualifications recorded, neither an objection to the
posture itself.
1. **"Impractical" was undefined, and an undefined threshold is a
   sunk-cost trap** — each further expense looks justified against the
   expense already committed. Proposed written kill criteria in
   `VanBurenSiteDiligence.md` §K (power advantage not real; capital above a
   pre-set ceiling; no diverse fiber path; mapped flood zone; critical path
   past H1 2027 by more than a quarter; host dependency fails). These are
   proposed, not adopted, and need Fletcher's sign-off to have force.
2. **This sharpens the unresolved conflict with D-20260824-08**, which held
   that "local" does no selling work for the wider PHAC audience and that
   Maine siting should be an operational fact rather than a headline claim.
   Committing to Van Buren makes siting maximally load-bearing. The
   conflict is not resolved by this decision; it is now more visible. Note
   that free cooling in Aroostook is a Van Buren advantage that survives
   D-20260824-08 on its own terms, being efficiency measurable at the
   meter rather than a geographic appeal — and it has never been costed.
**Bears on:** Q-20260825-01. The charter-amendment option recorded there is
available only at a consumer-owned utility town, so site and ownership
structure are coupled. §J.41 nevertheless recommends keeping the two
schedules separable, since a charter amendment runs on the Legislature's
clock and should not gate the hosting decision.

## D-20260825-03 — Van Buren power: what the published record says, and the claim discipline applied to it
**Date:** 2026-08-25
**Decision:** The Van Buren power findings from *The County* (2024-11-18) are
folded into `VanBurenSiteDiligence.md`, with three specific calls made rather
than left implicit:
1. **The 12.5¢/22¢ headline spread is barred from external use.** Only the
   commercial/industrial tariff compared against CMP's delivered rate at 340
   Cumberland may be cited.
2. **A new kill criterion, "scale mismatch," is added to §K** — the power
   saving must repay the capital premium within the term actually committed
   to. Recorded finding: Van Buren is a **Stage 2 argument being applied to a
   Stage 1 decision**.
3. **The NB Power cross-border supply dependency is recorded as a live risk**
   in A.3 and §K rather than treated as a detail of the hydro story.
**Reasoning:** On (1), 22¢ is almost certainly a residential or blended
average and Maine commercial rates run below residential, so the 43% spread
overstates what MOCSI would actually save. Using it externally would be the
fifth instance of the pattern recorded at D-20260821-06, D-20260824-11,
D-20260824-12 and D-20260824-19 — a number doing more work than the facts
support. The discipline is worth more than the persuasive number.
On (2), the arithmetic is the point. At a Stage 1 two-rack load the delta is
worth roughly $23k/yr against a $100–200k capital premium — four to nine years
to repay, longer than any colocation term proposed. At the Stage 2
half-megawatt it is roughly $416k/yr. The power argument does not carry Stage
1 on its own economics. This does not defeat D-20260825-02, whose case is
mission and demand rather than power, but it changes what the Stage 1 spend
must be *justified as*: buying the Stage 2 option, stated honestly, not a
saving that pays for itself.
On (3), utility manager Bill Schofield states on the record that power is
purchased from NB Power in New Brunswick and wheeled over Versant lines. The
hydro is genuine but it is a wholesale purchase from a Canadian crown
corporation, so the rate depends on an agreement whose term is unknown, and it
carries trade-policy exposure on the dominant operating cost line.
**Alternatives rejected:**
- *Record the 12.5¢ figure without the discount.* Rejected — it is the more
  persuasive number and that is precisely why it is dangerous. Funders and
  journalists will check it.
- *Treat the NB Power detail as immaterial because electricity is not data.*
  Rejected. Correct that it is not a CLOUD Act problem, but "community-owned
  hydro" invites a follow-up question with a Canadian answer, and it is better
  said by us first.
- *Add the scale finding as prose only, not as a kill criterion.* Rejected —
  §K is the section with force, and on current numbers this is the criterion
  most likely to fire.
**Dissent:** The §23k/416k figures are **illustrative, not derived**. A.4 is
unresolved, so the load assumption (~28kW at Stage 1) is mine and not a
requirement anyone has established, and the delta must be recomputed against
the real tariff. The finding — that the Stage 1 and Stage 2 cases differ by an
order of magnitude — is robust to reasonable changes in those assumptions; the
specific numbers are not, and must not be quoted as if they were.
**Also recorded, cutting the other way:** the town markets this rate to
high-load businesses at Sen. Angus King's suggestion, and Luke Dyer is
personally invested in landing such a tenant. That materially improves both
the negotiating position and the political feasibility of the
charter-amendment structure in Q-20260825-01.
**Open conflict surfaced, not resolved:** Schofield says the utility "began in
1902"; Q-20260825-01 and PR #2 cite a legislative act of **1917**. Probably
operations versus incorporation, but 1917 is already written into tracked
files and must be checked against the statute.
**Bears on:** D-20260825-02, Q-20260825-01.

## D-20260902-01 — ElevatorPitch.md is tracked, with the claim discipline applied to it
**Date:** 2026-09-02
**Decision:** Track `ElevatorPitch.md` in git with Fletcher's text preserved
verbatim, and append a `Claim status` section that records, item by item,
which assertions the decision log supports and which run ahead of it. The
file is marked **not circulatable in its current form**, on the same grounds
as `OnePager.md`.
**Reasoning:** The pitch is the shortest and therefore the most quotable
artifact the project has; it is the one most likely to be forwarded intact.
Ten of its claims were checked against the log and four conflict with
standing decisions, three have no support anywhere in the record, and one
contradicts `README.md` on the entity's own name. Reviewing it and saying
nothing in a tracked file would leave the next reader — or the next context
window — to rediscover the same conflicts. Preserving the text verbatim and
appending the audit keeps Fletcher's voice intact while making the gap
between claim and record inspectable, which is the same discipline
D-20260824-18 applied to the funder-facing FPGA summary and D-20260824-19
applied to `OnePager.md`.
**Alternatives rejected:**
- *Edit the pitch into line with the decision log.* Rejected: three of the
  conflicts (target market, staffing model, custom application development)
  are strategy questions Fletcher may be deliberately changing his mind
  about. Silently rewriting them would convert his new position into my
  reading of an old decision, and the log would show no trace of either.
- *Leave it untracked in the main checkout alongside `Overview.md` and
  `Products.md`.* Rejected: those are stale leftovers, this is current
  thinking and it names Van Buren, which is a live and consequential claim.
- *Record only the four hard conflicts and drop the softer observations.*
  Rejected: the two undecided product lines (colocation, custom app
  development) are the largest unlogged commitment in the document, and they
  are exactly what the otherwise-puzzling staffing bullet appears to serve.
**Dissent:** Item 9 — present tense on a pre-revenue entity — is arguably
over-applied. Elevator pitches conventionally describe the intended business
in the present, and every reader knows it. It is recorded anyway because the
document does not distinguish *anywhere* between what is built and what is
planned, and because MOCSI's entire positioning rests on being the operator
that does not overclaim. Also: I have now recorded the Maine-versus-PHAC
tension three times without it moving. Opening Q-20260902-01 is a better
outcome than a fourth dissent, but it is not a resolution, and the honest
statement is that the pitch and D-20260824-08 currently describe two
different companies.
**Opens:** Q-20260902-01

## D-20260902-02 — Correction: an elevator pitch is not a funder-facing document
**Date:** 2026-09-02
**Decision:** Replace the `Claim status` audit appended to
`ElevatorPitch.md` under D-20260902-01 with a shorter set of notes written
for what the artifact actually is: a spoken pitch. Drop the "not
circulatable in its current form" designation entirely, drop the three
findings that were artifacts of the wrong genre, and add the two notes that
matter for a pitch and were missing — that it is roughly four times too long
to be delivered, and that its lead is buried.
**Reasoning:** Fletcher asked whether I know what an elevator pitch is. I
had reviewed a thirty-second spoken pitch under the claim discipline built
for `OnePager.md` and the FPGA summary, which are written documents that
circulate unattended. Three of the ten findings only make sense under that
mistake: that the present tense overclaims for a pre-revenue entity (the
aspirational present is the genre's convention and every listener knows it),
that community ownership needs `OnePager.md`'s "[TBD: partially or fully]"
qualifier (unsayable aloud), and that Van Buren should carry the
conditionality of D-20260825-02's kill criteria (nobody pitches an intended
site pending thresholds). "Not circulatable in its current form" is the
clearest tell: the artifact exists to be delivered.

The substantive findings survive the correction and are unchanged — the
target-market conflict with D-20260824-08, the two product lines not among
`OnePager.md`'s four layers, the unsupported paper-mill claim, and the
name discrepancy with `README.md`. They survive because they are wrong in
any genre: a pitch that names the wrong buyer, or sells a line of business
nobody has agreed to enter, is a bad pitch and not merely an unhedged one.
**Alternatives rejected:**
- *Leave D-20260902-01's section and add a note about length.* Rejected: the
  section's framing was the error, not its omissions. Appending to it would
  leave "not circulatable" standing in a tracked file.
- *Delete the notes entirely and track the pitch bare.* Rejected: the
  target-market conflict is real and consequential, and an untracked
  conflict is how it gets rediscovered a fourth time.
**Dissent:** The correction should not swing too far. The paper-mill line
and the two undecided product lines are still claims made to strangers by a
named operator whose entire positioning is not overclaiming, and the fact
that they are spoken rather than written does not make them cheaper if they
turn out to be false. What changed is the standard of hedging, not the
standard of accuracy.
**Revises:** D-20260902-01

## D-20260902-03 — A drafted elevator pitch, and what it leaves out
**Date:** 2026-09-02
**Decision:** Draft a ~40-second pitch and a 15-second variant into
`ElevatorPitch.md`, leading with community co-ownership of the data center,
naming the buyer second, and placing Van Buren last as proof rather than as
thesis. Both follow D-20260824-08 on the customer question — Maine
institutions and PHAC members, equal standing — and both name only the
open-weight hosting and inspectability claims, not colocation or custom
application development.
**Reasoning:** The co-ownership of the host site is the only claim in the
project that no competitor can make and no listener has heard before, so it
earns the opening. The buyer has to appear in the second sentence or the
pitch does not produce a second conversation. "Which model answered, where
your data sat, who sets the price" is the four-property test compressed into
something sayable, and it does the work that "auditable" and "certified
local" do in writing without requiring the definitions those terms carry in
`OnePager.md`. Van Buren goes last because a named town that wants us is
evidence for the co-ownership claim, and a pitch that opens with siting
invites the Maine-does-no-selling-work objection recorded in D-20260824-08
consequence 4.
**Alternatives rejected:**
- *Open with the stack or the hardware thesis.* Rejected: the MoE/memory
  argument is the best-reasoned thing in the project and is nearly worthless
  in an elevator — it answers a question nobody has asked yet.
- *Lead with "certified local."* Rejected: the term requires the careful
  narrowing `OnePager.md` gives it, and unexplained it sounds like the
  sovereignty claim D-20260824-19 and the Positioning section explicitly
  refuse to make.
- *Include colocation and custom app development.* Rejected: D-20260902-02
  leaves both undecided, and a pitch is a bad place to commit to a line of
  business by accident.
- *Write the Maine-first version.* Rejected: D-20260824-08 is the decision of
  record until revised. The variant is noted in the file as a one-clause
  swap, conditional on that revision.
- *Spell out the entity name.* Rejected: `README.md` and Fletcher's own text
  disagree on Service versus Services. "MOCSI" bare is used until that closes.
**Dissent:** The pitch asserts the host community "partly owns and helps
govern" the data center while Q-20260825-01 — which entity holds which
assets, funded how — is open. D-20260902-02 established that a spoken pitch
cannot carry `OnePager.md`'s bracketed qualifier, so the choice is to say it
plainly or not say it at all, and not saying it removes the only genuinely
distinguishing claim available. It is said plainly here, but it is the
sentence most likely to require retraction, and the follow-up question has no
good answer yet.

## D-20260902-04 — Three pitch lengths, with Fletcher's original as the long one
**Date:** 2026-09-02
**Decision:** Restructure `ElevatorPitch.md` as a ladder of three lengths —
fifteen seconds, forty seconds, and Fletcher's original ten bullets labelled
as the three-minute version and preserved verbatim. Drop the "runs four times
too long" note recorded under D-20260902-02.
**Reasoning:** Fletcher's call, and it corrects a framing error of mine. I
had measured the ten bullets against the thirty-second format and called them
oversized; they are not an oversized short pitch, they are a different rung.
The three lengths serve genuinely different encounters — the passing
introduction, the elevator proper, and the sit-down where someone has already
said yes to hearing more — and the long version is the source the short ones
are cut from, so keeping all three in one file is what stops them drifting
apart. Ordering runs short to long so the file opens with what is needed most
often under pressure.
**Alternatives rejected:**
- *Keep the ten bullets as a positioning brief in a separate file.* Rejected:
  splitting them guarantees the short versions get edited and the long one
  does not, which is exactly how three pitches become three different stories.
- *Keep the "four times too long" note with a caveat.* Rejected: the note was
  wrong about what the artifact was, not merely unhelpfully phrased, and the
  correction belongs in the log rather than as a hedge in the file.
**Dissent:** The three versions now make materially different claims and
nothing enforces consistency between them. The three-minute version still
carries the Maine-first customer framing, the two undecided product lines,
and the paper-mill claim; the shorter two do not. Anyone reading only the
file will not notice, because the notes section is below all three. This is
tolerable while the notes are read, and becomes a real hazard the moment the
sections are copied out separately.
**Revises:** D-20260902-02 (the length finding only; the rest stands)

## D-20260825-04 — Captured source articles live in `sources/`, tracked
**Date:** 2026-08-25
**Decision:** Third-party articles captured as background for MOCSI are stored
in `sources/` in this repository and committed to git. First entry:
`sources/2024-11-18-van-buren-cheap-power-thecounty.md`, full text of a
2024-11-18 County piece on Van Buren Light & Power's 12.5c/kWh rate.
**Reasoning:** The article is published journalism, not correspondence, so the
reasoning that keeps `email/` out of git does not apply to it — there is no
third party whose private message is being committed. Source material that an
argument rests on should travel with the repository: a link alone rots, and a
file outside the repo is invisible to anyone who clones it. Named by
publication date rather than capture date, because for source material the
question asked later is when it was written, not when it was read.
**Alternatives rejected:**
- `email/` — gitignored and reserved for correspondence. Filing an article
  there would both hide it from clones and blur what that directory means.
- The wiki capture pipeline (`~/WikiArchive/` plus the iCloud inbox) — where
  it was originally filed, and where it was routed for the IDE project's
  wiki. Wrong project. It also leaves MOCSI's source material outside MOCSI,
  reachable only from a machine with that wiki set up.
- Repository root — already crowded with roughly thirty files; a captured
  article is a distinct kind of artifact and benefits from its own directory.
**Dissent:** None on placement. One qualification on the article's use: its
headline number is a retail rate, and the utility manager attributes it
explicitly to aging plant and deferred capital ("older equipment... older
poles and lines"). At 12.5c/kWh it is cheap for Maine but not competitive
with the 5-8c industrial rates that decide data-centre siting elsewhere, and
the utility serves about 1,380 customers with five employees over imported
NB Power supply. The binding constraint on any large load there is
interconnect and substation capacity, not the retail rate. Recorded so the
number is not later cited without that context.

## D-20260828-01 — Adopt a generated CurrentState.md alongside the append-only log
**Date:** 2026-08-28
**Decision:** Add `CurrentState.md` as a sixth tracked file: a generated view of `DecisionLog.md` with every revision applied, organised by area of the project rather than by date, each line citing the decision IDs it derives from. It is regenerated from the full log and never hand-edited. The pre-commit hook gains a second rule: any commit staging `DecisionLog.md` must also stage `CurrentState.md`. Backfilled 2026-08-28 from all 30 existing entries.
**Reasoning:** The append-only log is correct by construction but is a poor lookup structure. With 30 entries and three revisions, answering "what is our current position on X" means reading the whole log and applying each `Revises:` in sequence — a reconstruction, and reconstructions fail by remembering a superseded decision as current. The journal and the view want opposite organising principles: time for the log, subject matter for the view. The view also surfaces what chronology buries — the blocked open-source claim (D-20260824-11), the provisional definition of auditable (D-20260824-12), and the genomics gate on FPGA capex (D-20260824-17) are gates and expiries, not settled facts, and they are easy to lose in a 1,400-line file.
**Alternatives rejected:** (a) Make the log mutable so entries can be edited in place as things change — this destroys the property that makes the log trustworthy, and is the exact failure the append-only rule exists to prevent. (b) Rely on search over the log instead of a materialized view — search finds entries, but not the later ones that silently supersede them, which is precisely how a superseded decision gets reported as current. (c) Regenerate only on demand — a view that is sometimes stale must be verified every time it is read, which is no better than not having one. Hence hook enforcement.
**Note:** The same change was made to the canonical skill, now at `~/.claude/skills/tracking-decisions-and-tasks/` (renamed since D-20260821-01 recorded it as `tracking-decisions/`), so it scaffolds into future projects — the same approach taken with `TODO.md` in D-20260823-01. `RunningNotes.md`, a MOCSI addition under D-20260824-01, was promoted into that skill at the same time, including its deliberate exemption from hook exemption.

## D-20260828-02 — Correct the Revises citation in D-20260825-01
**Date:** 2026-08-28
**Decision:** D-20260825-01's `Revises:` field cites D-20260824-06. The entry it actually revises is **D-20260824-07**. D-20260825-01 stands unedited; this entry carries the correction, and `CurrentState.md` records the revision against D-07.
**Reasoning:** D-20260825-01 describes what it revises as "which gitignored `private/PHACContacts.md`." That is D-20260824-07. D-20260824-06 is `PHACDirectory.md` — organizations only, tracked from the outset, never gitignored, and entirely unaffected by the reversal. Left uncorrected, a reader following the citation lands on an entry that has nothing to do with the change, and could reasonably conclude that `PHACDirectory.md`'s tracking status was reversed. It was not.
**Alternatives rejected:** Editing the `Revises:` field in place. Prohibited by the append-only rule regardless of how mechanical the fix appears — the rule has no exception for corrections that seem too small to matter, because the entire value of the log is that nothing in it was altered after the fact.
**Revises:** D-20260825-01, citation only. Its decision — that `private/PHACContacts.md` is tracked in git and pushed to the private repository — stands entirely.

## D-20260902-05 — Community ownership of the data center is "partially", not "[TBD]"
**Date:** 2026-09-02
**Decision:** `OnePager.md` states that the data center is **partially owned
and controlled by the local community**. The `**[TBD: partially or fully]**`
marker is removed. Recorded retroactively: Fletcher made this edit on
2026-08-26 and it sat uncommitted until 2026-09-02.
**Reasoning:** Not stated at the time of the edit, and not invented here. What
is observable is that the marker offered exactly two options and one was
chosen — the weaker one. The choice is consistent with everything else in the
record: Q-20260825-01 is still open on which entity holds which assets, and
"partially" is the claim that survives every structure still under
consideration there, including the charter-amendment option, where a utility
district holding equity would be a part owner rather than the owner. "Fully"
would have foreclosed that question in the pitch before the question was
answered.
**Alternatives rejected:** "Fully owned and controlled by the local
community" — the other option the marker offered. Rejected by the edit
itself; no reasoning recorded. Also rejected implicitly: leaving the marker
in place, which had been blocking circulation of `OnePager.md` since
D-20260824-19.
**Consequences:**
1. `OnePager.md` loses its conspicuous blocker. It is not thereby cleared for
   circulation — the open-source licence claim is still blocked under
   D-20260824-11 — but the ownership line no longer stops it.
2. `ElevatorPitch.md`'s notes, written 2026-09-02 under D-20260902-01, cite
   the `[TBD]` as still present and fault the pitch for omitting a qualifier
   that no longer exists. That note is corrected in the same commit as this
   entry.
3. The pitch drafted under D-20260902-03 says the community "partly owns and
   helps govern" the data center. That now agrees with `OnePager.md` — by
   coincidence rather than coordination, since the OnePager edit was
   uncommitted and invisible when the pitch was written.
**Dissent:** This resolves the *wording* while leaving the *substance* open.
Q-20260825-01 asks which entity holds which assets and funded how;
"partially" is now asserted in a circulating document without that question
being answered. The honest position is that we have chosen the claim we are
confident we can defend, not that we know what the ownership structure is.
**Does not answer:** Q-20260825-01.

## D-20260902-06 — The Hardware and Channel sections are cut from OnePager.md
**Date:** 2026-09-02
**Decision:** `OnePager.md`'s **Hardware** paragraphs (the MI300X-class
platform, the MoE/memory-capacity argument, and the FPGA rejection with the
genomics carve-out) and its **Channel** paragraph (B2B2G vendor sales, direct
institutional sales, aggregator reach through community foundations, United
Way, state nonprofit associations) are removed. About 20 lines. Recorded
retroactively: Fletcher's edit of 2026-08-26, uncommitted until 2026-09-02.
**Reasoning:** Not stated at the time, and not reconstructed here. Recorded
because the deletion is substantive and would otherwise exist only as a diff
inside a commit whose message does not mention it.
**Alternatives rejected:** None recorded.
**What is and is not affected.** The *decisions* are untouched and remain in
force: D-20260821-03 and D-20260824-14 on the GPU platform, D-20260824-13 on
MoE and the dense band, D-20260824-15 through D-20260824-17 on the FPGA tier
and the genomics gate. This entry changes only what `OnePager.md` says, not
what MOCSI has decided. `FPGAExecutiveSummary.md` (D-20260824-18) remains the
externally shareable statement of the FPGA position.
**Dissent:** Two objections, both recorded and neither blocking.
1. The MoE/memory argument was the strongest piece of technical reasoning in
   the document and the one that most clearly demonstrated the operator knows
   why it buys what it buys. For a funder-facing one-pager that is not
   filler. If the cut was for length, this is the paragraph I would have
   fought hardest to keep.
2. Removing Channel leaves `OnePager.md` with no statement of *how* MOCSI
   reaches a buyer. Combined with the target-market conflict already open as
   Q-20260902-01, the document now says less about go-to-market than it did,
   at a moment when go-to-market is the thing least settled.
**Follow-up required:** Fletcher to supply the reasoning for both cuts, or
confirm they were made for length alone. Tracked in `TODO.md`.

## D-20260902-07 — `.claude/` is gitignored
**Date:** 2026-09-02
**Decision:** Add `.claude/` to the root `.gitignore`.
**Reasoning:** `.claude/worktrees/` lives inside it, so every git worktree of
this repository is nested under an untracked-but-not-ignored path. A `git add
-A` in the main checkout would attempt to stage an entire second working tree
plus its session state. This nearly happened twice on 2026-09-02, and both
times was avoided only by writing explicit paths into every staging command —
a mitigation that depends on whoever types the next command remembering.
**Alternatives rejected:** Continue relying on explicit paths (rejected — it
is a discipline, not a control, and it failed to be obvious to either party
until it was pointed out). Ignore only `.claude/worktrees/` (rejected — the
rest of the directory is session state that is equally not project content,
and a narrower rule invites the same question again for each new subdirectory).
**Dissent:** None.

## D-20260902-08 — Van Buren becomes a two-phase plan: pilot in the Connectivity Center, expansion into the Innovation Hub
**Date:** 2026-09-02
**Decision:** The Van Buren engagement is planned in two phases rather than as
one siting decision.
- **Phase 1 — pilot in the town's existing Connectivity Center**, the building
  where Pioneer Broadband already keeps equipment. Three-phase power present.
  **This is the assumption on which the plan and the financials are built.**
- **Phase 2 — an expansion site scoped into the Community Innovation Hub**,
  target deploy Q4 2027.
- **October 2026 — site visit**, alongside the Center on Rural Innovation's
  own site assessment.
**Reasoning:** Fletcher's framing following a conversation with town manager
Luke Dyer. Phasing does real work that a single siting decision cannot. It
separates a small, cheap, reversible commitment in an existing building from a
large one that depends on capital nobody has yet received, which directly
addresses the sunk-cost objection recorded as dissent in D-20260825-02. It
also resolves the finding in D-20260825-03 that Van Buren is a Stage 2
argument applied to a Stage 1 decision: under phasing, the Stage 1 spend is
explicitly and honestly the purchase of a Stage 2 option, and the pilot does
not have to carry an economic case it cannot carry. And it converts an
open-ended siting question into two bounded ones with different deadlines.
**New facts on which this rests** — Fletcher's report of the Dyer
conversation, not independently verified:
- The town is partnering with the **Center on Rural Innovation** on "community
  innovation hubs," a three-town partnership with **Fort Kent** and **Fort
  Fairfield**.
- The Innovation Hub is to be built in 2027, awaiting **$2.2M** expected in the
  next 6–9 months, designed with the **Drexel University Design Lab**.
- Fiber is **Pioneer Broadband**, a family-held rural operator out of Houlton.
- **The town would consider discounts — rent, electricity — in exchange for
  ownership or governance rights.**
- The town library is a candidate **Public AI Library** pilot, possibly with
  the state library network.
- Municipal electric, one of five in Maine; the town's characterisation is
  ~50% of neighbours' prices, mostly green.
**Alternatives rejected:**
- *Single-phase: wait for the Innovation Hub and deploy once in Q4 2027.*
  Rejected — it forfeits a year of operating experience and customer
  evidence, and stakes everything on $2.2M that has not been released.
- *Single-phase: build only in the Connectivity Center and treat the hub as
  unrelated.* Rejected — the design window for getting MOCSI's power, cooling,
  floor-loading and security requirements into the Drexel drawings is open
  now and will close. After it closes, Phase 2 is a retrofit.
- *Treat the discount-for-governance offer as a commercial term to negotiate
  later.* Rejected — it is the most consequential item in the conversation and
  bears directly on Q-20260825-01. It is recorded as an open question rather
  than banked.
**Dissent:** Four, none blocking.
1. **The "~50% of neighbours" figure is the barred claim in rounder form.**
   D-20260825-03 barred the 12.5¢/22¢ spread from external use because 22¢ is
   a residential or blended average. "Half" is the same comparison restated
   and is subject to the same discipline. The honest comparator remains Van
   Buren's commercial/industrial tariff against CMP's delivered rate at 340
   Cumberland.
2. **"Mostly green" needs the same care.** The power is a wholesale purchase
   from NB Power, predominantly hydro. Accurate, but purchased and Canadian
   rather than owned Maine generation.
3. **Phase 2 makes MOCSI a tenant in someone else's capital project**, on
   someone else's schedule, dependent on money that has not arrived. Phasing
   reduces MOCSI's exposure; it does not reduce that dependency.
4. **Fort Kent and Fort Fairfield are now implicitly alternative sites.**
   Adopting Van Buren before knowing whether the three towns are competing or
   complementary re-opens, in a smaller way, the neutral-evaluation question
   D-20260825-02 deliberately closed.
**Revises:** D-20260825-02, as to plan shape only. Van Buren remains the
intended site and the march-until-impractical posture is unchanged.
**Bears on:** Q-20260825-01, Q-20260902-02.

## D-20260902-09 — The site evaluation question sets are tracked
**Date:** 2026-09-02
**Decision:** `VanBurenSiteEvaluation.md` holds two lists: Fletcher's internal
evaluation checklist, and the structured question set for Luke Dyer. The Dyer
list is ordered so the cheapest disqualifiers come first and carries a
six-question "if I only get 20 minutes" core. It is deliberately
routing-oriented — it asks Dyer to name the right people rather than to answer
as an engineer.
**Reasoning:** Sending Dyer a structured question set has been an assigned,
undone action item since the 2026-08-20 meeting, and an unstructured ask on
2026-08-17 covering redundant power, cooling, fiber, flood maps and access
control went unanswered. A list that asks a town manager engineering questions
is both less likely to get a reply and a misuse of the one person who can open
every other door. Splitting the questions by who can actually answer them is
the substance of the work, not presentation.
**Alternatives rejected:**
- *Extend `VanBurenSiteDiligence.md` §A–K in place.* Rejected — that file is
  organised by domain for analysis; these lists are organised by audience and
  by cost-to-answer, and one of them is an outbound artifact. Cross-referenced
  instead: every item is tagged as covered by a §-section or as new.
- *One combined list.* Rejected — it is precisely the mistake that produced
  the unanswered 2026-08-17 ask.
**Dissent:** The lists are long, and length is a real risk for the outbound
one. The 20-minute core exists to mitigate that, but if Dyer receives all
fifty questions at once the likely outcome is the same silence as last time.
Recommend sending Section 0 alone first. Separately: several items are
inferences rather than citations — the MPUC posture of consumer-owned
utilities, federal strings on the renovation, Canadian fiber transit, and the
magnitude of the GPU personal-property tax exposure — and each is flagged as
such in the file rather than presented as established.
**Notable findings the lists surface, none previously in the record:** personal
property tax on GPUs at the Van Buren mill rate, which could invert the cost
case on its own; whether fiber to Van Buren transits Canada, which would hit
the disclosed-jurisdiction positioning in a way the electricity question does
not; grant covenants that could forbid the tenancy or the equity structure;
insurability as a single test that prices every optimistic assumption at once;
the absence of any lifecycle, restoration, decommissioning or migration-off
analysis; and that Houlton is both cheaper per kWh and ~100 miles closer to
Portland, which makes the honest residual case for Van Buren the hub, the
free year, the CORI partnership and Luke Dyer rather than the power price.
**Opens:** Q-20260902-02.

## D-20260903-01 — OnePager.md revised on Matt Victor's review notes
**Date:** 2026-09-03
**Decision:** Revise `OnePager.md` on the four notes Matt Victor sent
2026-08-27 (thread "Re: Internal documents for tomorrow's meeting", sent ahead
of the Open Society Foundation call), plus his hedging suggestion. Six edits:
1. **New section, "Community ownership and governance"**, placed directly
   after the mission statement. Community participation in ownership and
   governance is stated as a requirement. Van Buren is named as the first host
   community.
2. **"The community is our landlord" is deleted.** A landlord rents to a
   tenant at arm's length, which is the relationship the section above is
   meant to escape.
3. **Price language replaced.** "Low cost remains a primary goal" becomes "Our
   pricing is competitive," with what the difference buys.
4. **New section, "What we do not sell"** — no foundation-model training, no
   frontier proprietary models.
5. **Positioning compressed** from six lines to three. The sentence "we
   cannot promise legal immunity from US legal process" is removed. "Certified
   local" is retained.
6. **A closing "Status" paragraph** stating that the entity, the ownership
   structure, and the service configurations are still in development.
The old one-line "Governance" paragraph is removed, its content having moved
into edit 1.
**Reasoning:** Matt's first note identifies the differentiator correctly, and
the document buried it: ownership sat mid-paragraph and governance was the
last line. His second note caught a live contradiction, since the mission
paragraph called low cost a primary goal while the commercial-model paragraph
said the advantage was not price. His third note is a straightforward gap.
His hedging suggestion matches the claim discipline the log already applies
(D-20260824-18, D-20260825-03).
**Alternatives rejected:**
- *Keep "We call this certified local, not sovereign."* Rejected on Fletcher's
  instruction that the sovereignty disclaimer answers a question nobody is
  asking. D-20260821-06 bars *claiming* sovereignty; it does not require
  disclaiming it, so silence complies and no revision of D-20260821-06 is
  needed.
- *Delete "certified local" along with the paragraph, as Matt's note 4 read
  literally would allow.* Rejected. D-20260821-06 chose the term and
  D-20260824-19 reaffirmed it, and `CurrentState.md` records five instances of
  this project overclaiming a shorthand. Dropping the term would invite a
  sixth.
- *Adopt Matt's phrasing verbatim.* Rejected. "Community participation in
  ownership and governance is a requirement" is ambiguous about whether MOCSI
  or the data center is owned. The section scopes it to the data center, since
  MOCSI itself must never be described as community-owned.
- *Use "organic-level pricing."* Rejected for the written document and kept
  for conversation. In writing it prompts the reader to ask what the premium
  is before we have quoted one.
**Dissent:** Three.
1. **"Requirement" is a commitment we cannot yet honour.** Q-20260825-01 and
   Q-20260902-02 are both open: we do not know which entity holds what, or
   what Van Buren is actually offering. If the host community declines, the
   word forces us to walk or to reword a circulated document.
2. **The document is still not externally clean.** D-20260824-11 blocks the
   open-source claim pending a licence audit that has not run. None of these
   edits touch that.
3. **Matt may have reviewed a superseded draft.** The `OnePager.pdf` attached
   to Fletcher's 2026-08-26 message was built 2026-08-25 and still carried the
   flat open-source claim, the unresolved `{partially,fully}` marker, and the
   B2B2G channel section cut on 08-26. Note 4 may therefore be aimed at text
   that had already changed. Confirm with Matt which file he read.
**Revises:** D-20260902-05 (the ownership sentence is rewritten and promoted;
"partially" stands), D-20260902-06 (the Channel material stays cut, and
Governance now sits at the top rather than the bottom).

## D-20260903-02 — Antithesis padding is barred in the fletcher-style skill
**Date:** 2026-09-03
**Decision:** Rewrite the "X, not Y" rule in
`~/.claude/skills/fletcher-style/SKILL.md`. Move it from the last bullet of
"What You Do Not Do" into Universal Rules, name it **No antithesis padding**,
cover every word order rather than one, give two worked repairs, and set an
enforceable budget of at most one per document. Also delete a stray
`SKILLEOF` heredoc terminator that had leaked into the file body, and scope
the em-dash rule to produced prose.
**Reasoning:** Fletcher identified "X, not Y" as a recognisably machine
cadence and pointed at "a requirement, not a feature" in my own draft. The
skill already contained a rule against it, and the rule failed for four
reasons: it named only the `not X, it is Y` order and missed the commoner
mirror image; "de-emphasize" gave no test for compliance; it offered no
repair, so a writer who deletes the clause loses the emphasis and reaches for
the construction again; and it sat last in a list after low-stakes items. A
budget is enforceable where "de-emphasize" is not.
**Alternatives rejected:**
- *Ban the construction outright.* Rejected. It earns its place where the
  reader actually holds the wrong belief. The budget preserves that case.
- *Leave the rule where it was and reword it.* Rejected. Position in the file
  is part of why it failed.
**Dissent:** The rule was already in the skill and I still produced the
construction repeatedly this session, because I never invoked
`fletcher-style`. A rule in an uninvoked skill changes nothing. The durable
fix is either to invoke the skill for writing tasks or to move the rule
somewhere always loaded, and this entry does neither.

## D-20260903-03 — fletcher-style loads by default for writing tasks
**Date:** 2026-09-03
**Decision:** Add a **Writing style** section to `~/.claude/CLAUDE.md`
instructing that `fletcher-style` be invoked before producing any prose
Fletcher will read or send, before writing rather than as a cleanup pass. The
section names what is in scope (documents, memos, one-pagers, pitches, email
drafts, repo prose, PR and commit bodies, substantial explanatory passages in
chat) and what is out (code, code comments, templated log entries, short
factual answers). It also inlines the two rules that have demonstrably slipped
— no antithesis padding, and parentheses rather than paired em dashes for
asides — so they apply even when the skill has not loaded.
**Reasoning:** Fletcher's instruction, and it closes the loop left open in
D-20260903-02's dissent. That entry recorded the real problem: the rule
against "X, not Y" already existed in the skill, and I produced the
construction throughout the 2026-09-02/03 session because the skill was never
invoked. A rule in an uninvoked skill changes nothing. `CLAUDE.md` is loaded
into every session and its instructions override default behaviour, so a
directive there is the only placement that does not depend on my remembering
to reach for the skill.
**Alternatives rejected:**
- *Move the whole rule set into `CLAUDE.md` and retire the skill.* Rejected.
  The skill carries three tone modes and a dozen rules, and inlining all of it
  would consume context on every session including the many that involve no
  writing.
- *Rely on the skill's description to prompt proactive invocation.* Rejected.
  That is what was in place, and it failed for an entire session.
- *Leave the trigger vague ("when writing something important").* Rejected.
  An undefined trigger is how the previous rule failed. The section names the
  in-scope and out-of-scope cases so the judgement is made once, here, rather
  than every time.
**Dissent:** Inlining two rules in `CLAUDE.md` duplicates text that also lives
in `SKILL.md`, and duplicated rules drift. If the skill's wording of either
rule changes, `CLAUDE.md` will silently disagree with it. Accepted because the
duplication is small and covers exactly the failure mode observed, but the two
files now have to be edited together.

Second, and unresolved: the Skill tool served a cached copy of `SKILL.md` for
the whole of this session after the file was edited, so a skill invoked
immediately after a rule change applies the old rules. `CLAUDE.md` may be
cached the same way. This decision may therefore not take effect until the
next session, and there is no way from inside a session to confirm which
version is live.
## D-20260826-01 — Community ownership and control of the host data center is a foundational requirement
**Date:** 2026-08-26
**Decision:** MOCSI hosts its stack only in a data center that the surrounding
community partly owns and helps control. This is a gate applied before cost,
schedule, or any other siting criterion, not a factor weighed against them. A
site that cannot offer it is disqualified. MOCSI approaches host communities as
partners and settles terms with them, and will not push costs its load creates
onto a host community's ratepayers. `OnePager.md` states the requirement in the
mission section and carries a new **Siting** paragraph under "How we achieve
it."
**Reasoning:** Fletcher's direction, following the "Current status" thread of
2026-08-24 to 2026-08-26 with Matt Victor, Josh Tan, and Kerem Durdag. Matt's
argument, which Fletcher accepted: the demand indicators MOCSI is seeing rest
almost entirely on the community and organic promise, so if that promise is
muddy — through the structure itself or through how MOCSI describes it — the
demand goes away. Differentiation is therefore the thing to protect above
everything else, which makes community ownership of the host site a gate rather
than a preference. The practical consequence has already been taken: 340
Cumberland is the strongest option on financing and time to market and is off
the list because it fails this requirement. Stating the rule in the one-pager
keeps a later siting decision from quietly reopening it.
**Alternatives rejected:**
- **Weighing community ownership alongside cost and schedule.** Rejected because
  it is what produced the 340 Cumberland answer, and because a criterion that
  can be outvoted by capital cost is not a differentiator that funders or host
  towns will believe.
- **Commercial colocation with a community advisory body attached.** Rejected as
  the overclaiming pattern this project keeps logging (D-20260821-06,
  D-20260824-11, D-20260824-12, D-20260824-19). Advisory seats are not
  ownership, and the gap would be found.
- **Naming Van Buren in the one-pager.** Rejected because no site decision has
  been made. Van Buren is the current primary focus and carries real problems —
  a small utility (roughly 1,380 customers, five employees) whose manager
  attributes its low rate to aging plant, so a large new load could trigger
  upgrades borne by ratepayers, which this decision's last clause forbids.
  Houlton, Calais, and Madison have the same municipal or cooperative shape. The
  one-pager therefore names the class of town, not the town.
**Dissent:** "Partly owns and helps control" is deliberately weaker than
"community-owned," and the one-pager should not drift back to the stronger
phrase without the entity work being done. The requirement now stated is a floor
on the host facility and says nothing about who owns MOCSI itself.
**Narrows, does not close:** Q-20260825-01. That question asks what legal entity
holds which assets, funded how. This decision fixes a floor on the host site
only — non-zero community ownership and control of the facility — and leaves
entity structure, capital structure, and MOCSI's own ownership open.
**Marker removed:** the conspicuous `[TBD: partially or fully]` placeholder from
D-20260824-19 is gone from `OnePager.md`. It marked the degree of community
ownership of the data center, which this decision answers as "at minimum some,
as a precondition." It did not mark, and its removal does not settle,
Q-20260825-01.

## D-20260826-02 — No hardware model is settled; none is named externally
**Date:** 2026-08-26
**Revises:** D-20260824-14, in part. That decision named **AMD MI300X (192GB
HBM3)** as the reference architecture for LLM serving. The part choice is
withdrawn as unsettled. Everything else in D-20260824-14 stands — GPUs rather
than FPGAs for LLM serving, vLLM on ROCm, LiteLLM, LibreChat, and reserved
capacity as the commercial model.
**Decision:** MOCSI has not settled on a hardware model and names none in any
external document. `OnePager.md` no longer discusses hardware at all (see
D-20260826-03), so the withdrawal takes effect there by removal rather than by
rewording.
**Reasoning:** Fletcher's direction. The reasoning behind D-20260824-14 was
about the *constraint* — Mixture-of-Experts residency makes memory capacity
binding, and KV cache exhausts memory before weights do — and that reasoning
survives intact and still governs what MOCSI will eventually buy. Naming the
part was a step past it. A specific accelerator in a document that circulates
commits MOCSI to a purchase nobody has made, against a demand profile nobody
has contracted, in a market where what is available second-hand changes
quarterly. It is also the overclaiming pattern this project keeps catching
(D-20260821-06, D-20260824-11, D-20260824-12, D-20260824-19, D-20260826-01).
**Alternatives rejected:**
- **Keeping the MI300X naming with a hedge** ("in the MI300X class," "such
  as"). Rejected — a hedge on a part number still reads as a decision to a
  technical reader, and the internal model's 53% Instinct weighting is an input
  to a choice, not the choice.
- **Keeping a de-committed hardware paragraph in `OnePager.md`** — stating the
  MoE memory constraint and the buying posture without naming a part. Drafted
  and then dropped, because Fletcher removed the hardware material from the
  document entirely (D-20260826-03). The MoE argument stays where it already
  lives, in `FPGAExecutiveSummary.md` and the analysis record.
- **Naming AMD as a vendor without a model.** Rejected — at this stage a vendor
  commitment is nearly as strong a claim as a part number, and the used-parts
  cost thesis is vendor-agnostic.
**Unchanged:** the FPGA finding itself. FPGAs are not used for language-model
serving and remain under consideration for genomics acceleration against a
signed commitment (D-20260824-13, D-20260824-14, and Fletcher's 2026-08-24
status mail). Only its *presence in the one-pager* changed.
**Dissent:** None on the decision. One caveat for whoever revisits it: the
affordability claim in the mission and the cost-advantage claim in "Commercial
model" rested partly on cheap second-tier hardware, and with the hardware
paragraph gone the document now offers no support for either. That is
defensible in a one-pager and is not defensible in anything a funder
diligences.

## D-20260826-03 — OnePager.md drops hardware, FPGA, and channel material
**Date:** 2026-08-26
**Decision:** Fletcher removed three passages from `OnePager.md`: the
**Hardware** paragraph, the **FPGA** paragraph that followed it, and the
**Channel** paragraph. "How we achieve it" now opens with **Siting**
(D-20260826-01) and runs Openness, Positioning, Commercial model, Governance.
The `[TBD: partially or fully]` marker is resolved to **partially** in the same
pass.
**Reasoning:** Fletcher's judgement that these are not needed at this point.
The document's job right now is to state what MOCSI is for and what makes it
different, and after D-20260826-01 that difference is community ownership of
the site. Hardware and channel detail are decisions in flight — the part is
unsettled (D-20260826-02) and the go-to-market mix is untested against a single
signed customer — so both invited questions the document could not yet answer.
**Alternatives rejected:**
- **Keeping the passages and marking them provisional.** Rejected — a one-pager
  carrying its own caveats reads as unsettled throughout, and D-20260824-19
  already established that a conspicuous marker exists to stop circulation, not
  to travel with the document.
- **Moving the removed text to an appendix.** Rejected — it is not lost. The
  hardware and FPGA reasoning lives in `FPGAExecutiveSummary.md`,
  `FPGAModelPortingCosts.md`, and `analysis_record_of_inquiry_v9.md`; the
  channel reasoning lives in `RunningNotes.md` and D-20260824-14.
**Dissent:** Removing Channel costs the document its only answer to "who
actually writes you a cheque," which is the second question any funder asks
after differentiation. Worth restoring in whatever goes to funders, even though
it is right to leave out of a one-pager aimed at communities and partners.
**Consequence for `OnePager.pdf`:** the rendered copy is now two revisions
stale and still shows the TBD marker, the MI300X naming, and the channel
paragraph. It should not circulate until regenerated.

## D-20260826-04 — `OnePager.md` renders to two pages at readable type
**Date:** 2026-08-26
**Decision:** `OnePager.pdf` is two pages. It renders at 10pt with 0.55in
margins and paragraph spacing tightened to 3.5pt, via `RenderOnePager.sh`
(pandoc with the xelatex engine), which is now committed so the settings are
reproducible rather than rediscovered. The type size is not reduced to force a
single page.
**Reasoning:** Fletcher's choice, made against the alternatives below after
each was rendered and measured. The document outgrew one page: at 10pt the last
five to eight lines carry over. The audience decided it — this document goes to
communities, town officials, and partner organisations, and 9pt body type reads
as a document trying to hide its length. A second page that is mostly white is
the cheaper cost. The `RenderOnePager.sh` script exists because the previous
`OnePager.pdf` was rendered on 2026-08-21 with settings nobody recorded; they
had to be recovered by measuring the text bounding box of the old PDF, which is
not a thing to repeat.
**Alternatives rejected:**
- **One page at 9pt** (extarticle, 0.55in margins). Rendered and confirmed to
  fit. Rejected on readability for a community-facing document.
- **One page at 10pt by cutting roughly eight more lines.** Offered with
  candidates named — the Positioning paragraph, the auditability caveat, or the
  second Target Customers paragraph. Rejected because each is load-bearing:
  Positioning carries the "certified local, not sovereign" honesty, and the
  auditability caveat is what D-20260824-12 requires the document to say.
- **One page at 10pt with ~0.4in margins.** Not offered. Edge-to-edge text on
  letter paper looks like a mistake.
**Dissent:** A document named "one-pager" that is two pages invites the
question at every handover. Renaming it is the clean fix and was not in scope
here.
**Note on the old PDF:** the file replaced dated from 2026-08-21 and rendered a
much older draft — it still showed the `{partially,fully}` placeholder, predating
even the `[TBD]` marker of D-20260824-19. Its one-page fit was therefore never
evidence that the *current* text fits one page, and should not be cited as such.

## D-20260826-05 — `OnePager.pdf` returns to one page, type size unchanged
**Date:** 2026-08-26
**Revises:** D-20260826-04, which accepted two pages. The premise of that
decision — that the text could not fit one page at readable type — no longer
holds, because Fletcher shortened the text.
**Decision:** `OnePager.pdf` is one page again. Margins go from 0.55in to
0.5in; **10pt type and 3.5pt paragraph spacing are unchanged**.
`RenderOnePager.sh` carries the new margin and a standing instruction: if the
text grows again, accept a second page rather than shrink the type.
**Reasoning:** After Fletcher's cuts, only the two-line Governance paragraph
carried over — an orphan page, which is worse than either clean outcome. The
constraint D-20260826-04 actually protected was **type size**, on the grounds
that 9pt reads as a document hiding its length from a community audience. A
0.05in margin change does not touch that constraint, so this needed no second
ruling from Fletcher; it is the same decision applied to shorter text.
**Alternatives rejected:**
- **Shipping two pages with a two-line second page.** Rejected — an orphan
  page reads as a mistake, and a document called a one-pager carrying two
  lines onto page 2 invites exactly the question D-20260826-04 flagged in its
  dissent.
- **Cutting the Governance paragraph to fit.** Rejected — it is the
  multi-stakeholder council, which is MOCSI's control claim and load-bearing
  after D-20260826-01. Not text to lose to typesetting.
- **Re-asking Fletcher.** Rejected — he had already answered the question that
  mattered (readable type over a literal one page), and this outcome satisfies
  both halves of it.
**Note:** the dissent recorded at D-20260826-04 — that a two-page "one-pager"
invites a question at every handover — is now moot rather than resolved. It
returns if the text grows.

## D-20260826-06 — Siting states the requirement plainly; the ratepayer promise leaves the one-pager
**Date:** 2026-08-26
**Decision:** The Siting paragraph opens "Community participation is a
requirement." Two clauses come out: "rather than newly invented" and the
promise not to ask a host community to carry costs MOCSI's load creates. "We
approach those towns as partners and settle terms with them" becomes "We work
with those towns as true partners." `OnePager.pdf` regenerated, still one page.
**Reasoning:** Fletcher's revision, following the observation logged against
the previous draft that "to meet our community participation goals... ideally
owned by the municipality" had softened a gate into an aspiration, and that
"ideally" was the word a reader would land on. Stating the requirement in four
words at the head of the paragraph restores the claim D-20260826-01 makes,
without restoring the longer gate language that spelled out disqualification —
which is the right balance for a document that goes to towns MOCSI has not yet
negotiated with.
**Alternatives rejected:**
- **Leaving Siting as an aspiration.** Rejected — it is the differentiator the
  demand rests on (D-20260826-01), and a paragraph that only says "ideally"
  cannot carry it.
- **Restoring the full gate sentence** ("a site that fails that test is out
  even when it wins on capital cost and time to market"). Not taken. It commits
  MOCSI publicly to a disqualification rule before any site's cost is known.
  The rule still binds internally under D-20260826-01.
**Dissent:** The ratepayer promise is worth more than the space it took. It was
Fletcher's own objection in the 2026-08-26 status mail — Van Buren's utility is
small and its low rate reflects aging plant, so a large new load could trigger
upgrades borne by ratepayers — and it is the most concrete evidence available
that "partner" means something. It is exactly what a sceptical town official or
journalist would test. It remains binding under D-20260826-01, which is the
record; only its public statement is gone. It belongs in whatever MOCSI puts in
front of a host community.

## D-20260827-01 — `FAQ.md` is tracked in git
**Date:** 2026-08-27
**Decision:** `FAQ.md` at the repository root is committed to git. It holds
short answers to recurring infrastructure questions, in Fletcher's voice, and
grows as questions recur.
**Reasoning:** It is MOCSI's own writing about MOCSI's own plan — no third
party's words, nothing private — so the reasoning that keeps `email/` out of git
does not touch it. The answers are load-bearing: both current entries constrain
the siting decision that D-20260826-01 left open, and a file that constrains a
live decision needs to travel with the repository rather than sit in one
person's working copy. Root placement matches `OnePager.md`, `TODO.md`, and
`OpenQuestions.md`, which are the other short standing documents.
**Alternatives rejected:**
- **`private/`** — that directory is default-deny for material with a
  confidentiality reason (D-20260825-01, contact addresses). An FAQ about data
  center economics has none, and filing it there would blur what `private/`
  means.
- **Leaving it untracked.** Rejected — it survives in exactly one working copy,
  is invisible to anyone who clones, and the repo already carries three
  worktrees where it would silently not exist.
- **Folding the answers into `OnePager.md`.** Rejected — the one-pager is an
  external document that Fletcher has cut twice this week to fit one page. These
  are internal working answers and belong where length does not cost anything.

## D-20260827-02 — The initial site lease runs at least the equipment depreciation cycle
**Date:** 2026-08-27
**Decision:** MOCSI plans to keep equipment in whichever data center it lands in
for the useful life of that equipment, so the **initial lease must run at least
the depreciation cycle of the initial equipment**, probably set by processor
depreciation. Migrating out of a data center means moving customer data,
software, and workload to different equipment elsewhere — not relocating the
hardware. Recorded in `FAQ.md` question 1.
**Reasoning:** Moving equipment between data centers is risky and is not
standard practice; the industry migrates workloads, not racks. That makes the
lease term a function of the depreciation schedule rather than of how long MOCSI
would like to keep its options open. It also means a short lease does not
preserve flexibility the way it appears to — it strands equipment that still has
book value, and the exit it seems to buy is the expensive kind.
**Alternatives rejected:**
- **A short, time-defined initial stay** — one to two years, no more than three.
  This is what Kerem Durdag urged in the 2026-08-25 "Current status" thread, and
  Fletcher answered "All three of these have great merit and I agree with your
  analysis." Rejected as a general rule now that the equipment-mobility question
  has been worked through.
- **Planning to relocate equipment at lease end.** Rejected on the risk
  argument above.
**Note on the apparent reversal:** Kerem's advice was explicitly conditional —
"if we do go to 340 Cumberland" — and 340 Cumberland is off the list under
D-20260826-01, so the specific recommendation is moot rather than overridden.
His underlying point stands and is worth carrying into the Van Buren
negotiation: being intentional about mid-term options is a values question, and
a lease long enough to cover depreciation is a real commitment to a host
community, not merely a constraint on MOCSI. The two now point the same way.

## D-20260827-03 — Multiple data centers are acceptable technically, discouraged financially
**Date:** 2026-08-27
**Decision:** MOCSI may operate more than one data center. There is no
performance reason against multiple locations and some workloads gain from it.
The argument against several small sites rather than one large one is financial:
data centers carry significant economies of scale. Recorded in `FAQ.md`
question 2.
**Reasoning:** Separating the technical objection from the financial one keeps
the question answerable. "Can we?" is yes; "should we, yet?" is a cost question
that depends on contracted demand.
**Alternatives rejected:** Treating multi-site as a technical impossibility
(rejected — it is not, and saying so would foreclose a real option). Treating it
as free (rejected — the scale economics are the whole reason to concentrate
early capacity).
**Bearing on siting:** this is why splitting a first build across two
community-owned sites, which would satisfy D-20260826-01 in two towns at once,
is not the obvious win it looks like. The scale penalty lands on Stage 1, which
is the stage with the least demand to absorb it.

## D-20260903-04 — Two records of the 2026-08-26 one-pager edits; both stand
**Date:** 2026-09-03
**Decision:** `DecisionLog.md` now carries two sets of entries describing the
same 2026-08-26 edits to `OnePager.md`. Both stay in the log and neither is
superseded. **D-20260826-01 through D-20260826-06 are the reasoning of
record**; `D-20260902-05` and `D-20260902-06` remain the entries that describe
what reached `main`, and cite the 0826 set for the reasoning they say they
lack.
**Reasoning:** The 0826 entries were written on the day Fletcher made the
edits, in a worktree whose branch never merged. On 2026-09-02, with that branch
still unlanded, the same edits were recorded retroactively as D-20260902-05 and
D-20260902-06. Those two entries state plainly what they are missing:
"Reasoning: Not stated at the time of the edit, and not invented here" and
"Alternatives rejected: None recorded." The 0826 set supplies exactly that
material — the rebase onto Fletcher's shortened text, the withdrawal of the
MI300X part choice, the three rejected alternatives behind the hardware cut,
and the dissent that the document now supports neither its affordability claim
nor its cost-advantage claim. Ranking the contemporaneous record above the
reconstruction is what makes the reasoning findable, and the append-only rule
forbids resolving the overlap by deleting either set.
**Alternatives rejected:**
- **Marking D-20260902-05 and D-20260902-06 superseded by the 0826 entries.**
  Rejected because no substantive decision differs between them. A `Superseded`
  row tells a reader a choice was reversed, and none was.
- **Dropping the 0826 entries from the branch before merging.** Rejected — it
  discards the only contemporaneous account of edits the log otherwise holds
  only as a reconstruction, and it is the deletion the append-only rule exists
  to prevent.
- **Editing D-20260902-05 and D-20260902-06 to cite the 0826 entries in
  place.** Prohibited outright. A correction is a new entry pointing back.
**Precedent:** this is the second ID collision caused by work sitting in an
unmerged local checkout. `CurrentState.md`'s ordering note records the first,
where `D-20260825-04` and the two `D-20260828-*` entries were renumbered and
re-appended on 2026-09-02. The pattern is the cost of long-lived worktrees, and
it is worth watching.
**Dissent:** Two ID sets for one set of edits is a defect in the record even
with this entry explaining it. Anyone reading `D-20260902-06` alone will
believe no alternatives were considered, because that is what it says. The
cross-reference only works in the direction a reader happens to travel.

## D-20260903-05 — Landing the community-hosting branch takes `main`'s one-pager verbatim
**Date:** 2026-09-03
**Decision:** `worktree-onepager-community-hosting` merges into `main` carrying
`FAQ.md`, `RenderOnePager.sh`, and the nine `D-20260826-*` and `D-20260827-*`
log entries. `OnePager.md`, `TODO.md`, and `OnePager.pdf` are taken from `main`
unchanged, so the merge alters none of them. `OnePager.pdf` therefore stays as
it is on `main`, rendered 2026-08-21 and stale against `main`'s own
`OnePager.md`.
**Reasoning:** The branch was cut on 2026-08-26 and `main`'s `OnePager.md` has
moved on twice since, most recently on 2026-09-03 under D-20260903-01 on Matt
Victor's review notes. `main` already states the requirement D-20260826-01
exists to install: it carries a "Community ownership and governance" section
reading "Community participation in ownership and governance is a requirement."
Merging the branch's copy of the document would roll back eight days of edits
to reassert a claim already present. `TODO.md` and the rendered PDF are stale
for the same reason.
**Alternatives rejected:**
- **Merging the branch's `OnePager.md`.** Rejected on the rollback above.
- **Rebuilding the branch onto `main` and carrying only the new files.**
  Rejected because it discards the six original commits and their authorship,
  and the log entries are worth more attached to the commits that made them.
- **Regenerating `OnePager.pdf` in this merge.** Rejected as scope. The
  rendered copy is stale against `main` independently of this branch, and it is
  fixed by running `RenderOnePager.sh`, which this merge is what delivers.
**Consequence:** `OnePager.pdf` does not match `OnePager.md` on `main` and must
not circulate until regenerated. `RenderOnePager.sh` now makes that a one-line
fix, at the D-20260826-05 settings — 10pt type, 0.5in margins, 3.5pt paragraph
spacing, and a second page accepted before any reduction in type size.
**Dissent:** Landing a script whose purpose is to keep the PDF current, in the
same change that knowingly leaves the PDF stale, is a half-measure. The
regeneration is one command and deferring it leaves a circulating document
wrong for as long as nobody runs it. Tracked in `TODO.md`.

## D-20260903-06 — `OnePager.pdf` regenerated, and it is two pages again
**Date:** 2026-09-03
**Revises:** D-20260903-05, in part. That entry deferred the regeneration and
recorded the deferral as a half-measure in its dissent. The deferral is now
discharged. Everything else in D-20260903-05 stands.
**Decision:** `OnePager.pdf` is rebuilt from `main`'s current `OnePager.md` by
`./RenderOnePager.sh` at the D-20260826-05 settings — 10pt type, 0.5in margins,
3.5pt paragraph spacing. It renders to **two pages**. The tracked PDF now
matches the tracked text and may circulate.
**Reasoning:** The committed PDF dated from 2026-08-21 and predated three
rounds of edits, so it still showed material the document no longer contains.
The two-page result follows the standing instruction `RenderOnePager.sh` has
carried since D-20260826-05: if the text grows, accept a second page rather
than shrink the type. The text did grow, under D-20260903-01, which added the
"Community ownership and governance" and "What we do not sell" sections and the
closing "Status" paragraph on Matt Victor's review notes. Page 2 carries four
substantive paragraphs — the auditability caveat, Positioning, Commercial
model, and Status — so the orphan-page objection that drove D-20260826-05 does
not apply here.
**Alternatives rejected:**
- **Dropping to 9pt to force one page.** Barred by D-20260826-04, which fixed
  readable type as the constraint to protect for a community-facing document.
- **Cutting text to fit.** The candidates are the same load-bearing paragraphs
  D-20260826-04 already declined to cut, and they now include sections Matt
  Victor's review put in deliberately.
- **Leaving the PDF stale.** Rejected — it is the defect this entry exists to
  close, and a rendered copy that contradicts its own source is the thing most
  likely to reach an outside reader.
**Dissent:** D-20260826-04's dissent returns, exactly as D-20260826-05 said it
would. A document named "one-pager" that runs to two pages invites the question
at every handover. Renaming it was called the clean fix then and was left out of
scope; it is still the clean fix and is still not done.

## D-20260904-01 — The Dyer question set is tracked as two send-ready documents
**Date:** 2026-09-04
**Decision:** `VanBurenQuestionsCore.md` (nine questions) and
`VanBurenQuestionsFull.md` (all forty) are committed at the repository root,
written to be sent to Luke Dyer as they stand. `VanBurenQuestionsCore.pdf` is
committed alongside them, rendered without the CONFIDENTIAL footer because it
goes to a town official. `VanBurenSiteDiligence.pdf` and
`VanBurenSiteEvaluation.pdf` are also committed, rendered with cover pages,
tables of contents, and the CONFIDENTIAL footer, since those two stay internal.
**Reasoning:** List 2 of `VanBurenSiteEvaluation.md` (D-20260902-09) is the
question set, and it is not sendable as written: it carries `[VBSD §x]`
cross-references, `[INFER]` and `[FK-REPORT]` evidence tags, `NEW` flags, P1/P2
shorthand, star markers, and a standing constraint about how MOCSI may be
described. Stripping those at send time, by hand, every time, is how the
internal and outbound versions drift apart. Two files exist because
`VanBurenSiteEvaluation.md` itself recommends sending the nine-item core alone
first: an unstructured ask on 2026-08-17 covering the same ground went
unanswered, and forty questions at once risks the same silence. The numbering in
the full file is kept continuous and its header names the nine core numbers, so
either document maps back to List 2.
**Alternatives rejected:**
- **Sending an extract of List 2 without tracking it.** Rejected — the outbound
  wording is now a thing with its own history, and the edits made to it this
  session are substantive rather than cosmetic.
- **One file rather than two.** Rejected — it forecloses the core-first send
  strategy the evaluation document recommends.
- **Regenerating the PDFs on demand rather than committing them.** Rejected on
  the `OnePager.pdf` precedent: a rendered copy that exists only on one machine
  is the one that circulates in a stale state.
**Dissent:** Three documents now state the same questions, and the two site
PDFs are derived artifacts that will fall behind their markdown the moment
either file is edited. `OnePager.pdf` has already demonstrated exactly that
failure (D-20260903-05, D-20260903-06). Nothing regenerates them automatically.

## D-20260904-02 — What the question set asserts to the town, and what it does not
**Date:** 2026-09-04
**Decision:** The outbound questions quote **70 kW** as MOCSI's planning figure
at full build. They assert nothing else the record cannot support: the `$2.2M`
hub figure is removed entirely, including from a section heading, and the
discount-for-governance question now asks Dyer to confirm what he said rather
than telling him.
**Reasoning:** Three claims from the 2026-09-02 Dyer conversation are graded
unverified single-channel in D-20260902-08, and two of them had reached the
draft questions as statements of fact. Asking "where does the $2.2M stand"
quotes back a figure Dyer may never have given: public reporting describes a
$1.79M congressionally directed spending request and a $2.6M figure for the
former municipal building, plus a separate $2M-plus for the fire station. The
question now asks whether the renovation money is still available and what
conditions attach to it, which gets the answer without the risk, and adds
whether a small data center conflicts with those conditions. The
discount-for-governance question said "You mentioned…", attributing a specific
offer to Dyer in writing on the single most consequential open item
(Q-20260902-02); it now says "My understanding from our conversation is… Have I
got that right?" A misremembered attribution he has to correct costs standing
exactly where MOCSI can least afford it.
**Alternatives rejected:**
- **Using the ~28 kW Stage 1 figure** from `VanBurenSiteDiligence.md` §I.
  Rejected by Fletcher. It is explicitly illustrative and rests on the
  unresolved A.4 load, and it understates what the site must eventually carry.
- **Naming no load figure at all** and asking what the buildings can carry.
  Rejected — an ask with no number produces an answer in square feet, which is
  never the binding constraint.
- **Keeping the $2.2M figure** because it is what the meeting summary records.
  Rejected — the summary is not a source Dyer is bound by, and he is the person
  being asked.
**Dissent:** 70 kW is not a Phase 1 number and is not sourced as one. The
closest figure in the record is **67 kW**, and it is the *year-5 peak* for the
NVIDIA datacenter path in `gpu_capacity_prospectus_v76.pdf` §4, against a ~$1.9M
deployment; the AMD Instinct path in the same table is 98 kW. Asking Van Buren
for 70 kW in the Connectivity Center asks for the year-5 fleet in the pilot
room, and `VanBurenSiteEvaluation.md`'s second framing point holds that Phase 1
survives the §K scale-mismatch criterion **only if it stays small and
reversible**. The question is written as "at full build" and moved into the
Innovation Hub section to limit the damage, and a 300 A service with twenty tons
of cooling may still read to the town as the real ask. A.4 remains unresolved,
so the derived cabinet count, floor area, service size and tonnage all move if
the load figure moves.

## D-20260904-03 — `Overview.md` and `Products.md` are tracked in git
**Date:** 2026-09-04
**Decision:** Both files are committed at the repository root as they stand,
without editing. `Overview.md` states what MOCSI is building and lists seven
target customer categories. `Products.md` is a 29-byte stub: a heading and the
words "LLM Models".
**Reasoning:** The D-20260827-01 test applies and both pass it. Each is MOCSI's
own writing about MOCSI's own plan, carrying no third party's words and nothing
with a confidentiality reason, so neither the reasoning that keeps `email/` out
of git nor the default-deny rule for `private/` touches them. `Overview.md` in
particular has been sitting untracked since 2026-08-21 while its customer
taxonomy was cited in work that did land, which is the condition D-20260827-01
was written about: a file that constrains or informs tracked work belongs in the
repository rather than in one working copy.
**Alternatives rejected:**
- **Folding `Overview.md` into `OnePager.md` or `README.md`.** Rejected — the
  one-pager has been cut twice to hold a page, and this is longer-form internal
  framing that would not survive the cut.
- **Correcting the stale price line before tracking.** Rejected — tracking a
  file and revising its content are separate acts, and committing it unedited
  preserves what it actually said on 2026-08-21. The correction is logged as a
  task instead.
- **Leaving `Products.md` untracked until it has content.** Rejected — a stub
  that exists in one working copy is invisible to anyone who clones, and its
  emptiness is itself worth seeing.
**Dissent:** `Overview.md` contradicts D-20260903-01. Its closing sentence,
"Though we meet these additional criteria, low cost is still a primary goal,"
uses the exact phrase that decision retired in favour of "our pricing is
competitive." The file also opens by calling MOCSI's infrastructure
"community-governed," which is a control claim rather than an ownership one and
is therefore defensible under Q-20260825-01, though it sits close to a line the
project has repeatedly had to defend. Tracking the file makes both statements
part of the record rather than one person's draft.

## D-20260906-01 — `EarlySeptemberTasks.md` is tracked, and it sets an October 1 deadline
**Date:** 2026-09-06
**Decision:** `EarlySeptemberTasks.md` is committed at the repository root as it
stands, unedited. It records a **three-week push starting Tuesday 2026-09-08
against an October 1 deadline**, and organises the work under Products, Target
Customers, First Location, Higher Ed, Staffing, Partners and Funders, and
Collateral. Its stated purpose is to test the tentative business plan — products,
target customers, first location, staffing, and business structure — and iterate
where the tests fail.
**Reasoning:** The D-20260827-01 test applies and the file passes it. It is
MOCSI's own writing about MOCSI's own plan, names third parties only as people
to contact, and carries nothing with a confidentiality reason. It also holds
material the repository does not otherwise record: the **October 1 deadline**
appears nowhere else in the log, and neither does the plan to open alternative
site exploration in Madison, Houlton, and eastern Maine while the Van Buren
conversation continues. A deadline that governs three weeks of work belongs in
the repository rather than in one working copy.
**Alternatives rejected:**
- **Folding it into `TODO.md`.** Rejected — `TODO.md` is a standing list of
  undone tasks with no date attached, and this is a time-boxed plan whose shape
  is the point. Merging them loses the deadline and the grouping, and buries a
  three-week sprint in a backlog of forty items.
- **Repairing the garbled sentence and the heading before tracking.** Rejected on
  the D-20260904-03 precedent: tracking a file and revising it are separate acts,
  and committing it unedited preserves what it said when written. Both are logged
  as dissent instead.
- **Leaving it untracked until the sprint ends.** Rejected — a plan is most
  useful while it is live, and a file that exists in one working copy is
  invisible to anyone who clones.
**Dissent:** Three things.
1. **The repository now has two task files.** `TODO.md` and this one will drift,
   and several items already overlap — examining Houlton appears in both, and
   "Meet with Luke Dyer" restates the unsent question set (D-20260904-01). Which
   file owns a given task is undefined.
2. **The intro sentence is corrupted.** It ends "produce the ify Software
   offerings," which is not a sentence. Whatever it was meant to say about the
   September deliverables is lost.
3. **The Target Customers section is empty**, while the intro names testing
   target customers as one of the five things September exists to test. The
   heading also lacks a space after its `#`, so it does not render as a heading.

## D-20260906-02 — `EarlySeptemberTasks.md` revised; two of D-20260906-01's dissents no longer hold
**Date:** 2026-09-06
**Revises:** D-20260906-01, dissent points 2 and 3 only. Point 1 stands
unchanged: the repository still has two task files with no rule for which owns
a given task. The decision to track the file, and the October 1 deadline it
records, are untouched.
**Decision:** The tracked `EarlySeptemberTasks.md` is updated to its current
state, and `EarlySeptemberTasks.pdf` is committed alongside it.
**What changed after D-20260906-01 committed the file unedited:**
- Fletcher repaired the corrupted intro sentence. It ended "produce the ify
  Software offerings" and now ends "produce the final business plan."
- Fletcher populated the empty **Target Customers** section with eleven entries
  in two groups: Maine-based (Maine Library, Maine Higher Ed, Maine Municipal
  Association, Maine Community Development Foundation, Maine Association of
  non-profits) and public-interest AI organisations (Public.ai, Maple,
  Pro-Human AI Coalition, Mozilla, Openmined, Liberty).
- Fletcher added a staffing item: determine the breakdown of need by technical
  level, and which tasks suit a higher-ed partnership rather than paid
  fractional technicians.
- One space was added after the `#` in the title. Without it the heading was not
  a heading, and it rendered as literal body text run into the intro paragraph
  in `EarlySeptemberTasks.pdf`.
**Reasoning:** D-20260906-01 recorded three defects as dissent, and two were
repaired within the hour. Leaving that entry as the only record would send a
reader looking for problems that no longer exist, which is the failure the
append-only rule exists to prevent in the other direction. The rule forbids
editing the original, so the correction is this entry.
**Alternatives rejected:**
- **Editing D-20260906-01's dissent.** Prohibited outright by the append-only
  rule, regardless of the correction being favourable.
- **Leaving the stale dissent to be worked out from the diff.** Rejected — a
  reader consults the log precisely to avoid reconstructing state from commits.
- **Committing the markdown without the PDF.** Rejected on the D-20260904-01
  precedent, though that entry's own dissent about derived artifacts drifting
  applies here too.
**Dissent:** The new target customer list may conflict with D-20260824-09.
That decision discounted two segments as prospects: non-US members of the
Pro-Human AI Coalition, and AI safety and evaluation organisations, on the
grounds that their work targets frontier models which cannot be self-hosted.
Several of the newly listed public-interest AI organisations plausibly sit in
one or both of those sets. The list needs checking against `PHACDirectory.md`
and D-20260824-09 before it drives any outreach, or September will spend
effort on prospects the record already set aside.

## D-20260906-03 — Recover the orphaned worktree branch before deleting it
**Date:** 2026-09-06
**Decision:** `CLAUDE.md` is restored to `main` as written on 2026-08-17.
`gpu_capacity_model_v76.xlsx` is replaced with the branch copy. Unknowns **#82**
and **#83** are carried into `OpenQuestions.md` as Q-20260906-01 and
Q-20260906-02. `origin/worktree-eager-churning-crescent` is then deleted, along
with eleven branches already merged into `main`.
**Reasoning:** The branch carried four commits from 2026-08-17 and 2026-08-18,
had no pull request, and its worktree was removed on 2026-09-03. Checking it
before deletion found three things `main` did not have.

`CLAUDE.md` was absent from `main` and from disk, so this repository had **no
project-level instruction file at all**. It records that Fletcher is retained as
fractional CEO, that the work is funded by the **Co-Lab grant**, that the mandate
is a business plan strong enough to raise investment directly or win further
grant funding, and a **hard deadline of September 30, 2026**. It also records that
much of the work product comes from others (Tom Law, using Claude) and that
numeric claims in models and prospectus documents warrant real scrutiny.

The tracked spreadsheet was **older in content than its commit date suggests**.
`main`'s copy landed 2026-08-21 at 101,328 bytes, which is the size before the
two unknowns were added; the branch copy is 102,391 bytes. Comparing shared
strings, the branch version contains ten strings `main` lacks and `main`
contains **none** the branch lacks, so the branch copy strictly supersedes it.
Those ten strings are unknowns #82 and #83.

Both unknowns bear on decisions currently in force, which is why they are
promoted from a spreadsheet cell into `OpenQuestions.md`: #82 offers a mixed
FPGA-and-GPU deployment as an alternative to the build-to-order FPGA tier of
D-20260824-15 and D-20260824-17, and #83 questions the 6-year retirement horizon
that underpins both D-20260827-02, where the lease must cover the depreciation
cycle, and D-20260821-03, which keeps used NVIDIA datacenter GPUs in the
platform.
**Alternatives rejected:**
- **Deleting the branch on the strength of its name.** Rejected — it read as
  disposable worktree residue and held the only copy of three things.
- **Keeping the branch as the archive.** Rejected — it had already been
  invisible for seven weeks, and a branch nobody merges is not a record.
- **Leaving #82 and #83 in the spreadsheet alone.** Rejected — a question that
  gates two live decisions cannot live only in a cell of a binary file that
  nothing greps.
- **Editing `CLAUDE.md` to reconcile its deadline with `EarlySeptemberTasks.md`.**
  Rejected on the D-20260904-03 precedent; it lands as written.
**Corrects:** D-20260906-01 stated that the October 1 deadline "appears nowhere
else in the log." The deadline was in fact documented on 2026-08-17, as
September 30, in this branch's `CLAUDE.md`. The two agree within a day and
corroborate each other. The claim was true of `DecisionLog.md` and false of the
repository.
**Dissent:** The spreadsheet is a binary file holding at least 83 numbered
unknowns, two of which turned out to gate live decisions and neither of which
was visible to any text search. Promoting these two does nothing about the other
81. There is no process for surfacing an unknown from that file into
`OpenQuestions.md`, and this pair was found by accident while cleaning up
branches.

## D-20260914-01 — The July financial-model questions are triaged and folded into `OpenQuestions.md`
**Date:** 2026-09-14
**Decision:** `FinancialModelQuestions.md` is retired. Its 23 questions, written
2026-07-22 against `ME - Public AI - Financials.xlsx`, were checked one by one
against `DecisionLog.md`, `CurrentState.md`, `OpenQuestions.md`, `TODO.md`,
`RunningNotes.md`, `analysis_record_of_inquiry_v9.md`, and the `Unknowns` sheet
of `gpu_capacity_model_v76.xlsx`. Six were still open and survive the model
swap; they become Q-20260914-01 through Q-20260914-06. The other 17 are not
migrated. The retired file keeps a pointer to the six new IDs.

`OpenQuestions.md` is from now on the only registry of what is open. A question
about the financial model is tracked either there or as a numbered unknown in
the v76 model, and nowhere else.

**Reasoning:** D-20260821-02 made the v76 artifacts the working foundation, but
nobody migrated the question list, so for seven weeks two registries disagreed
about what was open while `OpenQuestions.md` claimed of itself that it "always
reflects only what is currently open." The July questions were invisible to the
process that closes questions, and six real ones went unworked.

Triage rather than wholesale migration, because the questions interrogate a
spreadsheet the project replaced. Most of them have since been answered or
absorbed. Copying all 23 across would have put 17 settled or moot items into the
registry, which damages the registry more than leaving the file alone.

Q-20260914-01 is the one with live external exposure. `UsageEstimateFactors.md`
records that "$105,500 in Dirigo credits and tax exemptions" appears verbatim in
the Longview RFP and the 2026-06-11 two-pager, and impeaches the $25,000
sales-and-use component as matching no computable base. Both documents have gone
out. This is a seventh instance of the pattern recorded at D-20260821-06,
D-20260824-11, D-20260824-12, D-20260824-19, and D-20260825-03: a number doing
more work than the facts support.

**The verdict for each of the 23:**

| Question | Verdict | Basis |
|---|---|---|
| Intro 1 — industry template? | Moot | No provenance record for the superseded workbook; v76's provenance is documented in its `ChangeHistory` sheet and `analysis_record_of_inquiry_v9.md` |
| Intro 2 — Power & Cooling / Data Center Lease formula fault | Answered, then moot | `UsageEstimateFactors.md:46` diagnoses it to the cell: `Costs!B32`/`B33` multiply real rates by an empty cell |
| Revenue 1 — where the utilization figure comes from | Answered for the old model, tracked for the new | `UsageEstimateFactors.md:8`; unknowns #17, #5 |
| Revenue 2 — time-of-day usage patterns | Answered, but unregistered | `MaineHigherEdComputeAnalysis.md:83-93`, which labels itself inference. See the `TODO.md` item raised alongside this entry |
| Revenue 3 — educational discount | **Migrated** | Q-20260914-03 |
| Revenue 4 — where the usage breakdown comes from | Moot as posed; substance tracked | Unknowns #0, #36 |
| Revenue 5 — target markets | Answered, then reopened | D-20260821-04, D-20260821-07, D-20260824-08, D-20260824-09; now Q-20260902-01 |
| Revenue 6 — length of customer commitment | Tracked | Unknowns #81, #19, #3 |
| Revenue 7 — price against market | Tracked | Unknowns #3, #78; `Sources` sheet rows 4-13 |
| Opex 1 — selling and marketing | **Split.** Sales tracked, marketing migrated | Unknown #34 covers labour only; Q-20260914-04 |
| Opex 2 — configuration and technical support | Tracked | Unknowns #35, #37 |
| Opex 3 — IT operation | Tracked | Unknowns #30, #18 |
| Opex 4 — IT software and SaaS | **Migrated** | Q-20260914-05 |
| Opex 5 — power cost source and inflation | Answered for source; tracked SEVERE for escalation | Unknown #4; unknowns #80, #79, #73, #81 |
| Opex 6 — finance, accounting, billing, bad debt | **Split.** First three answered, bad debt migrated | `Inputs` sheet section D; Q-20260914-06 |
| Opex 7 — "no employees" | Premise no longer holds | Unknowns #30, #18; the staffing item in `TODO.md` |
| Capex 1 — rack, PDUs, and cabling inside the lease | Tracked | Unknowns #7, #40 |
| Depreciation 1 — schedule looks aggressive | Moot | v76 books no depreciation |
| Depreciation 2 — 36-month depreciation against 60-month refresh | Moot as posed; substance tracked | Q-20260906-02, unknowns #83, #56; bears on D-20260827-02's lease term |
| Depreciation 3 — price/performance decline period mismatch | Answered structurally; level tracked | `analysis_record_of_inquiry_v9.md:475`; unknown #29 |
| Taxes 1 — Dirigo Credit eligibility | **Migrated** | Q-20260914-01 |
| Taxes 2 — sales-tax exemption and customer mix | **Migrated** | Q-20260914-02 |

**Alternatives rejected:** Folding all 23 into `OpenQuestions.md` unexamined.
Faster, and it would have buried six live questions among 17 settled ones,
leaving the next reader to redo this work.

Leaving `FinancialModelQuestions.md` in place and opening the six questions
alongside it. This keeps the historical context in an obvious spot, at the cost
of preserving the two-registry condition that caused the problem.

Deleting the file outright. Git history preserves it either way, but a reader
who remembers the filename gets nothing, and the six new IDs are worth naming
where the old questions were.

**Dissent:** The 17 non-migrated verdicts rest on a search of six files and one
spreadsheet, not on Fletcher's own judgment of each. A verdict of "already
tracked" is the risky kind: unknown #34 covers sales labour and was nearly
allowed to cover marketing as well, and unknown #19 covers counterparty default
and was nearly allowed to cover bad debt. Both splits were caught. Others may
not have been. The verdict table exists so that a wrong call is findable rather
than silent.

`Questions.md`, also dated 2026-07-22 and also tracked, has the same problem and
is untouched by this entry.

## D-20260916-01 — Meeting transcripts go in a gitignored `meetings/`, always private
**Date:** 2026-09-16
**Decision:** Meeting transcripts, recordings, and AI meeting summaries live in
`<project root>/meetings/` in the **main checkout**. The directory is **always
private**, and nothing in it is ever committed. Two guards enforce this: the root
`.gitignore` excludes `meetings/`, and `meetings/.gitignore` contains `*`, which
ignores everything in the directory, itself included. No per-file exceptions.
**Reasoning:** The repo had no place for transcripts. The one meeting record the
Van Buren analysis leans on (the Zoom AI summary of the Dyer call, graded
unverified single-channel) is cited but never stored, so its claims cannot be
checked against what was said. A transcript holds other people's speech, which
puts it where archived email sits (D-20260824-02): git history is permanent, so
exclusion is the reversible choice. Fletcher asked for the directory to be
"always" private, which rules out the exception mechanism `private/` exists to
provide. The inner `.gitignore` protects the directory in any checkout whose
root `.gitignore` predates this change, so the directory was safe to create in
the main checkout before this branch merges. It belongs in the main checkout for
the reason D-20260824-03 gives for `email/`: ignored files in a worktree have no
copy anywhere and vanish when the worktree is removed.
**Alternatives rejected:**
- **`private/`.** It is built for tracked exceptions (`PHACContacts.md` is
  committed, D-20260825-01), and "always private" means none. Sharing a
  directory would also let one bad exception line expose both kinds of file.
- **A root `.gitignore` rule alone, as for `email/`.** A single point of
  failure: one edit to the root file, or a checkout that predates it, exposes
  the directory.
- **Committing transcripts, redacted or whole.** Rejected for the reason
  D-20260824-02 rejects committing email: the exposure cannot be undone.
**Dissent:** None on location. The recommendation to apply the email 1:1 rule
to two-person calls got no answer and is opened as Q-20260916-01 rather than
assumed.

## D-20260916-02 — No public mention of Van Buren until Luke Dyer clears it
**Date:** 2026-09-16
**Decision:** No one on the MOCSI team mentions Van Buren in connection with
MOCSI in public until Luke Dyer, the town manager, clears it. The rule covers
talks, panels (Maine Tech Week included), social media, press, the documentary
Joe Oliva's contacts are planning, and any circulating document. It does not
restrict internal work or conversations with Van Buren officials. Once the town
clears it, the public story is that Van Buren is building a connectivity hub and
MOCSI would put compute in the hub to support it.
**Reasoning:** Dyer told Fletcher that he credits the town's record to not
talking about projects until they are done. A phrase like "a data center in
downtown Van Buren" is easy to misread and could spread before the town has
prepared anyone for it, and public concern about data-center water and power use
is already high. What MOCSI can put in 51 Main St is also smaller than the phrase
implies: the building's service looks like a 200 to 300 amp installation on a
shared pole transformer, which supports a small pilot at most. A premature public
story would damage the relationship MOCSI most needs and describe a project that
may not happen at that site. Fletcher set the rule at the September 16 weekly
call.
**Alternatives rejected:**
- **Talk about Van Buren openly, in the team's usual knowledge-sharing way.**
  Rejected because the town, rather than MOCSI, bears the cost of a misreading,
  and the site is unconfirmed.
- **Announce MOCSI at the GrowSmart summit in Rockland, where Dyer is a
  keynote speaker.** Rejected as an announcement. Joe Oliva's suggestion was
  narrower (use the summit to start presenting Van Buren as a town to watch for
  this kind of project), and that stays open for Dyer to decide.
- **Leave it to each person's judgment.** Rejected because several team members
  speak publicly in the next few weeks and one uncleared mention is enough.
**Dissent:** None. The rule has a cost: Van Buren is the most concrete example
MOCSI has, and pitches in the meantime must describe the site class (towns with
municipal or cooperative utilities, D-20260826-01) without naming the town.

## D-20260918-01 — Sell at a premium to market, modelled as an adjustable input starting at 15%
**Date:** 2026-09-18
**Decision:** MOCSI prices above the market, and the premium is justified by
provenance (where the compute runs, who owns the site, what MOCSI will not do
with the workload). The financial model carries the premium as **one adjustable
input, set initially to 15%**, rather than as a price typed into each revenue
line. Every price in the model derives from the reference price times one plus
that input, so the whole model re-prices when the number changes.
**Reasoning:** The premium is the assumption most likely to be wrong and most
likely to be argued about with funders and customers, so it belongs where one
edit moves everything downstream and sensitivity is a matter of changing a cell.
15% is a starting value for the model, not a finding. The two-track plan Matt
Victor circulated on 2026-09-17 already prices Track B "on provenance, at or
above market," so this settles the direction and gives the modelling a number.
**Alternatives rejected:**
- **Price at market, per the language in D-20260903-01.** Rejected as the
  business model: paying for local, community-owned, mission-locked compute is
  the thing MOCSI sells, and pricing it at market gives buyers no price signal
  to react to and MOCSI no margin for the harder siting.
- **Price below market.** Already retired in D-20260903-01 ("low cost" language
  removed), and unreachable: Maine's industrial electricity rate is roughly
  twice Texas's or Louisiana's, and the cooling advantage is worth far less
  than the rate difference (~20x less, per the September cooling analysis).
- **Hard-code the price in each revenue line.** Rejected because it makes
  sensitivity analysis a rewrite and lets different sheets drift apart.
- **Set the premium by segment now** (a different number for public-interest
  buyers than for commercial ones). Deferred rather than rejected: one input
  first, segmentation once there is evidence about what each segment will pay.
**Dissent:** Nothing in the record supports 15% specifically. No customer has
agreed to any price, and the letters of intent gathered in Washington are not
yet tabulated with the prices discussed. The figure is a modelling input until
those conversions happen, and it should not appear in an external document as
though it were tested.
**Revises:** D-20260903-01 (item 3, price language), on the substance of what
MOCSI charges. The external wording set there ("our pricing is competitive")
still stands, and the premium stays internal until someone decides to publish it.
**Opens:** Q-20260918-01

## D-20260918-02 — The grant package models Track B as used NVIDIA GPUs, liquid cooled, with the facility as a separate sub-project
**Date:** 2026-09-18
**Decision:** The Track B grant package carries two models in `GrantPackage/`.
`NvidiaUsedLiquidCooledModel.xlsx` is Tom Law's v76 cut to one path, used NVIDIA
datacenter GPUs, with the servers cooled direct-to-chip by liquid. It prices
compute only. `FacilityUpgrades/` holds a separate sub-project, with its own
workbook and memo, for the building work that path needs: electrical service
and distribution, backup power, and the liquid cooling plant. The compute model
pays for the facility through a facility charge per nameplate kilowatt per
year, which the facility workbook computes.
**Reasoning:** The two have different lives (6 years for GPUs; 15 to 40 for
the plant and service), different owners (much of the plant stays with the
building), and different funders (infrastructure and energy grants will fund
the building and will not fund used GPUs). Judged together, the facility
capital swamps the compute case; judged apart, each can be defended on its
own terms. Three corrections to v76 came out of the work and are carried in
the new model: v76 counted GPU power only (5.6 kW per 8-GPU server against
about 9.2 kW liquid-cooled and 10.2 kW air-cooled, whole server); its
next-generation part was 750 W where the B200 it stands for is 1,000 W; and
its $400/kW facility cost was unsourced. Mid-case results: facility capex
**$1.78M** ($0.88M–$3.26M), a facility charge of **$378/kW-yr** if that capex
is grant-funded (about $1,793 if it must be repaid at 6%), and six-year
revenue per dollar of cost of **1.29** (1.12 in the repayment case) against
1.36 in v76.
**Alternatives rejected:**
- **Air cooling.** Built first on a misstatement of the brief and discarded
  the same day. Air cooling makes heating the building from the servers
  depend on a heat pump, which the 2026-09-14 heat-reuse study found
  marginal, and at about 20 kW per rack it sits at the limit of perimeter
  cooling.
- **Facility capex inside the compute model.** Tried in the air-cooled
  version: it put the compute path $0.9M over the $2M envelope and hid which
  costs belonged to which asset.
- **Sizing to the illustrative 28 kW Stage 1 load or the 50 kW figure used
  earlier today.** The 28 kW figure was a Claude session's assumption
  (D-20260825-03 dissent) and appears nowhere in v76; both understate what
  v76's own purchase plan draws.
**Dissent:** Used NVIDIA H100/H200 is the grant package's **modelling basis**,
taken from v76. It does not settle the accelerator, which stays open
(D-20260826-02). No vendor or contractor has quoted any facility line; about
half the mid total is engineering judgment. No used liquid-cooled HGX systems
were found for sale, so the model assumes a cold-plate retrofit ($8,000 per
server mid) that moves warranty risk to MOCSI. The compute hardware now runs
$32k over the $2M envelope. Electricity stays at v76's $0.22/kWh placeholder
in the model.
**Bears on:** D-20260821-02, D-20260825-03, D-20260826-02.
**Opens:** Q-20260918-02, Q-20260918-03

## D-20260918-03 — Record the Maine colocation comparison as the answer to "why not a Maine data center"
**Date:** 2026-09-18
**Decision:** The six-year colocation comparison is kept in the repository as
`MaineColocationComparison.md` (copied from the research directory). It is the
reference answer when a funder asks why MOCSI does not rent space in an
existing Maine data center.
**Reasoning:** Its findings bear directly on the grant package. No Maine colo
publishes support for 20 kW direct-to-chip racks (FirstLight Brunswick tops
out at 12–15 kW), so the Maine colo route means air-cooled servers one per
cabinet. At mid, six years of Maine colo cost about **$2.60M** against
**$0.73M** at the own site with the facility grant-funded, and **$2.51M** with
the facility capex counted in full. The crossover facility capex is $1.87M
mid, against the $1.78M estimate. The Centra 340 Cumberland quote on file is
expired (2026-06-19) and undersized: 5.76 kW per cabinet cannot power one
10.2 kW server.
**Alternatives rejected:**
- **Leave it in the untracked research directory.** Rejected at Fletcher's
  request to save it; the grant package cites it.
**Dissent:** No operator has quoted this fleet. The Boston row is inference,
since no Boston colo publishes rates. The own-site figures inherit every
uncertainty of the facility sub-project (D-20260918-02) and of the unconfirmed
local electricity rate. 340 Cumberland stays disqualified on community
ownership regardless of cost (D-20260826-01).
**Bears on:** D-20260826-01, D-20260918-02, Q-20260918-03.

## D-20260918-04 — Research moves into the repository as `research/`, exempt from hook rule 1
**Date:** 2026-09-18
**Decision:** The research directory moves from `~/mocsi-research` (a plain,
untracked directory outside the repository) into the repository as
`research/`, tracked in git. `hooks/pre-commit` exempts `research/*` from
rule 1, so a commit touching only research needs no DecisionLog entry. A
commit that also touches other content still needs one. `~/mocsi-research`
remains as a symlink to `research/` so older references resolve.
**Reasoning:** Research lived outside the repository so that drafts could be
revised without a decision entry each time. That freedom was bought at three
costs: nothing was versioned, tracked files cited research by absolute paths
that break in any other clone, and the project's work was split across two
directories. Exempting the directory from rule 1 keeps the freedom and removes
all three costs. The GitHub repository is private, and the research is
internal (the Van Buren quiet rule, D-20260916-02, governs public mention).
**Alternatives rejected:**
- **Make `~/mocsi-research` its own git repository.** Versions the work but
  leaves it outside the project and keeps the absolute-path references.
- **A gitignored `research/`, like `meetings/`.** Keeps it with the project
  but unversioned, and gitignored files in a worktree vanish with the
  worktree.
**Dissent:** Research now travels with every clone and to every collaborator
granted access. Anything that should not (third-party correspondence,
transcripts) still belongs in `email/`, `meetings/`, or `private/`.
**Bears on:** D-20260821-01, D-20260823-01, D-20260916-02.

## D-20260918-05 — The compute model adds a provenance premium, service lines, a financed-facility case, and a fleet-size sweep
**Date:** 2026-09-18
**Decision:** `GrantPackage/NvidiaUsedLiquidCooledModel.xlsx` (and, on the
same basis, `research/20260918-AmdInstinctLiquidCooledModel.xlsx`) gains four
changes, each a labelled input:
- **Provenance premium** (Inputs B42), 15%, multiplies all revenue:
  GPU rental and every service line. "Provenance premium" is the internal
  name.
- **Inference share of GPU capacity** (Inputs B43), a flat 30% in every year
  (Fletcher's figure). Rental revenue and rental customers scale by 70%. The
  other 30% is sold as **inference seat subscriptions**.
- **`ServiceLines` sheet:** inference seats (200 rising to 3,500 at $20 a
  month), agent hosting on CPU servers (up to three), and RAG projects (one
  rising to six a year at $25k) with support retainers. Prices come from
  `research/20260918-AiServicePricingBenchmarks.md`; volumes are marked
  [ESTIMATE] for Fletcher to overwrite.
- **Financed-facility case:** `FacilityUpgradesModel.xlsx` Summary gains a
  20-year, 7.5% loan block ($172,985 a year on $1.76M; $1,945 per kW-yr
  with upkeep). The compute model's Inputs B44 sets the **grant share of
  facility capex** (default 100%, since no grant source is named yet,
  Q-20260918-03); the charge blends linearly from $378 at 100% to $1,945 at
  0% (50%: $1,161.50, cumulative cash $3.27M by year 5).
- **`FleetSweep` sheet** (NVIDIA only): results at 4 to 16 servers under both
  facility cases, produced by a scripted re-run.

Mid results with a grant-funded facility: six-year revenue $9.71M, revenue
per $1 of cost 1.92, cumulative cash $3.72M by year 5. Financed: 1.63 and
$2.82M. With the premium, the inference share, and the service volumes at
zero, the model returns exactly to its earlier $6.62M revenue.
**Reasoning:** Fletcher is preparing the grant package for a first,
sympathetic audience and wants the revenue mix to reflect the products in
`BusinessPlan.md`: inference, agent hosting, and engineering services
alongside rental. The research showed that commodity per-token pricing earns
less per GPU-hour than rental ($1.60-2.25 against $2.30-3.34), so inference
is sold as seats. That keeps D-20260824-14 (sell capacity, not tokens) intact.
The financed case shows the facility cost if no grant covers it. The sweep
answers how many servers the plan should buy.
**Alternatives rejected:**
- **Per-token inference pricing.** Earns less than renting the GPU out.
- **Baking the premium into the rental formula.** It would miss the new
  service lines; one multiplier on every line keeps the model consistent.
**Dissent:** Every service volume is a guess, and the service lines now
carry most of the growth. The sweep shows that fleet size moves value little
(grant NPV $2.40M at 4 servers against $2.76M at 12), because service revenue
does not depend on the fleet. At 12 servers the inference GPUs run at 23% of
capacity in year 5, and inference earns less than the rental it displaces
until year 3. The per-kW facility charge assumes the facility is sized to the
fleet.
**Bears on:** D-20260918-01, D-20260918-02, D-20260824-14, D-20260821-05.

## D-20260918-06 — The Track B ask is financing: launch hardware plus working capital
**Date:** 2026-09-18
**Decision:** The Track B compute build is to be financed in full. The amount
covers the launch hardware ($1.424M) plus working capital equal to the
unfinanced plan's cash low point ($0.757M) and a $200k cushion: **$2.381M**
at mid with the facility grant-funded ($2.496M if the facility is financed
too). A new `Financing` sheet in `GrantPackage/NvidiaUsedLiquidCooledModel.xlsx`
computes it, with a 5-year level loan at 7.5% (both [ESTIMATE]): $588k a year,
$561k interest, and lowest year-end cash after payments of $0.98M. The deck
`GrantPackage/TrackBGrantDeck.pptx`, modelled on the June 11 deck, carries
the figure as its ask.
**Reasoning:** Fletcher directed it: the ask must cover working capital as
well as hardware, and all of it is to be financed.
**Alternatives rejected:**
- **A grant for launch hardware only ($1.42M).** Left working capital unfunded.
**Dissent:** The annual model's low point already nets the launch hardware
against a full year of year-0 revenue, so hardware plus low point counts part
of the hardware twice. It is held as a ramp-up reserve, since year-0 revenue
will not arrive on day one. A specific debt ask needs counsel before the deck
circulates.
**Bears on:** D-20260918-05, D-20260918-02.

## D-20260918-07 — External documents may name NVIDIA
**Date:** 2026-09-18
**Decision:** The claims-discipline bar on naming an accelerator in external
documents is relaxed for NVIDIA. The Track B deck and narrative now say
MOCSI runs used NVIDIA datacenter GPUs: H100 at launch, with H200 added in
years 2 and 4, as the grant-package model assumes.
**Reasoning:** Fletcher directed it. The plan is going with used NVIDIA, and
a funder reading the financials needs to know what hardware they rest on.
**Alternatives rejected:**
- **Keep "used datacenter GPUs" unnamed.** Left funders unable to check
  the hardware prices and power figures behind the model.
**Dissent:** Naming the part ties external documents to a hardware choice
that CurrentState still lists as unsettled (D-20260826-02); a change of
vendor now means revising circulated documents. The MI300X withdrawal stands.
**Bears on:** D-20260826-02, D-20260918-02, D-20260918-06.

## D-20260918-08 — Track B narrative and two packages: reviewer and funder
**Date:** 2026-09-18
**Decision:** The Track B grant package gains a narrative
(`GrantPackage/TrackBNarrative.md`, drawn from `OnePager.md` and
`BusinessPlan.md`) and two assembled packages. `GrantPackage/Review/` goes
to Matt Victor, Josh Tan, and Tom Law: a cover note with role-specific
questions and the open issues, comments due 2026-09-23, plus dated copies of
the deck, narrative, both workbooks, the facility memo, the colocation
comparison, and the pricing research. `GrantPackage/External/` is the
funder package: the deck and narrative as PDFs, a financial summary and a
facility summary generated from the model, and a cover-letter draft with
grantor and lender variants. The funder package is assembled after reviewer
sign-off and goes out only after counsel reviews the financing ask.
**Reasoning:** Fletcher asked for a review package and a funder package.
Reviewers need the working files and the weak points; funders need finished
PDFs that carry no internal notes, estimates flags, or site references.
**Alternatives rejected:**
- **Send funders the working model.** It carries the site name, internal
  notes, and [ESTIMATE] flags; a cleaned copy is held for a data room.
- **Send `OnePager.md` externally.** It names the host town, which the
  quiet rule bars.
**Dissent:** The `Review/` files are snapshots and will drift from their
sources if the sources change before the review closes.
**Bears on:** D-20260918-05, D-20260918-06, D-20260918-07, D-20260916-02.

## D-20260920-01 — The grant package builds from the model by one command
**Date:** 2026-09-20
**Decision:** Every figure the grant package quotes now comes from the
workbooks through a build pipeline that lives in the repository.
`GrantPackage/scripts/facts.py` reads both models and writes
`build/facts.json`, the single source of every quoted number.
`renderDocs.py` renders `TrackBNarrative.md`, `External/FacilitySummary.md`,
and `External/FinancialSummary.md` from templates in
`GrantPackage/templates/`. `patchDeck.py` renders the deck's figures, tables,
and three charts from the same source, driven by `templates/deck.json`.
`makeDocs.py` rebuilds the PDFs, the docx copies, and the `Review/` package
copies. `checkConsistency.py` reads every document and the deck and asserts
each money and percentage figure against the model, failing on anything it
cannot account for. `build.sh` runs the chain in order; `build.sh --check`
verifies without writing. `GrantPackage/DEPENDENCIES.md` records what depends
on what. Each generated document carries a provenance stamp: the commit hash
of the model that produced it, plus `+local` when `GrantPackage/` is dirty.
**Reasoning:** A review of the package found numbers hand-copied from the
model into prose, an export flaw that produced two false findings in the
Codex review, and build scripts that existed only in a session scratchpad
and were destroyed when the session ended. The scripts are rebuilt in the
repository, and the documents are generated rather than transcribed, so an
input change cannot reach one document and miss another.
**Alternatives rejected:**
- **Regenerate the deck from scratch.** The generator was lost, and
  rebuilding it risked a visual regression in an artifact reviewers have
  already seen. The deck's layout and wording stay in the `.pptx`; only its
  figures are generated. The tokenised template reproduces the existing
  slides exactly, which is the evidence that the tokenisation is faithful.
- **Check the figures without generating the documents.** A checker alone
  catches a stale figure after someone writes it; generation prevents it.
**Dissent:** The deck's addresses in `templates/deck.json` are positional, so
adding or reordering a shape silently moves them. `deckScan.py` prints the
current addresses, but nothing enforces the link. The pipeline also does not
cover `CoverLetter.md` or `ReviewCoverNote.md`, which stay hand-written and
figure-checked.
**Bears on:** D-20260918-05, D-20260918-06, D-20260918-08, Q-20260920-01
through Q-20260920-06.

## D-20260921-01 — Seats capped by capacity, and the sweep answers the launch question
**Date:** 2026-09-21
**Decision:** Two changes so the model can answer whether MOCSI should launch
with a pilot. First, `ServiceLines` row 27 now reads
`=MIN(planned row 31, capacity row 52 / tokens per seat)`: seats served are
capped by what the fleet can actually serve, and the planned ramp (200 rising
to 3,500) moves to row 31 as the yellow input. Second, `sweep.py` runs two
axes. `FleetSweep` extends down to 1 server and answers what a smaller whole
plan looks like. A new `LaunchRamp` sheet holds the year-4 fleet at the
facility-filling 12 servers and varies only the year-0 purchase, which answers
whether to start with a pilot and grow. Both axes now record the amount
financed, the annual payment, the lowest cash after loan payments, seats served
against seats planned, and the facility's cost recovery at each size.
**Reasoning:** Matt Victor asked on 2026-09-18 and again on 2026-09-20 whether
the jump from a 16-GPU pilot to a 64-GPU launch had been agreed, noting that
Maine partners were told 16. The model could not answer: the sweep started at 4
servers, it varied the year-4 fleet rather than the launch, and the hardcoded
seat ramp meant a small fleet booked the full seat book on a fraction of the
GPUs. A 2-server run would have claimed 138% of its inference capacity.
**Alternatives rejected:**
- **Extend the existing axis only.** Answers what a smaller company looks
  like, which is not the question that was asked.
- **Flag infeasible runs and leave the model alone.** Runs between about 70%
  and 100% of capacity would still carry revenue the fleet could barely serve.
- **Scale the seat ramp with fleet size.** Assumes sales scale with hardware
  rather than with effort, and it moves the base case.
**Dissent:** The cap makes seats a function of hardware at small fleets, which
inverts the causation: in reality the seat book is limited by sales effort long
before it is limited by GPUs. The cap is a ceiling rather than a forecast, and
reading it as a forecast would overstate what a small fleet sells.
**Verification:** The cap is inert at the base plan (year-5 capacity use 23%).
Six-year revenue, revenue per dollar of cost, the amount financed, the cash low
point, year-5 cash, and the seat count are identical to the dollar; all three
generated documents, the deck, and all 165 checked figures are unchanged; the
12-server sweep row reproduces the committed NPV, cash, ratio, and $2,380,990
ask exactly; no run exceeds 100% capacity.
**Bears on:** D-20260918-05, D-20260920-01, Q-20260920-01, Q-20260920-06.

## D-20260921-02 — The grant share of facility capex is a first-class control
**Date:** 2026-09-21
**Decision:** `Inputs!B44` becomes a proper control for the share of facility
capex a grant covers, adjustable anywhere from 0% to 100%. It is formatted as a
percentage rather than a bare decimal, carries data validation rejecting
anything outside 0% to 100% with a hint to type "40%" or "0.4" rather than
"40", and shows a prompt explaining the two endpoints. A live readout in
`Inputs` columns D and E reports, for whatever share is set, the facility
charge per kW, the facility charge the compute pays over six years, revenue per
dollar of cost, the amount financed, and year-5 cash. The base case is
unchanged at 100%.
**Reasoning:** The blend already worked, but the control was a bare `1` in one
of about eighty cells on the Inputs sheet, with no way to see what changing it
did short of hunting across three sheets. The grant share is worth $905k of
operating cost over six years and rests on a grant with no named source
(Q-20260918-03), so it is a number people should be able to move and see.
**Alternatives rejected:**
- **A form control (slider or spinner).** Breaks in LibreOffice and Google
  Sheets, and the workbook has to survive both; portability outranks polish.
- **A separate scenario sheet.** Adds indirection, and the sweep scripts
  already cover multi-point comparison.
**Verification:** At 100% and 0% the readout reproduces the committed figures
exactly ($378/kW, $1.92, $2,380,990, $3,161,377; and $1,945/kW, $1.63,
$2,496,321, $2,229,080). The blend is linear across 0%, 25%, 50%, 75%, 100%.
All three generated documents, the deck, and all 165 checked figures unchanged;
every baseline figure identical to the dollar; zero formula errors.
**Dissent:** There is now a second, unwired grant-share input in the facility
workbook (`FacilityUpgradesModel.xlsx`, `Design!B29`, set to 0). No formula
references it. Two controls with the same name in two workbooks, one of them
inert, will mislead somebody.
**Bears on:** D-20260918-05, Q-20260918-03.

## D-20260921-03 — The provenance stamp names the figures, not the commit
**Date:** 2026-09-21
**Decision:** The stamp each generated document carries is now a seven-character
hash of the fact payload (`lib.contentStamp`, over `build/facts.json` minus the
stamp itself) rather than the repository's commit hash. It changes when and only
when a quoted figure changes, and anyone holding the workbook can reproduce it
by running `facts.py`.
**Reasoning:** The commit-hash stamp introduced by D-20260920-01 could never be
correct. The documents are committed alongside the model, so committing them
changes the hash they claim, and regenerating only moves the stamp to the
previous commit. Pushing the first three commits left `build.sh --check`
failing on `main` for exactly this reason: every figure matched and only the
stamp was stale.
**Alternatives rejected:**
- **Hash the workbook bytes.** An `.xlsx` is a zip whose entries carry
  timestamps, so a plain recalculation would churn the stamp with no figure
  changing.
- **Stamp the model's last commit rather than HEAD.** Still regresses whenever
  the model and the documents land in the same commit, which is the normal case.
- **Drop the stamp.** A funder holding a PDF would have no way to tie it to a
  version of the model.
**Dissent:** The stamp no longer points at anything a reader can look up
directly. A reviewer wanting the commit must match the stamp against a build,
and Matt, who works from email attachments, cannot run one.
**Verification:** `build.sh --check` passes and is idempotent. The stamp is
`812b01b` and recomputes to itself from the payload. All 165 checked figures
unchanged.
**Bears on:** D-20260920-01.

## D-20260921-04 — Make cooling type a first-class case, and carry its own error bar
**Date:** 2026-09-21
**Decision:** Cooling type becomes a modelled case rather than a fixed
assumption. `GrantPackage/scripts/coolingCases.py` runs air and liquid at
pilot scale and at full build, writing `CoolingCases` in the compute workbook
and `build/coolingCases.json`. Each case sizes the facility to its own load
and cooling type in `FacilityUpgradesModel.xlsx`, then bills the compute the
per-kW charge that facility earns.
**Reasoning:** The cooling choice moves four inputs in one workbook and four
in the other, and the two are coupled, so it cannot be answered from either
alone. Running a small air fleet against the committed 110.4 kW charge would
flatter it, because that charge spreads a full-build facility across a fleet
that is not there. Sizing the facility per case removes that subsidy: the
pilot's revenue per dollar of cost falls from 3.88 to 3.70 once it pays the
$461 per kW its own building earns rather than the $378 the full build does.
**Alternatives rejected:**
- **A row in `FleetSweep`.** The sweep varies count and timing at one cooling
  type. Cooling changes the building, not the fleet.
- **Quote the air figures from the scenario runs without a sheet.** They would
  not survive a change to any input, and Matt works from the workbooks.
- **Report the full-build air saving as a finding.** The air cooling plant is
  priced by a liquid model. See Q-20260921-04.
**Dissent:** The sheet reports a full-build air case that looks better than
the committed plan on every compute measure, and a reader who skips the notes
will take it as a recommendation. The rate-based check row and the header note
are the only things standing between that column and a bad decision.
**Verification:** The `liquid-base` column reproduces the committed plan:
compute ask $2,380,966 against $2,380,990, NPV $2,761,670 against $2,761,512,
revenue per dollar 1.92 — the $24 gap is rounding on the charge ($377.67
against the 378 stored on `Inputs!B45`). `recalc.py` reports zero formula
errors. Each case asserts its compute peak load matches the facility design
load it was sized to.
**Bears on:** Q-20260921-04, Q-20260921-03, D-20260921-01, and
`research/20260921-AirVsLiquidCooling.md`.

## D-20260921-05 — Give the Cooling sheet a real air path, and leave the liquid path alone
**Date:** 2026-09-21
**Decision:** `FacilityUpgrades/FacilityUpgradesModel.xlsx` `Cooling` gains an
air block at rows 38 to 63: thirteen line items with low, mid, and high figures
taken from the 50 kW air estimate in
`research/20260918-CoolingSystemEstimate.md`, each scaled by its own exponent
against the heat going to room air. It fires when `Design!B10` is zero. Four
edits accompany it: the residual in-row line (row 17) is suppressed in air
mode, the subtotal and the maintenance line pick up the air block, the
summer-peak draw uses an air coefficient of 0.40 kW per kW of room-air heat
rather than the liquid plant's 0.31, and `Summary!B14` and `B15` pay no
heat-recovery incentive and displace no oil without a liquid loop.
**Reasoning:** Twenty of the sheet's twenty-one lines scaled on `Design!B11`,
the heat going to the liquid loop. An air case sets it to zero, so all twenty
vanished and the sheet reported row 17 alone: in-row equipment with no labour,
no electrical, no controls, no commissioning, no engineering, no permits, no
freight, and no building work. That is a price list, and it was being read as
an estimate. The new block puts $412,300 of reference-load lines back.
**Alternatives rejected:**
- **Scale the shared lines (labour, electrical, controls, engineering) on
  total heat rather than liquid heat.** Structurally cleaner, and it would
  have moved the committed liquid figure, which flows into every document and
  the deck. Not worth it to fix a case nobody has adopted.
- **Add a cooling-path selector on `Design`.** A second control that can
  disagree with `B10` is a defect waiting to happen. The mode follows `B10`.
- **Insert the block among the existing rows.** `openpyxl` does not adjust
  formulas on insert, and five cross-sheet references point into this sheet.
  Appending below row 36 moves nothing.
- **Keep quoting the flat $5,800 per kW.** It errs in both directions: it
  overstates a large air plant and understates a small one.
**Dissent:** Every air figure still descends from one 35 kW list price through
two layers of scaling, so the block is better structured and no better
sourced. It now looks authoritative, which the old figure did not, and that is
its own risk. Three vendor quotes remain the only real fix.
**Verification:** The liquid case is bit-for-bit unchanged: cooling plant
$777,752.894, facility total $1,781,543.980, O&M $41,694.712, charges $377.669
and $1,944.563, incentive $18,050, oil $13,403.93, summer draw 36.74244 kW.
`recalc.py` reports zero formula errors on both workbooks. `build.sh --check`
passes with all 165 figures matching and all documents unchanged. The air
results land within 2% of the independent bottom-up estimate in
`research/20260921-AirCoolingCostAtFullBuild.md` ($163,715 against $161,136 at
pilot scale, $548,633 against $555,274 at full build); the model is the better
of the two, because it scales on heat rejected rather than IT load and so
carries the non-scaling lighting and envelope term.
**Bears on:** Q-20260921-04, D-20260921-04, the `CoolingCases` sheet, and
`research/20260921-AirCoolingCostAtFullBuild.md`.

## D-20260921-06 — Level the air cases to N+1, and say what is not redundant
**Date:** 2026-09-21
**Decision:** The `Cooling` sheet's air block gains a redundancy line (one more
unit with its condenser, piping, and circuit, at $50,000 / $85,000 / $150,000
against the 54.5 kW reference, exponent 0.8, carrying the same minimum-unit
floor as the first equipment line), and its maintenance reference rises from
$4,000 / $8,000 / $12,000 to $6,000 / $12,000 / $18,000 to service three units
rather than two. `CoolingCases` gains two rows stating the cooling and power
redundancy of every case.
**Reasoning:** The liquid lines name N+1 on CDUs, dry-cooler fans, in-row
units, and pumps. The air block I built earlier the same day was N. Comparing
their totals was not like for like, and it flattered air by the cost of a
spare unit in a comparison already circulated in this session.
**Alternatives rejected:**
- **A redundancy selector on `Design`.** It would apply to one side only,
  since the liquid block bakes N+1 into its line descriptions. That trades a
  visible asymmetry for a hidden one.
- **Strip N+1 from the liquid block instead.** Cheaper to model and it would
  move the committed liquid figure through every document and the deck.
- **Leave air at N and note the difference in prose.** The note was already
  there, in `research/20260921-AirCoolingCostAtFullBuild.md`, and I compared
  the totals anyway. A note is not a control.
**Dissent:** Nothing else in the facility is redundant. One transformer, one
switchboard, one automatic transfer switch, one generator, and one UPS mean a
fault in any of them takes the site down with both power sources healthy.
Buying N+1 cooling on top of a single-path electrical system spends $171,698
on the second-most-likely failure mode. The right sequence may be to price
redundancy across the whole facility at once, and this decision does not do
that.
**Verification:** Liquid case bit-for-bit unchanged (plant $777,752.89, total
$1,781,543.98, charge $377.6695). `recalc.py` reports zero formula errors on
both workbooks. `build.sh --check` passes with all 165 figures matching and
every document unchanged.
**Result:** The ranking flips. Liquid now wins on NPV at both scales, by
$2,199 at pilot and $4,414 at full build, **before** counting the $18,050
incentive and $13,404 a year of displaced oil that air forfeits. At full build
the air facility now costs more than the liquid one ($1,830,151 against
$1,781,544), because air draws 122.4 kW against 110.4 and so needs more
electrical service and more backup. Air stays cheaper on the combined ask
($4,097,908 against $4,162,510) only because its servers need no cold-plate
kits.
**Bears on:** Q-20260921-04, D-20260921-05, D-20260921-04, and
`research/20260921-AirCoolingCostAtFullBuild.md`.

## D-20260921-07 — Buy a modular UPS with a spare module, and say what is still single
**Date:** 2026-09-21
**Decision:** The facility uses a modular UPS with one N+1 power module and
lithium-ion batteries, selected by `Design!B30` (default 1). `BackupPower`
carries the premium over a monolithic unit ($26,000 / $33,000 / $42,000 at the
70 kVA reference, exponent 0.55) plus a commissioning delta, and `Summary!F24`
replaces batteries every 12 years rather than every 4.5. The compute model's
`Inputs!B45` and `B46` move from 378 and 1,945 to **345 and 1,970**. The
narrative and the facility summary now state the redundancy of the design and
what it does not cover.
**Reasoning:** Fletcher has built this configuration in other data centers.
It protects the two things that fail often (a UPS module, and UPS maintenance
that would otherwise be an outage) and it does so at the layer where a spare
is cheap. The exponent of 0.55 carries the real economics: a spare module is a
third of a three-module frame and a sixth of a six-module one, so a small site
pays roughly twice as much per kW for the same redundancy.
**Cost:** $65,473 at full build and $35,561 at the pilot. Annual operating
cost **falls** $3,574 and $573 respectively, because lithium-ion cuts the
battery replacement reserve from $7,329 to $3,755 and removes a service trip
to Aroostook every four and a half years. Net over a 15-year life at 6% is
about $30,000 at either fleet size. The grant-funded charge to the compute
**falls** $32 per kW, since capex is granted and operating cost drops;
financed, it rises $26.
**Alternatives rejected:**
- **A second monolithic UPS.** More capital for the same protection, and it
  keeps VRLA batteries and their replacement cycle.
- **The full N+1 electrical path** (second transformer, main-tie-main
  switchboard, second transfer switch): about $640,000, judged not worth it at
  this scale. Logged as the ballpark it is, not a modelled case.
- **Saying nothing about redundancy.** The documents described no availability
  at all, which invites a reader to assume more than we bought.
**Dissent:** The transformer, the switchboard, the transfer switch, and the
generator remain single, and any one of them stops the site. Buying redundancy
at the UPS while leaving four single points upstream optimises a layer that is
not the binding constraint. The honest defence is that the UPS layer was cheap
and the upstream layer is not, which is a budget argument rather than an
engineering one, and the documents now say so outright.
**Correction this decision rests on:** I reported on 2026-09-21 that the A/B
panelboards were funded and unusable, because rows 20 and 21 buy 12 branch
circuits and 12 rack PDUs for 12 servers. That was wrong. The 12s are two per
rack across **six** racks, as `Electrical!I18` always said ("415 V lets two
60 A PDUs carry a 20 kW rack A/B") and as `Cooling!A14` corroborates ("rack
manifolds, hoses, quick disconnects (6 racks)"). The racks were already
dual-corded, so the package Fletcher approved reduces to the UPS, and its cost
fell from about $195,000 to $65,473 at full build. Rows 19 to 21 now carry
notes saying so.
**Verification:** `recalc.py` reports zero formula errors on both workbooks.
`build.sh` regenerates every document and the deck, and the consistency
checker passes with 33, 24, 28, 9, 19, and 53 figures matching. Model stamp
`db7c111`.
**Bears on:** Q-20260921-04, D-20260921-06, D-20260921-05, and the deck's
slide 13 notes, which were untracked and are now generated.

## D-20260921-08 — Buy a second fiber entrance
**Date:** 2026-09-21
**Decision:** `Electrical` row 37 carries a second, physically diverse fiber
entrance from the building to the ring the site already sits on, at a flat
$10,000 across the low, mid, and high cases, with exponent 0. `Summary!A5` is
renamed to name it, and the compute model's `Inputs!B46` moves from 1,970 to
1,981. The narrative and the facility summary now state the ring and the two
entrances.
**Reasoning:** Fletcher's own figure and his own site knowledge: the site is
on a fiber ring, and the building has one entrance to it. A ring protects
against a cut on either side, and a single entrance throws that protection
away at the last hundred feet. $10,000 to convert a single point of failure
into a protected path is the cheapest redundancy anywhere in this design, by a
wide margin. The flat figure across all three cases is deliberate: this is a
given rather than an estimated range, and the sheet should not pretend to a
spread it does not have. Exponent 0 because a fiber entrance does not scale
with IT load.
**Alternatives rejected:**
- **Add it after contingency so the total rises by exactly $10,000.** It would
  make this the only line in the workbook exempt from contingency. It lands at
  $11,500 at the mid case, and that is the consistent treatment.
- **A separate telecom subsystem row on `Summary`.** It would need a row
  insert, and five formulas plus every downstream reference point through
  there. A 30-year life alongside the rest of the service entrance is right
  for conduit and fiber anyway.
**Dissent:** A diverse entrance is only diverse if the two paths stay apart
all the way to different points on the ring. A second conduit leaving the same
wall into the same trench is decoration at $10,000. The model cannot tell the
difference, and nobody has walked the route.
**Effect:** Electrical $650,794 to $662,294; facility $1,847,017 to
$1,858,517. O&M and the grant-funded charge are unchanged ($38,121 and $345
per kW), because fiber carries no maintenance line. The financed charge rises
$10 per kW.
**Bears on:** the availability estimate (it removes the network single point
of failure), Q-20260921-04, and D-20260921-07.

## D-20260921-09 — Model electricity at 12.5 ¢, the Town's own figure, as an interim
**Date:** 2026-09-21
**Decision:** `Inputs!B11` moves from $0.22/kWh to **$0.125**. `B74`, the
active rate every class reads, follows it. This is an interim held until Bill
Schofield's written rate sheet arrives (Q-20260921-07).
**Reasoning:** The 22 ¢ was never chosen. `D-20260918-02` records it as
v76's placeholder, and 22 ¢ is the Maine state average from the `12.5 ¢ /
22 ¢` spread this repo bars from external use as a blended 2023 marketing
figure. Pricing a Van Buren plant at the state average is pricing it at
roughly double what the site pays, which erased the entire siting argument
from the financial case: the model returned 1.93 revenue per dollar while
paying Portland-area power prices.

12.5 ¢ is the figure Luke Dyer gave, from VBL&P's published line. It is
**conservative against our own estimate**: MPUC components give 10.149 ¢
before tax and 10.71 ¢ with Maine's 5.5% sales tax, and the gap reconciles
almost exactly as the $5 monthly customer charge spread over a residential
300-350 kWh month. At 65,000 kWh a month that charge adds 0.0076 ¢, so MOCSI
should pay less than 12.5 ¢, not more.
**Alternatives rejected:**
- **10.71 ¢, our own estimate.** It rests on an MPUC table whose annual-kWh
  field is identical in every edition from 2024 to 2026, so VBL&P has probably
  not re-reported since 2024. Claiming a rate nobody has confirmed, from a
  table that looks stale, to gain another 1.8 ¢.
- **Keep 22 ¢ as conservatism.** Defensible, and it was not conservatism: it
  was an unexamined inheritance. If a downside rate belongs in the model it
  should be the post-2029 figure (about 19.9 ¢ with tax), chosen and labelled.
- **Wait for the rate sheet.** It has been outstanding since the 2026-09-17
  call and was chased again by phone on 2026-09-21. The placeholder was
  distorting every derived figure meanwhile.
**Dissent:** 12.5 ¢ comes from the Town Manager quoting the utility's
marketing, which is thinner evidence than anything else in the model, and it
now carries a headline that crosses a threshold: revenue per dollar of cost is
**2.04**, so the package can say every dollar returns more than two. That
sentence rests on the weakest-sourced input in the workbook. It should be said
with the rate named, and the narrative already carries the rate.
**Effect:** Six-year electricity $629,928 to $357,914. Revenue per dollar 1.93
to **2.04**. Ask $2,378,561 to $2,343,463. Payment $587,896 to $579,221.
Lowest cash after loan $992,260 to $1,044,779. Year-5 cash $3.18M to $3.47M.
**The cooling conclusion is unchanged.** The compute-only NPV now favours air
by $34,248 at full build, because cheaper power shrinks air's energy penalty.
Over a 15-year plant life at 6% air still loses by $243,868 with heat recovery
counted and by $113,686 with it ignored entirely. `CoolingCases` now states
that arithmetic in its header so the NPV row is not read alone.
**Also fixed:** slide 7's speaker notes were untracked and carried four stale
figures, the same defect found on slide 13 earlier today. They are now
generated from `templates/deck.json`.
**Bears on:** Q-20260921-07, D-20260918-02, D-20260825-03, D-20260921-04
through -06, every figure in the grant package, and the Maine colocation
comparison, which is now measured against a different power cost.

## D-20260921-10 — Two scenario sheets, and what "most profitable" actually means
**Date:** 2026-09-21
**Decision:** `Scenario_Pilot` and `Scenario_FullBuild` are added to the
compute workbook, placed immediately after `Glossary` so they are the first
thing a reader meets. Each is one readable page: the shape, the capital
needed, the six-year return, year-by-year cash, revenue by line, and what to
know. `scripts/scenarioSheets.py` generates both, wired into `build.sh
--scenarios`.
**Reasoning:** The team needs to compare the two real options without opening
`Class_NVIDIA_Datacenter`, which is an engine sheet and reads like one. The
request that prompted this came from misreading that sheet's name as a fleet
size, which is fair: it carries two different 8s a few rows apart (`C7` is
GPUs per server, `B47` is servers bought at launch).

Each case sizes its own facility. The pilot builds an 18.4 kW facility and
pays the $821 per kW that facility earns, rather than the full build's $345
spread across a fleet that is not there. The full build uses the stored
charges and so reproduces the committed package to the dollar.
**A correction to the premise.** The request described 64 → 96 as "the most
profitable scenario." It is not. At the current rate, NPV keeps rising with
fleet size: 12 servers $3.01M, 13 servers $3.09M, 16 servers $3.31M. Revenue
per dollar of cost runs the other way: pilot 4.07, full build 2.04, 16 servers
1.87. **64 → 96 is the most profitable size that FITS the facility as
designed**, at 110.4 kW. Above it a larger transformer, generator, and cooling
plant are needed and that step cost is in nobody's figures. The full-build
sheet says this in its own notes rather than leaving the claim unqualified.
**Alternatives rejected:**
- **Formulas driven by a scenario selector.** One sheet, one switch, and every
  figure live. It cannot work: each scenario is a separate recalculation of
  the whole workbook, so the sheets must hold values.
- **Quote the pilot against the base plan's facility charge.** It would make
  the pilot look better than it is by handing it a facility it has not paid
  for.
**Dissent:** Two sheets presenting two options invite a reader to treat the
choice as binary, when the sweep shows a continuum and the real constraint is
the facility, not the fleet. `FleetSweep` and `LaunchRamp` carry that
continuum, and nothing points a casual reader toward them.
**Verification:** The full-build sheet reproduces the committed figures
exactly: ask $2,343,463, revenue per dollar 2.038, year-5 cash $3,468,253.
Zero formula errors. `build.sh --check` passes with all 167 figures matching.
**Bears on:** D-20260921-09, Q-20260921-04, and the `Class_NVIDIA_Datacenter`
labelling, which still does not say that rows 47 to 49 are the only fleet-size
inputs.

## D-20260922-01 — Scale the modular UPS on the UPS, and recalculate
**Date:** 2026-09-22
**Decision:** `BackupPower!F26:H27` in the facility workbook, the modular UPS
premium and its commissioning delta added in D-20260921-07, now scale on UPS
size (`$B$8/$B$6`, 154.56 kVA against a 70 kVA reference) instead of generator
size (`$B$7/$B$5`, 200 kW against 100 kW). Both workbooks are recalculated, the
new charges are carried into `Inputs!B45:B46` as **$346** and **$1,984** per
kW, and every generated sheet (`FleetSweep`, `LaunchRamp`, `CoolingCases`,
`Scenario_Pilot`, `Scenario_FullBuild`) is re-run.
**Reasoning:** Every other line on the sheet scales on the equipment it
prices: rows 11 to 19 and 24 on the generator, row 20 (the UPS itself) on the
UPS. Rows 26 and 27 were written by copying a generator formula, which I did
when adding them. At the base case the two ratios are 2.00 and 2.21, so the
error is small, and it grows whenever UPS and generator sizes move apart: a
smaller UPS on the same generator would have priced the spare module off the
wrong equipment. An outside review (Codex, 2026-09-21, finding A10 in
`GrantPackage/CodexReview20260921.org`) flagged it; I confirmed the formula
against the sheet.
**Alternatives rejected:**
- **Leave it; the effect rounds away.** The headline figures do not move at
  the precision the documents print, and a formula that prices the wrong
  equipment is still wrong the day someone resizes the UPS.
- **Link `Inputs!B45:B46` to the facility workbook instead of carrying rounded
  literals.** That is finding A13 and it is the better design, but cross-
  workbook links in a LibreOffice-recalculated pair need their own test. This
  entry follows the convention every earlier facility change used.
**Effect:** Facility mid $1,858,517 to **$1,861,923** (+$3,406, of which $2,962
before contingency); range $944,282-$3,363,411 to $946,900-$3,367,878; backup
power $418,470 to $421,876. Battery reserve $3,755 to $3,811 a year, so O&M
$38,121 to $38,177. The modular UPS now costs about $68,900 against the
$65,473 D-20260921-07 recorded, and still lowers annual O&M, by about $3,518.
Charges $345.30 to $345.81 grant-funded and $1,980.58 to $1,984.12 financed.
In the compute model: ask $2,343,463 to $2,343,536; payment $579,221 to
$579,239; lowest cash after loan $1,044,779 to $1,044,761; year-5 cash
$3,468,253 to $3,467,658. Revenue per dollar stays 2.04. The pilot's own
facility falls to $809,575, because its UPS is small relative to its
generator: pilot all-in $1,313,746 to $1,305,987. Model stamp `cb536b0`.
**Bears on:** D-20260921-07, A13 in the Codex review list, every facility
figure in the grant package.

## D-20260922-02 — The grant package proves its figures instead of sampling them
**Date:** 2026-09-22
**Decision:** The build pipeline behind the grant package is rebuilt around
provenance. Every document, including `CoverLetter.md` and
`ReviewCoverNote.md`, is now rendered from a template, and the consistency
check asks where each figure came from rather than whether it merely exists
somewhere in the model. **Edit the templates in `GrantPackage/templates/`
from now on; a hand edit to a rendered document fails the check.** The work
closes 17 of the 18 build-pipeline findings in an outside review and B18 in
part (`GrantPackage/CodexReview20260921.org`).
**Reasoning:** The old check tested set membership: a figure passed if it
equalled any model value at any format. `build.sh --check` reported all 167
figures matching on 2026-09-21 while `FacilitySummary.md` shipped facility
ranges whose components missed their own stated total by $57k, because those
ranges were typed into the template and allowlisted. A check that passes a
table that does not add up gives false assurance, which is worse than none.
What the check now enforces:
- **Provenance.** Each output must equal its template rendered from
  `build/facts.json`; each deck element in `templates/deck.json` must equal its
  rendered string on the shape pinned to its address. Every figure in literal
  text (money, percents, table amounts, counts, units, ranges, spelled-out
  money) must be in `ALLOWED`, which now holds only outside facts, each with a
  source. Deck charts are compared point by point with the model.
- **Rounding** is half away from zero, as Excel displays, in renderer and
  checker alike, pinned by tests to fixed strings. It caught a live error:
  six-year engineering revenue is $1,184,500 and was published as 1,184
  against its own row summing to 1,185.
- **Sign contract.** Prose quotes money as a positive amount and carries the
  direction in words, so a scalar money token that receives a negative stops
  the build and names itself.
- **Freshness.** `facts.py` recalculates a copy of each workbook and refuses
  if any stored value differs. Every generated result records a fingerprint of
  the model's formulas and inputs, and anything built from a stale one fails.
  `facts.py` fails the build if "every fleet from 4 to 16 servers returns more
  than it costs" stops holding in the sweep.
- **Shipped copies** are checked by content: Review workbooks and deck byte
  for byte, PDFs and docx for every figure of their source. The deck PDF is
  exported on every build; it had been a day stale in `External/`.
- **Safety.** Scripts edit a workbook through a temp copy that replaces the
  original only after a clean recalculation, and `lib.recalc()` trusts only
  the recalculation's JSON verdict and exit status. `build.sh --check` writes
  nothing, verified by hashing every file in `GrantPackage/` around it.
- **A self-test,** `scripts/testChecker.py`, plants 49 errors of the kinds
  above and runs on every build.
**Found on the way:** the facility loan was rendered with the compute loan's
rate (`Financing!B5`) and a hand-typed "20-year" in four templates, the deck
table, and the slide 7 chart label. Both are 7.5% today, so every check
passed; a change to the compute loan would have restated the facility loan
while its charge stayed at 7.5%. Both now come from `Summary!F31:F32`. The
allowlist also carried three model inputs typed straight into slide 15, one
entry describing the wrong input (25% is hardware cost decay, `Class!B15`),
and two entries nothing used.
**Alternatives rejected:**
- **Tighten the membership test.** Membership cannot tell a right number in
  the wrong place from the right number in the right place, however strict
  its formats.
- **Leave the cover letter and review note hand-written.** They are the two
  documents most likely to be edited in a hurry before a send.
**Dissent:** Templating the cover letter costs Fletcher the ability to edit
it directly, and the letter is meant to be adapted per recipient. The
per-recipient copy can still be written from the rendered letter; the
template is the checked source of its figures.
**Still open:** B18 in part (bare numbers without a unit, numbers written as
words, dates) and all sixteen model and document findings from the same
review's Run A. **A correction:** I first reported the review as 38 findings,
26 blocking; the list holds 36 and 24.
**Bears on:** D-20260920-01, D-20260921-03, D-20260922-01,
`GrantPackage/DEPENDENCIES.md`.

## D-20260922-03 — Fix the ten review findings that needed no decision
**Date:** 2026-09-22
**Decision:** Ten of the sixteen model and document findings from the outside
review (Run A in `GrantPackage/CodexReview20260921.org`) are fixed:
- **A12.** Every `Electrical` line in the facility workbook scales on
  `Design!B6`, the full-build load. `Design!D8` always said the service is
  sized for the full build whichever phase the plant is sized for; the
  formulas read the phase-dependent `B9`.
- **A11.** One 480 V mechanical panel was priced in both `Electrical` row 19
  and `Cooling` row 25. Cooling row 25 drops a $5k/$8k/$12k panel allowance
  [INFER] and now carries only feeders and wiring.
- **A1.** The liquid plant's discrete equipment (CDUs, dry cooler, trim
  chiller, residual DX, N+1 pumps) is floored at 55% of its reference cost,
  new input `Cooling!B11`, the same basis as the air block's `B46`: a small
  plant still buys whole units. Inert at the full build.
- **A13.** `Inputs!B45:B46` stay literals, and `facts.py` refuses to run when
  they differ from the facility workbook's rounded charges. A LibreOffice link
  between the two workbooks would resolve by file path and break when the
  repository moves.
- **A7.** A third values-only sheet, `Scenario_FullBuildFinanced`, stores the
  facility-financed case the financial summary quotes.
- **A16.** The $640,000 fully redundant path moves into a memo row,
  `Summary!A43`, outside every total, with its range and source.
- **A5.** "Operating cash flow covers repayment" is true: revenue less
  operating cost exceeds the payment in every year, at the thinnest $704k
  against $579k in year 0. The review tested cash after hardware. What the
  sentence omitted is that year 2's expansion hardware leaves that year short
  and the working capital carries it. The cover letter now says so, and
  `facts.py` checks both halves: a payment operating cash flow cannot cover
  stops the build, and the years that draw on the reserve are a token.
- **A8, A15, A18.** The documents say what revenue per dollar leaves out
  (loan interest; in the grant case, the facility's capital) and that it is
  not a coverage ratio; the rate is an interim pending the rate sheet; and the
  cover letter separates MOCSI's operation of the GPUs from the community's
  ownership of the building and part of the facility.
- **A4, disclosure half.** The facility summary and the narrative say heat
  recovery needs warmer-water servers, low-temperature distribution, or a heat
  pump. The figures are D-20260922-04.
**Reasoning:** Each has one right answer, and none turns on a business choice.
**Effect:** Facility mid $1,861,923 to $1,852,696 (A11); financed charge
$1,984 to $1,976. The grant-funded headlines do not move. The pilot's own
facility rises (A1), recorded with D-20260922-04's figures.
**Bears on:** D-20260922-01, D-20260922-02, D-20260922-04.

## D-20260922-04 — Bill the facility on capacity, call the base space rent, price the heat pump, and disclose the premium
**Date:** 2026-09-22
**Decision:** Fletcher's calls on the six review findings that turned on a
choice:
- **A2: the compute pays the facility charge on design capacity from day
  one.** `Class_NVIDIA_Datacenter!B78:G78` now bill `MAX(peak kW, Inputs!B47)`,
  where `B47` is the facility design load (110.4 kW), copied from the facility
  workbook and checked by `facts.py`. Billing on actual kW left the facility
  short while the fleet ramped (74 kW in years 0 and 1), about $58k a year in
  the financed case. This is how a colocation lease works.
- **A3: the $15,000 is space rent.** Tom Law: in earlier models it covered the
  cost of locating in a colocation data center. It stays, renamed, as the
  charge for the floor space the equipment occupies; it is separate from the
  facility charge, which pays for the upgrades (Q-20260921-01, resolved).
- **A4: keep the heat-recovery benefit and price what it needs.** A heat-pump
  booster, $50k/$85k/$120k from the range the workbook's own note gave, is
  line 66 of `Cooling`. It prices only with heat recovery on and W32 water,
  and drops out if servers accept W40.
- **A9: a monthly launch-year cash flow.** New formula sheet
  `LaunchYearMonthly`, with timing inputs proposed for Tom to correct: first
  revenue in month 3, six months to full run rate, collection at 45 days, 40%
  of operating cost following revenue, hardware paid in month 1. Nothing else
  reads it yet; the ask is still sized from the annual low point.
- **A14: disclose the 15% provenance premium.** One line in the financial
  summary's assumptions table. This supersedes the part of D-20260918-01 that
  kept the premium out of external documents.
- **A17: "Aroostook" stays** in the facility summary. Fletcher's judgment
  under the quiet rule (D-20260916-02): a county name is not the town.
**Reasoning:** A funder diligencing the workbook finds the premium either way,
and 13% of revenue found undisclosed reads worse than stated. The heat pump
makes the heat-recovery benefit and its cost appear together, so neither the
benefit nor the omission flatters liquid cooling. Capacity billing is the
honest charge for a building that costs nearly the same half-full.
**What the monthly sheet says:** the loan as sized covers the launch ramp.
The deepest cash need before financing is $1,505,625 against the annual low
point of $732,269, and month-end cash never falls below $528,738, because the
ask adds the hardware to a low point that already contains it (the double
count the review note has flagged since 2026-09-18). The slow start does cost
about $348,182 of cash the annual model assumes in year 0; carried forward,
the lowest year-end cash after loan payments would be about $0.69M against
$1.04M. At the default timing, the annual model overstates cash and the ask
is adequate.
**Dissent:** Capacity billing and the heat pump both land on the financed
case hardest. Revenue per dollar there falls from 1.70 to 1.64 and the lowest
year-end cash from $0.72M to $0.56M.
**Effect (both entries, from the committed state):** Facility mid $1,861,923
to **$1,950,728** (heat pump +$98,032 after contingency, A11 -$9,226); range
$946,900-$3,367,878 to $996,637-$3,502,816. Charges $346 grant-funded
(unchanged, since the heat pump adds capital and no upkeep) and $1,984 to
**$2,063** financed. Grant-funded: ask $2,343,536 to **$2,356,269**; payment
$579,239 to $582,387; revenue per dollar 2.038 to **2.024**; lowest cash after
loan $1,044,761 to $1,041,613; year-5 cash $3,467,658 to $3,432,823.
Financed: ask $2,464,093 to $2,545,826; lowest cash $724,623 to $555,185;
year-5 cash $2,493,119 to $2,238,418. Pilot all-in $1,305,987 to $1,458,209
(its facility $809,575 to $954,308: A1, the heat pump, and capacity billing).
Model stamp `ae26598`.
**Bears on:** D-20260918-01, D-20260916-02, Q-20260918-02 (the water class,
still open), Q-20260921-01, every figure in the grant package.

## D-20260922-05 — Size the ask from the monthly launch year, with a $350,000 cushion
**Date:** 2026-09-22
**Decision:** The loan is the smallest amount that keeps cash at or above a
**$350,000 cushion** at every month-end of year 0 (`LaunchYearMonthly` row 23)
and at every year-end after (`Financing` row 29). `Financing!B13` takes the
larger of the two; since the payment is proportional to the loan, each
month's requirement solves directly and no iterative calculation is needed.
`Financing!B11` becomes the launch-ramp need beyond the hardware, and
`Financing!B30` shows the lowest month-end or year-end cash, which `facts.py`
requires to equal the cushion. The cushion rises from $200,000 (Fletcher).
This replaces the sizing rule of D-20260918-06 (hardware plus the annual cash
low point plus a cushion).
**Reasoning:** The annual low point already netted the launch hardware, so
adding it to the hardware counted the hardware twice. The old ask carried
$329k of unplanned slack over its own cushion at the monthly low. Sizing from
the month-by-month cash flow makes the cushion the real floor and makes the
ask answer to the launch timing, which is the true driver of the need.
**Dissent / risk:** The ask now depends on timing inputs Tom has not yet
confirmed (first revenue in month 3, six months to full run rate, collection
at 45 days); a later start raises it. The year-end test uses the annual cash
rows, which assume a full year of year-0 revenue. Carrying the slow start's
lost cash forward (about $348k grant-funded, $320k financed) leaves the
grant-funded case above the cushion (lowest about $674k, year 2) but puts the
financed case at about $170k in year 2, below it. The pilot's working
capital rises, because capacity billing fixes its charges while its revenue
is small.
**Effect:** Grant-funded: ask $2,356,269 to **$2,142,269** (hardware
$1,424,000, launch-ramp need $368,269, cushion $350,000); payment $582,387 to
**$529,493**; interest $555,664 to $505,198; lowest month-end cash in year 0
$528,738 to **$350,000** (month 8); lowest year-end cash $1,041,613 to
$880,507; year-5 cash $3,432,823 to **$3,483,289**. Financed: ask
$2,545,826 to $2,294,478; lowest year-end cash $555,185 to $490,210; year-5
cash $2,238,418 to $2,297,691. Total capital, full build $4,306,997 to
$4,092,997; financed $4,496,553 to $4,245,206; pilot $1,458,209 to
**$1,694,114** (loan $739,806). Revenue per dollar and NPVs are unchanged.
Model stamp `1beabca`.
**Bears on:** D-20260918-06, D-20260922-04, every financing figure in the
grant package; counsel review of the specific ask (the amount has changed).

## D-20260922-06 — Charge the heat pump for its electricity and its upkeep
**Date:** 2026-09-22
**Decision:** The heat-pump booster priced in D-20260922-04 now carries its
running costs.
- **Maintenance:** `Cooling` row 67, $1,500/$2,500/$4,000 a year [INFER],
  about 3% of its capital, scaled and gated like row 66 and folded into
  cooling maintenance (row 36). The facility charge carries it: $2,403 a year
  at the full build.
- **Electricity:** the heat delivered is the oil saved times the existing
  boiler's seasonal efficiency (80% [INFER], `Cooling!B69`), divided by the
  heat pump's heating COP (4.5/3.5/2.8 by case [INFER], `Cooling!B68:D68`):
  24,182 kWh a year at the mid case. It is priced at the compute model's
  electricity rate, copied into `Cooling!B70` and checked by `facts.py`.
  `Summary!B16` books it, $3,023 a year, against the $13,404 of displaced oil,
  so the building's net saving is **$10,381**. It stays with the building,
  like the oil saving, and does not enter the compute's power bill or PUE.
- **Lifecycle:** a heat-pump row (15-20 years, stays with the building).
**Reasoning:** D-20260922-04 priced the equipment and left the running costs
out, which overstated heat recovery's benefit by about $5,400 a year.
**Not done:** The Efficiency Maine incentive is still computed on gross oil
saved; whether Efficiency Maine counts the heat pump's electricity against
it is unknown. The heat pump's electrical load (about 20-25 kW at design
weather) is not in the electrical service or generator sizing; the service
has the headroom. The CoolingCases note's 15-year lifecycle comparison ($243,868
in favour of liquid) was computed on gross oil and has not been recomputed.
**Effect:** Facility charges $346 to **$368** a kW-year grant-funded, $2,063 to
**$2,085** financed (Inputs B45:B46). Facility capital unchanged at
$1,950,728. Grant-funded: ask $2,142,269 to $2,143,772; payment $529,493 to
$529,865; revenue per dollar 2.024 to 2.018; lowest year-end cash $880,507 to
$879,209; year-5 cash $3,483,289 to $3,468,204. Financed: ask $2,294,478 to
$2,297,220; revenue per dollar 1.636 to 1.632; lowest year-end cash $490,210
to $483,598; year-5 cash $2,297,691 to $2,282,314. Pilot total capital
$1,694,114 to $1,695,666; full build $4,092,997 to $4,094,499. Sweep grant
NPVs $2.35M (4 servers), $2.96M (12), $3.29M (16). Model stamp `2f99325`.
**Bears on:** D-20260922-04, Q-20260918-02 (the water class: W40 servers
remove the heat pump and all three costs), every facility-charge figure.

## D-20260922-07 — Generate the facility memo and the colocation comparison from the model; clear stale review files
**Date:** 2026-09-22
**Decision:**
- **Both review documents are now rendered by the build.**
  `templates/FacilityUpgradesMemo.md.tmpl` renders
  `FacilityUpgrades/FacilityUpgradesMemo.md`, and
  `templates/MaineColocationComparison.md.tmpl` renders
  `Review/MaineColocationComparison.md`; `makeDocs.py` writes both docx copies
  into `Review/`. The colocation arithmetic is `scripts/coloComparison.py`: the
  Maine colocation inputs (desk research, 2026-09-18) reproduce the published
  Maine totals to the dollar; the host-site side is the compute model's own
  electricity and facility rows plus the facility workbook's low and high
  cases, run by `facts.py`.
- **Cited research may be typed, inside marked blocks.** Literals between
  `<!-- sourced -->` and `<!-- /sourced -->` carry their own citation and are
  exempt from `ALLOWED`; anything the model computes must still be a token,
  and unbalanced markers fail the check.
- **The review note's date comes from the record:** "Snapshot of" takes the
  date of the newest DecisionLog entry, with the model stamp.
- **Removed from `Review/`:** the 2026-09-20 Codex files
  (`CodexReviewFindings.md`, `CodexReviewScope.md`; superseded by
  `CodexReview20260921.org`) and two stale LibreOffice lock files.
- The root `MaineColocationComparison.md` stays as the 2026-09-18 research
  record, with a pointer to the rendered version.
**What changed in the documents:** The memo had $1.78M, a $378 charge, "N for
the generator and cooling", a $75,000 utility transformer, and a "29% to 12%"
return. It now carries $1.95M, $368 and $2,085, N+1 cooling with a modular
UPS, $44k, and revenue per dollar 2.02 against 1.63, plus the heat pump. The
colocation comparison's conclusions move. Grant-funded, the host site costs
27% of Maine colo ($0.69M against $2.60M mid; was $0.73M). Financed over 20
years it costs less in every case ($1.83M mid). With the whole facility paid
inside six years, Maine colo now edges ahead in all three cases (by $12k,
$42k, and $879k), where the 2026-09-18 version had the host site winning the
low case. At mid colo prices the compute keeps $1.56M of year-5 cash (was
"would sink the model", at the old 22 ¢ rate and without service revenue).
Boston could not be reproduced from its stated inputs; it is rebuilt on the
Maine basis at $1.78M/$2.42M/$3.17M (was $1.85M/$2.37M/$2.92M).
**Claims checked:** `facts.py` stops the build if the financed host site stops
costing less than Maine colo in any case, or if the facility loan payment
stops sitting inside the mid annual crossover. The "capex overshoots the
crossover" sentence stops the build through the sign contract if it flips.
**Not done:** `AiServicePricingBenchmarks.docx` is unchanged (market prices,
not model outputs). The colocation prices are still 2026-09-18 desk research
with no new quote. The self-test count in earlier records ("55") was wrong;
it runs 47 assertions.
**Effect:** No model figure changes. The fact payload now includes the memo
and colocation figures, so the provenance stamp moves from `2f99325` to
`e457454` on every document.
**Bears on:** D-20260916-02 ("Aroostook" appears in the review-only
colocation doc, as in the 2026-09-18 version), D-20260826-01.

## D-20260922-08 — Guard hand edits, and fold in the team's review answers
**Date:** 2026-09-22
**Decision:**
- **Hand-edit guard.** `build.sh` (and `--check`) first runs `scripts/guard.py`,
  which compares every generated file with the hash recorded when the build
  last wrote it (`scripts/generated.json`, tracked). A generated file edited
  by hand stops the build before anything is overwritten, naming the source
  to edit instead; `guard.py --accept <file>` releases it. Edit templates,
  the source deck, and the canonical workbooks; never the outputs.
- **Matt's answers (2026-09-18).** A loan or investment from a non-bank is a
  securities offering, so the narrative and both summaries now open with a
  request-for-feedback notice asking readers not to circulate them, and the
  cover letter's lender version asks for feedback ahead of any request and
  asks for confidentiality. Guarantor risk turns on the agreement's
  language; the narrative and financial summary now list what would
  strengthen the plan (loan guarantee, donated hardware, first-year
  operating philanthropy, facility grant) without naming the guarantor. The
  ownership and governance statements stand with "public engagement will
  define the specifics" added (deck slide 3, narrative, cover letter). The
  discretion wording stands.
- **Josh's answers (2026-09-20).** Deck faithful; product lines and $20 seat
  pricing fit; fletcher@kittredge.com added to the contact slide.
- **Tom (2026-09-21).** The $15,000 was a placeholder for the lease and any
  custom installation, not quoted; the financial summary now says so.
- **Review note.** Records the answers, leaves Tom's three questions open,
  and lists Matt's unresolved points: launch size (partners heard a 16-GPU
  pilot; the plan launches with 64), at least one FTE (the model's floor is
  0.25 FTE; a full FTE adds about $101k a year), and a range of debt and
  equity configurations.
**Not done:** None of Matt's three open points is modelled. The deck's
visible slides carry no circulation notice (only the documents do).
Josh's Google Slides copy was not opened; his email names only the contact
change. The follow-up with Nathan Sanders is Fletcher's (he wrote to Nathan on 2026-09-22).
**Also:** The review note's two gaps are closed: Tom's question 2 names every
sheet added since v76, and the open issues add counsel, the financed case's
year-2 dip below the cushion with the slow start carried forward (now a
model figure), and the water class with the heat-pump estimates.
**Effect:** No model figure changes; stamp moves with the new staffing facts.
**Bears on:** D-20260918-08, D-20260921-01 (launch size), D-20260922-04.

## D-20260922-09 — Generate the README
**Date:** 2026-09-22
**Decision:** `README.md` is rendered by the build from
`GrantPackage/templates/README.md.tmpl`, like every other document, and the
hand-edit guard covers it. Its "plan today" figures are model tokens. Its
file index is generated from `git ls-files` and the one-line descriptions in
`GrantPackage/templates/ReadmeFiles.json`; the build stops if a tracked
top-level file or folder has no description, or a description names
something that no longer exists. The guard's manifest is now keyed from the
repository root, since the README sits outside `GrantPackage/`.
**Reasoning:** The old README still described the June plan (16 GH200 GPUs
at Brunswick Landing, $1.3M, "subsidized" $0.22/GPU-hour access), called
MOCSI "community-owned" (barred), and listed eight of some sixty files.
**Fiscal sponsor:** Fletcher confirmed the old README's line, and the template
carries it: a project of Public AI, fiscally sponsored by Metagov, Inc., with a
Maine-specific operating entity to be formed (its form open, Q-20260825-01).
**Not done:** Untracked files (for example `BusinessPlan.md`)
appear in the index only once they are committed.
**Effect:** No model figure changes.
**Bears on:** D-20260922-07, D-20260922-08, D-20260916-02.

## D-20260922-10 — Price general contracting at 3/5/10% by case
**Date:** 2026-09-22
**Decision:** The facility model gains a general-contracting and
construction-management line on each subsystem sheet (`Electrical` 36,
`BackupPower` 25, `Cooling` 37), a share of that sheet's subtotal, at
**3% low, 5% mid, 10% high** (`Design!B32:D32`; `Design!B31` shows the
selected case). Each case column uses its own rate. Contingency then applies
to the subtotal plus this line.
**Reasoning:** Fletcher asked for 10% covering engineering and general
contracting, then noted his own practice was nearer 3%. Engineering is
already priced line by line (`Electrical` 26 PE design $45,000,
`BackupPower` 19 stamped design $14,142, `Cooling` 31 PE-stamped MEP design
$66,659, about 7.6% of the subtotal), as are studies, permits, commissioning
and a remoteness premium, and the equipment lines are quoted installed or
turnkey, so each trade's own overhead and profit is already inside them.
What was missing is the coordination layer alone. 3% buys an owner-managed
job with the trades hired directly, which is Fletcher's practice and fits a
town-owned building; 5% adds the general conditions nobody's line carries
(supervision five hours from anywhere, temporary power and heat, crane
coordination, holding a schedule against a 40-65 week transformer); 10% is a
general contractor holding every subcontractor. The rate is [INFER] until
Van Buren's own contracting practice replaces it.
**Dissent:** At 3% the coordination risk falls on MOCSI, whose plan carries
a quarter of an FTE.
**Effect (facility workbook only):** Mid $1,950,728 to **$2,048,264**; range
$996,637-$3,502,816 to **$1,026,536-$3,853,097**. General contracting at mid:
$28,795 electrical, $18,342 backup, $36,107 cooling. Financed charge $2,085
to **$2,171** per kW-year; grant-funded charge unchanged at $368, since this
is capital and adds no upkeep. Facility loan payment $189,581 to $199,148.
**Regenerated 2026-09-22**, after Fletcher's edits: `Inputs!B46` carries $2,171,
and the whole package (sweeps, cooling cases and scenario sheets included) is
rebuilt at stamp `44ab5cd`. Only the financed case moves in the compute plan:
ask $2,297,220 to $2,307,940, revenue per dollar 1.632 to 1.617, lowest
year-end cash $483,598 to $457,748, year-5 cash $2,282,314 to $2,222,200.
The grant-funded case is untouched, since the grant-funded charge did not move.
**Bears on:** D-20260922-04, D-20260922-06, every facility figure in the
package.

## D-20260922-11 — Present both fleet scales in the review cover note
**Date:** 2026-09-22
**Decision:** The review cover note's **Hardware** section carries the pilot
beside the full build: full build 64 GPUs at launch, 96 by year 4, 110 kW;
pilot 8 at launch, 16 by year 2, 18 kW, with the facility sized to that load.
Each bullet names the workbook sheet a reviewer can open. The pilot's ask,
total capital, and year-5 seat book are quoted against the full build's. The
`What changed` bullet that covered the same ground shrinks to the finding
alone: neither the facility nor the staffing floor scales down with the fleet.
**Reasoning:** Matt Victor's launch-size question (2026-09-18 and again
2026-09-20) cannot be settled by a note that describes only the size he is
questioning. Most Maine partners heard MOCSI would start with a 16-GPU pilot.
Putting both scales in the section that describes the hardware, with the
figures that differ between them, lets the team decide from the same page
rather than from an email.
**Mechanics:** `facts.py` gains `scenarioFacts()`, which reads peak kW, year-5
seats, the ask (`B14`) and total capital (`B16`) off the stored
`Scenario_Pilot` and `Scenario_FullBuild` sheets, so the prose cannot drift
from the sheets a reviewer opens; `renderDocs.py` gains `kwPilot`,
`pilotLoan`, `pilotCapital`, `fullCapital` and `seatsPilotYear5`. The three
money tokens use the same `KM` formatter as the ask, after a first pass set
`$741,358` beside `$2.14M`.
**Effect (documents only; no model figure moves):** The review note proves 79
figures against the model, up from 73. Rendered: the pilot asks **$741k**
against **$2.14M** and needs **$1.74M** of total capital against **$4.19M**;
its inference capacity is full from year 3 and its seat book ends at **2,523**
against 3,500 planned. Package regenerated at stamp `70d88eb`. Fletcher then
added a per-bullet sheet pointer and a staffing memo to Next Areas of Focus.
**Bears on:** the launch-size question still open with Matt; Q-20260920-01,
which sets the facility design load from a 12-server build.

## D-20260924-01 — Start customer marketing materials in Marketing/
**Date:** 2026-09-24
**Decision:** A new tracked directory `Marketing/` holds customer-facing
marketing mockups. The first pass covers **customers only**, in two segments
at equal standing: Maine institutional buyers, and the national market for
public-interest compute. An entry page states what MOCSI is and then splits
between them, under the labels **In Maine** and **Across the US**. Partners,
funders, and researchers get their own materials later.
**Reasoning:** Every external document MOCSI has is funder-facing. Nothing in
the repository sells the service to the people who would buy it, there is no
published price sheet, and the customer FAQ did not exist (`FAQ.md` answers
datacenter-operations questions). Splitting after a statement of what MOCSI is,
rather than before it, means no visitor classifies themselves before knowing
what they are choosing between.
**Contents:** `Identity.md` and `Brand.css` (the spec and its code),
`Index.html`, `Maine.html`, `National.html`, `OnePager.md`, `Faq.md`,
`PriceSheet.md` (generated), and `Render.sh`.
**Effect:** `PriceSheet.md` is generated from
`GrantPackage/templates/MarketingPriceSheet.md.tmpl` through `renderDocs.py`,
so every price is proved against the model (9 figures, 0 literals) and a hand
edit stops the build. The other pieces are hand-written and carry no figures.
Package regenerated and checked at stamp `70d88eb`.
**Not decided:** no logo, no wordmark, and no imagery, because none exists and
inventing one here would pre-empt a decision nobody has made.
**Bears on:** Q-20260902-01, which this answers by acting on it: both segments
are built at equal standing, which is what D-20260824-08 decided.

## D-20260924-02 — Inherit the deck's palette as MOCSI's visual identity
**Date:** 2026-09-24
**Decision:** The palette hand-applied in `GrantPackage/TrackBGrantDeck.pptx`
becomes MOCSI's palette, written down in `Marketing/Identity.md`: sand
`#D8D2C2`, forest `#1F3D2B`, ink `#1A1A1A`, stone `#6B6B66`, terracotta
`#C8553D` as the single accent, with paper tints. Georgia holds for display.
**Charter replaces Calibri for body text.**
**Reasoning:** The deck's colours were chosen deliberately and are the only
visual identity MOCSI has; nothing in the log ratifies them, and they were
trapped inside a `.pptx` where nothing else could use them. Calibri is a
Microsoft Office default rather than a choice, and Charter is already the
repository's PDF face (`makeDocs.py`), so print and web now agree.
**Propagation:** the deck's own body text is now off-spec. Either the deck is
reset to Charter or this decision is amended.
**Status:** proposed, not ratified by the team. `Identity.md` says so.

## D-20260924-03 — The entity name is plural: Maine Open Compute Services Initiative
**Date:** 2026-09-24
**Decision:** Fletcher chose the plural "Services" for the marketing
materials.
**Reasoning:** Plural fits a four-line product set.
**Propagation, unresolved:** `README.md` and `GrantPackage/TrackBNarrative.md`
both say "Service", singular, and both are generated from templates in
`GrantPackage/templates/`. The funder package has already circulated with the
singular, and the review package is with Matt, Josh, and Tom now. This entry
records the choice for `Marketing/` only; **the templates are unchanged and the
two spellings currently disagree.** Settle whether the funder documents follow,
and if so whether the reviewers are told.

## D-20260928-01 — Re-rate Colby from capacity prospect to peer and partner
**Date:** 2026-09-28
**Decision:** In `MaineHigherEdComputeAnalysis.md`, Colby's fit moves from
"A (small-scale), B" to **"B (partner and peer), D"**.
**Reasoning:** Colby already runs an on-campus HPC cluster of 16 systems,
716 CPU cores, 7.5 TB of RAM, and **15 GPUs**, about the size of MOCSI's
16-GPU pilot, operated by central IT (Steve Cousins). The $10M McVey Center
for Computational and Data Sciences sits on top of it as the teaching and
faculty-support layer, and Andrew Tupper joined it in August 2026 from running
HPC at UNC Wilmington. A college with its own pilot-sized cluster is a weak
buyer of pilot-sized capacity. It is a strong peer: its operators know what a
small campus cluster costs to run and where it falls short. The business left
is at the margin: overflow, inference seats for users who will never learn
SLURM, and RAG or training work through McVey.
**Sources:** Colby News, "McVey Center and Computing Innovation Take Flight"
(2026-08-25); colby.edu HPC pages (read 2026-09-28).
**Not known:** the GPU models, which Colby does not publish, and which building
holds the machines.
**Bears on:** the analysis's revenue-shape summary, updated in the same edit.
`UsageEstimateFactors.md` already rates Colby for legitimacy over volume and
needs no change.

## D-20260928-02 — Maine Open Compute Services Initiative, plural, everywhere
**Date:** 2026-09-28
**Decision:** The name is **Maine Open Compute Services Initiative** in every
current document. This resolves the conflict D-20260924-03 left open.
**Changed:** the README and narrative templates, slide 3 of the Track B deck,
and everything generated from them (`README.md`, `TrackBNarrative.md`, the
narrative's PDF and docx, the deck's PDF, and the Review copies).
`ElevatorPitch.md` and `Marketing/` were already plural.
**Deliberately unchanged:** `mocsi-longview-rfp.md.docx`, which is a record of a
draft from the June to August period, and past DecisionLog and ConversationLog
entries, which record what was written at the time.
**Outstanding:** the name is meant to be the legal entity's, and nobody checked
what Bernstein Shur filed. If the filing says "Service", either the filing is
amended or this decision is revisited. Tracked in `TODO.md`.
**Propagation:** the review package the team is reading and the funder package
already circulated carry the singular. The next send carries the plural; nobody
has been told the name changed.

## D-20260928-03 — A live scenario switch in the workbook, and `make` to rebuild
**Date:** 2026-09-28
**Decision:** The compute workbook gains a **Scenarios** sheet whose cell B4
chooses the plan the whole workbook shows: Full build, Pilot, or Full build
with the facility financed. The model's purchase shape
(`Class_NVIDIA_Datacenter` B47, D47, D48, F48) and facility terms
(`Inputs!B44:B47`) are now formulas reading it, so a reviewer can flip the
switch in Excel, LibreOffice, or Google Sheets and watch every sheet
recalculate. A root `Makefile` regenerates everything with `make`.
**Reasoning:** Tom Law found that the scenario and sweep sheets were static
values from scripts he could not see in the workbook. A funder's analyst will
not read Python; a number they cannot trace to a formula reads as an
assertion. Portable spreadsheet formulas cannot re-run a whole workbook, so
the sweeps stay scripted, and their headers now name the cells each row
changes so any row can be reproduced by hand through the switch.
**The scripts became checkers.** `scenarioSheets.py` runs each scenario twice
(inputs set directly, then through the switch alone) and stops if the two
differ. `facts.py` stops if the switch is not on "Full build" or the scenario
sheets are stale. The facility figures each column needs are copied from the
facility workbook by the new `copyFacility.py` (`make facility`), which writes
only on change; copied rather than linked, because a link between workbooks
breaks when the files move.
**Effect:** No document figure moved. The package stamp moved to `36d36a0`
because two stored figures changed by a few dollars. The pilot's facility
charges are now rounded to whole dollars ($889 and $6,134 per kW-year) as the
full build's always were, which moves the pilot's ask from $741,358 to
$741,363. `CoolingCases` now rounds the same way, so its liquid-base column
reproduces the base model exactly ($2,143,772; it was $30 off).
**Found, not fixed:** the committed `FleetSweep` shows a financed ask of
$36,497,057 for one and two servers. `Financing` row 29 divides by one less
the cumulative payment share, which approaches zero, so the ask explodes; the
same formula mishandles loan terms shorter than the horizon. Tracked in
`TODO.md`. The rebuild also depends on `recalc.py` from Claude Code's xlsx
skill; tracked in `TODO.md`.

## D-20260928-04 — State what the 7.5% loan rate assumes, and show 10% and 12%
**Date:** 2026-09-28
**Decision:** `Financing!C5` and the financial summary say that 7.5% assumes
the loan is backed by a guarantee from a nonprofit with a strong balance
sheet. The financial summary shows the plan at 10% and 12%, generated from
model runs (`facts.py`, `rateCases`), with no figure typed.
**Reasoning:** Tom Law (2026-09-25) called 7.5% low for a new entity; FAME
starts at prime plus 2 and SBA loans ran 10-12%. Fletcher's draft reply said
the guarantee assumption was stated in the package. It was not: `Financing!B5`
was a bare 7.5%.
**Effect:** At 10% the ask is $2.13M, lowest year-end cash $1.17M, year-5
cash $4.77M; at 12%, $2.15M, $1.15M, and $4.62M. A higher rate costs margin
and breaks nothing. The term is what breaks the plan, and the short-term case
waits on the row 29 fix (D-20260928-03).
**Bears on:** Tom's item 1 and cover-letter question 3.

## D-20260928-05 — Derive the inference reservation from planned seats, and rent the rest
**Date:** 2026-09-28
**Decision:** The flat 30% of GPU capacity reserved for AI assistant seats
(`Inputs!B43`, 2026-09-18) is replaced by a per-year share on `ServiceLines`
row 57: the whole GPUs needed to serve planned seats at no more than 70% of
their capacity (`ServiceLines!B24`, [ESTIMATE]), never fewer than two, one
70B-class model instance (`B25`, [ESTIMATE]). The GPUs this frees are rented.
`Inputs!B43` now only displays the year-5 share and nothing reads it.
Class rows 73, 91 and 101-103 and `ServiceLines` rows 51 and 55 read row 57.
**Reasoning:** Tom Law asked why seat capacity ran around 20%. The flat 30%
held back GPUs that seats used at most 23% of (year 5), giving up about
$2.3M of rental over six years. Fletcher chose to size the reservation to
demand and rent what it frees.
**Effect:** The reservation is 2 GPUs at launch rising to 10 by year 5 (3% to
10% of the fleet), used at 57-67% of capacity; every planned seat is served.
Six-year rental revenue rises from $5.33M to $7.17M and seat revenue is
unchanged. With D-20260928-07 also in: ask $2.14M to **$2.11M**, lowest
year-end cash $0.88M to **$1.19M**, year-5 cash $3.47M to **$4.95M**,
revenue per dollar 2.02 to **2.23**; financed facility, ask $2.31M to
$2.22M, lowest cash $0.46M to $1.07M, revenue per dollar 1.62 to 1.81. The
pilot's ask rises $741k to $772k, because it now holds 10 of its 16 GPUs for
seats and rents only 6; it no longer runs out of inference capacity.
**Dissent / risk:** All of the gain rests on renting the freed GPUs, at the
80% contract share, to customers no one has signed. Tom's broader point
(revenue already looks optimistic with no commercial labor) applies with
more force now.
**Bears on:** Tom's cover-letter question 2; every headline figure.

## D-20260928-06 — Used hardware is a deliberate choice, and the documents say so
**Date:** 2026-09-28
**Decision:** The plan buys used NVIDIA datacenter GPUs on purpose, and the
narrative now says so and names what it costs: less remaining life, a larger
failure reserve, and a lender who may shorten the term or refuse used
hardware as collateral.
**Reasoning:** Tom Law (2026-09-25): "That is a big decision, it should be
explicit and not just the default option." Fletcher agreed in his draft.

## D-20260928-07 — Carry SOC 2 and managed-services E&O as estimates
**Date:** 2026-09-28
**Decision:** Two [ESTIMATE] lines. `Inputs!B51`, a SOC 2 compliance program
at $30,000 a year from year 0, added to class row 81; `Inputs!B50`, liability
and technology E&O for managed services at 1% of revenue, added to class row
80. The insurance base note (`Inputs!G53`) no longer claims to cover E&O.
**Reasoning:** Tom Law flagged both. The glossary priced SOC 2 at $20,000 to
$60,000 for year one, but no cost line carried it. The flat $8,000 insurance
base grew with neither customers nor revenue. Fletcher chose to show the gap
as marked estimates rather than leave it absent.
**Not included:** SOC 2 staff time, which Tom says can reach a full-time job,
waits on the staffing analysis (commercial labor is held, not decided).
**Effect:** Six-year operating cost rises by about $0.36M (included in the
figures under D-20260928-05).

## D-20260928-08 — Deck fixes, current basis notes, and sentences that follow the model
**Date:** 2026-09-28
**Decision:** "Track B" comes off slides 1, 4 and 13; slide 9's headline
becomes "Twelve servers fill the facility. Fewer would still make money.";
slide 4 anchors the hardware on a generated figure, about 2,900 assistant
users per server at the target use. Stale basis notes are rewritten on
`Inputs!G11` (the power rate, which cited the 23.27c Maine average against a
12.5c cell), class `L18` and `L25`-`L39`, and `Unknowns` rows 11 and 21; the
workbook's ChangeHistory gains today's entries and a pointer to the
decision log for 2026-09-22 to 2026-09-27.
**Also:** three sentences whose direction depends on the model now choose
their own wording: whether operating cash covers expansion hardware (cover
letter, financial summary, narrative) and whether a financed facility with a
slow start breaches the cushion (review note). The last was rendering "cash
falls to about $818k, below the $350k cushion" after D-20260928-05; the
checker proves figures but not comparisons between them. Self-test fixtures
that relied on the old figures now plant their own conditions (52 assertions).
`scenarioFacts` reads the scenario sheets by row label.
**Not done:** "Track B" remains in the narrative, the review note, and the
package's file names; renaming those is a separate call.
**Bears on:** Tom's items 8, 13, 14, and 16.

## D-20261001-01 — Three tracks: A software, B compute hardware, C facility retrofit
**Date:** 2026-10-01
**Decision:** The team's working names for MOCSI's three independently
fundable parts are **Track A**, software, services, and applications (the
Maine data layer, AI literacy, the service layer), suited to grants and able
to start now on rented or small owned compute; **Track B**, the compute
hardware and its operating software, financeable largely by debt; and
**Track C**, the retrofit of an existing space into a very small data
center, financed separately because it means investing in someone else's
building. The names are internal; external documents describe the thing
itself (Tom Law's review, item 13).
**Reasoning:** Fletcher proposed the layering at the 2026-09-30 weekly, where
the facility and the hardware were called B2 and B1. Splitting them into B and
C matches how each is financed, and matches the grant package as built:
D-20260918-02 already models Track B as compute only, with the facility as a
separate sub-project in its own workbook.
**Alternatives rejected:** B1 (hardware) and B2 (facility), as said in the
meeting. It implies one track divided in two, when the two have different
lenders, different risks, and different counterparties.
**Dissent:** B depends on C. The package's $2.11M Track B ask assumes Track C
is grant funded and charges the compute a per-kW rate; a debt-funded facility
changes Track B's figures (the financed case shows how). The tracks can move
on separate timelines, but B's numbers rest on an assumption about how C is
funded, and anyone presenting them as independent should say so.
**Effect:** No generated document changes. The package's "Track B" already
means compute only.

## D-20261002-01 — Matt Victor's site, revised for accuracy, becomes the basis for publicai.us
**Date:** 2026-10-02
**Decision:** MOCSI's public website starts from Matt Victor's demo
(`mocsi-demo-v1.netlify.app`, six pages plus a thank-you page), copied into
`Website/` and revised for accuracy. It will replace Josh Tan's current site at
`publicai.us`; Josh agreed and gave Fletcher access to the Vercel project. The
revisions keep Matt's wording and change only claims the record does not
support: the GPU count and "under $1M" give way to "a small fleet of GPUs" on
"the order of a hundred kilowatts" and "a few million dollars, split between
the compute and the building"; community ownership is scoped to the facility,
"partly", with the public-process caveat (D-20260826-01); promised investor
terms (capped return, no exit) give way to "setting investor terms with
counsel"; letters of intent are "signed" without "vetted" or "prepaid"; the
site search is described as open; and the work runs on three tracks
(D-20261001-01).
**Reasoning:** Matt's demo is the strongest draft anyone has written and he
proposed launching it (email of 2026-09-18). Josh's live site states 8–16
GPUs and calls MOCSI a "community-owned compute center", both contrary to the
record. Fixing a good draft is faster than merging two.
**Alternatives rejected:** Tom merging both sites, as assigned on 2026-09-30
(slower, and nothing had started by 2026-10-02); keeping Josh's site with
corrections (it was built for a narrower purpose).
**Not decided:** hosting. The site's two forms (public-process sign-up and
compute inquiry) are Netlify Forms and fail on Vercel. Options: host on
Netlify and point the domain there; Vercel plus a form service; or Vercel
plus Josh's waitlist backend. Replacing Josh's site also retires its
`/waitlist` and `/loi` form. Matt has not yet approved the revisions. "Bernstein
Shur is legal counsel" (About page) and the mission lock as a planned
structure stand unverified.

## D-20261002-02 — The three tracks are named Software and Services, Compute, and Facilities, everywhere
**Date:** 2026-10-02
**Decision:** MOCSI's three independently fundable parts are the **Software
and Services Track** (was Track A), the **Compute Track** (was Track B), and
the **Facilities Track** (was Track C). The names are used everywhere,
internal and external; the letters are retired, and this entry is the only
place that maps them. Titles and headings use the full names; in running
prose after first use, "software and services", "compute", and "facilities"
may stand alone. The singular "facility" stays where it names the physical
building or its cost model (`FacilityUpgradesModel.xlsx`, "the facility
charge"). The package files follow: `TrackBNarrative.md` (and its template,
PDF, and docx) became `ComputeNarrative.*`, and `TrackBGrantDeck.pptx` (and its
PDF and review copy) became `ComputeGrantDeck.*`.
**Reasoning:** the letters carried no meaning for a funder, and Kerem Durdag
asked (reply to "Current MOCSI course", 2026-10-02) that every package show
how the parts connect, which needs names a reader can hold.
**Alternatives rejected:** Programs (covers everything, says nothing about
AI); Service layer (the Co-Lab application already used it for access rules
over the compute); Application layer (engineer's language); and
"Applications and services" / "Compute" / "Facility", adopted and replaced the
same day.
**Dissent:** "software" and "services" both overlap the Compute Track, which
runs the inference software and books engineering services and assistant
seats as revenue, so a reader may file either under the wrong track.
**Revises:** D-20261001-01 (letters as internal labels only; external
documents describe the thing itself). **Closes:** the open half of
D-20260928-08 ("Track B" left in the narrative, the review note, and the file
names) and its `TODO.md` item.
**Propagation:** templates, scripts, `DEPENDENCIES.md`, `Marketing/Identity.md`,
the regenerated package and README, `CoLabProgressReport.md`, the private
2026-09-30 meeting notes, and memory. Left as written: past log entries, dated
research notes, the package sent on 2026-09-30, and the "Current MOCSI course"
email, whose readers learn the names only if Fletcher tells them.

## D-20261002-03 — Both loans are modelled at 8.5%, and every statement of the rate says it assumes a loan guarantee
**Date:** 2026-10-02
**Decision:** The Compute Track's equipment loan (`Financing!B5`) and the
Facilities Track's 20-year loan (`FacilityUpgradesModel.xlsx` `Summary!F32`)
are modelled at **8.5%**, up from 7.5%. Wherever a document states the rate,
it says the rate is based on the assumption that a loan guarantee is
available (a nonprofit with a strong balance sheet backs the loan). The 10%
and 12% cases stay as the range without one. NPV now discounts at the loan
rate, read from `Financing!B5` through `lib.loanRate()`, in place of a 7.5%
constant fixed in `sweep.py`, `coolingCases.py`, and `scenarioSheets.py`; the
"NPV at" labels are generated from it.
**Effect (mid case, facility grant-funded unless stated):** amount financed
$2,109,325 to $2,118,859 ($2.11M to $2.12M); annual payment $521k to $538k;
total interest $497k to $570k; lowest year-end cash $1.19M to $1.18M; year-5
cash $4.95M to $4.88M. With the facility financed: amount $2.22M to $2.24M,
year-5 cash $3.72M to $3.55M, lowest cash $1.07M to $1.06M, revenue per $1
1.81 to 1.79, facility charge $2,171 to $2,311 per kW-year. Pilot ask $772k to
$779k. Revenue, revenue per $1 with the facility grant-funded ($2.23), and
the 10% and 12% cases are unchanged.
**Reasoning:** Fletcher set 8.5% on 2026-10-02 and asked that the guarantee
assumption be stated wherever the rate appears, so no reader takes the rate
as available to an unbacked new entity.
**Also:** both "What would strengthen the plan" lists (financial summary and
narrative) named a guarantee as a further help while the rate already
assumed one; each now says the rate already assumes it.
**Checked:** the cooling ranking does not move. Air led liquid on
compute-only NPV at 7.5% too ($4.29M against $4.25M at full build; now $4.16M
against $4.11M); the lifecycle view that favours liquid is unchanged. The
CoolingCases note's "$34,248" gap matches neither run and predates this
change.
**Revises:** D-20260928-04 (state what the 7.5% rate assumes).
**Propagation:** both workbooks and their ChangeHistory/basis notes, the three
scripts, every regenerated document, `CoLabProgressReport.md`. Left as
written: the package sent on 2026-09-30 (at 7.5%) and the "Current MOCSI
course" email ($2.1M, $1.4M, $700k, which still round correctly).

## D-20261002-04 — The former Loring AFB is an interim home for the Compute Track
**Date:** 2026-10-02
**Decision:** MOCSI is in discussions about two sites, both in Aroostook
County: the renovated building that could become MOCSI's own facility, and
the former Loring Air Force Base in Limestone, where LiquidCool Solutions
expects to open a data center in Q1 2027 at 2 MW, adding 24 MW in 2028 (Herb
Zien, email of 2026-10-01: "negotiating with tenants such as your 200kW
prospect"). Loring is framed as an **interim home for the Compute Track**: a
colocation tenancy that lets the compute launch while the Facilities Track is
built at a partly community-owned site. The community-ownership requirement
of D-20260826-01 now governs MOCSI's **permanent** home and the Facilities
Track; interim hosting elsewhere is allowed. The progress report says so
without naming either site.
**Reasoning:** a colocation tenancy needs no facility capital and could be
ready sooner than any retrofit. It is the "or leased colocation" substitute
the stack picture already draws, and it keeps the community-ownership promise
attached to the place MOCSI ends up.
**Alternatives rejected:** Loring as a full candidate for the permanent site
(fails the ownership gate unless its ownership qualifies, which nothing in the
record shows); not characterizing it until after a call with Herb Zien.
**Dissent:** an interim tenancy can become permanent. If the Facilities Track
stalls, "certified local" and the ownership story rest on a building MOCSI
does not have, while the compute sits in a privately developed campus. The
scale mismatch (2 MW opening, against 74 to 110 kW) also leaves MOCSI a small
tenant with little leverage.
**Revises:** D-20260826-01 (stack hosted *only* in a community-part-owned data
center).
**Open:** Herb Zien asked for call times the following week and had no answer
as of 2026-10-02; his two PDFs on Loring are unread. Green 4 Maine (Thomas
Manning, Scott Hinkel) separately offers a turnkey building at Loring and has
not answered Fletcher's 2026-09-24 question on scale. No decision permits
naming Loring in external documents.

## D-20261005-01 — publicai.us grows from Josh Tan's site in small, reviewed changes; the static rebuild is retired
**Date:** 2026-10-05
**Decision:** publicai.us stays on Josh Tan's current Next.js site (`main` of
`forpublicai/publicai.us`) and changes through small pull requests, each with
a Vercel preview, reviewed by Josh and merged by him or Fletcher. The static
rebuild from Matt Victor's demo (branch `mocsi-site`, and `Website/` in this
repository) is retired unmerged and kept for reference. Fletcher writes the
copy; Claude supplies facts and constraints, the code, and the builds. Order:
the Next.js security update (pull request #1, branch `mocsi-updates`); accuracy
fixes to the current copy (the MOCSI section's "8-16 GPUs, <$1M capex", its
"50% cheaper" line, the scope of "local ownership", and the waitlist's
"community-owned compute center"); then the content Josh named as useful:
provenance, current progress, new advisors, and a trimmed About.
**Reasoning:** Josh's review of the preview (Slack #maine, 2026-10-03) found
the rebuilt site no improvement: copy that "reads as AI-generated",
navigation that overflows, and pages (Buy compute, Have your say, Get
involved, "Who are you?") that repeat one another or cost more than they
return. Matt agreed and asked to "trim heavily". Josh's site already keeps
the navigation to three links and names MOCSI in the hero's first sentence.
**Alternatives rejected:** launching the rebuild (both reviewers against it);
revising the rebuild's copy again with Claude drafting (the objection is to
the voice, which another AI pass would not fix).
**Supersedes:** D-20261002-01. The About-page changes of 2026-10-02 (track names
and the stack diagram, `mocsi-site` commit `e3f1c04`) are not on the live
site; whether they return is a later pull request.
**Open:** the waitlist still sends each sign-up's personal data to an AI
research step without telling the applicant; that code is Josh's, so it goes
to him as a question.

## D-20261006-01 — Property tax is modelled: hardware exempt under BETE with a payment to the host community, facility taxed as if not exempt
**Date:** 2026-10-06
**Decision:** The compute model carries property tax on its hardware, a
credit for Maine's Business Equipment Tax Exemption (BETE, 36 M.R.S.
§§ 691-700-B) of equal size, and a **payment to the host community** equal
to the share of that tax the town loses after the State's 50% reimbursement
(§ 694): $10,566 in year 0 falling to $4,485 in year 5, $45,824 over six
years (`Inputs` rows 76-82, class sheet rows 113-119, in TOTAL OPEX). The
facility workbook taxes its improvements **as if not exempt**, at the same
rate, on each line item's own life (new column J on the Electrical,
BackupPower, and Cooling sheets), depreciated straight line, renewed at the
end of life, and averaged over years 0 to 5: 84% of cost, **$25,458 a year**
mid (`Summary` rows 45-49), carried in both facility charges. The rate is
**14.84 per $1,000**, Maine Revenue Services' 2024 full value rate for the
lead site; candidate sites run 9.83 to 19.99. `facts.py` refuses to run if the
two workbooks' rates differ. MOCSI must file for BETE with the town assessor
by 1 May every year; a late filing loses that year.
**Reasoning:** Fletcher, 2026-10-06: "add a line for property taxes. Then add
a line for BETE credit. Then add a line for 'payment to community' which
equals the portion of property taxes the community would miss out on", and
"for the facility, add property taxes as if not exempt." Town property is
exempt only while appropriated to public uses (§ 651(1)(D)), and a commercial
data-center tenancy may end that. On depreciation, Fletcher asked why the
improvements would not depreciate, and that data-center electrical and
batteries turn over much faster than the weighted 30/20/15-year lives; the
component basis answers both. Sources and rates:
`research/20261006-PropertyTaxExposure.md`.
**Effect:** facility charge $368 to $598 per kW-year grant-funded, $2,311 to
$2,541 financed. Ask $2,118,859 to $2,137,148; annual payment $538k to $542k;
lowest year-end cash $1.18M to $1.16M; year-5 cash $4.88M to $4.68M
(financed facility $3.55M to $3.34M); revenue per $1 of cost 2.23 to 2.15
(financed 1.79 to 1.73). Revenue is unchanged.
**Also:** headline 2 of `MaineColocationComparison` said that financed, the
host site "still costs less in every case." With the facility taxed it costs
about $98k more than Maine colocation over six years in the high case. The
sentence is now generated from the three cases (`renderDocs.coloFinancedClause`)
and the assertion in `facts.py` is gone. The facility summary, facility memo,
review note, and financial summary's Key assumptions table now say what the
charge covers and how property tax is treated.
**Alternatives rejected:** taxing the improvements at undepreciated cost
($30,396 a year; built first and replaced the same day); the workbook's
weighted lives ($26,464); the 20-year average ($15,904), which leans on
replacements nobody funds; keeping the colocation sentence by changing the
tax basis, rejected on principle (Fletcher: "We don't want to change our best
understanding of the numbers to fit our preferred narrative. Ever."); taking
the BETE exemption with no payment to the town.
**Dissent:** the component lives are Claude's estimates at the short end of
the workbook's ranges, and an assessor may value a specialized fit-out well
below cost, so the facility tax could be lower. The payment to the community
is voluntary: MOCSI pays half of a tax it does not legally owe, and no
agreement with the town yet defines it. Separately, the same lives show
renewal of about $133,881 a year that the plan does not fund
(`GrantPackage/FacilityUpgrades/FacilityRenewalNeeds.md`, for discussion);
the package remains silent on it.
**Closes:** `TODO.md` "Price the GPU personal property tax exposure".
**Propagation:** both workbooks and their notes, `facts.py`, `renderDocs.py`,
five templates, every regenerated document and the deck, `CurrentState.md`,
and the research note. Left stale: `CoLabProgressReport.md` (financing and
facility bullets still quote $2.12M, $1.18M, $4.88M, and $3.55M) and the
package sent on 2026-09-30.

## D-20261006-02 — The deck's words come from a Markdown template, `templates/DeckText.md`
**Date:** 2026-10-06
**Decision:** Every text box and speaker note in
`GrantPackage/ComputeGrantDeck.pptx` (138 boxes, 15 slides' notes) is written
by the build from `GrantPackage/templates/DeckText.md`: one `### slide.box`
heading per box, `### Notes` per slide, figures as `{{token}}` placeholders,
`**Lead:** rest` for the five boxes with a bold lead-in, HTML comments
ignored. `scripts/deckText.py` parses it; `patchDeck.loadSpec()` merges it
with `templates/deck.json`, which keeps only the tables, charts, and a shape
pin for every element (145). A text box with no heading stops the build, and
`checkConsistency.py` and `testChecker.py` read the same merged spec. The
`.pptx` keeps layout, colour, images, and slide order.
**Reasoning:** Fletcher, 2026-10-06: "I don't want to hand edit the slides, I
do want to effect (edit) the text that goes into them." Only the 25
figure-bearing boxes and five notes were templated; the rest of the wording
could be changed only in a slide editor, and Keynote's round trip rewrites
shape order and ids. The same arrangement already governs every other
document in the package.
**Alternatives rejected:** a one-off Markdown extract whose edits Claude
carries into the deck by hand (every round through Claude, and the build
would not know the text's source); editing in LibreOffice Impress or Keynote.
**Checked:** the migration reproduces the deck exactly (`patchDeck.py --check`:
0 elements would change); on a scratch copy, a plain edit, a bold lead-in
edit, and an inline comment render correctly, and a deleted heading stops the
build; `make check` and `make test` pass.
**Also:** the slide 7 speaker note, which called the 15% premium "not yet
cleared for external use" against D-20260922-04, now states it and points to
the financial summary.
**Dissent:** one box holds one paragraph and one run (two for a bold
lead-in), so formatting inside a box cannot be changed from the Markdown, and
a much longer text can overflow its box with nothing to warn of it but the
PDF.

## D-20261006-03 — Launch order: Software and Services on cloud, then pilot Compute in colocation, then the facility; one MOCSI deck
**Date:** 2026-10-06
**Decision:** MOCSI is three projects that each stand alone on a rented
substitute and each make the next cheaper to finance. They launch in this
order:

1. **Software and Services Project**, on funding, hosted on cloud GPUs. It
   sells Maine-specific applications built with the institutions that use
   them (retrieval over an institution's own records and the like),
   engineering services, assistant seats, and agent hosting. Engineering
   services lead.
2. **Compute Project**, three to six months later (purchase, installation,
   and configuration), at pilot size (8 GPUs, growing to 16), in an existing
   data center: either the former Loring AFB campus (D-20261002-04) or the
   Connectivity Center (D-20260902-08), whichever is ready and suitable
   first. Software and Services moves its inference onto it and is its
   anchor customer; Compute also sells GPU capacity directly.
3. **Facilities Project**, over months to years: the building retrofit,
   partly owned by the host community. Compute moves in as its anchor tenant
   and pays the facility charge per kW.

The model follows the plan before any document does. Seats, agent hosting,
and engineering services move from the compute model to a new Software and
Services model, which pays Compute for inference once Compute runs. The
compute model's base case becomes the pilot in colocation, at a colocation
rate; the 64-GPU launch becomes the expansion that follows the move into the
facility. The grant deck is rebuilt after the models as **one MOCSI deck**:
the problem, the three projects and how each reinforces the next, a
self-contained section per project ending in its own ask, a timeline, then
proof, traction, and team. This departs from the June 11 deck, which
presented one combined solution.

**Reasoning:** Fletcher, 2026-10-06: the deck "conflates the three, separate
components. Each is a subproject that can stand alone, but they are mutually
reinforcing." Asked which he would build if only one could be funded:
Software and Services first, since it "could start immediately upon
funding"; compute "would take 3-6 months"; the building "many months or
years." Each step retires the next one's main risk: Software and Services
brings Compute its demand, and Compute brings the facility its occupancy.
Fletcher reports institutions will buy from day one, because MOCSI is
already developing Maine-specific applications with them.

**Alternatives rejected:** keeping a Compute deck with the three projects as
framing (keeps the conflation of seats and services with GPU capacity, and
offers a Software and Services or facility funder nothing to fund);
relabelling the existing figures under the new structure without changing
the models (the slides would then say what the numbers do not).

**Dissent:**

- On its first day, Software and Services runs on the kind of national
  provider that slide 2 says Maine institutions cannot rely on. The answer
  (open-weight models, a named and contracted host, version pinning,
  contractual data handling, and a dated move to Maine hardware) has to be
  written into the same deck, or the deck argues against itself.
- No Maine colocation provider publishes support for 20 kW liquid-cooled
  racks (`MaineColocationComparison.md`); whether Loring takes
  direct-to-chip H100s is unconfirmed.
- No customer commitment (letter of intent, paid pilot, or named partner) is
  yet in the record to support the day-one demand claim.

**Revises:**

- D-20260902-08: the Connectivity Center stays a pilot site, now as one of
  two; the pilot's financials rest on a colocation rate for an existing data
  center, either the Connectivity Center or Loring (D-20261002-04).
- D-20260918-05: the service lines leave the compute model.
- D-20260918-06 and D-20260922-05: the Compute ask is resized to the pilot.

**Resolves:** the dissent to D-20261002-02 (seats and services filed under
the wrong part).

**Propagation:**

- *Models:* a new Software and Services model; the compute model's base case
  and service lines; `scenarioSheets.py`, `sweep.py`, and `facts.py`; every
  rendered document; the deck rebuilt.
- *Hand-written:* `CoLabProgressReport.md`, `Website/SiteCopy.md`, and
  `Marketing/`.
- *Records:* CurrentState rows for plan shape, scenario sheets, the Compute
  ask, and revenue mix.
- *Already sent, left as written:* the 2026-09-30 package.

## D-20261006-04 — The three parts are projects
**Date:** 2026-10-06
**Decision:** The three parts are the **Software and Services Project**, the
**Compute Project**, and the **Facilities Project**. MOCSI (the Maine Open
Compute Services Initiative) is the initiative they belong to: "one
initiative, three projects." The rules of D-20261002-02 otherwise stand: full
names in titles and headings; "software and services", "compute", and
"facilities" alone in running prose after first use; and "facility" singular
for the building and its cost model. File names do not change, since none
contains "track".

**Reasoning:** "track" reads as a lane inside one program, and so suggests
three phases of one build. Each part has its own scope, budget, funders,
timeline, and possibly legal form, and funders fund projects.

**Alternatives rejected:**

- Layer: says the upper parts need the lower, which contradicts standing
  alone; the Co-Lab application already uses "service layer".
- Pillar: a cliché, and one pillar holds nothing up.
- Venture or company: premature; Software and Services may run on grants.
- Program: rejected in D-20261002-02.
- Keeping "track".

**Dissent:** a project ends, and Compute is an operating business meant to
run indefinitely. A lender may ask who runs it when "the project" is done.
Where that matters, write "the Compute business" or, once one exists, the
entity's name.

**Revises:** D-20261002-02 (the descriptor only).

**Propagation:** about 40 files carry "Track", among them templates,
`renderDocs.py`, `lib.py`, `ReadmeFiles.json`, both copies of
`StackDiagram.svg`, `CoLabProgressReport.md`, `Website/` copy, CurrentState,
TODO, and memory. Past log entries and dated research stay as written. Check
first whether anything carrying "Track" has gone out since 2026-10-02.

## D-20261006-05 — Deleting a box's heading in `DeckText.md` empties that box; slide notes may be empty
**Date:** 2026-10-06
**Decision:** When a pinned text box has no `### slide.box` heading in
`GrantPackage/templates/DeckText.md`, the build empties the box and prints
that it did; the shape stays on the slide, so no address moves. A box that is
not pinned (a shape newly added to the deck) still stops the build. A
`### Notes` heading with nothing under it clears that slide's speaker notes.
`make check` reports a deleted heading the build has not yet applied. Slide 2
was restyled once by script so Fletcher's text reads as body copy: box 2.0
from the red label style to the 22-point serif, box 2.1 (newly pinned) to the
18-point grey body style. The draft line on slide 1 renders from the date of
the newest decision (`{{draftMonth}}`).
**Reasoning:** Fletcher rewrote slide 2 in `DeckText.md` by deleting the
headings of the boxes he no longer wanted, the natural edit for someone who
edits text and never slides; the build refused it and, previewed, left the
deleted text on the slide. Emptying keeps every slide.box address stable,
which removing the shape would not. Fletcher asked that the draft date
update when the slides are regenerated; the newest decision's date keeps
`make check` stable from day to day.
**Revises:** D-20261006-02 ("a deleted heading stops the build").
**Dissent:** an emptied box is invisible but still occupies its slot, so a
deck edited this way accumulates empty shapes until the slide is laid out
again; and the draft date moves only when a decision is logged, so a
November rebuild with no November decision still says October. A heading
deleted by accident now empties a box rather than stopping the build; the
build's printed line and `git diff` on `DeckText.md` are the guard.

## D-20261006-06 — Deck review: three projects in the June 11 branding; the host community is a stakeholder; the core four
**Date:** 2026-10-06
**Decision:** The grant deck presents the three-project plan; the June 11
deck supplies its branding only. The first review's edits:

- Slide 1: "MOCSI", tagline "AI that Maine's institutions can trust" (was
  "public institutions"); "Compute build" leaves the draft line.
- Slide 2: "thier" corrected.
- Slide 3: the three projects (Software and Services, Compute, Facilities);
  the pricing line removed.
- Slide 4: "Three projects, each independent yet reinforcing each other, make
  one stack." ("each with its own funders" removed).
- Everywhere: "the host community is a stakeholder" in the facility, in place
  of "partly owned by" or "owned with" the host community. The form of its
  stake is open (Q-20261006-01).
- Slide 13: the four doing most of the work are Matt Victor, Josh Tan, Tom
  Law (Technical Strategy), and Fletcher Kittredge (Fractional CEO). Ben
  Polsky and Joe Oliva move to an "Also contributing" line beside the
  advisors; Tom leaves the advisors.
- Slide 15: "MOCSI", with Tom's address in the contact line.

**Reasoning:** Fletcher, 2026-10-06: "we are not far enough along with a site
selection to say" the host community partly owns the facility. Tom "is much
more than an advisor"; his role is something like a CTO, but MOCSI has no
CTO. "Public institutions" excluded the nonprofits and private institutions
MOCSI also serves.

**Alternatives rejected:** keeping "partly owned" until a site is chosen
(states as settled what is not); a CTO title for Tom (MOCSI has no such
office); keeping all six people in the team grid at equal weight (misstates
who is doing the work).

**Dissent:** D-20260826-01 makes partial community ownership a requirement of
the host site. "Stakeholder" is weaker, and if it stays, that requirement is
quietly loosened without a decision that says so. Q-20261006-01 holds the
question open.

**Propagation:** done in the deck (`DeckText.md`, `deck.json`, slide 13
layout). Still carrying "partly owned" or "public institutions":
`CoLabProgressReport.md`, root `OnePager.md`, `ElevatorPitch.md`,
`Marketing/` (`Faq.md`, `Index.html`, `Maine.html`, `OnePager.md`),
`Identity.md`, `Website/SiteCopy.md`, `CopyBrief.md`, and section 5 of
`MaineColocationComparison.md.tmpl`.

## D-20261007-01 — The staged three-project model is set aside; the package stays on the single-site model
**Date:** 2026-10-07
**Decision:** The model, scripts, and rendered package stay on the single-site
model as committed in a047dff: eight servers at launch in the facility, one
$2.14M Compute loan, no Software and Services grant, and no colocation years.
The staged model built under the D-20261006-03 terms (Software and Services
first on cloud inference bought at market rate, a one-server Compute pilot in
colocation at $250/kW-month, the move into the facility and full build in
year 3, two loan tranches, overhead allocated by revenue) is kept on branch
`models-staged-v1` (commit b1515cd) and is not merged. The first deck review
(D-20261006-06) is kept on main.

**Reasoning:** Fletcher, 2026-10-07: "I don't have confidence in this
version." Its results, for the record: asks of $294k (grant), $901k and $935k
(loans), and $2.05M (facility), $4.18M in all; Compute revenue per $1 of cost
1.15 grant-funded and 1.01 financed (against 2.15 and 1.73); year-5 cash
$0.89M (against $4.68M); Software and Services about 1% of Compute's revenue
at the market token price; and, with the facility financed, Compute's cash
falling after debt service in years 4 and 5, held at the cushion only by how
the second loan is sized.

**Alternatives rejected:** committing the staged model and revising its
assumptions in place (keeps a version Fletcher does not trust in the
package); discarding it (loses work and findings that a later model will
need).

**Dissent:** the single-site model's stronger figures rest on eight servers
selling capacity from month 2, the assumption the staging was meant to
relieve. D-20261006-03 says the models change before any document does, yet
the deck now presents three projects while the model and the ask cover
Compute alone (slide 3 introduces Software and Services; no slide funds it).
Whether the launch order itself still stands is open (Q-20261007-01).

**Revises:** D-20261006-03, its instruction that the models change now; the
launch order itself is not withdrawn (Q-20261007-01).

## D-20261007-02 — Deck review, round 2: three boxes on slide 3, no GPU model names, the facility on a capital stack
**Date:** 2026-10-07
**Decision:**

- Slide 3: the "Open and accountable" box is removed, leaving the three
  projects across the slide. The emptied pricing box goes with it. Both were
  the slide's last shapes, so no address moves.
- Slide 4 diagram (`Marketing/StackDiagram.svg`, and its copy
  `Website/StackDiagram.svg`): "or rented cloud servers, interim", matching
  colocation; the Facilities funding is "a capital stack of grants and loans";
  "Project" in place of "Track"; "the host community is a stakeholder" in
  place of "partly owned by the host community". The slide carries the same
  render, cropped as before.
- Slide 5: titled "What we are building for Compute"; no GPU model names. The
  deck as a whole names no GPU model (slides 5, 14, and 16); the hardware is
  "used NVIDIA datacenter GPUs, model chosen at purchase".
- Slide 6: agent hosting is "isolated, secure, audit-logged".

**Reasoning:** Fletcher, 2026-10-07: slide 3 promised three projects and
showed four boxes. "We don't know what the best choice will be next year" for
the GPU. Facilities will likely be funded by "a capital stack of grants and
loans".

**Alternatives rejected:** removing GPU model names from the documents as
well (Fletcher chose the deck only; the documents and the workbook keep H100
and H200 as the stated pricing basis); slide 5 only (leaves "H100" on slides
14 and 16); leaving "Track" and "partly owned" in the diagram (contradicts
D-20261006-04 and D-20261006-06 on the slide next to it).

**Dissent:** the workbook still prices H100 then H200, so a reader of the
deck and the narrative sees a model named in one and not the other. A
different GPU at purchase changes price, power, and the seats each server
carries.

**Revises:** D-20261006-06 (slide 3's fourth box).

## D-20261007-03 — The current documents follow the deck review; Tom's public headshot goes on the team slide
**Date:** 2026-10-07
**Decision:** Every current document and material is brought into line with
D-20261006-04, D-20261006-06, and D-20261007-02, and regenerated:

- "Track" becomes "Project" in the grant package templates, `lib.py`,
  `ReadmeFiles.json`, the facility renewal note, `CoLabProgressReport.md`, and
  the site brief; the TODO for the rename is closed.
- Statements that the host community partly owns the facility become "the
  host community is a stakeholder", with the form of its stake left to the
  public engagement process: the README, `ElevatorPitch.md`, `OnePager.md`,
  the Marketing FAQ, entry page, Maine page, and one-pager, the progress
  report, section 5 of the colocation comparison, and the site brief.
  `OnePager.md` keeps "Community participation is a requirement", since
  D-20260826-01 stands (Q-20261006-01).
- "Public institutions" becomes "institutions" in Marketing.
- The progress report and site copy say the facility is likely funded by a
  capital stack of grants and loans; the README lists Tom Law for technical
  strategy; the Maine page no longer places the facility in Aroostook County,
  since no site is chosen and the search has reopened.
- Slide 13 carries Tom Law's headshot from his IEEE-USA speaker profile
  (`GrantPackage/images/TomLaw.jpg`), in place of the placeholder.

**Reasoning:** Fletcher, 2026-10-07: "regenerate all the other documents and
materials to be consistent with the current state", and "use Tom's headshot
you found."
**Alternatives rejected:** asking Tom for a photo first (Fletcher chose the
public one; Tom's confirmation of photo and bio is still asked for in the
slide notes); rewording the one-pager's ownership requirement as well (that
would loosen D-20260826-01 without a decision); renaming in past log entries,
dated research, the retired `Website/*.html` rebuild, and the package sent
2026-09-30 (records stay as written).
**Dissent:** the one-pager now states community participation as a
requirement while describing the community only as a stakeholder; the two
are consistent only until Q-20261006-01 is answered. Tom has not been asked
about the photo.

## D-20261007-04 — The review note summarizes changes since September 22; the cover letter reads as a plan; the stakeholder sweep is finished, and Aroostook leaves the package
**Date:** 2026-10-07
**Decision:**

- `GrantPackage/templates/ReviewCoverNote.md.tmpl` is rewritten as a short
  note on what changed since the 2026-09-22 review: a table of September
  against current figures (the September values marked sourced, the current
  ones generated), what moved them, how the package now presents MOCSI, one
  request each for the team, Matt, Tom, and Josh, and what is still open,
  including the unfunded facility renewal. Fletcher's own edits (the property
  tax reasoning, and that this version does not model the launch order) are
  kept, tidied at his direction.
- The cover letter describes MOCSI as a plan: "is being built", "will run",
  "would launch", "projects" revenue, "In the model" before the lender
  version's cash claims, and "would be" portable equipment. "Service
  Initiative" becomes "Services Initiative".
- The passages the D-20261007-03 sweep missed now call the host community a
  stakeholder: the cover letter, the narrative's summary and its "Community
  governance" principle, and the facility summary.
- "Aroostook" leaves the package: the colocation comparison's "Aroostook
  site" is the "host site", and its latency, internet-cost, and heat-reuse
  sentences no longer name a county; the facility summary's service trip is
  "to the site".
- The narrative, financial summary, and facility summary take their draft
  month from `{{draftMonth}}` in place of a typed "September 2026".

**Reasoning:** Fletcher, 2026-10-07: the review note was "far too long" and
repeated the late-September note; "the cover letter reads as if we have
already completed the project"; "fix and remove aroostook"; the narrative
still said "Draft, September 2026". No site is chosen and the search has
reopened, so a county name places the facility prematurely.
**Alternatives rejected:** keeping the full re-review note (it restated the
September note); keeping the cover letter's present tense (it claims an
operating service that does not exist); keeping "Aroostook site" as the
comparison's label (its inputs are still that site's, which the inputs
paragraph says through "the host utility's published rate"); typing
"October 2026" (it would go stale again).
**Dissent:** the review note tells the team the facility renewal is unfunded
while the funder documents still do not say so. "Aroostook County" remains
in the Marketing FAQ, one-pager, and entry page, the progress report, and the
site brief and retired site, outside this decision's scope; the Marketing
pages also still speak in the completed tense.

## D-20261007-05 — MOCSI in one phrase: "trusted, local AI for Maine's institutions"
**Date:** 2026-10-07
**Decision:** MOCSI is described in one phrase as **"trusted, local AI for
Maine's institutions"**, and in full as: "MOCSI is building trusted, local AI
for Maine's institutions: applications designed around their work, which will
run on computers in a Maine community that wants them and benefits from them."
"Data center" names only the Facilities Project's building, never MOCSI as a
whole. "Will run" carries the interim period: copy does not say MOCSI starts
on cloud or colocation computers, and does not claim "not in the cloud". The
publicai.us copy brief (`Website/CopyBrief.md`) adopts it as a rule and in
its proposals, with a new slot for the home page's "How" paragraph.
**Reasoning:** Fletcher, 2026-10-07: calling MOCSI a data center names one
component, not the stack; data centers are also politically contested in
Maine (Lewiston's council rejected one). What matters is that MOCSI is for
Maine: located in Maine, in a community that wants it and benefits from it,
employing Maine people where it can (while reaching outside the state for
specialized expertise), with applications built for Maine institutions.
"Local" carries location, community, and Maine work in one word, and is
already sanctioned ("certified local", D-20260821-06).
**Alternatives rejected:** "public AI for Maine" ("public" reads as
government-run, a show stopper); "a public AI stack for Maine" (the same, and
"stack" is jargon); "trusted AI, made in Maine" and "Maine-grown AI" (Maine
is not known as a technology maker, and the point is who it is for);
"public AI infrastructure" (reads as physical plant); "hosted in a Maine
community" and "built around Maine's institutions" (each covers half the
stack).
**Dissent:** the launch order under discussion (D-20261006-03,
Q-20261007-01) starts Software and Services on cloud GPUs and Compute in
colocation, so "local" describes the destination; the copy relies on "will
run" to stay true. "For Maine's institutions" also assumes Maine is the main
market, which Q-20260902-01 leaves open (Maine institutions are committed to
at least 10% of use).

## D-20261008-01 — Evaluate Brunswick Landing as an 8-GPU host at the least capital cost
**Date:** 2026-10-08
**Decision:** The team is considering Brunswick Landing (the former NAS
Brunswick, managed by MRRA) as a host site. The evaluation targets **8 GPUs**
(one 8-GPU server, about 10 kW of IT load) and asks two questions: what
already exists that MOCSI can use, and what MOCSI gives up to avoid capital.
Two tools hold it, in `Sites/BrunswickLanding/`:

- `BrunswickLandingSiteBook.md` (and PDF): desk research of 2026-10-08, with
  sources, ranking three paths by capital: a cabinet at FirstLight's data
  center on the campus, a room on a building's power, and a fitted room of
  our own.
- `BrunswickLandingFieldWorkbook.xlsx`, built by `buildFieldWorkbook.py`:
  Fletcher's tool for the landlord interview and site visit. Requirements are
  formulas on a few inputs (servers, kW per server, PUE, voltage, rate); it
  holds walk-and-talk checks, a give-ups ledger, a FirstLight and EnablesIT
  colocation quote comparison, running costs, and a summary. It carries no
  site facts; Fletcher fills them in.

Brunswick Landing will not be community-owned. Under D-20260826-01 and
D-20261002-04 it can only be an interim host unless the team revises the
ownership requirement; an 8-GPU host matches the Compute pilot of
D-20261006-03, whose launch order Q-20261007-01 holds open.
**Reasoning:** Fletcher, 2026-10-07 and 2026-10-08: "if we can host there with
as little capital cost as possible", "what is there and what we would have to
give up to go there", "target 8 GPUs", and a deep research of the site plus a
workbook to interview the landlord and visit. The research found a working
commercial data center on the campus (FirstLight, 2N, SOC 2 Type 2), a
PUC-regulated campus electric utility, and town draft rules that place no
data-center standards on facilities under 100 kW.
**Alternatives rejected:** a landlord questionnaire sized for the 110 kW full
build (`BrunswickLandingSiteRequirements.xlsx`, built 2026-10-07; it does not
match an 8-GPU target and is left uncommitted); evaluating the full build at
Brunswick (it would need a Growth Industrial parcel under the town's draft
rules, and maximum capital); prefilling the workbook's capital columns from
the facility model (its line items are priced for 110 kW and would not hold at
10 kW).
**Dissent:** the cheapest path, a FirstLight cabinet, gives up the host-community
stake entirely. Several key facts are unknown until the field work: FirstLight's
price, the campus utility's commercial tariff, current vacancies, and fiber to
specific buildings. The town's 100 kW and 1 MW thresholds are a staff draft,
not adopted.

## D-20261008-02 — Keep the 110 kW landlord questionnaire in the record
**Date:** 2026-10-08
**Decision:** `Sites/BrunswickLanding/BrunswickLandingSiteRequirements.xlsx`, the
landlord questionnaire built on 2026-10-07 for the 110 kW full build (47
questions, no internal positions), is committed beside the 8-GPU tools, with
its builder `buildSiteWorkbook.py`. It is reference material: the 8-GPU field
workbook (D-20261008-01) remains the tool for the Brunswick field work.
**Reasoning:** Fletcher, 2026-10-08: "add the 110 kW landlord questionnaire".
It holds a full-build question set a landlord can answer as it stands, useful
if a site is ever evaluated at full scale.
**Alternatives rejected:** leaving it untracked (lost if the working copy is
cleaned); deleting it (the full-build questions would have to be rebuilt).
**Revises:** D-20261008-01, only its statement that the questionnaire is left
uncommitted.

## D-20261013-01 — Deck slide 9 states year-5 cash after the compute loan, like every other document
**Date:** 2026-10-13
**Decision:** Slide 9's facility-funding table quotes year-5 cumulative cash
after the compute loan is repaid (`cashYear5`, a new `cashYear5Half`, and
`cashYear5Financed`), the basis every other document and slide 8 use. Its
column header is set from `templates/deck.json` as "Cash, year 5, loan
repaid", so the label is part of the template rather than fixed text in the
deck. The before-loan tokens (`cashBeforeLoan*`) are removed. The Oct 7
package's deck goes out again with only this change.
**Reasoning:** The slide showed six-year cash before financing ($5.25M grant,
$3.95M financed) under the header "Cash, year 5", one slide after slide 8 gave
$4.68M "after repaying the loan in full". Both were correct model outputs on
different bases; a reader saw two year-5 cash figures for the same case. The
consistency check passed because both numbers exist in the model. One
definition of year-5 cash across the package removes the conflict. Fletcher,
2026-10-13: "go-ahead and fix".
**Alternatives rejected:** keeping the before-loan figures and relabelling the
column "six-year cash before the compute loan" (leaves the package with two
definitions of year-5 cash and invites the same comparison); a full package
rebuild with the open decisions (the 8-GPU pilot ask, the rate) folded in
(those are undecided, and Matt is editing the Oct 7 text now).
**Answers:** Q-20260920-02.

## D-20261016-01 — Ask Tom Law for his Brunswick clusters' facts and a review of the site book, in one package
**Date:** 2026-10-16
**Decision:** Fletcher sends Tom Law a Brunswick Landing package asking for
two things, Tom's first-hand facts first: where his two Brunswick inference
clusters are hosted, what he pays and on what basis, power, fiber, draw and
cooling, what has gone wrong, and whether his host would take MOCSI's pilot
server; then a review of the desk research, testing the three paths and their
give-ups, the 10 kW air-cooled server assumption, and the open items. The
package, in `Sites/BrunswickLanding/`:

- `TomCoverNote.md`: the email text, with the questions. Fletcher sends it
  from his own mail after filling a reply-by date and an optional line on
  his pending reply to Tom's 2026-09-25 review.
- `BrunswickLandingSiteBook.pdf`, as it stands (D-20261008-01).
- `BrunswickLandingFieldWorkbook.xlsx`, blank; Tom fills in what he knows,
  mainly the Colocation quotes and Running costs sheets.
- `BrunswickDecisionBrief.md` and `.pdf` (one page, pandoc and xelatex,
  10pt, 0.75in margins): the target, the ownership gate, where Brunswick fits
  in the launch order, what is open, and what the desk research found.

The 110 kW landlord questionnaire (D-20261008-02) stays out of the package.
The cover note and brief tell Tom that Loring is internal only.
**Reasoning:** Fletcher, 2026-10-16: "We want both." The 2026-09-30 weekly
records Tom saying he runs two inference clusters in Brunswick, a government
one and a non-government one; the site book does not mention it. His answers
could settle three of the site book's five open items (FirstLight's price,
the utility rate, fiber in the building) before any site visit, and give the
missing pilot-host comparison its Brunswick column. A web check on 2026-10-16
found no change to Brunswick's moratorium or draft rules since the site book.
**Alternatives rejected:**
- *A review of the desk research only.* Wastes the one person on the team
  with a working deployment on the campus.
- *Tom's facts only.* Leaves the site book's assumptions untested, in
  particular the 10 kW air-cooled server against a grant model that prices
  direct-to-chip liquid-cooled servers at about 9.2 kW (D-20260918-02).
- *Building an 8-GPU comparison of Brunswick, Loring, and the Connectivity
  Center first.* Brunswick's column would be guesses that Tom's answers
  replace, and Loring has no figures yet.
- *Including the 110 kW questionnaire.* It is sized for the full build, which
  D-20261008-01 put out of scope at Brunswick.
**Dissent:** the package reaches Tom while the reply to his 2026-09-25 review
is still owed, so it asks for more of his time before answering the last
request; the cover note's optional line mentions it and does not fix it. The
brief names Loring to a team member, which D-20261002-04 permits internally
only; a forward of the brief would breach that.

## D-20261016-02 — Brunswick Landing is evaluated for one 8-GPU server, or a smaller prototype; anything bigger goes elsewhere
**Date:** 2026-10-16
**Decision:** The Brunswick Landing evaluation covers **one 8-GPU server**
(about 10 kW of IT load) and nothing larger; growth beyond one server will go
in a different facility. It also asks a fallback question: if the site cannot
take 8 GPUs, what is the largest load it can take without new capital, and
would that host a smaller prototype? Fletcher edited the cover note to drop
"growing to 16" and to add a site visit and an MRRA (Dan Stevenson) context
line; this entry adds the fallback question (cover note question 8, merged
with the earlier question on Tom's $7-10k cluster), a line telling Tom to
ignore the site book's 16-GPU pilot, the scope paragraph and a corrected
launch-order line in `BrunswickDecisionBrief.md` (re-rendered, one page).
**Reasoning:** Fletcher, 2026-10-16: "we just want to explore the one server 8
GPU option. If we go bigger, it will be in a different facility. We also want
the answer of: 'if the facility can't support 8 GPUs, what can it support?' we
may just go for a smaller prototype."
**Alternatives rejected:** evaluating Brunswick for the full 8-to-16 GPU pilot
of D-20261006-03 (Fletcher's direction above); editing the site book's
16-GPU lines (they describe D-20261006-03 accurately; the cover note tells Tom
to ignore them at Brunswick).
**Dissent:** a prototype below 8 GPUs is not in any model, so whatever Tom
reports about a smaller load has no cost or revenue case to land in yet.
**Revises:** D-20261008-01, only its link of the 8-GPU host to a pilot
growing to 16 in place.

## D-20261016-03 — Tom Law's inference clusters are not in Brunswick; the package went out on that basis
**Date:** 2026-10-16
**Decision:** The record's premise that Tom Law runs his two inference
clusters in Brunswick is wrong: Fletcher knows they are not at FirstLight or
anywhere else in Brunswick. The package to Tom went out on 2026-10-16 at 08:21
(from fkittred@gmail.com, cc Matt Victor and Josh Tan, with the site book, the
blank field workbook, and the decision brief) with the question on where the
clusters are hosted removed, and with Fletcher's own edits: the opening
paragraph (preferred path one 8-GPU server selling both Software and Services
and compute; otherwise a much smaller prototype for Software and Services;
the search for an ethical data center site continues either way), section
headings, and a new question on renting compute on Tom's clusters.
`Sites/BrunswickLanding/TomCoverNote.md` now holds the text as sent,
verbatim, numbering included (1-5, then 8-10).
Tom's clusters remain worth asking about as a benchmark for price, power,
draw, and failures, and as a possible host or a rental source for a smaller
prototype. Their facts do not settle any of the site book's open items.
**Reasoning:** Fletcher, 2026-10-16: "I already know his inferance is not
located in FirstLight or elsewhere in brunswick." The 2026-09-30 transcript
reads "I've already got an inference cluster at Brunswick now with two
actually"; the meeting notes carried that forward, and D-20261016-01 rested on
it. The meeting notes stay as written, since they record what was said.
**Alternatives rejected:** leaving D-20261016-01's reasoning uncorrected (it
claims Tom's answers could settle three of the five open items, which no
longer holds); editing the 2026-09-30 notes (a record of the meeting).
**Dissent:** the sent text still tells Tom "you already run two inference
clusters in Brunswick" and asks whether he sees "the campus utility's rate",
so he may answer on the wrong premise or correct it; the open items now
depend on the site visit and the landlords, as before D-20261016-01.
**Revises:** D-20261016-01, its reasoning that Tom's clusters are in
Brunswick and could settle FirstLight's price, the utility rate, and fiber in
the building before a visit.

## D-20261016-04 — Website/ is renamed Website-victor-demo/
**Date:** 2026-10-16
**Decision:** The repository's `Website/` folder is renamed
`Website-victor-demo/`, with its contents unchanged: Matt Victor's demo
pages, retired by D-20261005-01, plus `CopyBrief.md` and `SiteCopy.md`, the
copy notes for the live site in `/Users/fkittredge/mocsi/mocsi-website`. The
README index (`GrantPackage/templates/ReadmeFiles.json` and `README.md`) and
CurrentState carry the new name; earlier log entries keep the old one.
**Reasoning:** Fletcher, 2026-10-16, after asking how `Website/` and
`mocsi-website/` relate: "Rename Website to Website-victor-demo". The old name
read as the site itself, when the live site is the clone.
**Alternatives rejected:** keeping the name; moving `CopyBrief.md` and
`SiteCopy.md` to a separate folder first (not asked, and they would lose
their history beside the pages they once described).
**Dissent:** the new name describes the retired demo and not the copy brief,
which is the folder's live document; a reader looking for the copy brief may
not look in a folder named for the demo.

## D-20261016-05 — Claude drafts the publicai.us copy; Fletcher reviews and rewrites it
**Date:** 2026-10-16
**Decision:** Claude drafts every piece of text for publicai.us (each slot in
`Website-victor-demo/CopyBrief.md`, the news items, the About page, and the
calls to action) into `Website-victor-demo/SiteCopy.md`. Fletcher reviews and
rewrites each draft, and no text goes into a pull request until he has
approved it. Claude still supplies the facts, the rule checks, the code, and
the builds; Josh reviews and merges each pull request as before.
**Reasoning:** Fletcher, 2026-10-16: "A change to the plan: you draft all text
and then I review/rewrite it." Writing from a blank page has stalled: in the
eleven days since D-20261005-01 one slot of fourteen has a draft, and on
2026-10-13 Fletcher named the bottleneck as "human review/rewrite". Rule
breaks (site names in the 2026-05-01 news item, Van Buren in the aquaculture
entry, "community-owned" on the waitlist) stay live meanwhile, and Maine Tech
Week audiences (2026-10-20 and 10-22) will look the site up.
**Alternatives rejected:** Fletcher writing every word (D-20261005-01), which
has not produced copy at the pace the dates need; Claude's drafts going to a
pull request after a fact check only, which is the text Josh and Matt
objected to.
**Dissent:** Josh (Slack, 2026-10-03) found Claude's copy "reads as
AI-generated", and Matt (2026-10-12) called it "unwise... to publish any
narrative text that is purely Claude generated". D-20261005-01 rejected
Claude drafting because the objection is to the voice. A draft anchors its
rewrite, so Fletcher's pass has to change the voice as well as the facts, or
the site will carry the text the team objected to. Josh and Matt have not
been told of this change.
**Revises:** D-20261005-01 (who drafts the copy only; the small reviewed pull
requests, the retired rebuild, and the order of work stand).

## D-20261016-06 — publicai.us states no GPU count and no cost until one size is settled
**Date:** 2026-10-16
**Decision:** The site names no GPU count, no kilowatt figure, and no dollar
figure for MOCSI's compute or facility. The copy brief's rule "Scale, if
stated: 64 GPUs at launch growing to 96" is withdrawn, and slot 10's
proposal loses its figures. The rule lifts when one size is settled.
**Reasoning:** The record carries three sizes at once: the funder package's
full build of 64 growing to 96 (D-20261007-01, D-20261007-02), the pilot of 8
growing to 16 (D-20261006-03), and one 8-GPU server under evaluation at
Brunswick Landing (D-20261016-02). Matt asked on 2026-10-14 whether the plan
is "back to 8-16GPU pilot?" A public figure would contradict one of the
three, and the site's live "8-16 GPUs, <$1M capex" already contradicts the
package. Fletcher agreed, 2026-10-16.
**Alternatives rejected:** stating the package's full build (it is the
figure Matt questioned, and Brunswick is evaluating something far smaller);
stating a range covering all three (a range from 8 to 96 says nothing).
**Dissent:** funders reading the Support MOCSI page will look for a size and
a cost, and its "pre-construction" framing then carries the whole weight.

## D-20261016-07 — Website-victor-demo/ is frozen; the live copy files move to mocsi-website/
**Date:** 2026-10-16
**Decision:** `Website-victor-demo/` is frozen for reference and nothing in
it is edited again. The three files in active use (`CopyBrief.md`,
`SiteCopy.md`, and `CtaDrafts.md`) move to `/Users/fkittredge/mocsi/mocsi-website/`,
beside `WebsitePlan.md` and `NewsCandidates.md`, and are listed in that
clone's `.git/info/exclude` so they never reach the public
`forpublicai/publicai.us`. `CopyBrief.md` and `SiteCopy.md` leave this
repository's tracking.
**Reasoning:** Fletcher, 2026-10-16: "the directory Website-victor-demo is
supposed to be frozen in time and used for reference only. Move out any
files that are being actively modified and put them in mocsi-website." The
working notes for the live site then sit in one folder with the site's code.
**Alternatives rejected:** leaving the files in the demo folder (it would
stop being a record of the retired rebuild); a tracked folder in this
repository (not asked, and it splits the site's notes across two places).
**Dissent:** this repository ignores `mocsi-website/`, and the clone excludes
the files, so the copy brief and site copy now have no version history and
no off-machine copy. The drafts and Fletcher's rewrites in `SiteCopy.md`
exist only on this disk. Their history up to this move stays in this
repository's git log.
**Revises:** D-20261016-04 (where the copy brief and site copy live; the
rename stands).

## D-20261016-08 — The build runs in a pinned Python environment at .venv/
**Date:** 2026-10-16
**Decision:** The grant-package build runs in a virtual environment at
`.venv/` (gitignored), built by `uv` on uv's own Python 3.14 from a tracked
`requirements.txt` that pins openpyxl 3.1.5, python-pptx 1.0.2, python-docx
1.2.0, and their dependencies. The Makefile passes it to `build.sh` as `PYTHON`; `build.sh`
defaults to it when run directly; both fall back to `python3` when `.venv/`
is missing. `lib.py` starts `recalc.py` with the build's own interpreter
(`sys.executable`). The README's Prerequisites line says how to create the
environment and now names python-pptx, which the deck build needs and the
line omitted, and python-docx, which `makeDocs.py` needs to check the shipped
docx copies.
**Reasoning:** On 2026-10-13 Homebrew moved `python3` from 3.14 to 3.15, and
the build's packages were installed only for 3.14, so every script failed
with "No module named 'openpyxl'". Fletcher, 2026-10-16: "set up the venv and
run make check". A pinned environment survives the next Homebrew upgrade, and
`requirements.txt` makes the build reproducible on another machine.
**Alternatives rejected:** installing the packages into Homebrew's 3.15 with
`--break-system-packages` (fails again at the next upgrade); pointing
`python3` back at 3.14 (fights Homebrew, and 3.14 loses support); a venv on
Homebrew's 3.14 (removed when Homebrew drops it).
**Dissent:** the build still depends on `recalc.py` from Claude Code's xlsx
skill under `~/.claude`, which no requirements file can pin; that portability
gap is unchanged.

## D-20261017-01 — There was no "Lincoln Mill" site; the name probably means Brunswick Landing
**Date:** 2026-10-17
**Decision:** MOCSI has no candidate site called Lincoln Mill. The publicai.us
news item of 2026-05-01 ("We visited candidate sites and reviewed financing
across Lincoln Mill in Brunswick, Loring Air Force Base, and CENTRA on
Cumberland St. in Portland") names one, and that name probably refers to
Brunswick Landing. The record reads the May visits as Brunswick Landing,
Loring, and 340 Cumberland (CENTRA).
**Reasoning:** Fletcher, 2026-10-17: "there is no lincoln mill site and ...
it probably refers to brunswick landing." The only Lincoln Mill Fletcher
knows in Maine is in Biddeford. Nothing in the repository, the email archive,
or the meeting transcripts mentions a Lincoln Mill, and no Brunswick mill
appears either. The phrase first appears in Josh Tan's site commit of
2026-08-22 (37f4eaf in `forpublicai/publicai.us`), and Matt Victor's demo
(`Website-victor-demo/index.html`) copied it.
**Alternatives rejected:** reading it as Biddeford's Lincoln Mill (no record
of Biddeford as a candidate, and the sentence places the mill in Brunswick);
restoring the site list on publicai.us with the name corrected (the site
names no site, and pull request #2 removes the list); correcting the frozen
demo (Fletcher froze it for reference, D-20261016-07).
**Dissent:** "probably" rests on Fletcher's reading; Josh wrote the sentence
and has not confirmed which place he meant. The live site still shows "Lincoln
Mill" until pull request #2 merges, and the frozen demo keeps it.

## D-20261017-02 — MOCSI runs only open-source software, and may say so
**Date:** 2026-10-17
**Decision:** MOCSI will deploy only open-source software (licensed under
terms the Open Source Initiative approves) and no proprietary or
source-available software. Copy may therefore state it as a commitment, in
the plan's tense ("MOCSI will run open-source software"). This chooses
D-20260824-11's second resolution, "replace the offending components", over
the licence inventory or disclosure. The publicai.us copy brief's rule
against an "open source" claim is removed.
**Reasoning:** Fletcher, 2026-10-17: "remove the 'no open source' rule. We
will not deploy licensed software. We will use open source software." (Open
source software is licensed too; "licensed software" here means proprietary
and source-available licences.) D-20260824-11 blocked the claim because no
licence audit had been done; a commitment to replace any component that
fails the test makes the claim a design rule rather than a description of
an audited stack.
**Alternatives rejected:** keeping the block until a licence audit (it held
the claim off every document for eight weeks while nothing was deployed);
publishing a licence inventory (no stack is deployed to inventory);
deploying non-open components and disclosing them (Fletcher's instruction
rules it out).
**Dissent:** three components in the current plan fail the rule, and the
claim is true only once each is replaced. (1) **MongoDB**, which LibreChat
depends on, is under the SSPL, which the OSI has not approved
(D-20260824-11); FerretDB (Apache 2.0, MongoDB-compatible, on PostgreSQL) is
a candidate replacement, unverified with LibreChat. (2) **NVIDIA CUDA.** The
hardware basis is used NVIDIA datacenter GPUs (D-20260918-07), and vLLM on
NVIDIA needs CUDA's user-space libraries, which are proprietary; NVIDIA's
kernel driver is open source, and CUDA is not. The logged software stack
still says "vLLM on ROCm" (D-20260824-14), AMD's open-source equivalent, so
the stack and the hardware basis already disagree. Under this rule NVIDIA
hardware needs a stated exception, or the plan moves to AMD. (3) GPU and
server **firmware** (BMC, GPU VBIOS) is proprietary on every vendor's
hardware. A licence audit is still needed to find any others.
**Revises:** D-20260824-11 (resolves its block by choosing replacement).

## D-20261017-03 — MOCSI in one phrase: "trusted, local AI, starting in Maine"
**Date:** 2026-10-17
**Decision:** MOCSI is described in one phrase as **"trusted, local AI,
starting in Maine"**, and in full as: "MOCSI is building trusted, local AI
that any institution can use: applications designed around their work, which
will run on computers in a community that wants them and benefits from them.
We are starting in Maine, and building it so other states can follow." The
rest of D-20261007-05 stands: "data center" names only the Facilities
Project's building, and "will run" carries the interim. The copy brief, the
site drafts, and the deck (slides 1 and 3) adopt it.
**Reasoning:** Fletcher, 2026-10-17: "While we have a particular focus on
Maine, we are building something anyone can use. We are starting with
maine, but hope our success will have national implications. Maine's [motto]
is 'Dirigo' after all." "For Maine's institutions" made Maine the limit of
the market, which D-20260821-04 (sell beyond Maine) and D-20260824-08 (the
Pro-Human AI Coalition's members of equal standing with Maine buyers) never
said. "Local" now carries replication: any community can host its own.
**Alternatives rejected:** "trusted AI, built in Maine for anyone to use"
(D-20261007-05 rejected "made in Maine" wording, since Maine is not known as
a technology maker); "trusted, local AI. Maine first" (reads as Maine only).
**Answers:** Q-20260902-01. The market is Maine first in sequence and focus
and open to anyone in reach; D-20260824-08 stands. By that question's own
closing note, `ElevatorPitch.md` now needs the coalition restored and its
customer-mix claim ("a significant percentage of our customers are Maine
organizations") removed; not done.
**Dissent:** "local" for a customer outside Maine means local to MOCSI's
host community, and not to the customer; copy that sells nationally has to
make that reading work. The funder package sent on 2026-10-07 carries the
old slide 1.
**Revises:** D-20261007-05 (the phrase and the full sentence only).

## D-20261019-01 — The three projects run concurrently, with no fixed order
**Date:** 2026-10-19
**Decision:** The Software and Services, Compute, and Facilities Projects are
all under way: planning is complete and the funding process has started for
each. No order of completion is fixed; any of the three may finish first.
Each still stands alone on a rented substitute and reinforces the others.
Public copy describes the projects as under way and what each delivers in the
future tense ("will provide", "will run"); the plan-tense rule for MOCSI's
operations stands. Site copy slot 1 drops "Software and Services runs on our
Compute hosting" for "will run on Compute once both are running".
**Reasoning:** Fletcher, 2026-10-19: "we have no certainty what order these
projects will be completed in. They are actively underway with planning
completed and the funding procurement process started."
**Alternatives rejected:** keeping D-20261006-03's sequence (Software and
Services on cloud, then a Compute pilot three to six months later, then the
facility) as the planning basis.
**Answers:** the launch-order half of Q-20261007-01. Its other half (what
model would earn confidence) stays open.
**Dissent:** the deck still presents the projects in D-20261006-03's order
and funds only Compute; the business plan and any document that states the
sequence are now stale, and no audit of them has been done.
**Revises:** D-20261006-03 (the launch order and its timing only; the three
projects, their stand-alone design, and the one-deck instruction stand).

## D-20261019-02 — Aquaculture leaves the site's current offerings; Sam's work stays in the news
**Date:** 2026-10-19
**Decision:** MOCSI is probably not moving forward with Public AI
Aquaculture (the Maine DMR licensing tool at `aquaculture.publicai.co`). The
site drops it from the home page's list of current services (the
`lib/services.ts` entry) and replaces the `/aquaculture` page with a silent
permanent redirect in `next.config.ts`, so shared links still reach the tool.
The 2026-08-10 news item crediting Sam Merkatz's proof of concept stays
unchanged; if the tool is taken down, the item keeps its text and loses the
link. The change goes to the live site as its own pull request, separate from
pull request #2.
**Reasoning:** Fletcher, 2026-10-19: "We are probably not moving forward with
aquaculture, but we don't want to minimize Sam's work." The news list is a
dated record and the item is true.
**Alternatives rejected:** deleting the news item; deleting the `/aquaculture`
route outright (breaks shared links); folding the change into pull request #2.
**Dissent:** the audience change in pull request #2 (slot 6, removing Van
Buren) becomes moot once the entry is deleted. The two pull requests conflict
in `lib/services.ts`; whichever merges second needs the entry deleted. Whether `aquaculture.publicai.co` itself stays up is Josh's call and
outside this repository.

## D-20261019-03 — Provenance gets its own page, and MOCSI's provenance promises
**Date:** 2026-10-19
**Decision:** The site gets a page titled **Provenance**, at `/provenance`,
linked from the home page's MOCSI "Why", the waitlist (intro or the "organic"
definition), the header navigation, and the Support MOCSI page. It defines
provenance as the trace of each answer back to its source, and opens with
the questions anyone can ask about an answer (which model, which version,
where it ran, who runs it, who saw what I sent). MOCSI commits to:
1. **No training on customer data.** MOCSI never uses customer prompts,
   documents, or outputs to train or tune any model, without exception.
2. **Where it ran.** Every answer's record names the machines and building
   that produced it. If any part of the service runs on rented servers (at
   launch, for overflow, or for an outage), the page names the company and
   region, and each answer's record says which it used. Compute may be ready
   when Software and Services starts (D-20261019-01), so the page assumes no
   cloud period.
3. **A per-request record customers look up themselves** ("level 2"): every
   answer carries an ID, and from its account a customer can see the model,
   version (weights hash), place, and time for any answer. Records hold
   metadata only, never prompts or answers. This is a launch promise: it is
   built before the first customer goes live.
4. **Retention set by the customer:** one year by default, five years at
   most. When a customer leaves, MOCSI hands over every record, then deletes
   its copies.
**Reasoning:** Fletcher, 2026-10-19: emphasising provenance on the site "is a
good idea", and "we need to define what we mean by it"; then the answers
above, given in turn. In AI, "provenance" usually means training-data
origin, which MOCSI cannot promise for most models (D-20260824-12); defining
it as the provenance of each answer makes the promise checkable. Josh's
2026-10-03 list asked the site to keep provenance. The record carries
negligible compute load (one log line per request; about 6 GB a year at a
million requests a month; Claude's estimate).
**Alternatives rejected:** provenance as a paragraph in the home page "Why"
only (slot 2); a definition-first or chain-of-custody opening; describing
only MOCSI's own building (false while any rented capacity is used);
promising a per-request record only on request by hand (level 1), or a
signed, hardware-attested record (level 3, months of work and a GPU cost);
a fixed retention period.
**Open:** whether the page names every outside company that can touch
customer data; how it states the training-data limit; who it is mainly
written for (Q-20261019-01). "A building we name on this page" conflicts
with the rule that the site names no site, town, or county; until that rule
is lifted the page says "in Maine".
**Dissent:** the record lookup is an engineering commitment with no owner
yet, and the gateway is not chosen (CMU DARE is a candidate). The "provenance
premium" in the compute model (D-20260918-05) now has a page saying what it
buys; the two should be kept in step.

## D-20261019-04 — The provenance page: outside companies in contracts, no training-data section, written in layers
**Date:** 2026-10-19
**Decision:** Answers the three questions D-20261019-03 left open:
1. **Outside companies** that can touch customer data are listed in each
   customer's contract; the page says so and names none.
2. **Training data** is left off the page. The page covers what MOCSI
   controls: the model and version, where it ran, who runs it, what happens
   to customer data, and the record.
3. **The reader:** the page is layered. A plain top section (the questions
   anyone can ask) for town and library staff, then technical detail for IT
   and procurement (the record's fields, retention, the version hash), then a
   short section on why provenance matters, for funders and the public.
**Reasoning:** Fletcher's answers, 2026-10-19.
**Answers:** Q-20261019-01.
**Dissent:** in AI, "provenance" usually means where a model's training data
came from (D-20260824-12: "Behaviour is auditable; provenance is not"). A
page titled Provenance that says nothing about training data leaves a
reader free to assume MOCSI promises it, the overclaim pattern that entry
records as recurring. The page's opening definition (the trace of each
answer to its source) is the only guard. A buyer who asks about training
data should get a straight answer, and that question is one of
D-20260824-12's revisit triggers.
**Revises:** none; completes D-20261019-03.

## D-20261021-01 — Apply to Foresight's Nodes grants, Local Compute first; Fletcher owns the applications
**Date:** 2026-10-21
**Decision:** MOCSI applies to the Foresight Institute's AI for Science &
Safety Nodes program, which closes 2026-10-31 at 23:59 PDT (decisions in
January 2027):
1. **The main application** goes to the Local Compute RFP (form focus area
   1, "Building and scaling local compute setups"). It asks for funding and
   considers asking for compute as well.
2. **A second application**, to the Human Empowerment area of the
   Coordination and Accountability RFP (focus area 3), is made only if
   Foresight confirms one organization may submit twice and the group agrees.
   It would propose building the per-request provenance record
   (D-20261019-03).
3. **Fletcher owns both.** The plan and the seven questions for the group
   are in `ForesightNodesGrants.md` / `.pdf`; the schedule is in `TODO.md`.
**Reasoning:** The Local Compute RFP's own examples (a deployable cluster,
setup software for non-experts, economic models showing the hardware pays
for itself, a community pilot) describe the Compute Project. Grants run
$30,000 to $100,000, and Foresight also offers local compute while no
hardware is chosen. The form takes one focus area per submission, so two
RFPs means two applications. Liz Barry raised the Local Compute RFP in the
Public AI group DM on 2026-10-09 (Matt: "on our radar"); no one had taken it
on. B Cavello posted the second RFP on 2026-10-21.
**Alternatives rejected:** not applying, given the HumanityAI submission due
the same day this was decided; applying only to Coordination and
Accountability (weaker fit, and smaller grants in areas 2 to 4); one
application naming both areas (the form allows one); leaving the
application to Matt or Liz, who flagged it but had not started.
**Dissent:**
1. Foresight "strongly prioritizes" applicants who work in person at its
   Bay Area or Berlin Node, and the form requires a Node choice. MOCSI has
   no one committed to Bay Area time; Josh is the likely candidate and has
   not been asked.
2. Foresight scores impact on AI safety. MOCSI's case (safe AI needs local,
   accountable capacity outside the frontier labs) is a stretch.
3. The applying entity is unsettled (Q-20260825-01): the form asks for
   nonprofit, for-profit, or individual, and organizational and tax
   documents follow in due diligence.
4. The schedule in the report (group answers by 2026-10-27, draft
   2026-10-29, submit 2026-10-30) was Claude's choice.
5. A second application promises to build a record that has no owner and
   depends on a gateway not yet chosen.

## D-20261029-01 — The Foresight application proposes the guarantee layer for a network of small community sites
**Date:** 2026-10-29 (logged 2026-10-30)
**Decision:** The Local Compute application (`ForesightApplication.md` /
`.pdf`, title "Reliable, ethical compute through small, redundant data
centers") proposes a different thing from the Compute Project's grant
package. The thesis: communities turn buildings they own into small data
centers, each running a GPU cluster sized to local power and staff, and a
network of such sites reaches 99.99% by routing around a failed site rather
than by duplicating everything inside one. What is new is treating three
things as one design: open routing software that sends work only to sites
meeting the requester's standards (privacy, data sovereignty, open-weight
and ethically trained models, renewable power), with a per-request
compliance record a counterparty can verify; a legal framework among sites
that makes the guarantee binding, with a customer-facing pass-through; and
a parameterized financial and operational model a community fits to its
own building, power, and staff, including the payment for standing by.
Public AI's inference utility (six partner sites in five countries) is
named as the working precedent, and the guarantee layer is to be built on
the router Public AI runs and contributed back. The safety answer: the
guarantees are the product, the risk is losing them across a hop, and the
standard, logging design, contract terms, and model are published before
the routing code.
**Reasoning:** Foresight's grants run $30,000 to $100,000 and the program
scores impact on AI safety; neither fits a hardware ask for one site. The
reliability problem is the one a small site cannot buy its way out of, and
the open-source routing survey (`research/20261029-OpenSourceLlmRouting.md`)
found that routing, failover, and logging exist under Apache and MIT
licenses but that no router carries a site-attribute schema for
constrained routing or a tamper-evident per-request record; the gap is
narrow enough to fill in a four-month grant. Public AI's utility gives the
work a live first user and answers "why you."
**Alternatives rejected:** Asking for the Compute Project itself (too large
for the grant, no safety case). Proposing the per-request provenance record
alone (D-20261019-03), which was the second application's subject; it is
now one component of the compliance record. Asking for compute only, as a
staging environment, with no funding (leaves the legal and model work
unfunded).
**Dissent:**
1. The thesis was written in one day and the team has not seen it; the
   review email went out as a draft the same evening.
2. Several numbers in the text are Claude's and have no source: "hundreds
   of small, inexpensive sites", "twenty to fifty community sites" in three
   years, "at least two more communities evaluated", and "hospitals" in the
   customer list. The sentence "Our model shows a site built to 99.9% is
   competitive" rests on a grid-expansion comparison the model does not
   make.
3. The 350- and 500-character answers stand at 335 and 493 characters and
   must be recounted after any edit.

## D-20261029-02 — Four months, $61,000 direct, Fletcher at the Bay Area Node with a part-time engineer
**Date:** 2026-10-29 (logged 2026-10-30)
**Decision:** The project runs March to June 2027 in three parallel
workstreams. Direct costs $61,000: legal framework and customer terms (Matt
Victor) $15,000; business model (Fletcher) $8,000; technical lead (Fletcher,
two months at the Node) $12,000; a part-time contract engineer hired in the
Bay Area, two months, $12,000; travel and lodging for three sprints of about
ten days from Boston, $14,000. Fiscal-sponsor overhead is declared
separately in the 0 to 10% band. Fletcher is the Node presence; Matt and Tom
work remotely. Compute is requested as a development and test environment
(four H100-class GPUs, about 1 TB of storage, March to April) for two or
three simulated community sites, then one or two GPUs from May so the Node
can stand by for the first Maine site. The application is made as an
organization, "Non-profit - US", under MOCSI as a project of Public AI,
fiscally sponsored by Metagov, Inc. The team says yes to the workshop and
to the seminar group.
**Reasoning:** Foresight "strongly prioritizes" projects present at a Node,
and Fletcher is the only team member free to commit the time; a Bay Area
engineer covers the weeks between sprints. Two months of technical work is
the shortest schedule the eight-week plan allows; legal and model work need
until May and June. The amount sits in the middle of Foresight's range.
Metagov is the entity with the tax status the form asks for.
**Alternatives rejected:** A full-time contract engineer for the technical
work (doubles the cost, adds hiring risk, and leaves Fletcher's hands off
the design). Josh Tan at the Node (not asked; his time is Public AI's).
Partners in Democracy as the applicant, which Matt offered on 2026-10-26
(adds an entity with no stake in the compute work; the Metagov route is
already in use for Public AI). No compute request (the simulated sites
would then need rented GPUs inside the $61,000). A longer project (the work
is sized to the gap the survey found, and a longer calendar invites scope).
**Dissent:**
1. Matt has not agreed to the $15,000 scope, and nobody has agreed to be
   named; the email asks for both by Friday noon.
2. The per-diem figures behind the $14,000 travel line are from memory and
   should be checked against the GSA table for San Francisco.
3. Metagov's overhead rate is unknown; "0-10%" is an assumption.
4. The primary reference field is empty, and the authority checkbox cannot
   be ticked until Josh, Matt, Tom, and the reference consent.
5. Fletcher bills his own time against the grant ($20,000 of the $61,000)
   while already funded by Co-Lab; the two grants' scopes must not overlap.

## D-20261029-03 — No second Foresight application
**Date:** 2026-10-29 (logged 2026-10-30)
**Decision:** MOCSI submits one application, to the Local Compute RFP. The
Human Empowerment application contemplated in D-20261021-01 is dropped.
**Reasoning:** Its subject, the per-request provenance record, is now a
component of the main application's compliance record (D-20261029-01). A
second application would compete with the first for the same reviewers, and
the team has no capacity to carry two. Fletcher's 2026-10-27 email to
grants@foresight.org asking whether one organization may submit twice is
moot; no answer is needed.
**Alternatives rejected:** Submitting both, if Foresight allowed it (same
team, same four months, and the provenance record has no owner apart from
this work).
**Revises:** D-20261021-01 (item 2; items 1 and 3 stand).

## D-20261029-04 — Consent to sharing, and the candidate sites named in the confidential field only
**Date:** 2026-10-29 (logged 2026-10-30)
**Decision:** The application consents to Foresight sharing it with
Lightcone Commons and with its grant advisors. Van Buren and Loring are
named in the form's confidential field, which Foresight does not share
with third parties, with the statement that there is no agreement yet and
the town has not cleared public use of its name. Every other field keeps
the quiet rule (D-20260916-02): "two Maine locations" and "the first Maine
site".
**Reasoning:** Lightcone sharing widens the funding pool at no cost, and
Foresight says it does not affect its own decision. Reviewers need to know
the site work is real; the confidential field is the one place the form
offers to say so without publishing the names.
**Alternatives rejected:** Declining Lightcone sharing (no gain). Naming no
site at all (reviewers would read "site diligence on two Maine locations"
as a claim with nothing behind it). Naming Van Buren in the open fields
(breaks D-20260916-02).
**Dissent:** The confidential field "may be shared with AI systems for the
purpose of evaluation", so the names leave Foresight's hands in that
narrow sense; the town has not been asked whether that is acceptable.

## D-20261030-01 — The application leads with the town's two barriers; Matt's line rises to $35,000; direct costs $81,000
**Date:** 2026-10-30
**Decision:** The "limited / new / success" answer and the 500-character
answer are rewritten from the town's side: MOCSI's goal is a
community-ownership model for small AI data centers, proven in Maine, that
towns anywhere can adopt; the Co-Lab-funded model for two Maine sites found
two barriers a town must clear (the expertise and labor each fitted site
needs, and the cost of retrofitting a municipal building to the 99.99%
standard); the parameterized model and recipe clear the first, and a network
of small sites with a guarantee that survives the hop clears the second. The
three parts of that guarantee are named in one sentence. Matt Victor's line
becomes legal framework, customer terms, and the host-site ownership and
governance structure, with Bernstein Shur as subcontractor, $35,000; direct
costs are $81,000. Partners in Democracy is named in the affiliation field
and Matt's role is "Legal and Governance." The $35,000 carries an internal
note pending Matt's breakdown.
**Reasoning:** B Cavello found the old answer confusing (the jump to
"Reliability is the obstacle" did not follow, and "the three" were never
named) and asked that each paragraph say what it does. Matt found no
explicit reference to community ownership and governance, the point that
makes the project worthwhile from his side, and named the drift from
MOCSI's goal. Fletcher supplied the two-barrier argument and accepted the
$20,000 increase as reasonable, asking Matt for a breakdown and whether the
work is new and open. $81,000 stays under Foresight's $100,000 ceiling.
**Alternatives rejected:** Pasting B's draft verbatim (its register and an
unverified affordability claim). Keeping $61,000 and adding governance
language only (leaves the governance work unfunded). Changing the title
(the thesis is the same project stated from the town's side).
**Dissent:**
1. Matt's breakdown has not arrived; the $35,000 may be revised on Saturday.
2. The 500-character answer dropped the "network reaches 99.99%" figure and
   the unverified "Our model shows a site built to 99.9% is competitive."
3. "Hospitals" in the customer list is still Claude's addition.
4. Josh and Tom have not reviewed; their items stay open.
**Revises:** D-20261029-01 (statement of the thesis), D-20261029-02 (budget).

## D-20261030-02 — Tom Law's affiliation: Newton Dynamics, with the Brunswick clusters' mixed workload named
**Date:** 2026-10-30
**Decision:** The Foresight application and `WhoIsWho.md` present Tom Law as principal of Newton Dynamics, LLC (Brunswick, Maine), and drop Oak AI. The track record says his clusters serve generative CAD, environment emulation, and chat inference on open-weight models.
**Reasoning:** Tom's reply of 2026-10-30 (Gmail thread 1a18ae444e9b5cbb): the Brunswick inference clusters run under Newton Dynamics, not Oak AI; the clusters are mixed-use with those three workloads; "open weight is correct"; the language otherwise fine. Fletcher chose Newton Dynamics alone and the title "principal" (the Newton Dynamics website names no people or officers). The mixed workload shows production experience beyond chat.
**Alternatives rejected:** Name both companies ("founder and CEO of Oak AI and Newton Dynamics"), rejected by Fletcher as unneeded. Keep Oak AI as written, since Tom called the distinction "semantics," rejected because the claim about the clusters would be inaccurate. "Founder and CEO" or "managing member" as title, rejected for lack of a source.
**Dissent:** Tom's email address stays law@oak.ai, so a reviewer may notice two company names; Tom has not confirmed the "principal" title. Fletcher answered "Principal or Managing Member"; Claude used "principal" alone.
**Revises:** D-20261029-01 (the track-record text).

## D-20261030-03 — Matt's $35,000 broken down; one application stands after Foresight's answer
**Date:** 2026-10-30
**Decision:** The budget line reads $15,000 for Matt Victor's time and $20,000 for outside counsel (Bernstein Shur) covering contract drafting, government affairs, and community engagement. MOCSI still submits one application. Partners in Democracy's own application to the Coordination and Accountability RFP is Matt's, and MOCSI's draft does not mention it.
**Reasoning:** Matt's email of 2026-10-30 21:39Z gave the split and confirmed the deliverables and workstreams. Foresight's grants team (15:56Z) said one organization may submit to different focus areas and that projects under a shared fiscal sponsor are reviewed separately, so the premise of D-20261029-03 (silence from Foresight) is gone, but with the form closing in a day there is no second MOCSI application to send. Matt (21:37Z) is filing one under Partners in Democracy that may reference this work as a minor component.
**Alternatives rejected:** Keep the $35,000 as one line without the split, rejected because the reviewer asked for a budget and the split shows where the money goes. Revive the Human Empowerment application now that Foresight allows it, rejected for lack of time and of a drafted second project. Mention Matt's Partners in Democracy application in MOCSI's form, rejected because it is his and not yet described to us.
**Dissent:** Matt did not answer whether the legal work is new and will be shared as open source; the draft still says all three legal deliverables publish under an open license. Bernstein Shur is named as the counsel though Matt wrote only "outside counsel" in this reply (he named Bernstein in the 05:22Z reply).
**Revises:** D-20261030-01 (budget detail); D-20261029-03 (premise: Foresight has now answered).

## D-20261031-01 — Primary reference, overhead rate, and the Current AI overlap note
**Date:** 2026-10-31
**Decision:** The primary reference is Nathan E. Sanders (nathan@nsanders.me), Matt's suggestion. The overhead field states Metagov's rate as 10%, Foresight's cap. The "additional information" field adds one paragraph on Current AI's separate application to the same RFP (Berlin Node, operator side of the same router), stating that the two share no budget lines and will use one admission schema. Josh's consent to be named is recorded (email 2026-10-31 14:52Z).
**Reasoning:** Matt gave Sanders (text, 11:59 EDT); Josh offered Imanol Schlag of ETH Zürich (email, 18:01Z) as a reference for publicai.co. Sanders knows the Maine work through MAPLE and Partners in Democracy and co-wrote Rewiring Democracy, so he can speak to this project rather than to Public AI's utility; Fletcher told Tom "Matt gave me one, Nathan Sanders." Tom (text, 11:47 EDT) and Josh (email) both gave the rate as 10%. Josh asked for the overlap note and supplied a draft; it is rewritten in house style.
**Alternatives rejected:** Schlag as reference, kept as the fallback if Sanders has not agreed by submission. Omitting the Current AI note, rejected because a reviewer who sees both applications should hear about the overlap from us. Stating overhead as "0-10%" without the figure, rejected now that the rate is known.
**Dissent:** Sanders's email is decoded from his website and his agreement to be named is unconfirmed; the authority clause requires it. The form's overhead bands may put 10% in "10%-20%". Josh's detailed comments are still to come.
**Revises:** D-20261029-02 (overhead stated as "within the band"; the reference, then open).

## D-20261031-02 — Affiliation field: Metagov first, Maine AI Coalition dropped
**Date:** 2026-10-31
**Decision:** The "Affiliated organization(s) or project(s)" field lists Metagov, Inc. (501(c)(3), fiscal sponsor and grant recipient), then Public AI with MOCSI as its Maine project, then Partners in Democracy. The Maine AI Coalition is removed.
**Reasoning:** Metagov receives the grant, signs the agreement, and takes the 10% overhead, so it belongs at the head of the list rather than in a subordinate clause. The Maine AI Coalition has no role in the project; Claude added it on 2026-10-29 because Fletcher is its president, and a reviewer would wonder what it does there. Fletcher asked both questions and chose to drop it.
**Alternatives rejected:** Keep MAC as a one-line entry (signals Maine standing, but invites the question of its role). Leave Metagov inside the MOCSI sentence as before (understates who the applicant is).
**Dissent:** None. Fletcher's and Tom's MAC roles still appear in the participants field, which is where personal affiliations belong.
**Revises:** D-20261030-01 (affiliation wording).

## D-20261031-03 — Three missed funding fields: $89,100 requested, the breakdown, and moderate and ambitious tiers
**Date:** 2026-10-31
**Decision:** The application answers three fields the October 29 capture missed. Funding requested: $89,100 ($81,000 direct plus Metagov's 10% overhead, $8,100). The breakdown restates the D-20261030-03 budget by workstream (legal and governance $35,000; technical $24,000; business model $8,000; travel $14,000) and puts compute at $0 in cash, the Node allocation standing in for roughly $10,000 of GPU time at public-cloud rates, with a paragraph on how AI lowers the cost (open-source router stack, coding agents, AI-assisted legal drafts, agent-run community evaluations). Moderate tier: $60,500 ($55,000 direct), technical workstream whole at $38,000, legal cut to the framework and customer terms by Matt alone at $12,000, model with one evaluation at $5,000; the governance structure, outside counsel, and two evaluations deferred. Ambitious tier: $99,000 ($90,000 direct), the base plus a third month of engineer and lead at $9,000 for a live failover with the first Maine site, external review of the verifier, and a tested deployment kit.
**Reasoning:** Fletcher found the fields missing while pasting into the form. The request total follows from the budget and the confirmed rate. The moderate tier keeps the Node work intact because Foresight prioritizes presence at a Node; the ambitious tier stays under the $100,000 ceiling and buys the one thing the base plan lacks, a failover exercised against a real site.
**Alternatives rejected:** A moderate tier that cuts the engineer instead of counsel (leaves Fletcher alone on the technical work and lengthens the schedule). An ambitious tier that adds a second part-time engineer (hiring risk in a four-month project). Pricing the Node compute as a cash line (the Node provides it; the cash figure is context only).
**Dissent:**
1. The $10,000 compute figure is Claude's estimate: about 4,600 GPU-hours (four GPUs for eight weeks of working days plus two on standby for eight weeks) at $2 to $3 per H100-hour. No source checked.
2. The position of the three fields relative to the overhead field is a guess; the form's order was not re-read.
3. The moderate tier's $12,000 and $5,000 and the ambitious tier's $9,000 are Claude's sizing, not Matt's or Fletcher's.
**Revises:** D-20261029-02 (the form's field list and the request total).

## D-20261031-04 — Rates at $100 an hour, two sprints, engineer one month: $77,000 direct, $84,700 requested
**Date:** 2026-10-31
**Decision:** Fletcher's technical-lead line is two ten-day sprints at the Node, 160 hours at $100, $16,000; his business-model line is 80 hours at $100, $8,000 (unchanged amount). The contract engineer is one month half time, 80 hours at $100, $8,000, at the Node for weeks 3 to 6 between the sprints. Travel is two sprints at GSA FY2027 San Francisco rates plus airfare, $10,000. Legal and governance unchanged at $35,000. Direct $77,000; overhead $7,700; requested $84,700. Moderate tier $56,100 ($51,000 direct); ambitious $97,900 ($89,000 direct: a second engineer month $8,000 and 40 remote hours for the lead $4,000).
**Reasoning:** Fletcher's instruction: cut one sprint and raise his rate to $100 an hour; cut the engineer to one month at $100 an hour. Hours per Fletcher's choice (160 lead, 80 engineer). The sprint-month-sprint shape keeps the Node presence at both ends of the eight-week plan and gives the engineer the middle. Travel follows the GSA check of 2026-10-31 (one March sprint $5,424, one later sprint $4,494, rounded up).
**Alternatives rejected:** Engineer full time for one month, 160 hours, $16,000 (direct $85,000, request $93,500). Fletcher at 120 hours, keeping the $12,000 line. Keeping three sprints at the new rate (adds $8,000 plus $4,500 travel and exceeds what Fletcher wants to commit).
**Dissent:** The technical total stays $24,000 by coincidence, so a reader comparing drafts sees the same figure for different work. Airfare ($500) and local transport ($300) per sprint are unsourced. The 500-character answer and the compute request do not mention sprints and are unchanged.
**Revises:** D-20261031-03 (request total and tiers); D-20261030-03 (direct total); D-20261029-02 (three sprints, two-month engineer).

## D-20261104-01 — Remove four untracked working files; keep VanBurenNotes.md
**Date:** 2026-11-04
**Decision:** Delete `BusinessPlan.md` (a 57-line draft that stopped mid-sentence), `ElevatorPitch.pdf` (a 2026-09-02 render older than the tracked `ElevatorPitch.md`), `GrantPackage/TomReview20260925.md` (Claude's 2026-09-28 analysis of Tom's review email and the replies), and `tmp.sh` (three `duti` lines). Keep `VanBurenNotes.md` untracked. Remove the `BusinessPlan.md` line from `GrantPackage/templates/ReadmeFiles.json` and the file reference from `WhoIsWho.md`.
**Reasoning:** Fletcher's instruction, after the 2026-11-02 status review listed the five untracked files as undecided. The Tom review record derived from a three-way email thread, which is why it was never tracked; the business plan draft is superseded by the three-project plan (D-20261006-03); the PDF was stale against its source.
**Alternatives rejected:** Track the files (the review record would put email-derived text in the repository; the draft and the render were stale). Delete all five (Fletcher kept `VanBurenNotes.md`).
**Dissent:** The deleted files were untracked, so nothing recovers them. The 2026-09-28 analysis of Tom's review survives only in summary, in D-20260928-04 to -08 and `CurrentState.md`. Historical mentions in `DecisionLog.md` and `ConversationLog.md` stand as written.

## D-20261104-02 — Joe Oliva comes off the deck and the website as a named contributor
**Date:** 2026-11-04
**Decision:** Remove Joe Oliva's name from the grant deck's team slide (slide 13, "Also contributing", `GrantPackage/templates/DeckText.md` 13.18) and from the public website (`lib/people.json` entry, the funders page's core-team sentence, and his photo), the latter as a pull request against Josh's `forpublicai/publicai.us` repository on branch `remove-joe-oliva`. He stays in `WhoIsWho.md` as a contributor, since he expects to keep helping; the Van Buren diligence files, which record him as the person asked about fiber, stand.
**Reasoning:** Joe asked that he no longer be named publicly as an advisor, and that the website be changed to match. Fletcher agreed on 2026-11-04. The deck is the other document that names him to outsiders.
**Alternatives rejected:** Remove him from `WhoIsWho.md` as well (he continues to help, and that file is internal). Leave the deck as it was and change only the website (the deck goes to funders under his name). Reword the slide to name him without a title (the request was to drop the name).
**Dissent:** The 2026-09-30 package went to its recipients with his name on slide 13 and cannot be recalled. The reason behind his request is his to give; this entry records the request only.
