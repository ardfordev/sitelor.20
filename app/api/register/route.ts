import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

import type { NextRequest } from "next/server";
import { prisma } from "@lucia-auth/adapter-prisma";
import { LuciaError } from "lucia";

export const POST = async (request: NextRequest) => {
	// const { email, name, password, unit, wilayah } = (await request.json()) as Partial<{
	// 	email: string;
	// 	name: string;
	// 	password: string;
	// 	unit: string;
	// 	wilayah: string;
	// }>;
	// const formData = await request.formData();
	const data = await request.formData();
	const email = data.get("email");
	const name = data.get("name");
	const unit = data.get("unit");
	const wilayah = data.get("wilayah");
	const password = data.get("password");
	console.log(email, name, unit, wilayah, password)
	// basic check
	if ( typeof email !== "string" || email.length < 5 || email.length > 100 ) {
		return NextResponse.json({ error: "Invalid email" }, { status: 400 });
	}
	if ( typeof name !== "string" || name.length < 1 || name.length > 100 ) {
		return NextResponse.json({ error: "Invalid name" }, { status: 400 });
	}
	if ( typeof unit !== "string" || unit.length < 3 || unit.length > 4 ) {
		return NextResponse.json({ error: "Invalid unit" }, { status: 400 });
	}
	if ( typeof wilayah !== "string" || wilayah.length < 1 || wilayah.length > 100 ) {
		return NextResponse.json({ error: "Invalid wilayah" }, { status: 400 });
	}
	if ( typeof password !== "string" || password.length < 6 || password.length > 255	) {
		return NextResponse.json({ error: "Invalid password" }, { status: 400 });
	}

	try {
		const user = await auth.createUser({
			key: {
				providerId: "email", // auth method
				providerUserId: email, // unique id when using "email" auth method
				password // hashed by Lucia
			},
			attributes: {
				email,
				name,
				unit,
				wilayah
			}
		});
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});
		const authRequest = auth.handleRequest({
			request,
			cookies
		});
		authRequest.setSession(session);
		return NextResponse.json({ message: 'Berhasil daftar' }, { status: 200 })
		// return new Response(null, {
		// 	status: 302,
		// 	headers: {
		// 		Location: "/dashboard" // redirect to profile page
		// 	}
		// });
	} catch (e) {
		if (e instanceof PrismaClientValidationError) {
			return NextResponse.json({	error: e.message },	{ status: 400 });
		}
		if (e instanceof LuciaError) {
			return NextResponse.json({	error: e.message },	{ status: 400 });
		}

		return NextResponse.json({ error: e }, {	status: 500 });
	}
};
