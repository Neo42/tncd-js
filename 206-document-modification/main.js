let div = document.createElement('div');
let textNode = document.createTextNode('Here I am.');
div.className = 'alert';
div.innerHTML = `<strong>Hi there!</strong> You're reading an important message.`;
document.body.appendChild(div);
document.body.appendChild(textNode);

let div2 = div.cloneNode(true);
div2.innerText = 'Clone.';
document.body.appendChild(div2);

// insert string (as text) or node
div2.append(' What?');
div2.prepend('How? ');
div2.before(' Yeah!');
div2.after('Shoot!');
// div2.remove();
div2.replaceWith(' I replaced div2. ');

// returns node
document.body.appendChild(div);
document.body.insertBefore(div2, div); // insert a div2 and a div
document.body.removeChild(div);
document.body.replaceChild(div, div2); // replace div2 with a div

div.insertAdjacentElement('beforebegin', document.createElement('br'));
div.insertAdjacentElement('beforebegin', document.createElement('li'));
div.insertAdjacentElement('beforeend', document.createElement('li'));
div.insertAdjacentElement('afterbegin', document.createElement('li'));
div.insertAdjacentElement('afterend', document.createElement('li'));

function clear(ele) {}
clear(document.getElementsByClassName('elem'));

let questions = ['Name?', 'Age?', 'Gender?'];
for (let i = 0; i < questions.length; i++) {
  const answer = prompt(questions[i]);
  let li = document.createElement('li');
  li.textContent = answer;
  console.log(user.appendChild(li));
}
