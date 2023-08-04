/// <reference types="lucia" />
declare namespace Lucia {
	type Auth = import("@/auth/lucia").Auth;
	type DatabaseUserAttributes = {
		email: string;
		name: string;
		unit: string;
		wilayah: string;
	};
	type DatabaseSessionAttributes = {};
}
