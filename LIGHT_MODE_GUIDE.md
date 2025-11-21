# Light Mode Design Guide

This document shows the light mode color scheme for the portfolio site, retaining the lime-to-emerald accent colors.

## Quick Setup

To activate light mode, uncomment the light mode CSS variables in `app/globals.css` (lines 28-57):

```css
/* Uncomment the :root block starting at line 30 */
/* Uncomment the markdown-content overrides starting at line 45 */
```

---

## Light Mode Color Palette

### Background & Text
- **Background**: `#ffffff` (pure white)
- **Foreground Text**: `#1a1a1a` (near black)
- **Card Background**: `#f8f9fa` (light gray)
- **Border Color**: `rgba(200, 200, 200, 1)` (light gray border)

### Accent Colors (Lime-Emerald)
All accent colors remain the same as dark mode:
- **Lime (Primary)**: `#84cc16` (Tailwind lime-500)
- **Emerald (Secondary)**: `#10b981` (Tailwind emerald-500)
- **Darker variants for hover states**:
  - Lime hover: `#65a30d` (Tailwind lime-600)
  - Emerald hover: `#059669` (Tailwind emerald-600)

### Component-Specific Colors

#### Buttons
- **Primary Button**: Lime-500 (`#84cc16`) background with dark text
- **Secondary Button**: Outlined with lime border, lime text on hover
- **Hover State**: Lime-600 (`#65a30d`)

#### Links & Interactive
- **Links**: Emerald-600 (`#059669`) text
- **Link Hover**: Emerald-700 (`#047857`)
- **Code Blocks**: Emerald-700 text with light gray background (`#f3f4f6`)

#### Borders & Accents
- **Card Borders**: Lime-to-emerald gradient (reduced opacity for light mode)
- **Border Accents**: Lime-500 on hover
- **Glow Effects**: Lime-500 with reduced opacity

#### Gradients (Subtle for Light Mode)
```css
Hero Section:
  from-lime-950/8 via-transparent to-emerald-950/8

Subtle Gradient:
  from-lime-950/2 via-transparent to-transparent

Footer Gradient:
  from-lime-950/4 via-transparent to-emerald-950/4
```

---

## Visual Comparison

### Dark Mode (Current)
```
Background:     #0a0a0a (deep black)
Text:           #ededed (cream white)
Cards:          #1a1a1a (dark gray)
Accent:         #84cc16 (lime) + #10b981 (emerald)
```

### Light Mode (Optional)
```
Background:     #ffffff (pure white)
Text:           #1a1a1a (near black)
Cards:          #f8f9fa (light gray)
Accent:         #84cc16 (lime) + #10b981 (emerald) - SAME!
```

---

## Design Principles for Light Mode

1. **Contrast**: Text is dark on light backgrounds, ensuring readability
2. **Subtlety**: Gradients are much lighter (2-8% opacity vs 20% in dark mode)
3. **Brand Consistency**: Lime-emerald accent colors remain vibrant and unchanged
4. **Professional**: Clean, minimal aesthetic with strong accent color pops
5. **Accessibility**: High contrast ratios between text and background

---

## Implementation Notes

### To Activate Light Mode:

1. Open `app/globals.css`
2. Find the commented light mode section (starting at line 28)
3. Uncomment the CSS variable block (lines 29-42)
4. Uncomment the markdown content overrides (lines 44-57)

### What Will Change:
- ✅ Background turns white
- ✅ Text turns dark
- ✅ Cards become light gray
- ✅ Borders become light gray (still with lime-emerald accent on hover)
- ✅ Markdown links and code blocks update to emerald colors
- ✅ Gradients become subtle (maintain lime-emerald, just much lighter)

### What Stays the Same:
- ✅ All buttons keep lime-emerald accents
- ✅ Gradient text remains lime-to-emerald
- ✅ Glow effects use same lime color
- ✅ Border gradients use same lime-emerald combo
- ✅ All component styling patterns unchanged

---

## Color Usage by Component

| Component | Dark Mode | Light Mode | Accent Color |
|-----------|-----------|-----------|--------------|
| Background | #0a0a0a | #ffffff | — |
| Text | #ededed | #1a1a1a | — |
| Cards | #1a1a1a | #f8f9fa | Lime border |
| Buttons | Lime-500 | Lime-500 | Emerald-600 hover |
| Links | Lime-400 | Emerald-600 | Emerald-700 hover |
| Code | Lime-300 bg | Emerald-700 text | Gray-100 bg |
| Borders | Gray-800 | Gray-300 | Lime accent |
| Gradients | 20% opacity | 2-8% opacity | Lime + Emerald |

---

## Recommended Transitions

If implementing a theme toggle later:

```javascript
// CSS would handle the transition smoothly
transition: background-color 0.3s ease, color 0.3s ease;
```

---

## Future Enhancement

Consider adding a theme toggle button that switches between:
- 🌙 Dark mode (current default)
- ☀️ Light mode (when uncommented)

The lime-emerald scheme works beautifully in both!
