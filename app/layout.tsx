import "./globals.css";
import type { Metadata } from "next";
import {IBM_Plex_Sans, Inter} from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import Modal from "./components/modals/Modal";
import PostModal from "./components/modals/postModal/PostModal";

const IBM_Plex = IBM_Plex_Sans({ subsets: ["latin"], weight: '400'});

export const metadata: Metadata = {
    title: "Social Media Manager",
    description: "Schedule your social media posts and more",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={IBM_Plex.className}>
                    <div className="relative w-full">
                        <div className="absolute top-0 left-0 w-full h-full ">
                            <PostModal/>
                        </div>
                        <div className="
                            flex 
                            lg:flex-row
                            flex-col
                        ">
                            <ClientOnly>
                                <Navbar/>
                            </ClientOnly>
                            {children}
                        </div>
                    </div>
            </body>
        </html>
    );
}
