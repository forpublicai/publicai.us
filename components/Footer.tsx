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
        <div className="mt-6 flex flex-col gap-2 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Interested in using or hosting public AI in Maine?{" "}
            <a
              href="mailto:info@publicai.network?subject=Using%20or%20hosting%20Public%20AI%20USA"
              className="font-medium text-brand hover:underline"
            >
              Email us
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/terms/" className="hover:text-gray-900">
              Terms
            </a>
            <a href="/privacy/" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="/cookies/" className="hover:text-gray-900">
              Cookies
            </a>
            <a href="mailto:info@publicai.network" className="hover:text-gray-900">
              Contact
            </a>
            <a
              href="mailto:info@publicai.network?subject=Investor%20inquiry"
              className="hover:text-gray-900"
            >
              Investors
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
