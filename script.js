"use strict";
const itemsArray = [...document.getElementsByClassName('step')];
console.log(itemsArray);

const toggleClass = (item) => {
  item.classList.toggle('active');
}

const addEventListenerToItems = (itemsArray) => {
  console.log(Array.isArray(itemsArray));
  itemsArray.map( item => {
    item.addEventListener('click', ()=>{toggleClass(item)}) ;
  })
}
addEventListenerToItems(itemsArray);
