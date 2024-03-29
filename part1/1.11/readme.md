# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Exercise Objective : 

Display the statistics in an HTML table, so that your application looks roughly like this:

![image](https://github.com/devstackweb3/osa1/assets/118926098/00932e34-de99-49af-b3ac-dee71529afc3)

Remember to keep your console open at all times. If you see this warning in your console:

![image](https://github.com/devstackweb3/osa1/assets/118926098/effe0741-4ee6-4f08-93c7-f25168acf72a)

Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.

Typical source of an error Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist. is Chrome extension. Try going to chrome://extensions/ and try disabling them one by one and refreshing React app page; the error should eventually disappear.

Make sure that from now on you don't see any warnings in your console!

# Exercise Process : 

After having encountered the error in the console of lacking of tbody encapsulation, I have corrected it, and integrated the <tr> (line jumps) and <td> (cells | row extension). 

I have also refactored the distribution of properties by react component, assigned to each cell supposed to store one of the 2 variables (static | dynamic). 
