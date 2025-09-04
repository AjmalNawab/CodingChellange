# RandoStore

A simple online marketplace where anyone can list random items for sale and others can browse and purchase them. Currently in design/static mode with placeholder functionality.

## Tech Stack

**Backend:**

- Node.js with Express
- Serves static frontend files

**Frontend:**

- React 19
- Vite for development and building
- React Router for navigation
- Tailwind CSS for styling
- Radix UI components (shadcn/ui)
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js
- npm

### Development

1. Install dependencies for both backend and frontend:

```bash
npm install
cd frontend && npm install
```

2. Start the backend server:

```bash
npm start
```

3. In a new terminal, start the frontend development server:

```bash
cd frontend
npm install
npm run dev
```

The backend runs on `http://localhost:3000` and the frontend on `http://localhost:5173`.

### Production

1. Build the frontend:

```bash
cd frontend
npm run build
```

2. Start the production server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Features

- Browse and search items (static data)
- Add items to cart (shows alert for demo)
- Add new items for sale (shows alert for demo)
- Checkout functionality (shows alert for demo)
- Responsive design for mobile and desktop
- Navigation between pages
- Back buttons for easy navigation

## Current Status

This application is currently in **design/static mode**. All interactive features show alert messages instead of actual functionality. This allows for easy design iteration and testing without backend complexity.

## Future Development

- Implement actual cart functionality
- Add real API endpoints
- Connect to database
- Add user authentication
- Implement payment processing

## License
