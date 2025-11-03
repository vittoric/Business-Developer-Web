# 👩‍💻 Victoria Codreanu - Portfolio

<div align="center">

**Technical Business Developer | Software Engineer**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[View Live Demo](#) • [Report Bug](https://github.com/vittoric/portfolio/issues) • [Request Feature](https://github.com/vittoric/portfolio/issues)

</div>

---

## 📖 About

Modern, dynamic portfolio showcasing my journey as a **Technical Business Developer** and **Software Engineer**. This single-page application features advanced parallax effects, smooth animations, and a responsive design that creates an engaging user experience.

Built with cutting-edge web technologies, this portfolio demonstrates my ability to bridge the gap between technical excellence and business strategy, featuring real-world projects and professional experience.

---

## ✨ Features

### 🎨 **Modern Design**
- **Parallax Hero Section** with dynamic scrolling effects
- **Glassmorphism UI** elements for a sleek, modern look
- **Dark Mode Aesthetics** with vibrant green accent color (#00D4AA)
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)

### 🚀 **Advanced Animations**
- **GSAP-powered animations** with ScrollTrigger
- **Smooth scroll interactions** and transitions
- **3D hover effects** on interactive elements
- **Shimmer text effects** for eye-catching headings

### 📱 **Sections**
- **Hero Section**: Dynamic parallax with professional title animation
- **About Me**: Interactive storytelling with animated content
- **Work Experience**: Timeline-based career journey
- **Latest Projects**: Showcase of key projects with live demos
- **Contact**: Multi-channel contact options (LinkedIn, Gmail, GitHub)

### 🎯 **User Experience**
- **Smooth Navigation** with anchor links
- **Mobile-Responsive Menu** with elegant sheet drawer
- **Fast Loading** with optimized images and lazy loading
- **Accessibility** compliant with semantic HTML

---

## 🛠️ Tech Stack

### **Core**
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 6.3.5** - Lightning-fast build tool

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### **Animations**
- **GSAP 3.13.0** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animation triggers
- **Custom CSS Keyframes** - Shimmer and pulse effects

### **UI Components**
- **Radix UI Primitives** - Accordion, Dialog, Sheet, and more
- **Class Variance Authority** - Component variant management
- **Embla Carousel** - Smooth carousel implementation

---

## 📂 Project Structure

```
Portfolio Hero Section with Parallax/
├── src/
│   ├── assets/
│   │   ├── images/           # Project screenshots
│   │   │   ├── securebites.png
│   │   │   ├── qwak.png
│   │   │   ├── invoinet.png
│   │   └── migrant.png
│   │   └── CV- Codreanu Victoria.pdf
│   ├── components/
│   │   ├── ParallaxHero.tsx      # Hero section with parallax
│   │   ├── ContentSection.tsx    # About Me section
│   │   ├── WorkExperience.tsx    # Career timeline
│   │   ├── LatestProjects.tsx    # Projects showcase
│   │   ├── Footer.tsx            # Contact section
│   │   ├── LiveInfo.tsx          # Real-time info display
│   │   ├── ImageLoader.tsx       # Image with fallback
│   │   └── ui/                   # Reusable UI components
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vittoric/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

---

## 📋 Key Sections

### 🎯 Hero Section
Dynamic parallax effect with animated title that responds to scroll. Features a professional photograph and live location/time information.

### 👤 About Me
Interactive section powered by GSAP animations, showcasing my background in Economics and Software Engineering (42 Madrid), current role at Telefónica Digital Innovation, and passion for bridging technical and business worlds.

### 💼 Work Experience
Timeline-based layout featuring:
- Technical Business Development at Telefónica Innovación Digital
- Web Developer at Nucleao Studio
- Open Gateway Strategy GTM at Telefónica
- Project Manager at HER DAO SPAIN
- Administrator at Lenca Tours S.L.

### 🚀 Latest Projects
1. **SecureBites Demo** - Restaurant voucher system with Open Gateway APIs
2. **Driver Tracking Demo** - Real-time fraud detection with Qwak
3. **INVOINET** - FinTech reconciliation platform
4. **Web Proyecto Migrante** - Social impact community platform

### 📬 Contact
Multiple contact methods with smooth scrolling navigation:
- LinkedIn: [in/vcodrean](https://www.linkedin.com/in/vcodrean/)
- Email: vicoder.tech@gmail.com
- GitHub: [@vittoric](https://github.com/vittoric)
- Downloadable CV

---

## 🎨 Design System

### Color Palette
- **Primary**: `#00D4AA` (Vibrant Green)
- **Background**: `#FFFFFF` (White) / `#000000` (Black)
- **Text**: `#000000` (Black) / `#FFFFFF` (White)
- **Accent**: `#F3F4F6` (Light Gray)

### Typography
- **Font Family**: System fonts (sans-serif)
- **Weights**: 400 (normal), 500 (medium), 700 (bold), 900 (black)
- **Responsive Sizing**: Using `clamp()` for fluid typography

---

## 📱 Responsive Design

Optimized breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive with mobile-first approach.

---

## 🌟 Performance Optimizations

- ⚡ **Fast Loading**: Vite's lightning-fast HMR
- 🖼️ **Optimized Images**: Lazy loading and fallback mechanism
- 🎯 **Code Splitting**: Dynamic imports for better initial load
- 📦 **Tree Shaking**: Removes unused code
- 🚀 **Production Build**: Minified and optimized bundle

---

## 📝 License

This project is private and all rights are reserved by Victoria Codreanu.

---

## 👤 Author

**Victoria Codreanu**

- 🌐 Portfolio: [Live Demo](#)
- 💼 LinkedIn: [@vcodrean](https://www.linkedin.com/in/vcodrean/)
- 🐙 GitHub: [@vittoric](https://github.com/vittoric)
- ✉️ Email: vicoder.tech@gmail.com
- 📍 Location: Madrid, Spain

---

## 🙏 Acknowledgments

- **42 Madrid** - For the exceptional software engineering education
- **Telefónica Digital Innovation** - For the opportunity to work on Open Gateway
- **Open Source Community** - For amazing tools and libraries
- **Design Inspiration** - Modern web design trends and best practices

---

<div align="center">

### ⭐ If you like this portfolio, give it a star!

**Made with ❤️ by Victoria Codreanu**

© 2025 Victoria Codreanu • All Rights Reserved

</div>
