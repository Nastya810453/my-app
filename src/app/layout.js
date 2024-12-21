import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo">
            <Link href="/">FASHION</Link>
          </div>
          <nav className="nav">
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-icons">
              <a href="#" className="icon-link" title="Telegram">
                <Image
                  src="/catalog/img1.svg"
                  alt=" "
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="icon-link" title="WhatsApp">
                <Image
                  src="/catalog/img2.svg"
                  alt=" "
                  width={30}
                  height={30}
                />
              </a>
              <a href="#" className="icon-link" title="Email">
                <Image
                  src="/catalog/img3.svg"
                  alt=" "
                  width={30}
                  height={30}
                />
              </a>
            </div>
            <p className="footer-text">© 2024 Fashion Store. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
