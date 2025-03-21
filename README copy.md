src/
│
├── assets/ # Static assets (images, icons, fonts, etc.)
├── components/ # Reusable, general-purpose UI components
├── layouts/ # Layout components (AdminLayout, UserLayout, etc.)
├── pages/ # Route-based page components
├── routes/ # Centralized route definitions and route configs
├── context/ # React Contexts (e.g., Auth, Theme, CarData)
├── hooks/ # Reusable custom hooks
├── services/ # API calls or backend interactions (http.js, authService.js)
├── utils/ # Utility/helper functions (e.g., formatters, validators)
├── constants/ # Static config values, enums, status codes
├── store/ (optional) # Global state management (e.g., Redux, Zustand)
├── types/ (optional) # Type definitions (for TS or prop shape docs)
├── App.jsx
├── main.jsx # Entry point (if using Vite), or index.jsx for CRA
└── index.css # Global styles (or tailwind.css if using Tailwind)

📁 components/
Reusable building blocks used across pages/layouts:

components/
├── UI/ # Buttons, Modals, Cards, Loaders, Tooltips, etc.
├── forms/ # Form inputs, Formik components, validation helpers
├── navigation/ # Navbars, Sidebars, Tabs, Breadcrumbs
└── shared/ # Reusable sections like CarItem, QASection, etc.

📁 layouts/
App layout shells that wrap routes:

layouts/
├── AdminLayout.jsx
├── ClientLayout.jsx
├── AuthLayout.jsx
└── components/ # Navbar, Sidebar, Footer used in layouts

📁 pages/
Each folder here is a route or nested route:

pages/
├── admin/
│   ├── Dashboard.jsx
│   ├── Auctions.jsx
│   └── Users.jsx
├── auth/
│   ├── Login.jsx
│   └── Register.jsx
├── user/
│   ├── Home.jsx
│   └── Profile.jsx
└── NotFound.jsx

📁 routes/

routes/
Handles route config & lazy-loading:
├── AppRoutes.jsx          // All route definitions
└── ProtectedRoute.jsx     // Wrapper for route guards (auth, roles, etc.)


📁 context/
Global state containers:
context/
├── AuthContext.jsx
├── CarContext.jsx
├── NotificationContext.jsx
└── ThemeContext.jsx

📁 hooks/
Custom logic to reuse across components:
hooks/
├── useAuth.js
├── useFetch.js
├── useDebounce.js
├── useWindowSize.js
└── useLogout.js


📁 services/
API abstraction layer:

services/
├── http.js               // Axios config or fetch wrapper
├── authService.js
└── carService.js


📁 utils/
Utility functions:

utils/
├── formatDate.js
├── sortByDistance.js
├── validateBid.js
└── countdown.js


📁 constants/
All constant values:

constants/
├── apiRoutes.js
├── roles.js
└── appConfig.js

🧪 Optional Add-ons
🧪 store/ (if you use Redux, Zustand, Jotai, etc.)

store/
├── index.js
├── authSlice.js
└── carSlice.js
