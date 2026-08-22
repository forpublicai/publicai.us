import Image from "next/image";
import people from "@/lib/people.json";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PersonPhoto({ name, photo }: { name: string; photo: string | null }) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-cover object-top"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pai-mono flex h-10 w-10 shrink-0 items-center justify-center bg-subtle text-[11px]"
    >
      {initials(name)}
    </div>
  );
}

export default function PeopleSection() {
  return (
    <ul className="mt-2">
      {people.map((person) => (
        <li key={person.id} className="pai-hairline-top flex items-start gap-3 py-3">
          <PersonPhoto name={person.name} photo={person.photo} />
          <div className="min-w-0 flex-1">
            <p className="pai-body">
              <strong>{person.name}</strong>, {person.role}
            </p>
            <p className="pai-body-secondary mt-1">{person.oneLineBio}</p>
          </div>
          <a
            href={person.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on ${person.linkLabel}`}
            className="shrink-0 text-brand"
          >
            <LinkedInIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}
