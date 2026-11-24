# Find McDo

A single-page Angular application to find McDonald's restaurants on an interactive map.

> 🚧 Work in progress: built as a learning project for an Angular training course.

## Project purpose

Users search for a city, pick it from a list of matches, and see the McDonald's restaurants in that area as markers on a map. They can then select a restaurant and confirm their choice.

**User journey**

1. The home page shows a map, a search field and an overlay that says "No restaurant selected".
2. The user types a city name and clicks **Search**. No API call is made while typing.
3. A list of matching cities appears below the field.
4. Selecting a city centers the map on it and shows the McDonald's restaurants as markers.
5. Clicking a marker opens a popup with the restaurant's address and a **Select** button.
6. Clicking **Select** shows the chosen restaurant in the overlay, with a **Continue** button.

**Bonus:** automatic geolocation and nearby restaurants.

## Tech stack

| Technology | Version | Notes |
|---|---|---|
| Angular | 21 | Standalone components, no NgModules |
| Leaflet | 1.9.x | Map rendering (OpenStreetMap tiles) |
| @bluehalo/ngx-leaflet | 21.x | Angular wrapper for Leaflet. Its major version must match Angular's |
| RxJS | 7.8 | Asynchronous HTTP calls and shared state |
| SCSS | — | Component-scoped styles |
| Vitest | 4.x | Unit tests (Angular 21 default) |
| Nominatim API | — | City and restaurant geocoding (OpenStreetMap) |

The application is client-side rendered only (no SSR): Leaflet needs the browser DOM, the content is fully dynamic and SEO is not a goal. The build output is a static site.

**Nominatim usage policy:** no autocomplete, at most 1 request per second, and OpenStreetMap attribution is required on the map.

## Technical roadmap

### Phase 1: Scoping ✅
- Product backlog and user stories

### Phase 2: Component structure and communication
- Interactive OpenStreetMap map with ngx-leaflet ✅
- A parent page that holds the logic, with three child components: `Search`, `Map` and `Overlay` (container / presentational pattern)
- Parent ↔ child data flow with `@Input` and `@Output`
- One unit test per component

### Phase 3: API integration and dynamic map
- Environment files (Nominatim base URL)
- Typed models (`City`, `Restaurant`)
- Geocoding service using `HttpClient`
- City search, result list and selection
- Center the map on the selected city and show restaurants as markers
- Marker popups with a **Select** button
- Service tests with a mocked `HttpClient`

### Phase 4: Forms, pipes and lazy loading
- Reactive Form for the search, with validation and error messages
- RxJS operators (`switchMap`, `debounceTime`) applied to form submission
- Built-in control flow (`@if`, `@for`) and a custom pipe
- Lazy-loaded routes (`loadComponent` / `loadChildren`)
- Error handling: no city found, no restaurant found, API unavailable

### Phase 5: Centralized state
- State service built on `BehaviorSubject` (selected city, restaurants, selected restaurant)
- Popup selection updates the shared state, and the overlay reads from it
- *(Optional)* NgRx Store and Effects

### Phase 6: Production
- Production build configuration in `angular.json`
- Deployment to Netlify or Firebase Hosting (with SPA redirect rule)
- Documentation of components and services
- *(Bonus)* Geolocation and nearby restaurants

## Getting started

**Prerequisites:** Node.js and npm (versions compatible with Angular 21).

```bash
npm install
ng serve
```

Then open `http://localhost:4200/`.

## Available commands

| Command | Description |
|---|---|
| `ng serve` | Start the development server with live reload |
| `ng build` | Production build into `dist/` |
| `ng test` | Run the unit tests with Vitest |

## Credits

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
