# TravelTrucks

TravelTrucks is a frontend web application for a campervan rental company. Users can browse a catalog of available campervans, filter results by location, vehicle type, engine, transmission, and amenities, save favourites, and view detailed camper pages with photo galleries, specifications, user reviews, and a booking form.

## Live Demo

[Live demo](#) — coming soon

## Features

- **Home page** with a hero banner and a call-to-action linking to the catalog.
- **Catalog page**:
  - Displays all available campervans as cards with images, pricing, ratings, location, and key features.
  - Filter sidebar with location search, vehicle type, engine, and transmission (single-select), and amenities (multi-select).
  - "Load more" pagination.
  - Loading indicator during data fetching.
  - "No campers found" state when a filter combination returns no results.
  - Add/remove campervans from favourites, persisted across page reloads.
- **Camper details page**:
  - Photo gallery with a main image and clickable thumbnails.
  - Full vehicle details, including specifications and amenities.
  - User reviews with star ratings.
  - Booking/reservation form with validation and a confirmation message on successful submission.

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [React Router](https://reactrouter.com/) for routing
- [Axios](https://axios-http.com/) for API requests
- CSS Modules for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/hllverel/travel-trucks.git
   ```
2. Navigate into the project folder:
   ```
   cd travel-trucks
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the app locally

Start the development server:

```
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for production

```
npm run build
```

The production-ready files will be output to the `dist` folder.

### Linting

```
npm run lint
```

## Author

**hllverel**
GitHub: [@hllverel](https://github.com/hllverel)
