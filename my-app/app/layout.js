import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ConfPlus",
    description: "Your destination for all things conferences",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="bumblebee">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
