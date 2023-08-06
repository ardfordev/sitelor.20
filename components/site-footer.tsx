import { ModeToggle } from "./mode-toggle"

export function SiteFooter() {
  return (
    <footer className="w-full bottom-0 mt-20 py-6 md:border-t md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Unit Pelaksana Pengatur Distribusi JATIM
        </p>
        <ModeToggle/>
      </div>
    </footer>
  )
}