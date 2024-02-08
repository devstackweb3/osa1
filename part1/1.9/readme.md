# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective : 
Change your application to display statistics only once feedback has been gathered.
![image](https://github.com/devstackweb3/osa1/assets/118926098/510bba75-359c-44cc-9c93-067d4815ed15)


# Exercise Process : 
I first referred to the total value reference representing the totalClicks() function call. After realizing that conditioning was not applied, I adapted it to the starting value set from the useState (allClicks). 

I realized that the total reference value couldn't return any data until the totalClicks() function was called. And when the DOM loads, this function doesn't execute automatically but waits for a "click" event to occur. 
