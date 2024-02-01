# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Refactoring code in 3 Components : Header | Content | Total
All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content no much renders the parts and their number of exercises delegated to <Part /> children components inside itself, and Total renders the total number of exercises.

# Refactoring code in 3 Identical Children Components stated inside "Content"
# <Part />
Each <Part /> much renders respectively the exercice title and number of exercices made.
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.
