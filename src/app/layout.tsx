import { Metadata } from 'next';
import './globals.css';
import BaseQueryClientProvider from '@/contexts/tanstackQuery/BaseQueryClientProvider';
import { pretendard } from './font';

// PWA 관련 세팅
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Wedivce_FE 화이팅^^',
  description: '테스트 메타 데이터 PWA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`layout ${pretendard.variable}`}>
        <BaseQueryClientProvider>
          <div className="w-full h-[100dvh] bg-black font-pretendard">
            {children}
          </div>
        </BaseQueryClientProvider>
      </body>
    </html>
  );
}
