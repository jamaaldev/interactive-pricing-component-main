# interactive-pricing-component-main


# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [My solution](https://jamaaldev.github.io/interactive-pricing-component-main/)
- Live Site URL: [My live site](https://jamaaldev.github.io/interactive-pricing-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript Pure

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
/* I Learn How To Customize the Range Slider,
W3School Have Many Solution. */

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.range::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 45px; /* Set a specific slider handle width */
  height: 45px; /* Slider handle height */
  background: url(./images/icon-slider.svg); /* Green background */
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--Strong-Cyan);
  border-radius: 30px;
  box-shadow: 3px 15px 30px 5px var(--Soft-Cyan);
}
/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.range::-webkit-slider-thumb:hover {
  background-color: var(--Strong-Cyan);
  box-shadow: 3px 15px 30px 12px var(--Soft-Cyan);
  cursor: pointer; /* Cursor on hover */
}

.range::-webkit-slider-thumb:active {
  box-shadow: 3px 15px 30px 5px var(--Soft-Cyan);
  background-color: var(--Strongest-Cyan);
  cursor: grabbing; /* Cursor on hover */
}

.range::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: url(./images/icon-slider.svg); /* Green background */
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer; /* Cursor on hover */
}
```

```js
// i learn toggleAttribute for getting value true or false when i switch Slider the discount it helps me to use condition if. please dont use the same place that using toggleAttribute for condition  make another function past it in to.and make varaible yearDiscount global to save the fake memory value
const pricingCharge = (charge) => {
  switchSlide.onclick = (e) => {
    yearDis = e.target.toggleAttribute("on");
    yearDiscount(yearDis, charge);
  };
};

// I also learn how to calculate discount in a year total money with discount added 25% below Both as Same, 75 means you only keeping 75% from 100% if they choose a yearly and 25% is the dicount you gave up
${charge.price * 12 * 0.75}
${(charge.price * 12 * 75) / 100}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Custom Range Slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Custom Toggle Slider](https://www.w3schools.com/howto/howto_css_switch.asp) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@jamaaldev](https://www.frontendmentor.io/profile/jamaaldev)
- Twitter - [@jamaaldev](https://www.twitter.com/jamaaldev)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
