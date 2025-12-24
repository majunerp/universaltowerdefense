import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://theforgecodes.org'),
  title: {
    default: "Universal Tower Defense - Codes, Tier List, Guides & Calculator | UTD Roblox",
    template: "%s | Universal Tower Defense"
  },
  description: "Complete Universal Tower Defense resource hub! Get the latest working codes, tier lists, DPS calculators, team guides, and wiki for UTD Roblox game. Master every wave with our tools and strategies.",
  keywords: ["Universal Tower Defense", "UTD", "Roblox", "Tower Defense", "Codes", "Tier List", "Calculator", "Wiki", "Guide"],
  authors: [{ name: "UTD Resource Hub" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theforgecodes.org/',
    siteName: 'Universal Tower Defense',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Universal Tower Defense - Codes, Tier List, Guides & Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universal Tower Defense (UTD) - Codes & Guides',
    description: 'Universal Tower Defense hub: working codes, tier lists, calculators, guides, and wiki',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400..900&family=Geist+Mono:wght@400..900&family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0TG1GD3WX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N0TG1GD3WX');
`,
          }}
        />
        {/* Microsoft Clarity */}
         <script
           dangerouslySetInnerHTML={{
             __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ui69ciwae1");
`,
           }}
         />
      </head>
      <body
        className="antialiased bg-zinc-950 text-zinc-100 font-sans leading-normal"
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
