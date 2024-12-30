import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggler";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";

export const metadata = {
  title: "Harshvardhan's Portfolio",
  description: "Software Developer | Machine Learning Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="pt-16 flex-1">{children}</main>
          <Footer />
          <ModeToggle className="fixed bottom-4 right-4" />
        </ThemeProvider>
      </body>
    </html>
  );
}
