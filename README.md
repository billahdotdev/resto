# Resto Restaurant Website

A modern, responsive website for Resto, a fine dining restaurant in Dhaka, Bangladesh.

## Features

- Responsive design for all devices
- Interactive menu with search functionality
- Reservation system
- Special offers section
- Customer testimonials
- Contact information and map

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

Thought for 1 second### Running the Resto Restaurant Project Locally

After downloading the project and running `npm install`, you can start the development server with these simple steps:

## Starting the Development Server

```shellscript
# Navigate to the project directory (if you're not already there)
cd resto-restaurant

# Start the development server
npm run dev
```

This will start the Vite development server, which should automatically open your default browser to `http://localhost:3000` (or another port if 3000 is already in use).

## Alternative Commands

If you need to specify a different port or have other requirements:

```shellscript
# Start on a specific port
npm run dev -- --port 8080

# Start without opening the browser automatically
npm run dev -- --no-open
```

## Viewing the Project

Once the development server is running:

1. The terminal will show a URL (typically `http://localhost:3000`)
2. Your browser should open automatically to this URL
3. Any changes you make to the code will be reflected immediately in the browser (hot reloading)


## Other Useful Commands

```shellscript
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Run linting
npm run lint
```

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly with `npm install`
2. Check that you're using a compatible Node.js version (v14+ recommended)
3. If you see module not found errors, try deleting `node_modules` and running `npm install` again
4. Check the terminal output for any specific error messages


The development server provides fast refresh, so you can edit files and see changes immediately without having to manually refresh the browser.

