# RandoStore

A simple online marketplace where anyone can list random items for sale and others can browse and purchase them. Features a shopping cart system that persists across browser tabs using local storage.

## Tech Stack

**Backend:**
- Node.js with Express
- In-memory data storage

**Frontend:**
- React 19
- Vite for development and building
- React Router for navigation
- Zustand for state management
- Tailwind CSS for styling
- Radix UI components (shadcn/ui)

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

- Browse and search items
- Add items to cart
- Persistent cart across browser tabs
- Add new items for sale
- Checkout functionality
- Responsive design for mobile and desktop

## API Endpoints

- `GET /items` - Get all items
- `POST /items` - Create new item
- `GET /items/:id` - Get specific item
- `DELETE /items/:id` - Delete item

## License

MIT
