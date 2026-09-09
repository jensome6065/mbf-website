export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 text-sm sm:px-8">
        <div className="mb-8 h-1 w-16 bg-brand" aria-hidden="true" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3 text-muted">
            <p className="font-display text-2xl text-foreground">Minutemen Blockchain Fund</p>
            <p className="font-semibold text-foreground">University of Massachusetts Amherst</p>
            <p>The Isenberg School of Management</p>
            <p>Amherst, MA 01003</p>
          </div>

          <div className="space-y-3 text-left sm:text-right">
            <a
              href="mailto:minutemenblockchainfund@gmail.com"
              className="block font-semibold text-brand transition hover:text-brand-hover"
            >
              minutemenblockchainfund@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/company/minutemen-blockchain-fund/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted transition hover:text-brand"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
