import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '関ケ原唄姫合戦2025',
  description:
    '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2025年は7月19日、20日、21日に開催します。',
  metadataBase: new URL('https://sekigahara-idolwars.net'),
  openGraph: {
    title: '関ケ原唄姫合戦2025',
    description:
      '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2025年は7月19日、20日、21日に開催します。',
    url: 'https://sekigahara-idolwars.net',
    siteName: '関ケ原唄姫合戦2025',
    images: [
      {
        url: '/ワンダーウィード天.jpg',
        width: 1200,
        height: 630,
        alt: '関ケ原唄姫合戦2025',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '関ケ原唄姫合戦2025',
    description:
      '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2025年は7月19日、20日、21日に開催します。',
    images: ['/ワンダーウィード天.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
