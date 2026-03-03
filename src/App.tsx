import profil from "./assets/profil.jpg.jpeg";
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h1>Numan Gürbüz - Kişisel Portföy</h1>

          <figure>
            <img
              src={profil}
              alt="Numan Gürbüz vesikalık fotoğrafı"
              width="200"
            />
            <figcaption>Numan Gürbüz</figcaption>
          </figure>

          <p>Yazılım geliştirme ve DevOps alanında kendimi geliştiriyorum.</p>

          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="proje1.jpg"
                alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile gelistirilmis
                tam kapsamli bir e-ticaret uygulamasi.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="proje2.jpg"
                alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Blog Uygulamasi</h3>
              <p>Kisisel blog platformu.
                Markdown destekli yazi editoru.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="proje3.jpg"
                alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik
                hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          <form>
            <div>
              <label htmlFor="ad">Ad Soyad</label>
              <input
                id="ad"
                name="ad"
                type="text"
                required
              />
            </div>

            <div>
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div>
              <label htmlFor="mesaj">Mesaj</label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                required
              ></textarea>
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Numan Gürbüz - Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;