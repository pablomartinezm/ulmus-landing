# Ulmus Landing

A modern, responsive landing page built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡ **Fast Development** - Powered by Vite for lightning-fast HMR
- 🎨 **Modern Styling** - Tailwind CSS for utility-first styling
- 📱 **Responsive Design** - Mobile-first approach
- 🌐 **GitHub Pages Ready** - Automatic deployment workflow included
- 🛠️ **Modern Tooling** - ESNext, PostCSS, and more

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pablomartinezm/ulmus-landing.git
   cd ulmus-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

## 🏗️ Project Structure

```
ulmus-landing/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo.svg
│   └── ...
├── src/                    # Source files
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # Deployment workflow
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Key configuration files:

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles and Tailwind imports

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

The project includes a GitHub Actions workflow for automatic deployment:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://pablomartinezm.github.io/ulmus-landing/`

### Manual Deployment

```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 🛠️ Development

### Adding New Components

1. Create your component in the `src/` directory
2. Import and use it in `App.jsx`
3. Style using Tailwind CSS classes

### Customizing Styles

- Modify `tailwind.config.js` for theme customization
- Add global styles in `src/index.css`
- Use Tailwind utility classes in components

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
VITE_API_URL=your_api_url_here
VITE_CUSTOM_VAR=your_custom_variable
```

## 📦 Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [PostCSS](https://postcss.org/) - CSS Processing
- [GitHub Pages](https://pages.github.com/) - Hosting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you find any bugs or have feature requests, please [open an issue](https://github.com/pablomartinezm/ulmus-landing/issues).

## 📞 Support

If you need help or have questions:
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐦 Twitter: [@your-twitter](https://twitter.com/your-twitter)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

⭐ Star this repository if you find it helpful!
