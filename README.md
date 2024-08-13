[![NPM](https://img.shields.io/npm/l/react)](https://github.com/JeanCelin/ExempleBurgerPlace/blob/main/LICENSE)

# The Burger - Website

This repository contains the source code for the website of "The Burger," a fictional burger restaurant. The site was developed using React.js and includes several pages such as Home, Menu, About, Contact, and a page to handle 404 errors.

## Features

- **Home Page (HomePage):** Provides an introduction to the restaurant, including a brief description and a button for more details. It features animations implemented with AOS (Animate On Scroll).
- **Menu Page (MenuPage):** Displays menu items with prices and descriptions. The page is organized into sections for different food categories, such as burgers and juices.
- **About Page (AboutPage):** Provides information about the restaurant's mission, vision, and team. It includes representative images and descriptive text.
- **Contact Page (ContactPage):** Includes a form for users to contact the restaurant, along with general information such as address and phone number.
- **404 Page (NotFoundPage):** This page is displayed when a user tries to access a non-existent route.

## Directory Structure

- `src/`
  - `components/`: Contains reusable components such as Navbar, Footer, Menu, etc.
  - `img/`: Contains all the images used on the site.
  - `pages/`: Contains the main pages of the site, organized into subdirectories according to the page.
    - `home/`: Home Page.
    - `prices/`: Menu Page.
    - `about/`: About Page.
    - `contact/`: Contact Page.
  - `styles/`: Contains global styles applied to the site.

## Dependencies

- **React Router DOM:** Used to manage navigation between pages.
- **AOS (Animate On Scroll):** Animation library for elements that appear as the user scrolls the page.
- **CSS Modules:** Used to modularize and scope CSS styles to each component, avoiding style conflicts.

## How to Run the Project

### Prerequisites

- Node.js installed (recommended version: >= 14.x)
- npm or yarn package manager

### Steps to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/the-burger-website.git
   cd the-burger-website

2. **Install Dependencies:**
   ```bash
   npm install
   # ou
   yarn install

   
3. **Run the Project::**
   ```bash
   npm start
   # ou
   yarn start
   
  The site will be available at [http://localhost:3000](http://localhost:3000).

## Code Structure

### `App.js`
This file is the main entry point of the application. It sets up the React Router routes and renders the different pages of the site.

### Pages

- **HomePage:** Imports components like Navbar, Footer, Features, and uses AOS for animations. It presents the title and a brief introduction to the restaurant.
- **MenuPage:** Displays the menu with prices and descriptions. It includes components like TablePricesCard, Menu, Navbar, and Footer.
- **AboutPage:** Provides an overview of the restaurant, including its mission and team, with images and explanatory text.
- **ContactPage:** Contains a contact form and includes the components Navbar, Footer, and Menu.
- **NotFoundPage:** Simply displays a "404 Page Not Found" message.
  
### Components

- **Navbar:** Navigation bar displayed at the top of each page.
- **Footer:** Footer displayed at the bottom of each page.
- **Menu:** Component displayed on various pages, showing navigation options.

## Styles

Styles are organized using CSS Modules, with each component and page having its own associated CSS file. This ensures isolated style scoping, preventing conflicts between different components.

# Technologies

This project was developed using the following technologies:

- **[React.js](https://reactjs.org/):** JavaScript library for building user interfaces.
- **[React Router DOM](https://reactrouter.com/):** Library for managing routes in React, facilitating navigation between pages.
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Scroll animation library, adding visual effects as the user scrolls the page.
- **[CSS Modules](https://github.com/css-modules/css-modules):** Methodology for scoping CSS styles at the component level, avoiding global style conflicts.
- **HTML5:** Semantic structuring of page content.
- **CSS3:** Styling of pages, using both global styles and CSS Modules for specific components.

## Hosting and Deployment
- **[Vercel](https://vercel.com/):** Platform used for deploying and hosting the site in a production environment.

## Version Control

- **[Git](https://git-scm.com/):** Distributed version control system.
- **[GitHub](https://github.com/):** Platform for hosting source code and collaborating on projects.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/JeanCelin/ExempleBurgerPlace/blob/main/LICENSE)
