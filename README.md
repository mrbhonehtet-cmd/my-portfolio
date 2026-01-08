# Saw Bhone Htet - Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**.

## Features

- Modern gradient-based design with smooth animations
- Fully responsive across all devices
- Interactive 3D Spline viewer in hero section
- Dynamic image toggle in About section
- Animated skill bars with scroll-triggered animations
- Smooth scroll navigation
- Dark theme optimized
- Built with Next.js App Router for optimal performance
- Tailwind CSS v4 for modern styling
- Poppins font family via Google Fonts
- Font Awesome icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd my-cv
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page auto-updates as you edit files.

## Project Structure

```
my-cv/
├── src/
│   └── app/
│       ├── components/       # React components
│       │   ├── NavBar.jsx    # Navigation with mobile menu
│       │   ├── Hero.jsx      # Hero section with 3D Spline
│       │   ├── About.jsx     # About section with image toggle
│       │   ├── Skills.jsx    # Skills with animated bars
│       │   ├── Projects.jsx  # Project showcase
│       │   ├── Contact.jsx   # Contact form
│       │   └── Footer.jsx    # Footer with social links
│       ├── globals.css       # Global styles + Tailwind
│       ├── layout.js         # Root layout with metadata
│       └── page.js           # Home page composition
├── public/                   # Static assets
├── next.config.mjs          # Next.js configuration
├── postcss.config.mjs       # PostCSS config for Tailwind
├── jsconfig.json            # JavaScript config
└── package.json             # Dependencies

```

## Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Spline](https://spline.design/)** - 3D design tool
- **[Font Awesome](https://fontawesome.com/)** - Icon library
- **[Google Fonts (Poppins)](https://fonts.google.com/)** - Typography

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `src/app/components/Hero.jsx` - Name, title, description
- `src/app/components/About.jsx` - Bio, experience, projects count
- `src/app/components/Skills.jsx` - Technical and professional skills
- `src/app/components/Projects.jsx` - Project cards and links
- `src/app/components/Contact.jsx` - Contact details and social links
- `src/app/components/Footer.jsx` - Footer social links
- `src/app/layout.js` - SEO metadata and site title

### Change Colors

The gradient colors are defined in `src/app/globals.css`:
- Primary gradient: `#3b82f6` (blue) to `#ec4899` (pink)
- Background: `#0f172a` (slate-900)

### Add New Sections

Create a new component in `src/app/components/` and import it in `src/app/page.js`.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other platforms

- **Netlify**: Connect your Git repo and deploy
- **AWS Amplify**: Use the Next.js SSR hosting
- **Railway**: Deploy with one click
- **DigitalOcean App Platform**: Connect and deploy

## Contact

- **Email**: mr.bhonehtet@gmail.com
- **Location**: Yangon, Myanmar
- **Phone**: +95 9965091291
- **LinkedIn**: [Saw Bhone Htet](https://www.linkedin.com/in/saw-bhone-htet-b7b89736b)
- **GitHub**: [@mrbhonehtet-cmd](https://github.com/mrbhonehtet-cmd)
- **Telegram**: [@Zi_Xing002](https://t.me/Zi_Xing002)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Saw Bhone Htet
