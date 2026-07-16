# Therapy 4 All Physiotherapy — Website

Next.js 15 + TypeScript + Tailwind CSS. Clinics: Mount Hutton (main hub, gym),
Warners Bay, Wallsend, Rutherford. Deploy on Vercel; keep the therapy4allgroup.com domain.

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build

## Replace placeholder images (public/)
- images/hero.jpg (portrait), images/og-default.png (1200x630)
- team/keith-ho.jpg, daniel-lee.jpg, zarqa-shariff.jpg, ekta-kakadiya.jpg, jason-lau.jpg

## Booking
Update `bookingUrl` in lib/site.ts if you have an online booking system (e.g. Cliniko/HotDoc);
otherwise "Book Online" leads to the call-your-clinic + enquiry page.

## Deploy (keep your domain)
1. Push to a GitHub repo; import to Vercel (framework auto-detected).
2. In Vercel add domain therapy4allgroup.com; update DNS at your registrar to Vercel's records.
3. Cancel the Wix site once live (keep the domain).
