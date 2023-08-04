import { lucia } from "lucia";
import { nextjs } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

import { cache } from "react";
import { cookies } from "next/headers";



const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client, {
		user: "user",
		session: "session",
		key: "key"
	}),
	// env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
	env: "DEV",
	middleware: nextjs(),
	sessionCookie: {
		expires: false
	},
	getUserAttributes: (data) => {
		return {
			email: data.email,
			name: data.name,
			unit: data.unit,
			wilayah: data.wilayah
		};
	}
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
	const authRequest = auth.handleRequest({
		request: null,
		cookies
	});
	return authRequest.validate();
});
