let example = document.querySelector('#example');
console.log(example.offsetParent.id); // main
// offsetWidth = borderWidth + padding + contentWidth + padding + scrollbarWidth(Windows) + borderWidth
console.log(example.offsetWidth); // 390 = 300 (284 + 16) + 20 * 2 + 25 * 2
// offsetHeight = borderWidth + padding + contentHeight + padding + borderWidth
console.log(example.offsetHeight); // 290 = 200 + 20 * 2 + 25 * 2
console.log(example.offsetLeft); // 200
console.log(example.offsetTop); // 200

// check if the current element is hidden
const isHidden = elem => !elem.offsetHeight && !elem.offsetHeight;
console.log(isHidden(example));

// clientHeight = contentHeight + padding * 2
console.log(example.clientHeight); // 240 = 200 + 20 * 2
// clientHeight = contentWidth + padding * 2
console.log(example.clientWidth); // 340 = 300 + 20 * 2
console.log(example.scrollHeight); // 590
// example.style.height = `${example.scrollHeight}px`;

// Not read only
example.scrollTop += 300;
// example.scrollLeft += 300;
console.log(example.scrollTop);
