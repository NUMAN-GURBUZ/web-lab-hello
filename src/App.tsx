import { useState } from "react";
import profil from "./assets/profil.jpg.jpeg";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import UIKit from "./pages/UIKit";

function App() {
  const [page, setPage] = useState<"portfolio" | "uikit">("portfolio");
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      <button
        type="button"
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-primary dark:text-blue-300">
            Web Lab Hello
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <button
                  type="button"
                  onClick={() => setPage("portfolio")}
                  className={[
                    "px-3 py-1 rounded-md transition-colors",
                    page === "portfolio"
                      ? "bg-blue-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800",
                  ].join(" ")}
                >
                  Portföy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPage("uikit")}
                  className={[
                    "px-3 py-1 rounded-md transition-colors",
                    page === "uikit"
                      ? "bg-blue-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800",
                  ].join(" ")}
                >
                  UI Kit
                </button>
              </li>
              <li className="hidden sm:block">
                <span className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400">
                  Tema: {isDark ? "Koyu" : "Açık"}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="min-h-screen bg-surface dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <main id="main-content">
          {page === "uikit" ? (
            <div className="max-w-6xl mx-auto px-4 py-10">
              <UIKit />
            </div>
          ) : (
            <>
              <section id="hakkimda" className="py-14 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
                  <figure className="flex justify-center md:justify-start">
                    <img
                      src={profil}
                      alt="Profil fotoğrafı"
                      className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-white/60 dark:ring-gray-950/40"
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
                      Hakkımda
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed max-w-2xl">
                      Utility-first yaklaşımıyla hızlı UI üretmeyi seviyorum. Bu sayfa Tailwind v4 + component yaklaşımı
                      (Button/Input/Card/Alert) ile hazırlandı.
                    </p>
                    <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {["React", "TypeScript", "Tailwind"].map((t) => (
                        <li
                          key={t}
                          className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="projeler" className="py-14 px-4 bg-white/60 dark:bg-gray-900/40">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
                    <h2 className="text-3xl font-bold">Projelerim</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                      Responsive grid + dark mode + component yaklaşımı örneği.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                      variant="elevated"
                      title="E-Ticaret"
                      image={reactLogo}
                      imageAlt="Örnek proje görseli"
                    >
                      React ve Node.js ile tam kapsamlı uygulama.
                    </Card>
                    <Card
                      variant="outlined"
                      title="Portföy"
                      image={profil}
                      imageAlt="Portföy görseli"
                    >
                      Responsive + dark mode destekli landing page.
                    </Card>
                    <Card
                      variant="filled"
                      title="UI Kit"
                      image={reactLogo}
                      imageAlt="UI Kit görseli"
                      footer={
                        <Button size="sm" onClick={() => setPage("uikit")}>
                          Varyantları gör
                        </Button>
                      }
                    >
                      Button/Input/Card/Alert bileşenleri ve varyantları.
                    </Card>
                  </div>
                </div>
              </section>

              <section id="iletisim" className="py-14 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">İletişim</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-prose">
                      Form bileşenleri `Input` + `Button` ile; focus ring ve `aria-describedby` kuralları korunuyor.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Input id="name" label="Ad Soyad" required />
                      <Input id="email" label="E-posta" type="email" required />
                      <div className="space-y-1">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Mesajınız
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button variant="primary" size="md" type="submit">
                          Gönder
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>

              <footer className="border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm">
                <p>&copy; 2026 Web Lab Hello. Tüm hakları saklıdır.</p>
              </footer>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default App