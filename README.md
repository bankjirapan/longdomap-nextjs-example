# Longdo Map React Example

![Longdo Map React Example Screenshot](image/image.png)

This is an example project demonstrating how to use [Longdo Map](https://map.longdo.com/) with [React](https://react.dev/) and [Next.js](https://nextjs.org/).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/longdomap-react-example.git
cd longdomap-react-example
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up Longdo Map API Key

To use Longdo Map, you need to have an API Key. You can get one for free at [https://map.longdo.com/console](https://map.longdo.com/console).

Once you have the key, create a `.env.local` file in the root of the project and add your API key as follows:

```
LONGDO_MAP_KEY=YOUR_API_KEY
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx`: The main page of the application, where the Longdo Map component is rendered.
- `app/components/Map.tsx`: The component that initializes and displays the Longdo Map.
- `app/components/MapCtrl.tsx`: A component that demonstrates how to control the map, such as adding markers and shapes.
- `next.config.ts`: The Next.js configuration file, where the Longdo Map API key is passed to the application.

## Learn More

- [longdomap-react](https://www.npmjs.com/package/longdomap-react): The React wrapper for the Longdo Map API.
- [Longdo Map API Documentation](https://map.longdo.com/docs/): The official documentation for the Longdo Map API.
- [Next.js Documentation](https://nextjs.org/docs): Learn more about Next.js.
