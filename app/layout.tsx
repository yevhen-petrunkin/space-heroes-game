import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import ReduxClient from '@/game-engine/clients/redux-client/ReduxClient';

const notoSans = Noto_Sans({ subsets: ['latin', 'cyrillic'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
    title: 'Space Heroes',
    description: 'HoMM3-like Game',
};

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${notoSans.className} antialiased`}>
                <ReduxClient>{children}</ReduxClient>
            </body>
        </html>
    );
}
