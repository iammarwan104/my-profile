# Ringkasan Proyek: Website Profil Marwan Mansur

Dokumen ini merangkum semua fitur yang telah diimplementasikan dalam proyek website profil personal.

## Teknologi yang Digunakan

*   **Framework:** Next.js 14
*   **Bahasa:** TypeScript
*   **Styling:** Tailwind CSS
*   **Kontrol Versi:** Git

## Fitur yang Telah Diimplementasikan

### 1. Struktur Halaman & Komponen
*   Proyek dibangun dengan arsitektur berbasis komponen, di mana setiap seksi adalah komponen React yang terpisah.
*   Struktur halaman utama terdiri dari `layout.tsx` (berisi Navbar dan Footer) dan `page.tsx` (berisi semua seksi konten).

### 2. Komponen & Seksi Konten
Semua seksi berikut telah berhasil dibuat dan diisi dengan konten sesuai CV:
*   **Hero Section:** Menampilkan foto, nama, jabatan, dan slogan.
*   **About Section:** Paragraf deskripsi diri.
*   **Experience Section:** Tampilan riwayat pengalaman dalam format kartu, lengkap dengan placeholder untuk gambar.
*   **Skills Section:** Daftar keahlian yang dikelompokkan per kategori.
*   **Portfolio Section:** Galeri proyek dalam format kartu (dengan konten placeholder).
*   **Education Section:** Riwayat pendidikan dan kursus.
*   **Hobbies Section:** Menampilkan hobi dengan ikon dan deskripsi.
*   **Navbar:** Menu navigasi yang responsif (mobile-first) dan sticky (tetap di atas).
*   **Footer:** Kaki halaman berisi tautan sosial media dan copyright.

### 3. Animasi & Efek Visual
*   **Animasi Per-Elemen:** Setiap elemen di dalam semua seksi (judul, paragraf, gambar, kartu) memiliki efek animasi *fade-in-up* yang muncul secara berurutan saat di-scroll.
*   **Animasi Navbar:** Navbar memiliki efek transisi. Saat di puncak halaman, navbar bersifat transparan. Saat di-scroll, navbar secara halus berubah menjadi solid dengan latar belakang blur dan bayangan.
*   **Smooth Scrolling:** Navigasi antar seksi melalui Navbar berjalan dengan animasi scroll yang halus.

### 4. Manajemen Proyek
*   Seluruh perubahan dan penambahan fitur telah disimpan dalam repositori Git lokal melalui sebuah *initial commit* yang deskriptif.

Proyek ini telah mencapai tahap fungsional penuh sesuai dengan rencana awal, dengan penambahan berbagai penyempurnaan visual dan animasi.
