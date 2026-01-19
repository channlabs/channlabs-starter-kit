<div align="center">

# ⚡ Chann Labs Starter Kit

**Premium Laravel + React Starter Kit for Modern Web Applications**

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

_Build SaaS applications 10x faster with production-ready architecture_

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack)

</div>

---

## 🎯 Overview

Chann Labs Starter Kit is a **production-ready** Laravel + React boilerplate designed for developers who want to ship faster without compromising on code quality. Built with modern best practices, it includes everything you need to launch your next SaaS product.

### ✨ What Makes It Special

- 🚀 **Zero Configuration** - Get started in minutes with automated setup
- 🎨 **Premium UI** - 50+ Shadcn UI components with dark mode support
- 🔐 **Authentication Ready** - Complete auth system with Laravel Fortify
- 👥 **Multi-Tenancy** - Built-in team management and organization support
- 📦 **Type-Safe** - Full TypeScript integration with Laravel Wayfinder
- ⚡ **Lightning Fast** - Optimized with Vite and SSR support
- 🎭 **Modern Stack** - Laravel 12, React 19, Inertia.js, Tailwind CSS v4

---

## 🚀 Features

### 🔐 Authentication & Authorization

- Login, Register, Email Verification
- Password Reset & Two-Factor Authentication (2FA) ready
- Role-based access control
- Session management

### 👥 Team Management

- Multi-tenant architecture
- Team creation and management
- Member invitations
- Role and permission system

### 🎨 UI Components

- 50+ pre-built Shadcn UI components
- Dark mode support with system preference detection
- Responsive design for all screen sizes
- Hugeicons integration (3000+ icons)
- Custom animations and transitions

### 🛠️ Developer Experience

- TypeScript configuration
- ESLint & Prettier setup
- Laravel Pint for PHP formatting
- Hot Module Replacement (HMR)
- SSR support with Inertia.js
- Type-safe routing with Laravel Wayfinder

### 📊 Additional Features

- Database migrations and seeders
- API routes and controllers
- Queue system ready
- Email notifications
- File upload handling
- Form validation

---

## 📦 Tech Stack

### Backend

- **[Laravel 12](https://laravel.com)** - PHP Framework
- **[Laravel Fortify](https://laravel.com/docs/fortify)** - Authentication
- **[Inertia.js](https://inertiajs.com)** - Modern Monolith
- **[Laravel Wayfinder](https://github.com/laravel/wayfinder)** - Type-safe Routing

### Frontend

- **[React 19](https://react.dev)** - UI Library
- **[TypeScript](https://www.typescriptlang.org)** - Type Safety
- **[Tailwind CSS v4](https://tailwindcss.com)** - Styling
- **[Shadcn UI](https://ui.shadcn.com)** - Component Library
- **[Radix UI](https://www.radix-ui.com)** - Headless Components
- **[Hugeicons](https://hugeicons.com)** - Icon Library

### Build Tools

- **[Vite](https://vitejs.dev)** - Build Tool
- **[ESLint](https://eslint.org)** - Linting
- **[Prettier](https://prettier.io)** - Code Formatting
- **[Laravel Pint](https://laravel.com/docs/pint)** - PHP Formatting

---

## 🏁 Quick Start

### Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18 or higher
- MySQL/PostgreSQL/SQLite

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/channlabs/channlabs-starter-kit.git
cd channlabs-starter-kit
```

2. **Run automated setup**

```bash
composer setup
```

This will:

- Install PHP dependencies
- Copy `.env.example` to `.env`
- Generate application key
- Run database migrations
- Install Node.js dependencies
- Build frontend assets

3. **Start development server**

```bash
composer dev
```

This runs:

- Laravel development server (http://localhost:8000)
- Queue worker
- Vite dev server with HMR

### Alternative: Manual Setup

```bash
# Install dependencies
composer install
npm install

# Environment setup
cp .env.example .env
php artisan key:generate

# Database setup
php artisan migrate

# Build assets
npm run build

# Start server
php artisan serve
```

---

## 🎨 Development

### Available Commands

#### Composer Scripts

```bash
composer setup      # Complete project setup
composer dev        # Start development servers
composer dev:ssr    # Start with SSR support
composer lint       # Format PHP code
composer test       # Run tests
```

#### NPM Scripts

```bash
npm run dev         # Start Vite dev server
npm run build       # Build for production
npm run build:ssr   # Build with SSR
npm run lint        # Lint and fix JS/TS
npm run format      # Format code with Prettier
npm run types       # Check TypeScript types
```

### Project Structure

```
channlabs-starter-kit/
├── app/                    # Laravel application
│   ├── Console/           # Artisan commands
│   ├── Http/              # Controllers, Middleware
│   └── Models/            # Eloquent models
├── database/              # Migrations, Seeders
├── resources/
│   ├── js/                # React application
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # Page layouts
│   │   ├── pages/         # Inertia pages
│   │   └── lib/           # Utilities
│   └── views/             # Blade templates
├── routes/                # Route definitions
│   ├── web.php           # Web routes
│   └── api.php           # API routes
└── tests/                 # Test files
```

---

## 📚 Documentation

### Key Concepts

#### Routing

Routes are defined in `routes/web.php` and automatically generate TypeScript types via Laravel Wayfinder:

```php
Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');
```

```tsx
import { dashboard } from '@/routes';

<Link href={dashboard()}>Dashboard</Link>;
```

#### Components

All UI components are located in `resources/js/components/ui/` and follow Shadcn UI patterns:

```tsx
import { Button } from '@/components/ui/button';

<Button variant="outline">Click me</Button>;
```

#### Layouts

Page layouts are in `resources/js/layouts/`:

- `app-layout.tsx` - Authenticated app layout
- `auth-layout.tsx` - Authentication pages layout

---

## 🎨 Customization

### Theming

Colors and design tokens are configured in `tailwind.config.js`. The starter kit uses CSS variables for theming:

```css
@theme {
    --color-primary: oklch(0.6 0.2 250);
    --color-background: oklch(1 0 0);
}
```

### Adding Components

Use Shadcn CLI to add new components:

```bash
npx shadcn@latest add [component-name]
```

---

## 🧪 Testing

```bash
# Run all tests
composer test

# Run PHP tests only
php artisan test

# Run with coverage
php artisan test --coverage
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Variables

Key environment variables to configure:

```env
APP_NAME="Your App Name"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Laravel](https://laravel.com) - The PHP Framework
- [React](https://react.dev) - The UI Library
- [Inertia.js](https://inertiajs.com) - The Modern Monolith
- [Shadcn UI](https://ui.shadcn.com) - Beautiful Components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS

---

## 💬 Support

- 📧 Email: support@chann.id
- 🌐 Website: [chann.id](https://chann.id)
- 📖 Documentation: [Coming Soon]
- 🐛 Issues: [GitHub Issues](https://github.com/channlabs/channlabs-starter-kit/issues)

---

<div align="center">

**Built with ❤️ by [Chann Labs](https://chann.id)**

⭐ Star us on GitHub — it motivates us a lot!

</div>
