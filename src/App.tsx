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
</section>

       <section id="projeler">
  <h2>Projelerim</h2>

  <article>
    <h3>Otomatik Raporlama Sistemi</h3>
    <p>
      FastAPI kullanarak geliştirdiğim veri analizi ve otomatik PDF raporlama sistemi.
    </p>
    <a href="#">Projeyi İncele</a>
  </article>

  <article>
    <h3>Stok Takip Otomasyonu</h3>
    <p>
      C# ve DevExpress ile geliştirdiğim ürün ve fiyat takip uygulaması.
    </p>
    <a href="#">Projeyi İncele</a>
  </article>

  <article>
    <h3>Akıllı Seyahat Asistanı (ASA)</h3>
    <p>
      Web geliştirme teknolojileri kullanarak tasarladığım kapsamlı akıllı seyahat planlama projesi.
    </p>
    <a href="#">Projeyi İncele</a>
  </article>

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