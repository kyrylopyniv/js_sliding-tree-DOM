'use strict';

// write code here
/* 1.перебираємо список li і додаєм туди спани на кожну лішку
2.Кожному спану в лішці присвоюємо лістенер для приховування при кліку */

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');
  const text = (li.firstChild);

  li.prepend(span);
  span.prepend(text);
};

const tree = document.querySelector('.tree');

tree.addEventListener('click', ev => {
  const item = ev.target.closest('span');
  const currList = ev.target.parentElement.children[1];

  if (!item || !tree.contains(item)) {
    return;
  }

  if (currList) {
    currList.hidden = !currList.hidden;
  }
});
