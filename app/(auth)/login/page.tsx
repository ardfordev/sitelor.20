import { Metadata } from "next"

import AuthContainer from "@/components/auth-container"
import { Login } from "@/components/login"
import { Brand } from "@/components/brand"
import FormLogin from "@/components/form-login"

export const metadata: Metadata = {
  title: "Login",
  description: "Sistem Informasi Technical Losses Realtime 20 KV",
}

export default function LoginPage() {
  return (
    <>
      <Brand />
      <div className="items-start justify-center gap-6 rounded-lg p-8 mb-52">
        <div className="w-full justify-center grid items-start gap-6">
          <AuthContainer>
            <FormLogin action="/api/login" >
              <Login />
            </FormLogin>
          </AuthContainer>
        </div>
      </div>
    </>
  )
}