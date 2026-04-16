export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 text-sm sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3 text-slate-600">
            <p className="font-semibold text-slate-900">University of Massachusetts Amherst</p>
            <p>The Isenberg School Of Management</p>
            <p>Amherst, MA, 01003</p>
          </div>

          <div className="space-y-3 text-left sm:text-right">
            <a
              href="mailto:minutemenblockchainfund@gmail.com"
              className="block font-semibold text-slate-900 hover:text-slate-700"
            >
              minutemenblockchainfund@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/company/minutemen-blockchain-fund/3"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-600 hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
