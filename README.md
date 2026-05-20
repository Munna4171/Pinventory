# Pinventory

A premium, high-performance affiliate fashion gateway built with Next.js. Pinventory serves as a curated editorial catalog for minimalist menswear and womenswear, bridging the gap between high-end aesthetic discovery (via Pinterest) and seamless purchasing (via Amazon Associates).

## 🚀 The Architecture

Pinventory is designed to be completely decoupled from a traditional CMS, utilizing a lightweight local data layer and static generation for instantaneous load times and zero database costs. 

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (Custom minimalist color palette and typography)
* **Data Layer:** Local JSON (`/data/products.json`)
* **Deployment:** Vercel

## ✨ Core Features

* **Minimalist Editorial UI:** A distraction-free, magazine-style layout featuring uniform aspect ratios, custom typography (Inter, Manrope, JetBrains Mono), and dark-mode premium aesthetics.
* **Automated Pinterest Ingestion:** A custom Next.js API route (`/api/catalog`) dynamically converts the local JSON database into a live CSV feed. Pinterest fetches this feed every 24 hours to automatically generate and update shoppable Product Pins.
* **Amazon Associates Integration:** Seamless routing to Amazon via `amzn.to` shortlinks attached to a high-conversion CTA.
* **Dynamic Content Routing:** Fully dynamic category pages (`/category/[slug]`) that filter inventory on the fly, complete with graceful, styled empty states for upcoming collections.
* **Cross-Selling Engine:** Built-in relational arrays within the data layer allow items to automatically recommend "Pairs perfectly with" complementary pieces.

## 🗂️ Project Structure

* `/app` - Next.js routing, global layouts, and the API feed.
* `/data/products.json` - The "Invisible Backend." The single source of truth for all inventory, pricing, and affiliate links.
* `/public/images` - Local repository for high-quality, editorial product photography.

## 🛠️ The Publication Workflow

Adding new inventory to the live site takes less than 60 seconds.

1. **Source:** Obtain the product image and Amazon Associate shortlink.
2. **Asset Prep:** Save the image to `/public/images/`.
3. **Hydrate:** Append the item details to `/data/products.json`.
4. **Deploy:** `git push`. Vercel rebuilds the static site instantly, and Pinterest automatically ingests the new item on its next daily sync.

## 💻 Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
