import "./globals.css";

import Header from '@/components/global/header/Header';
import { NextIntlClientProvider } from 'next-intl';

import Providers from './provider';
import { getLocale, getMessages } from "next-intl/server";
import CookieConsent from "@/components/global/cookieConsent/CookieConsent";
import Footer from "@/components/global/footer/Footer";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const messages = await getMessages();
    const locale = await getLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <html
                lang={locale}
            >
                <body
                    className={` antialiased min-h-screen bg-light-main text-black  dark:bg-[#030A1B] dark:text-gray-100 transition-colors flex flex-col`}
                >
                    <Providers >
                        <Header />
                        <main className="flex-1">

                            {children}
                        </main>
                        <CookieConsent />
                        <Footer />
                    </Providers>
                </body>
            </html>
        </NextIntlClientProvider>
    )
}