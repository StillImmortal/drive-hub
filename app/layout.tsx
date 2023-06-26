import "./globals.css";
import Providers from "@/lib/Providers";
import { Navbar, Footer } from "@/components/home";

export const metadata = {
  title: 'Drive Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"/images/logo-sm.svg"} />
      </head>
      <body className={`relative bg-[#111111]`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
