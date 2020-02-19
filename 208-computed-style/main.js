console.log(`Color: ${document.body.style.color}`); // Color:
console.log(`Margin: ${document.body.style.margin}`); // Margin:

let computedStyle = getComputedStyle(document.body);
console.log(computedStyle.margin); // 5px

// Don't do this!
console.log(getComputedStyle(document.body).width); // or height
// because height/width depends on another css property box-sizing
// because they can be auto
// easily breakable.
