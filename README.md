# Crypto Table Task

A modern cryptocurrency data table application built with Next.js 15, featuring real-time data fetching, offline storage, and a responsive UI.

## 🚀 Features

- **Responsive Table**: Sortable, filterable, and paginated data table
- **Modern UI**: Clean, accessible interface with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **State Management**: Zustand for efficient state management

## 📁 Project Structure

```
crypto-table-task/
├── app/                          # Next.js App Router
│   ├── (table)/                  # Route group for table pages
│   │   ├── layout.tsx           # Layout for table routes
│   │   ├── table/               # Main table page
│   │   └── table2/              # Alternative table page
│   ├── api/                     # API routes
│   │   └── cryptos/             # Crypto data API endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # React Query provider
├── components/                   # Reusable components
│   ├── crypto-table/            # Table-specific components
│   │   ├── columns.tsx          # Table column definitions
│   │   └── DataTable.tsx        # Main data table component
│   └── ui/                      # UI components (shadcn/ui)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── checkbox.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── pagination.tsx
│       ├── skeleton.tsx
│       └── table.tsx
├── hooks/                       # Custom React hooks
│   └── useCrypto.ts            # Crypto data fetching hook
├── lib/                         # Utility libraries
│   ├── constants.ts            # Application constants
│   └── utils.ts                # Utility functions
├── services/                    # External services
│   ├── api.ts                  # API service layer
│   └── idb.ts                  # IndexedDB service
├── store/                       # State management
│   └── crypto.ts               # Zustand store
├── types/                       # TypeScript type definitions
│   └── crypto.ts               # Crypto data types
└── public/                      # Static assets
```

## 🛠️ Libraries & Technologies

### Core Framework
- **Next.js 15** - React framework with App Router for server-side rendering and routing
- **React 19** - UI library with latest features and performance improvements
- **TypeScript** - Type safety and better developer experience

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible UI components built on Radix UI
- **Lucide React** - Beautiful, customizable icons
- **class-variance-authority** - Type-safe component variants
- **clsx & tailwind-merge** - Conditional class name utilities

### Data Management
- **@tanstack/react-query** - Powerful data fetching, caching, and synchronization
- **@tanstack/react-table** - Headless table library for complex data tables
- **Zustand** - Lightweight state management with minimal boilerplate

### Data Storage & Validation
- **IndexedDB (idb)** - Client-side database for offline data storage
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **Prettier** - Code formatting with Tailwind CSS class sorting
- **Turbopack** - Fast bundler for development

## 🎯 Why These Libraries?

### **Next.js 15** - Modern React framework with excellent performance, SEO, and developer experience
### **Tailwind CSS** - Rapid UI development with consistent design system
### **shadcn/ui** - Accessible, customizable components without vendor lock-in
### **React Query** - Efficient data fetching with automatic caching and background updates
### **Zustand** - Simple state management without the complexity of Redux
### **IndexedDB** - Reliable offline storage for better user experience
### **TypeScript** - Catch errors early and improve code maintainability

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view the application

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Code Quality

This project uses:
- **Prettier** with Tailwind CSS class sorting for consistent formatting
- **ESLint** for code quality and best practices
- **TypeScript** for type safety
- **Import sorting** for organized imports

## 📱 Features Overview

- **Real-time Data**: Live cryptocurrency prices from external APIs
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Offline Capability**: Data persists when offline using IndexedDB
- **Advanced Table**: Sorting, filtering, pagination, and column visibility
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error states and retry mechanisms
