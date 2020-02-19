console.log(`Color: ${document.body.style.color}`); // Color:
console.log(`Margin: ${document.body.style.margin}`); // Margin:

let computedStyle = getComputedStyle(document.body);
console.log(computedStyle.margin); // 5px
