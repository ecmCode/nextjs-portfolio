# Project Documentation

[Page URL](https://portfolio-ecmcode.vercel.app/)

## Introduction

This project is a full-stack web application developed using Next.js, a popular React framework for building server-rendered applications. It provides an example of a simple application with multiple pages and routing capabilities.

The project showcases the implementation of dynamic routes, navigation between pages, and handling of non-existing routes. It utilizes technologies such as Next.js, React, TypeScript, Tailwind CSS, and Jest for testing.

## Features

- **Home page:** Displays the main landing page of the application.
- **About page:** Provides information about the creator.
- **Projects page:** Showcases a list of projects.
- **Blogs page:** Displays a list of blog posts.
- **NotFound page:** Handles non-existing routes and redirects to the `/404` page.

## Technologies Used

The following technologies and libraries were used in the development of this project:

- **Next.js:** A React framework for server-rendered applications.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** Provides type checking and type safety.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Jest:** A JavaScript testing framework for unit tests.
- **ChatGPT:** An AI model used for generating ideas and dummy tests.

## File Structure

The project follows a typical file structure for a Next.js application:

```js
src/
├── pages/              // Contains the Next.js pages
│     ├── about/        // About page
│     │     └─ index.tsx     
│     ├── projects/     // Projects page
│     │     └─ index.tsx   
│     ├── blogs/        // Blogs page
│     │     ├─ [id].tsx // Blog slug page
│     │     └─ index.tsx   
│     ├── index.tsx     // Home page
│     ├── globals.css   // Global CSS styling
│     ├── _app.tsx       
│     ├── _document.tsx       
│     └── 404.tsx       // 404 Not Found page
│
├── assets/             // Contains assets
├── components/         // Contains shared components
├── hooks/              // Contains React hooks
├── types/              // Contains TypeScript types
└── __test__/           // Contains test files
```

## Testing

The project includes a set of snapshot tests using the `@testing-library/react` library and Jest. The tests cover the rendering of the different pages, including the NotFound page. The `next-router-mock` library is used to mock the Next.js Router and simulate URL changes.

To run the tests, execute the following command:

```bash
npm run test
```

## Setup and Installation

To set up and run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the application in your browser at `http://localhost:3000`

## Deployment

The project can be deployed to various hosting platforms supporting Node.js applications. To deploy the application, follow the deployment guidelines provided by the hosting platform of your choice.

## Conclusion

This technical documentation provides an overview of the project, its features, technologies used, file structure, testing approach, and deployment instructions. It serves as a reference for understanding and working with the project.