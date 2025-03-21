# 📁 Project Folder Structure Template (React)

This structure is designed for **reusability**, **extensibility**, and **maintainability** in modern React projects.

---

```
src/
├── assets/                # Static assets (images, fonts, icons)
├── components/            # Reusable UI components
│   ├── UI/                # Buttons, Modals, Cards, Loaders, etc.
│   ├── forms/             # Form elements & validation
│   ├── navigation/        # Navbar, Sidebar, Breadcrumbs
│   └── shared/            # Reusable sections like CarItem, QASection, etc.
│
├── layouts/               # Layout shells for Admin, Client, Auth
│   ├── AdminLayout.jsx
│   ├── ClientLayout.jsx
│   ├── AuthLayout.jsx
│   └── components/        # Layout-specific UI (sidebars, navs, etc.)
│
├── pages/                 # Route-based views
│   ├── admin/
│   │   ├── Dashboard.jsx
│   │   ├── Auctions.jsx
│   │   └── Users.jsx
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── user/
│   │   ├── Home.jsx
│   │   └── Profile.jsx
│   └── NotFound.jsx
│
├── routes/                # Route configs and guards
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── context/               # React context providers
│   ├── AuthContext.jsx
│   ├── CarContext.jsx
│   ├── NotificationContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                 # Custom hooks
│   ├── useAuth.js
│   ├── useFetch.js
│   ├── useLogout.js
│   └── useWindowSize.js
│
├── services/              # API logic & integrations
│   ├── http.js
│   ├── authService.js
│   └── carService.js
│
├── utils/                 # Helper functions
│   ├── formatDate.js
│   ├── sortByDistance.js
│   ├── validateBid.js
│   └── countdown.js
│
├── constants/             # Static values & configs
│   ├── apiRoutes.js
│   ├── roles.js
│   └── appConfig.js
│
├── store/ (optional)      # Global state (Redux, Zustand, etc.)
│   ├── index.js
│   ├── authSlice.js
│   └── carSlice.js
│
├── types/ (optional)      # Type definitions (for TS or JSDoc)
│   ├── car.d.ts
│   ├── user.d.ts
│   └── place.d.ts
│
├── App.jsx                # Main app component
├── main.jsx               # Entry point (or index.jsx for CRA)
└── index.css              # Global styles or Tailwind entry
```

---

## 📦 Folder & Component Descriptions

### `assets/`

Static files like images, SVGs, fonts, and icons.

### `components/`

Reusable, general-purpose components used across layouts and pages.

-   `UI/`: Low-level UI pieces like `Button`, `Card`, `Spinner`, etc.
-   `forms/`: Form inputs, wrappers, validation-aware components.
-   `navigation/`: Navbars, Sidebars, Breadcrumbs.
-   `shared/`: Larger composable sections used across pages.

### `layouts/`

Defines layout templates that wrap pages by user type (admin, client, auth).

### `pages/`

Route-mapped pages. Organized by user roles or feature categories.

### `routes/`

Handles route configuration, lazy-loading, and access control with guards.

### `context/`

React Contexts for global state like `AuthContext`, `ThemeContext`, etc.

### `hooks/`

Reusable logic like `useFetch`, `useAuth`, `useDebounce`, etc.

### `services/`

Handles HTTP logic — acts as the API layer to backend services.

### `utils/`

Pure functions used for formatting, calculations, validations, etc.

### `constants/`

Static values: config settings, route paths, role enums, etc.

### `store/` _(optional)_

Redux, Zustand, or Jotai state management logic.

### `types/` _(optional)_

TS interfaces, types, or JSDoc for prop/data modeling.

---

> 🧠 **Tip:** Adjust folder depth and structure as the app scales — e.g., you can nest `pages/admin/cars/` or add a `features/` folder for larger apps.
