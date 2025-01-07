import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Notion Clone",
	description: "A Notion clone built with Next.js and Tailwind CSS",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: dark)",
				url: "./notion-logo.svg",
				href: "./notion-logo.svg",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "./notion-logo.svg",
				href: "./notion-logo.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
					storageKey="notion-clone-theme"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
