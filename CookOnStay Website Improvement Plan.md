# CookOnStay Website Improvement Plan

Nov 17, 2026 · @DINESHMOORTHI A S

## Biggest wins

Four changes should bring the most orders and the best Google visibility, in this order. They are based on reading the code, not on a live browser check.

1. **Add an "Order Now" button everywhere.** Put it in the Navbar, the home hero, `/menu` and `/scan`, linking to your ordering platform. Today the only ways to order are WhatsApp and a form, which costs orders.
2. **Set up conversion tracking.** Add the Google tag and record "Order Now" clicks, WhatsApp clicks, calls and enquiry submissions as conversions. Without it, Google Ads spend can't be judged or improved.
3. **Make your Google Business Profile match the website exactly.** Name, address, phone and hours must be identical. Add your website link, food and shop photos, and your menu. For a Madurai food business this drives more local traffic than anything on the site.
4. **Get real reviews.** Put a "Review us on Google" button on `/scan` and the Footer, and ask customers at the counter or on WhatsApp after an order. Google Customer Reviews comes later, once ordering is online.

## SEO

Your pages use broad wording like "food solutions", so search engines can't tell exactly what you sell or where. These four changes make it specific.

- **Add menu structured data.** Mark up dishes as `Menu` and `MenuItem` with prices in INR, so Google can show them in results.
- **Add a FAQ section with `FAQPage` schema.** `constants/menuFaq.ts` already exists; check whether any page uses it.
- **Add Madurai-specific content.** Write pages or sections for "bulk food order in Madurai", "college catering Madurai" and "office lunch Madurai".
- **Show the testimonials.** `constants/testimonials.ts` exists; check whether the reviews appear on the home page, with `Review` schema if they are real.

## Speed and quality

Most of your visitors will be on phones, so faster pages help both rankings and orders.

- **Switch plain `<img>` tags to `next/image`** on `/menu`, `/catering`, `/about` and `/scan`. Pages load faster on mobile.
- **Add `<Analytics />` and `<SpeedInsights />` to `layout.tsx`** if you deploy on Vercel. They are installed but not rendering; otherwise uninstall them.
- **Add custom `not-found.tsx` and `error.tsx` pages**, so a wrong link shows a friendly page with a button back to the menu.
- **Add `lastModified` dates to the sitemap.**

## Cleanups

Small inconsistencies that confuse customers and Google.

- **Pick one contact email.** `storeskuberan@gmail.com` and `support@cookonstay.com` are both in use.
- **Check your opening hours.** "7:00 PM – 10:00 PM, Mon–Sat" doesn't fit a business that also sells breakfast and lunch, and Google compares it with your Business Profile.
- **Keep one copy of the menu data.** It is repeated in `/menu`, `constants/menu.ts` and `constants/menuItems.ts`.
- **Rewrite `README.md`.** It is still the default Next.js text and should describe your project.

## Suggested order of work

Start with the Order Now button, conversion tracking, menu structured data and `next/image`, because they give the biggest gain for the least work. The Order Now button needs your ordering platform's URL before it can be built.
