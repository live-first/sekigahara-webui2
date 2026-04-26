import type { Metadata } from 'next'
import { artists } from '@/resource/2026/yosen/artists'

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const params = await props.params
  const artist = artists.find((a) => a.x === params.id)

  return {
    title: artist ? `${artist.name} | 関ケ原唄姫合戦2026予戦会` : '関ケ原唄姫合戦2026予戦会',
    description:
      '「関ケ原唄姫合戦」の予戦会特設サイトです。2026年5月1日(金)〜5月31日(日)に開催されます！',
    metadataBase: new URL('https://sekigahara-idolwars.net'),
    openGraph: {
      title: artist ? `${artist.name} | 関ケ原唄姫合戦2026 予戦会` : '関ケ原唄姫合戦2026 予戦会',
      description:
        '国内最大級の野外アイドルフェス「関ケ原唄姫合戦」の公式サイトです。2026年は7月18日(土)、19日(日)、20日(月祝)に開催します。',
      url: 'https://sekigahara-idolwars.net',
      siteName: '関ケ原唄姫合戦2026 予戦会',
      images: artist
        ? [
            {
              url: artist.img.src,
              width: 1200,
              height: 630,
              alt: artist.name,
            },
          ]
        : [
            {
              url: '/2026/logo_2026.png',
              width: 1200,
              height: 630,
              alt: '関ケ原唄姫合戦2026',
            },
          ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: artist ? `${artist.name} | 関ケ原唄姫合戦2026 予戦会` : '関ケ原唄姫合戦2026 予戦会',
      description:
        '「関ケ原唄姫合戦」の予戦会特設サイトです。2026年5月1日(金)〜5月31日(日)に開催されます！',
      images: artist ? [artist.img.src] : ['/2026/logo_2026.png'],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
