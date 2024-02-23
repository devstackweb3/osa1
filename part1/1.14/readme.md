# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective : 
Now implement the final version of the application that displays the anecdote with the largest number of votes:

![image](https://github.com/devstackweb3/osa1/assets/118926098/e8dd82b0-8ea9-452f-bc09-511e2c700022)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.

This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your finished exercises to the "my submissions" tab of the submission application.

# Exercise Process : 
After spending a morning to read again the [documentation](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#conditional-rendering), following certain of the best method uses, I started to apply several "console.logs" to orientate myself on the data statement positionning of type of variables (was I in an index type interpretation or valued variable ?). 

I realized, I'll need quickly external methods use as max() or indexOf() to rethrieve data value state access. 

The use of props inside a children REACT component was inspired back from previous exercices 1.10 & 1.11. 
