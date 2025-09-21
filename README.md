# Cosschigan Website (Full Styled)

This package contains the full multi-page styled Cosschigan website built with Vite + React + Tailwind.

## Quick content to update (phone-friendly)

### Change product names, descriptions and prices
- Open `src/pages/Shop.jsx`.
- Edit the `products` array at the top of the file. Each product has `name`, `desc`, and `price` (numbers in Naira).
- Save and push to GitHub; Netlify will auto-deploy.

Example product entry:
```
{ "id": 1, "name": "Elegant A-line Dress", "desc": "Classic A-line silhouette.", "price": 25000 }
```

### Replace placeholder images (logo / product images)
- Replace `/public/logo.png` with your recolored logo PNG (same name).  
- Replace the product image placeholders by placing images in `/public/products/` and updating the `Image` div to use `<img src="/public/products/yourfile.jpg" />` in `Shop.jsx`.

### Deploy steps (phone)
1. Unzip and upload the folder contents to a GitHub repo.  
2. On Netlify, connect the GitHub repo and deploy.  
3. Ensure Build command: `npm run build` and Publish directory: `dist`.

## Contact
Email: contact@cosschigan.com
Phone: +2348066585236
