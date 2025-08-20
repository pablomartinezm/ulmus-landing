# Contributing to Ulmus Landing

Thank you for your interest in contributing to Ulmus Landing! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue template** if available
3. **Provide clear reproduction steps**
4. **Include environment details** (OS, browser, Node.js version)

### Suggesting Features

We welcome feature suggestions! Please:

1. **Check existing feature requests** first
2. **Explain the use case** and benefit
3. **Provide mockups or examples** if applicable
4. **Be open to discussion** and feedback

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Follow the coding standards** (see below)
5. **Test your changes**
6. **Commit with clear messages**
7. **Push to your fork**
8. **Create a pull request**

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

### Local Development

1. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ulmus-landing.git
   cd ulmus-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Make your changes**

5. **Test the build**
   ```bash
   npm run build
   npm run preview
   ```

## 📏 Coding Standards

### JavaScript/React

- Use **ES6+ features**
- Prefer **functional components** with hooks
- Use **camelCase** for variables and functions
- Use **PascalCase** for components
- Keep components **small and focused**
- Add **PropTypes** for type checking (if applicable)

### CSS/Styling

- Use **Tailwind CSS** utility classes
- Avoid custom CSS when possible
- Use **responsive design** principles
- Follow **mobile-first** approach
- Maintain **consistent spacing** using Tailwind's scale

### File Structure

- Place components in logical directories
- Use descriptive file names
- Keep files focused on single responsibility
- Export components properly

### Example Component

```jsx
import React from 'react';

const Button = ({ children, variant = 'primary', onClick, disabled = false }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

## 🧪 Testing

- Test your changes in different browsers
- Verify responsive behavior on mobile devices
- Check accessibility with screen readers
- Test the production build locally

## 📝 Commit Messages

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(navigation): add mobile menu component
fix(deploy): resolve GitHub Pages base path issue
docs(readme): update installation instructions
style(components): format code with prettier
```

## 🚀 Deployment

Changes merged to `main` will automatically deploy to GitHub Pages via GitHub Actions.

## 📋 Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows the style guidelines
- [ ] Changes are tested locally
- [ ] Build passes (`npm run build`)
- [ ] No console errors or warnings
- [ ] Responsive design is maintained
- [ ] Accessibility is preserved
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow conventions

## 🎯 Areas for Contribution

We especially welcome contributions in:

- **UI/UX improvements**
- **Performance optimizations**
- **Accessibility enhancements**
- **Documentation improvements**
- **Bug fixes**
- **Mobile responsiveness**
- **SEO optimizations**

## ❓ Questions?

If you have questions about contributing:

- Open a **discussion** on GitHub
- Create an **issue** with the "question" label
- Check existing **documentation** and **issues**

## 📜 Code of Conduct

Please note that this project follows a Code of Conduct. By participating, you agree to uphold these standards:

- **Be respectful** and inclusive
- **Welcome newcomers** and help them learn
- **Focus on constructive feedback**
- **Respect different viewpoints** and experiences

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes (for significant contributions)
- GitHub contributors list

Thank you for helping make Ulmus Landing better! 🌟
