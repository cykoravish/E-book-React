# eBook Application

This is a modern, user-friendly eBook application built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [ShadCN](https://shadcn.dev/). The application allows users to browse, read, and manage eBooks with an intuitive interface and responsive design.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📚 **Browse eBooks**: Easily search and browse through a wide collection of eBooks.
- 📖 **Read Online**: Access eBooks directly from the app with a clean and optimized reader interface.
- 📌 **Bookmark Pages**: Bookmark pages for quick reference and resume reading where you left off.
- 🔍 **Search Functionality**: Search for eBooks by title, author, or genre.
- 🌐 **Responsive Design**: Built with a responsive layout for smooth performance on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Vite
- **UI Library**: ShadCN
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Installation

To get started with this project, clone the repository and follow these steps:

1. **Clone the repo:**
    ```bash
    git clone https://github.com/cykoravish/E-book-React.git
    cd E-book-React
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

## Usage

1. After starting the application, open [http://localhost:3000](http://localhost:3000) in your browser.
2. Explore the eBook collection, search for your favorite titles, and start reading!
3. You can also bookmark pages to pick up right where you left off.

## Folder Structure

Here's an overview of the main project structure:

```plaintext
├── public
│   └── favicon.ico
├── src
│   ├── assets          # Images, icons, and other static assets
│   ├── components      # Reusable UI components
│   ├── pages           # Main pages like Home, Book Details, etc.
│   ├── context         # Context for state management
│   ├── hooks           # Custom React hooks
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point for React and Vite
├── .gitignore
├── README.md
├── package.json
└── vite.config.js
