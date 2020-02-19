console.log(document.querySelector('#example').offsetParent.id); // main
// offsetWidth = borderWidth + padding + contentWidth + padding + scrollbarWidth + borderWidth
console.log(document.querySelector('#example').offsetWidth); // 390 = 300 (284 + 16) + 20 * 2 + 25 * 2
// offsetHeight = borderWidth + padding + contentHeight + padding + borderWidth
console.log(document.querySelector('#example').offsetHeight); // 290 = 200 + 20 * 2 + 25 * 2
console.log(document.querySelector('#example').offsetLeft); // 200
console.log(document.querySelector('#example').offsetTop); // 200

// check if the current element is hidden
const isHidden = elem => !elem.offsetHeight && !elem.offsetHeight;
