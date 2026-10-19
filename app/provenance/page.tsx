import type { Metadata } from "next";
import PageSection from "@/components/ds/PageSection";

export const metadata: Metadata = {
  title: "Provenance | Public AI USA",
  description:
    "Trace every answer MOCSI gives back to where it came from: the model, its version, where it ran, and what happened to your data.",
};

const questions = [
  {
    q: "Which model wrote it?",
    a: "Every answer's record will name the model and its exact version. The model's weights will be published, and we will pin the version, so the same model answers until we tell you it has changed.",
  },
  {
    q: "Where did it run?",
    a: "Every answer's record will name the machines and the building that produced it, in Maine. If we ever run any part of the service on rented servers (at launch, or to cover a busy period or an outage), this page will name the company and the region, and the record for each answer will say which it used.",
  },
  {
    q: "Who runs those machines, and who else can see what I sent?",
    a: "MOCSI runs them. Your contract will name every other company that can touch your data, what it handles, and where.",
  },
  {
    q: "Will you train on what I send?",
    a: "No. We will never use your prompts, your documents, or the answers you get to train or tune any model.",
  },
  {
    q: "How do I check?",
    a: "Every answer will carry an ID. From your account you will be able to look up the record for any answer: the model, its version, where it ran, and when. The records hold none of your prompts or answers. We will keep them as long as you choose: one year unless you tell us otherwise, and five years at most. If you leave, we will give you every record and then delete our copies.",
  },
];

const details = [
  {
    name: "The record",
    detail:
      "One entry per answer: the answer's ID, the time, your account, the model's name, a fingerprint of its weights (a hash that pins the exact version), the software version, and the site and machine that served it. No prompts and no answers.",
  },
  { name: "Looking it up", detail: "From your account, by ID or by date." },
  {
    name: "How long we keep it",
    detail:
      "You choose, up to five years; one year if you do not choose. If you leave, we export every record to you and then delete ours.",
  },
  {
    name: "Models",
    detail: "Open-weight models only, which we host ourselves; we tell you before a version changes.",
  },
  { name: "Software", detail: "Open source throughout." },
  { name: "Training", detail: "None on your data, ever." },
];

export default function ProvenancePage() {
  return (
    <>
      <PageSection>
        <p className="pai-mono">MOCSI</p>
        <h1 className="pai-h2 mt-1">Provenance</h1>
        <p className="pai-body mt-2 max-w-2xl">
          Provenance means you can trace every answer MOCSI gives back to where
          it came from. Ask us any of these questions about an answer, and we
          will tell you.
        </p>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl space-y-4">
          {questions.map((item) => (
            <section key={item.q}>
              <h2 className="pai-h3">{item.q}</h2>
              <p className="pai-body mt-2">{item.a}</p>
            </section>
          ))}
        </div>
      </PageSection>

      <PageSection borderTop background="subtle">
        <h2 className="pai-h3">The details</h2>
        <table className="mt-2 w-full max-w-3xl border-collapse text-left pai-body">
          <tbody>
            {details.map((d) => (
              <tr key={d.name} className="pai-hairline-top align-top">
                <td className="w-44 py-2 pr-3 font-semibold">{d.name}</td>
                <td className="py-2">{d.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl">
          <h2 className="pai-h3">Why it matters</h2>
          <p className="pai-body mt-2">
            Towns, libraries, and schools answer to the people they serve. When
            one of them uses AI to help answer a resident, it should be able to
            say what produced the answer and what happened to the
            resident&apos;s words. Provenance lets them say it.
          </p>
        </div>
      </PageSection>
    </>
  );
}
