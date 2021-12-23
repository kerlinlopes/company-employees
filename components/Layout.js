import Head from "next/head";

export function Layout({ children }) {
	return (
		<main className="layout">
			<Head>
				<title>SECRET</title>
			</Head>
			{children}
		</main>
	);
}
