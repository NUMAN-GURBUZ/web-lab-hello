# Web LAB-2 - Kişisel Portföy

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi **LAB-2** kapsamında **Vite + React + TypeScript** kullanılarak oluşturulmuş kişisel bir portföy sitesidir. Projede semantik HTML yapısı kurulmuş, form doğrulamaları eklenmiş, CSS Design Tokens uygulanmış, fluid typography ve responsive layout (mobile-first) stratejileri hayata geçirilmiştir.

## Geliştirici
**Ad Soyad:** Numan Gürbüz  
**Öğrenci No:** 230542012  
**Bölüm:** Yazılım Mühendisliği  

---

## Kullanılan Teknolojiler
| Teknoloji | Açıklama |
|-----------|----------|
| React 18 | UI bileşenleri |
| TypeScript | Tip güvenli geliştirme |
| Vite | Hızlı geliştirme ortamı |
| Vanilla CSS | Design Tokens, Flexbox, Grid |
| Semantik HTML5 | Erişilebilir sayfa yapısı |

---

## Proje Yapısı
```
web-lab-hello/
├── src/
│   ├── App.tsx          # Ana uygulama bileşeni
│   ├── App.css          # Tüm stiller (tokens, layout, responsive)
│   └── assets/          # Profil görseli
├── public/              # Proje görselleri (proje1, proje2, proje3)
├── CSS-KARARLARI.md     # CSS kararlarının gerekçeleri
└── index.html           # Giriş noktası
```

---

## CSS Mimarisi

### Design Tokens
CSS custom properties ile tutarlı renk, tipografi ve boşluk skalası tanımlandı:
- **Ana Renk:** `#1E3A8A` (lacivert — güven ve profesyonellik)
- **Accent:** `#2563EB` (hover/odak durumları için)
- **Spacing Skalası:** `xs → sm → md → lg → xl → 2xl → 3xl`

### Fluid Typography
```css
clamp(min, tercih_vw, max)
```
Tipografi, ekran boyutuna göre akıcı biçimde ölçeklenir; mobilde okunaklılık, masaüstünde orantılılık korunur.

### Layout
- **Header:** Flexbox — tek boyutlu yatay hizalama
- **Proje Kartları:** CSS Grid — `repeat(auto-fit, minmax(280px, 1fr))` ile media query'siz responsive ızgara

### Responsive (Mobile-First)
| Breakpoint | Değişiklikler |
|------------|--------------|
| — (mobil) | Tek sütun, dikey navigasyon |
| `@media (min-width: 640px)` | Yatay nav, Hakkımda yatay düzen, form butonu otomatik genişlik |
| `@media (min-width: 1024px)` | İçerik 1200px ile sınırlı, proje kartları 3 sabit sütun |

---

## Sayfa Bölümleri
- **Hakkımda** — Profil fotoğrafı, tanıtım metni, beceri etiketleri
- **Projelerim** — 3 proje kartı (E-Ticaret, Blog, Hava Durumu)
- **İletişim** — Ad, e-posta ve mesaj alanlarından oluşan form (HTML5 doğrulama)

---

## Kurulum

```bash
npm install
```

## Çalıştırma (Geliştirme)

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

---

## Erişilebilirlik
- Skip-link (`Ana içeriğe atla`) eklendi
- ARIA label'ları (`aria-label`, `role="list"`) kullanıldı
- Form elemanları `<label>` ile ilişkilendirildi
- Lighthouse Erişilebilirlik Skoru: **92**

![Lighthouse Skoru](resim.png)