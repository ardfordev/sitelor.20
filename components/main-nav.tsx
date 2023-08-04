"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/feeder"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/feeder" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Feeder
            </Link>
            <Link
              href="/healthindex"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/healthindex" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Health Index
            </Link>
            <Link
              href="/prediksiai"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/prediksiai" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Prediksi AI
            </Link>
            <Link
              href="/simulasi"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/simulasi" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Simulasi
            </Link>
            <Link
              href="/help"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/help" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Help
            </Link>
          </nav>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}