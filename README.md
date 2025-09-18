# 🍌 Nano Banana AI Generator

A modern, responsive Next.js application for AI-powered image generation and editing. Built with TypeScript, Tailwind CSS, and featuring a beautiful dark theme with glass morphism effects.

## ✨ Features

- **AI Image Generation**: Create stunning images using natural text prompts
- **Drag & Drop Upload**: Easy image upload with drag and drop functionality
- **Multiple Aspect Ratios**: Support for 1:1, 16:9, 4:3, and 3:4 ratios
- **Model Selection**: Choose from different AI models (Nano Banana AI, Advanced Model, Creative Model)
- **Inspiration Gallery**: Browse through curated AI-generated artwork
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Dark theme with gradient backgrounds and glass morphism effects
- **Interactive Components**: FAQ accordions, animated galleries, and smooth transitions

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Custom SVG icons
- **Font**: Mona Sans
- **Build Tool**: Turbopack (for faster development)

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── components/
│   ├── CreationShowcase/   # AI creation showcase component
│   ├── FantasyShowcase/    # Fantasy art showcase component
│   ├── FAQItem/           # FAQ accordion item
│   ├── FeatureCard/       # Feature showcase card
│   ├── ImageGallery/      # Animated image gallery
│   ├── NanoBananaCard/    # Flexible card component
│   ├── SectionBadge/      # Section header badge
│   ├── StepCard/          # Process step indicator
│   └── index.ts           # Component exports
├── icons/
│   └── index.tsx          # Custom SVG icons
└── public/
    └── images/
        └── inspiration/   # Sample AI-generated images
```

## 🎨 Design System

- **Primary Color**: `#9e67fa` (Purple)
- **Background**: `#08020e` (Dark purple-black)
- **Accent Colors**: Blue (`#3b82f6`), Pink (`#fe6abb`), Orange (`#ff9c65`)
- **Typography**: Mona Sans font family
- **Effects**: Glass morphism with backdrop blur
- **Animations**: Smooth transitions and floating effects

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-nextjs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### NanoBananaCard
Flexible card component with multiple variants and sizes.

```tsx
<NanoBananaCard
  title="AI Generation"
  description="Create stunning images with AI"
  variant="gradient"
  size="md"
/>
```

### ImageGallery
Animated image gallery with dual-row scrolling.

```tsx
<ImageGallery
  images={imageData}
  autoScroll={true}
  scrollSpeed={20}
/>
```

### FAQItem
Accordion-style FAQ item with expand/collapse functionality.

```tsx
<FAQItem
  question="What formats are supported?"
  answer="We support JPG, PNG, WebP, and more..."
/>
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      "accent-purple": "#9e67fa",
      "accent-blue": "#3b82f6",
      // ... other colors
    }
  }
}
```

### Components
All components accept `className` props for additional styling and can be easily customized while maintaining the core design language.

## 📸 Screenshots

The application features:
- Hero section with AI generator interface
- Inspiration gallery with sample artwork
- How it works section with step-by-step process
- Features showcase with alternating layouts
- Interactive FAQ section
- AI creation showcase
- Responsive navigation and footer

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Consistent component architecture
- Modular design with reusable components

### Performance
- Optimized animations
- Lazy loading for images
- Turbopack for faster builds
- Responsive images

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

## 📞 Support

For support or questions about this project, please reach out through the contact section on the website.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
# Nano-banana
# Nano-banana
# Nano-banana
