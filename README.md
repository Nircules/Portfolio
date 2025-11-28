# Professional Portfolio Landing Page

A modern, responsive portfolio landing page built with React, TypeScript, and Vite. Perfect for showcasing your projects and skills to potential employers.

## ✨ Features

-   **Modern Design**: Clean, professional, and eye-catching design with smooth animations
-   **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
-   **Smooth Scrolling**: Navigation with smooth scroll behavior
-   **Project Showcase**: Dedicated section to display your projects with descriptions and links
-   **Contact Form**: Interactive contact section with form and social links
-   **TypeScript**: Type-safe code for better development experience
-   **Fast Performance**: Built with Vite for lightning-fast development and optimized builds

## 🚀 Getting Started

### Prerequisites

-   Node.js 20.19+ or 22.12+ (Note: Currently using Node.js 21.1.0 which may show warnings)
-   npm or yarn

### Installation

1. The project is already set up in this directory

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):

    - Replace "Your Name" with your actual name
    - Update the subtitle and description
    - Add your photo (replace the placeholder avatar)

2. **About Section** (`src/components/About.tsx`):

    - Update the bio text with your story
    - Modify the skills cards to match your expertise

3. **Projects Section** (`src/components/Projects.tsx`):

    - Replace the project placeholders with your actual projects
    - Add project descriptions, technologies used, and links
    - Add screenshots (replace placeholder images)

4. **Contact Section** (`src/components/Contact.tsx`):

    - Update email, LinkedIn, GitHub, and phone number
    - Customize the contact form (add backend integration if needed)

5. **Header & Footer** (`src/components/Header.tsx`, `src/components/Footer.tsx`):
    - Update social links
    - Customize the logo/brand name

### Styling

All components have their own CSS files for easy customization:

-   Color scheme can be adjusted in the CSS files (main colors: `#4f46e5`, `#7c3aed`)
-   Modify spacing, fonts, and animations as needed
-   Add custom fonts by importing them in `index.css`

### Adding Projects

To add more projects, edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
	{
		id: 1,
		title: "Your Project Name",
		description: "Project description...",
		tags: ["React", "TypeScript", "etc."],
		link: "https://your-project-url.com",
		github: "https://github.com/yourusername/repo",
	},
	// Add more projects...
];
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx/css      # Navigation header
│   ├── Hero.tsx/css        # Landing section
│   ├── About.tsx/css       # About & skills section
│   ├── Projects.tsx/css    # Projects showcase
│   ├── Contact.tsx/css     # Contact form & info
│   └── Footer.tsx/css      # Footer section
├── App.tsx                 # Main app component
├── App.css                 # App styles
├── index.css               # Global styles
└── main.tsx               # App entry point
```

## 🛠️ Technologies Used

-   **React 19** - UI library
-   **TypeScript** - Type safety
-   **Vite 7** - Build tool
-   **CSS3** - Styling with modern features
-   **ESLint** - Code quality

## 📝 TODO: Before Deployment

-   [ ] Replace "Your Name" with your actual name
-   [ ] Add your professional photo
-   [ ] Update bio and description
-   [ ] Add your actual projects (minimum 2 projects)
-   [ ] Add project screenshots
-   [ ] Update contact information (email, LinkedIn, GitHub, phone)
-   [ ] Customize colors/theme if desired
-   [ ] Set up contact form backend (optional)
-   [ ] Test on different devices and browsers
-   [ ] Deploy to hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
    ```json
    "deploy": "vite build && gh-pages -d dist"
    ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React + TypeScript + Vite
