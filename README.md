# Atrangi 2025 - Festival Landing Page 🎉

A spectacular, mobile-optimized festival landing page for the Atrangi cultural event at KMEC Auditorium.

## ✨ Features

- 🌈 **Festival Vibes**: Holi-inspired color palette with vibrant gradients
- 📱 **Mobile-First**: Optimized for 60fps performance on mobile devices
- ✨ **Cinematic Animations**: Loading screen with particle effects and smooth transitions
- 🎭 **Event Showcase**: Interactive cards for all 12 festival activities
- 📝 **Registration Forms**: Quick registration buttons for stage events
- 🎨 **Modern Design**: Dark theme with glass morphism effects
- ⚡ **Performance**: GPU-accelerated animations and reduced motion support

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

## 🌐 Deploy to Vercel

### Option 1: GitHub Integration
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 3: Direct Upload
1. Run `npm run build`
2. Drag & drop project folder to vercel.com

## 📝 Update Registration Forms

Edit `app/components/RegistrationSection.tsx`:

```tsx
const registrationEvents = [
  { 
    icon: '🎶', 
    title: 'Singing', 
    formLink: 'https://forms.google.com/your-actual-form-link'
  },
  // Update other events...
]
```

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **TypeScript** - Type safety
- **Vercel** - Deployment platform

## 🎨 Festival Color Palette

```css
Pink: #FF6B9D     Purple: #9B59B6    Orange: #FF8C42
Yellow: #FFD93D   Teal: #4ECDC4      Magenta: #E91E63
```

## 📱 Mobile Optimizations

- Reduced particle count for smooth performance
- Touch-friendly interactions
- Respects user's motion preferences
- Battery-efficient animations
- Optimized for 3G networks

## 🎊 Event Details

**📍 Venue:** KMEC Auditorium  
**📅 Date:** 26th September 2025  
**🎭 Events:** 12 exciting activities including singing, dance, skit, open mic, and more!

---

**Made with 💖 for the Atrangi community**

Ready to celebrate? Let's make memories together! ✨