# Frontend Mentor - Ping coming soon page

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [My Process](#my-process)
      - [Build with](#built-with)
      - [What I learned](#what-i-learned)
      - [Continued Development](#continued-development)
      - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./images/ScreenShot.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/ping-coming-soon-page-javascript-html5-clientside-form-validation-hljae3Alxz)
- Live Site URL: [Live](https://grifano.github.io/FM__Ping-single-column-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- HTML5 client-side validation
- Regular Expresions
- CSS custom properties
- SASS/SCSS
- JavaScript
- Flexbox
- Grid CSS
- Responsive Web Design

### What I learned

Now I know how to change the focus border color. I didn't know that is done through outline-color property 😳  
And this amazing CSS3 features like invalid pseudo-class. Where you can set up the input behavior when the user didn't provide correct data.  
I believe there are is something like a valid pseudo-class too... but let me try them in the next challenge 😉

```css
input:focus {
  outline-color: $primary;
}
input:invalid {
  outline-color: $lightRed;
  color: $lightRed;
}
```

I can belive that I finish that JS code so quickly… 🥹
The previous one took me at least a couple of weekends... I just decided not to make them complicated. I find some new secrets. So, you can submit the form through a callback event too. And doesn't need to write form.submit() again inside the callback function into the eventListener.

```js
form.addEventListener("submit", (e) => {
  if (email.value !== "") {
    e.submit(); // instend of form.submit()
  } else {
    e.preventDefault();
    invalidMsg.className = "active";
    invalidMsg.innerText = "Whoops! It looks like you forgot to add your email";
  }
});
```

### Continued development

I'm focusing on improving my programming skills with HTML&CSS and JavaScript. My plan is to get comfortable with the basics before I going to dive into the Frontend framework/library like React, Angular, Vue, etc.
I hope that such amzing tools like [Frontend Mentor](https://www.frontendmentor.io/), [freeCodeCamp](https://www.freecodecamp.org/learn), and [Uxcel](https://uxcel.com?invite=EE4PBID94EEH) help me with my this.

### Useful resources

[Frontend Mentor](https://www.frontendmentor.io/) - Get a challenge and try to make them as close to a mockup as you can.  
[Uxcel](https://uxcel.com?invite=EE4PBID94EEH) - improv UX/UI Design skills, by reading the article and check your new knowledge by passing a quiz.  
[freeCodeCamp](https://www.freecodecamp.org/learn) - Free learning platform for learning programing, as Frontend, Backend, Web technology, and more.
[Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)

## Author

- Website - [Serhii "Gr[i]fano" Orlenko"](https://grifano.webflow.io/)
- Frontend Mentor - [@Grifano](https://www.frontendmentor.io/profile/Grifano)
- Twitter - [@Grifano](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Grifano](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

<!-- ## Acknowledgments -->
