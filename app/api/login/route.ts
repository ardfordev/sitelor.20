import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { LuciaError } from "lucia";

import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	// basic check
	if ( typeof email !== "string" || email.length < 1 || email.length > 100 ) { 
    return NextResponse.json({ error: "Invalid email" }, { status: 400 }); 
  }
	
  if ( typeof password !== "string" || password.length < 1 || password.length > 255) {
		return NextResponse.json({ error: "Invalid password" }, { status: 400 });
	}
	
  try {
		// find user by key
		// and validate password
		const key = await auth.useKey("email", email, password);
		
    const session = await auth.createSession({
			userId: key.userId,
			attributes: {}
		});
		
    const authRequest = auth.handleRequest({
			request,
			cookies
		});
		
    authRequest.setSession(session);
		return NextResponse.json({ message: 'Berhasil login' }, { status: 200 })
		// return new Response(null, {
		// 	status: 302,
		// 	headers: {
		// 		Location: "/dashboard" // redirect to profile page
		// 	}
		// });
	} catch (e) {
		if (
			e instanceof LuciaError && (e.message === "AUTH_INVALID_KEY_ID" || e.message === "AUTH_INVALID_PASSWORD")
		) {
			// user does not exist
			// or invalid password
			return NextResponse.json({ error: e.message }, { status: 400 });
		}

		return NextResponse.json({ error: "Error" }, { status: 500 });
	}
};