import people from "@/lib/people.json";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PeopleSection() {
  return (
    <ul className="mt-2">
      {people.map((person) => (
        <li key={person.id} className="pai-hairline-top flex gap-3 py-3">
          <div
            aria-hidden="true"
            className="pai-mono flex h-10 w-10 shrink-0 items-center justify-center bg-subtle text-[11px]"
          >
            {initials(person.name)}
          </div>
          <div>
            <p className="pai-body">
              <strong>{person.name}</strong>, {person.role}
            </p>
            <p className="pai-body-secondary mt-1">{person.oneLineBio}</p>
            <a
              href={person.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pai-mono mt-1 inline-block text-brand"
            >
              {person.linkLabel} ↗
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
