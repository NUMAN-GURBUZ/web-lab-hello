# CSS Kararlari

## 1. Breakpoint Secimi

640px ve 1024px breakpoint'lerini seçtim çünkü bu değerler yaygın cihaz genişliklerine karşılık geliyor: 640px akıllı telefondan tablete geçişi, 1024px ise tabletten masaüstüne geçişi temsil ediyor.

- **640px'te** navigasyon yatay düzene geçiyor, "Hakkımda" bölümü tek sütundan yatay düzene dönüşüyor ve form butonu otomatik genişliğe kavuşuyor.
- **1024px'te** ana içerik alanı 1200px ile sınırlandırılıyor ve proje kartları sabit 3 sütuna yerleşiyor.

## 2. Layout Tercihleri

Header için **Flexbox** seçtim; çünkü header tek boyutlu bir düzen — logo solda, navigasyon sağda. Flexbox bu tür yatay hizalamalar için idealdir, gereksiz yere Grid kullanmak aşırıya kaçmak olurdu.

Proje kartları için **Grid** tercih ettim; çünkü kartlar iki boyutlu bir düzende (satır ve sütun) oturmalıydı. `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive bir ızgara elde ettim.

`auto-fit` kullandım çünkü kart sayısı azaldığında boş sütun bırakmak yerine mevcut kartların genişlemesini istedim. `auto-fill` kullanseydim boş sütunlar yerini korurdu.

## 3. Design Tokens

Renk paletini kendi portföyümün ciddiyetini yansıtacak şekilde seçtim: `#1E3A8A` koyu lacivert ana renk olarak güven ve profesyonellik hissi veriyor, `#2563EB` ise hover ve odak durumlarında bir ton açık olarak aksanı tamamlıyor.

Spacing skalasını `xs → sm → md → lg → xl → 2xl → 3xl` şeklinde belirledim; her adım öncekinin iki katı civarında. Bu sayede bileşenler arasındaki boşluklar tutarlı ve öngörülebilir kalıyor.

Fluid typography için `clamp(min, tercih, max)` değerlerini ayarlarken şu mantığı izledim: minimum değer mobilde okunaklılığı korur, `vw` tabanlı orta değer ekran büyüdükçe akıcı büyümeyi sağlar, maksimum değer ise masaüstünde orantısız büyümeyi engeller.

## 4. Responsive Stratejiler

**Mobile-first** yaklaşımını uyguladım: önce en küçük ekran için stili yazdım, sonra `@media (min-width: ...)` ile büyük ekranlar için üstüne ekledim. Bu yöntem daha az CSS yazmamı sağladı ve küçük cihazlarda performansı artırdı.

Breakpoint'lerde değişen başlıca elemanlar: navigasyon yönü, "Hakkımda" bölümünün flex-direction'ı, section padding değerleri ve project-grid sütun sayısı.

Görsel boyutlarını `max-width: 100%` ve `object-fit: cover` ile yönettim; böylece resimler kendi oranlarını bozmadan kart alanını kaplıyor ve farklı görsel boyutları kart yüksekliklerini bozmuyor.
