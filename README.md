# Summary

This project hopes to create a native feel on mobile. 

<!-- Please deliver the project as a Github repo with a readme that includes quick writeup of your approach and any relevant/interesting details, as well as instructions for running the project locally and testing it on an iPhone via Safari.  -->

## To Run Locally

1. `npm run dev` -- starts the localhost on `http://localhost:5173/`
2. `ngrok http http://localhost:5173` -- use ngrok to proxy your localhost
3. open link on mobile phone safari. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The user should be able to jump into the view and be indistinguishable from native user experience. 

### Screenshot

Mobile Demo

![]()


### Links

<!-- UPDATE -->
- Solution URL: [code](https://github.com/dionlow/)
- Live Site URL: [demo](https://www.dionlow.me/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Typescript
- BEM CSS 
- Framer-motion
- React-router
- Github Pages
- [React](https://reactjs.org/) - JS library
- [Vite] (https://vitejs.dev/guide/why.html) - JS bundler

### Steps 
1. Add page placeholders
2. Add components for list view 
3. Add rating and loading component
4. Add navigation 
5. Add UX animation 
6. Explore other options

Time taken. 5 hours to complete steps 1 - 5 and functioning MVP. 
Remaining time exploring various approaches on stack navigation.

### Approaches

Simulating a native push stack navigation is fairly complex. There are many ways to increase user experience through animations, but to 
achieve true native feel, there are trade-offs in complexities. Here are some ideas of what levels of complexities could look like.

1. Level 1: Add CSS or animation to simulate interactive feel.
2. Level 2: We can add in some middleware to expose the lifecycle logic in React to allow us to trigger onEnter and 
onExit animations. These animations can be used by one of many animation libraries. 
3. Level 3: Using gesture libraries, set overrides to the gestures trigger snap points and draggable pages that will initialize page div positioning 
based on url params. Manipulate history state without reloading page. 
4. Level 4: Architect stack navigation wrapper component for web to wrap navigation routers. While CPU allowed, render additional views offscreen of previous and next pages
in the history stack. Disable default gestures and override with our own interactive view that navigate through pages. 

#### Level 1

Using `framer-motion`, we can add basic animation states for initializing, appearing, and even layout change. Animation
states can be added to UI elements like buttons and also full pages. 

Alternatively we can also use [react-spring](https://github.com/pmndrs/react-spring) for animations. 

#### Level 2

We can use `AnimatePresence` which will abstract some of the lifecycle state when components are unmounting. We could have a bit more control if we use [react-transition](https://reactcommunity.org/react-transition-group/switch-transition)


#### Level 3

We can use gesture libraries such as [use-gesture](https://www.npmjs.com/package/@use-gesture/react). There are some gesture libraries that try to simulate page transitions, but I could only find some that were custom or not well supported. 

### Next Steps

I would consider using react-native or flutter to use cross platform api's. 

## Author

- Frontend Mentor - [@dionlow](https://www.frontendmentor.io/profile/dionlow)
