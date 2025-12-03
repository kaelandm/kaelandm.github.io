# My Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡ **Fast & Modern** - Built with Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI** - Responsive design with Tailwind CSS
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- 🧭 **Easy Navigation** - React Router for smooth page transitions
- ✅ **Tested** - Jest & React Testing Library for reliability
- 📦 **Production Ready** - Optimized for Vercel and Netlify deployment

## 📋 Pages

- **Home** - Hero section with introduction and CTA buttons
- **About** - Personal bio, profile image, and skills showcase
- **Projects** - Grid of project cards with descriptions and links
- **Contact** - Contact form with validation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint

## 📦 Installation

1. **Clone or download this project**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on src files
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🎨 Customization

### Update Your Information

Edit the following files to personalize your portfolio:

- **Navbar/Footer** - `src/components/Navbar.jsx` and `src/components/Footer.jsx`
- **About Page** - `src/pages/About.jsx` - Update your name, bio, and skills
- **Projects Page** - `src/pages/Projects.jsx` - Add your actual projects
- **Contact Form** - `src/pages/Contact.jsx` - Connect to your email service (Formspree, SendGrid, etc.)

### Add Your Images

Place your images in `public/` and reference them in your components:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

### Customize Colors

Edit `tailwind.config.cjs` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: "#your-color";
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel automatically detects Vite and deploys

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: "/repo-name/",
   });
   ```
2. Build and push to GitHub
3. Enable GitHub Pages in repository settings

## 📚 Next Steps

1. **Update content** - Replace placeholder text with your actual information
2. **Add images** - Replace placeholder images with your portfolio images
3. **Connect contact form** - Integrate with Formspree, SendGrid, or similar
4. **Add favicon** - Replace the Vite logo with your own favicon
5. **Customize colors** - Adjust Tailwind theme to match your brand
6. **Add more projects** - Expand the projects array with your work
7. **Deploy** - Choose a deployment platform and go live

## 📄 License

This project is open source and available under the MIT License.

## 💬 Questions?

Feel free to reach out through the contact form on the website!

---

**Happy coding! 🎉**
