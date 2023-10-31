<h1>My favorite images</h1>

<h2>Project</h2>

This is a proposal for a simple application to manage images on-line. The platform allows to save images by URL link, group them into categories and modify their registration data.

<h2>Design</h2>

The design is thought for an intuitive user experience, with a suggestive landing page that briefly explains the context of the app and links to the image storage form.
The "Gallery" view, allows to obtain a complete gallery of images or a collection filtered by categories.
From each image we can access an enlarged view and the log editor and also delete the image.

<h3>Desktop Views</h3>
 
![Group%202.png](https://github.com/MyFaveImagesProject/MyFaveImgFront/blob/main/src/assets/images/Group%202.png)

<h3>Responsive Views</h3>

![Group%201.png](https://github.com/MyFaveImagesProject/MyFaveImgFront/blob/main/src/assets/images/Group%201.png)
 

<h2>Development</h2>

The app is arranged in several layers that make the data, logic and rendering independent, so that the application is scalable.
The data is stored locally in a database in a json file which, through the callings of axios library to JSON Server fake API, is communicated and printed in the browser through the "Pieces of life" app.

<h2>Stack</h2>

Git Version Control system
Git Hub plattform

<h4>Tools</h4>
Visual Studio code

<h4>Lenguages</h4>
Html
CSS
Javascript

<h4>Libraries</h4>
React Vite
React Bootstrap
Axios
Reactrouter DOM
React testing Library
Json server

<h2>Install the project</h2>

-Clone projects

https://github.com/MyFaveImagesProject/MyFaveImgFront.git

In Visual Studio Code run the command
- npm i
- npm run dev
- json-server --watch db.json

That should install all the necessary dependencies, but if you have any problems with the installation, these are the commands for each installed dependency
- npm install
- npm create vite@latest
- npm run dev (run in a separate terminal that should not be closed)
- npm install axios
- npm i bootstrap@5.3.0-alpha1
- npm i react-router dom
- npm instll vite
- npm install --save-dev vitest
- npm install --save-dev jsdom 
- npm install --save-dev @testing-library/jest-dom
- npm install --save-dev @testing-library/react
- npm instal json-server


<h2>Developer</h2>

Celia Garcia Castilla https://github.com/CeliaGC/Celia_Garcia

I wish you a happy user experience






