export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-gray-900">Public AI Network</p>
            <a
              href="mailto:info@publicai.network"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              info@publicai.network
            </a>
          </div>
          <p className="max-w-sm text-sm text-gray-600">
            A pilot-scale public AI compute facility in Maine—affordable AI for
            local companies, communities, and residents.
          </p>
        </div>
      </div>
    </footer>
  );
}
