import { Metadata } from "next"

import AuthContainer from "@/components/auth-container"
import { Brand } from "@/components/brand"
import { Register } from "@/components/register"
import FormRegister from "@/components/form-register"

export const metadata: Metadata = {
  title: "Register",
  description: "Sistem Informasi Technical Losses Realtime 20 KV",
}

export default function RegisterPage() {
  return (
    <>
      <Brand />
      <div className="items-start justify-center gap-4 rounded-lg p-2">
        <div className="w-full justify-center grid items-start gap-6">
          <AuthContainer>
            <FormRegister action="/api/register">
              <Register />
            </FormRegister>
          </AuthContainer>
        </div>
      </div>
    </>
  )
}