# Master Project Prompt: Off Stamp Vape E-Commerce Platform

**Objective:** Build a premium, high-conversion e-commerce platform for "Off Stamp Vape" that functions as a catalog and order-generation system via WhatsApp and Email. The site must be heavily optimized for SEO and provide a seamless user experience for both US and International customers.

---

## 1. Visual Identity & Design System
- **Aesthetic:** Dark, premium, high-tech, and high-contrast.
- **Colors:** 
  - Background: `#111111` (Support)
  - Surface: `#1a1a1a`
  - Primary: `#FF4D6D` (Vibrant Pink/Red)
  - Secondary: `#8338EC` (Purple)
  - Accent: `#3A86FF` (Blue)
- **Typography:** 
  - Headings: "Syne" (Bold, modern)
  - Body: "DM Sans" (Clean, legible)
- **Icons:** Use `lucide-react`.
- **Animations:** Use `framer-motion` for smooth transitions and staggered entrances.
- **Branding:** Custom SVG favicon (Pink square with a white stylized cube icon).

---

## 2. Core Functionality: The Order Builder (Checkout)
Implement a sidebar-based Order Builder with the following logic:
- **Sidebar Layout:** 
  - Width: `max-w-lg`.
  - **Top Section:** Delivery Details form (Full Name, Email, Phone, Address) in a distinct `bg-gray-800/40` container.
  - **Middle Section:** Item list with **Quantity Controls (+/-)** for each product.
  - **Shipping Section:** Radio-style selection for:
    - Standard (5 days): $9.90
    - Express (2-3 days): $20.00
    - International Shipping: $60.00
    - Overnight (24 hours): $80.00
  - **Payment Section:** Selection for Apple Cash, Chime, and Crypto. 
    - *Crucial Note:* Display "Note: Payment details for your selected method will be emailed to you once we receive your order request."
- **Business Logic:**
  - **Minimum Order:** Enforce a **$100.00 minimum** (Subtotal + Shipping). Disable order buttons and show a red warning if below this amount.
  - **Order Generation:** Generate a formatted text block for WhatsApp (to `18437320661`) and Email (`sales@offstamp-vape.store`) containing all customer details, items, shipping choice, and total.

---

## 3. Pages & Content
### Home Page
- **Hero:** Feature the "Blue Razz Ice Off Stamp X-Cube Kit" image.
- **Marquee:** Scrolling text: "🌍 Fast Worldwide International Shipping • 💨 Up to 16,000 Puffs • 🔋 Rechargeable Batteries".
- **SEO Content:** Include a hidden/integrated 3000-word comprehensive article about Off Stamp Vape technology, flavors, and market presence (UK/US).
- **Trust Banner:** "Worldwide Trusted Disposable Supplier".

### Product Catalog
- **Data:** 145 products categorized into: "Off Stamp X-Cube", "Off Stamp SW9000", "Off Stamp Ice Cube", and "Off Stamp Accessories".
- **Filtering:** Real-time filtering by category.
- **Product Detail:** 
  - High-res image from MiPod CDN.
  - "Fast Worldwide Shipping" trust badge.
  - **SEO Package:** Each product must have a unique SEO Title, Meta Description, and a **1,000-word Markdown description** covering flavor profiles, technical specs, and sustainability.

### Support Pages
- **Contact:** Affirm both **Physical Storefront and Online** presence. Provide WhatsApp and Email links.
- **FAQ:** Cover payment methods, $100 minimum order, and worldwide shipping.
- **Shipping Policy:** Detailed breakdown of the 4 shipping rates, carriers (UPS, FedEx, USPS), and international coverage.

---

## 4. Technical SEO & Performance
- **Domain:** `https://offstamp-vape.store`
- **Sitemap:** Script to generate `sitemap.xml` including all 145 product routes.
- **Robots.txt:** Allow all crawlers; link to sitemap.
- **Metadata:** Dynamic `document.title` and `meta description` updates on every product page.
- **PWA:** `manifest.json` linked with brand colors and icons.
- **Performance:** Preload hero images and use `fetchpriority="high"`.

---

## 5. Data Sample (Product Structure)
```typescript
{
  id: "product-id",
  name: "Product Name",
  category: "Category Name",
  price: 15.99,
  image: "CDN_URL",
  description: "Short summary",
  seoTitle: "SEO Optimized Title",
  metaDescription: "Compelling search snippet",
  seoDescription: "# 1000 Word Markdown Article..."
}
```
