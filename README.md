# Simple Proposal

Website proposal sederhana berbasis Next.js yang bisa langsung di-deploy ke Vercel dan dibagikan lewat link.

## Fitur

- Halaman utama dengan pertanyaan: **"Will u be my girlfriend?"**
- Tombol **Belum** bergerak saat diklik
- Tombol **Yes** mengarah ke halaman `thank-you`
- UI modern dengan gradient + card style
- Siap deploy ke Vercel

## Tech Stack

- Next.js 16
- React 19
- CSS global (`app/globals.css`)

## Struktur Project

```bash
app/
  layout.js
  page.js
  thank-you/
    page.js
logic.js
app/globals.css
```

## Menjalankan di Lokal

1. Install dependency

```bash
npm install
```

2. Jalankan development server

```bash
npm run dev
```

3. Buka browser

```bash
http://localhost:3000
```

## Scripts

- `npm run dev` - Menjalankan app di mode development
- `npm run build` - Build production
- `npm run start` - Menjalankan hasil build production

## Kustomisasi Cepat

- Ubah teks halaman utama di `logic.js`
- Ubah teks halaman sukses di `app/thank-you/page.js`
- Ubah warna/tampilan di `app/globals.css`

## Catatan

Sebelum push ke GitHub, pastikan folder build lokal seperti `.next/` tidak ikut di-commit.
