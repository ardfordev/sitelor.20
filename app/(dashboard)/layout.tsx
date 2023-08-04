import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from "@/config/site"
import { Brand } from '@/components/brand'
import { MainNav } from '@/components/main-nav'
import FormLogout from '@/components/form-logout'
import { Button } from '@/components/ui/button'
import { getPageSession } from '@/auth/lucia';
import { redirect } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dashboard",
  description: siteConfig.description,
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const session = await getPageSession();
	if (!session) redirect("/login");
  return (
    <>
      <Brand/>
      <MainNav>
        <FormLogout action='/api/logout'>
          <Button type="submit" className="w-full">Logout</Button>
        </FormLogout>
      </MainNav>
      {children}
    </>
  )
}
