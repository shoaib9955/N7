# N7 Banking

A modern, responsive banking website showcasing cloud-based core banking and digital banking solutions. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

![N7 Banking](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Modern UI/UX** - Sleek, professional design with smooth animations
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Optimized Performance** - Static generation for fast page loads
- **Type-Safe** - Built with TypeScript for better developer experience
- **Component-Based Architecture** - Reusable UI components for maintainability
- **SEO Optimized** - Proper metadata and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: [Next.js 16.2.6](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2.4](https://react.dev/) - UI library
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Fonts**: 
  - [Archivo](https://fontsource.org/fonts/archivo) - Modern sans-serif font
  - [Chivo Mono](https://fontsource.org/fonts/chivo-mono) - Monospace font for technical elements
- **Code Quality**: 
  - [ESLint](https://eslint.org/) - Code linting
  - [Prettier](https://prettier.io/) - Code formatting

## 📁 Project Structure

```
n7-banking/
├── public/                 # Static assets (images, icons)
│   ├── icons/             # Icon assets
│   ├── images/            # Image assets
│   └── logos/             # Logo assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── ui/          # UI components (Cards, Buttons, etc.)
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── Solutions.tsx
│       ├── CoreBanking.tsx
│       ├── MobileBanking.tsx
│       └── ...
├── .gitignore            # Git ignore rules
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd n7-banking
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your project in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with a single click

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Connect your repository
- **Digital Ocean App Platform**: Deploy as a Node.js app
- **Self-hosted**: Build and run with `npm start`

## 🔧 Configuration

### Environment Variables

Currently, this project doesn't require any environment variables. If you need to add them:

1. Create a `.env.local` file in the root directory
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL=your-api-url`)
3. Access them in your code using `process.env.NEXT_PUBLIC_API_URL`

### Customization

- **Colors**: Modify colors in `src/app/globals.css` and component files
- **Fonts**: Add or change fonts in `src/app/layout.tsx`
- **Content**: Update section content in `src/sections/` directory
- **Images**: Replace images in the `public/` directory

## 🎨 Components

### Layout Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Multi-column footer with office locations and links

### UI Components
- **Button** - Reusable button component with variants
- **ArticleCard** - Card component for articles/insights
- **CaseStudyCard** - Card for case studies
- **FeatureItem** - Feature list item with icon
- **LaptopMockup** - Laptop frame component for showcasing dashboards
- **SolutionCard** - Card for solution features
- **BackdropText** - Large background text effect
- **BackgroundGlow** - Glowing background effect

### Page Sections
- **Hero** - Main hero section with call-to-action
- **Solutions** - Solutions overview
- **CoreBanking** - Core banking features showcase
- **MobileBanking** - Mobile banking features
- **Marquee** - Scrolling logo marquee
- **Insights** - Articles and insights section
- **CaseStudies** - Case studies showcase
- **CTA** - Call-to-action sections

## 🧪 Development

### Code Style

This project uses:
- **ESLint** for code linting with Next.js recommended rules
- **Prettier** for code formatting with Tailwind CSS plugin

### Adding New Sections

1. Create a new component in `src/sections/YourSection.tsx`
2. Import and add it to `src/app/page.tsx`
3. Follow the existing component patterns for consistency

### Adding Images

1. Place images in the appropriate `public/` subdirectory
2. Reference them using `/images/your-image.png` or `/icons/your-icon.png`
3. For optimal performance, consider using Next.js `<Image>` component

## 📄 License

Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as Commercial Brand — Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **London**: Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom
- **Dubai**: Linktia Infosystems Ltd – CB7, Jumeirah Business Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, UAE
- **Pune**: Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra 411041, India

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Built with ❤️ by Linktia Infosystems Limited
