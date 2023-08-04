"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const FormRegister = ({
	children,
	action
}: {
	children: React.ReactNode;
	action: string;
}) => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState<null | string>(null);
	return (
		<>
			<form
				action={action}
				method="post"
				onSubmit={async (e) => {
					e.preventDefault();
					setErrorMessage(null);
					const formData = new FormData(e.currentTarget);
					const response = await fetch(action, {
						method: "POST",
						body: formData,
						redirect: "manual"
					});

					if (response.ok) return router.push('/dashboard');
					// console.log(response.body)
					
					if (!response.ok) {
						const result = (await response.json()) as {
							error?: string;
						};
						setErrorMessage(result.error ?? null);
					}
				}}
			>
				{children}
			{errorMessage && <p className="error">{errorMessage}</p>}
			</form>
		</>
	);
};

export default FormRegister;
