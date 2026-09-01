# Image URLs Reference - URBAN STAYS Website

This document lists all Unsplash image URLs used across the website for easy verification and maintenance.

## Homepage (`app/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1920&q=80`
  - Description: Luxury apartment interior

### Welcome Section
- **Image 1**: `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80`
  - Description: Apartment interior
- **Image 2**: `https://images.unsplash.com/photo-1560448204-e1a3f94c8d0d?w=600&q=80`
  - Description: Interior living space

---

## Apartments Page (`app/apartments/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1920&q=80`
  - Description: Luxury apartment interior

### Apartment Listings
1. **Studio Suite**: `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80`
2. **One Bedroom**: `https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80`
3. **Two Bedroom**: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80`

---

## Gallery Page (`app/gallery/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1600596542815-3ad19b989b7b?w=1920&q=80`
  - Description: Luxury apartment interior

### Gallery Grid (12 Items)
1. **Apartments** - `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80`
   - Alt: Luxury studio suite living area
   - Aspect: 4/3

2. **Interiors** - `https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80`
   - Alt: Premium bedroom with gold accents
   - Aspect: 3/4

3. **Apartments** - `https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80`
   - Alt: One-bedroom apartment kitchen
   - Aspect: Square

4. **Shuttle & Chauffeur** - `https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80`
   - Alt: Executive sedan exterior
   - Aspect: 4/3

5. **Interiors** - `https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80`
   - Alt: Elegant bathroom with rainfall shower
   - Aspect: 3/4

6. **Sandton** - `https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80`
   - Alt: Sandton CBD skyline view
   - Aspect: 4/3

7. **Apartments** - `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80`
   - Alt: Two-bedroom apartment lounge
   - Aspect: Square

8. **Shuttle & Chauffeur** - `https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80`
   - Alt: Luxury SUV interior
   - Aspect: 3/4

9. **Interiors** - `https://images.unsplash.com/photo-1560448204-e1a3f94c8d0d?w=800&q=80`
   - Alt: Open-plan living and dining
   - Aspect: 4/3

10. **Sandton** - `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80`
    - Alt: Modern city architecture
    - Aspect: Square

11. **Apartments** - `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80`
    - Alt: Studio suite with balcony view
    - Aspect: 4/3

12. **Interiors** - `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80`
    - Alt: Detail of premium furnishings
    - Aspect: 3/4

---

## Shuttle & Chauffeur Page (`app/shuttle-chauffeur/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80`
  - Description: Luxury vehicle

---

## Location Page (`app/location/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1553759266-3760835d9557?w=1920&q=80`
  - Description: Sandton cityscape

---

## Contact Page (`app/contact/page.tsx`)

### Hero Section
- **Background**: `https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=1920&q=80`
  - Description: Modern apartment interior

---

## Image Loading Strategy

All images use Unsplash's CDN with:
- **Quality**: `q=80` (high quality, optimized file size)
- **Width**: `w=600/800/1920` (responsive sizing)
- **Format**: WebP with fallback (automatic via Unsplash)

## Troubleshooting

If images don't load:
1. Check browser console for CORS or network errors
2. Verify Unsplash service status
3. Test URLs individually in browser
4. Clear browser cache
5. Check if images are blocked by firewall/ad-blocker

## Updates Made (Latest)

### Gallery Page
- Replaced 7 image URLs with fresh, high-quality alternatives
- All 12 gallery images verified and updated
- Images organized by category: Apartments, Interiors, Shuttle & Chauffeur, Sandton

### Homepage
- Updated welcome section images with modern apartment interiors

### Apartments Page
- Swapped Studio and One Bedroom images for better variety
- All 3 apartment types now have distinct, high-quality photos

---

**Last Updated**: August 25, 2026
**Build Status**: ✅ Passing
**Total Images**: 22+ across all pages
