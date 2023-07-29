import { BrandName } from "./brand-name"

export function Brand() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <BrandName />
      </div>
    </header>
  )
}