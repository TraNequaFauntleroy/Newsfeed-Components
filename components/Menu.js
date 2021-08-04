// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.*/

function menuMaker(array) {
  //create elements
  const menuDiv = document.createElement('div');
  const uList = document.createElement('ul');
  const students = document.createElement('li');
  const faculty = document.createElement('li');
  const news = document.createElement('li');
  const tech = document.createElement('li');
  const music = document.createElement('li');
  const logOut = document.createElement('li');

  //add class name
  menuDiv.classList.add('menu');

  // assemble elements
  uList.appendChild(menuDiv);
  students.appendChild(uList); 
  faculty.appendChild(uList);  
  news.appendChild(uList);  
  tech.appendChild(uList);
  music.appendChild(uList);
  logOut.appendChild(uList);

  //find element
  const menuButton = document.querySelector('.menu-button');

  // adding content
  students.textContent = array[0];
  faculty.textContent = array[1];
  news.textContent = array[2];
  tech.textContent = array[3];
  music.textContent = array[4];
  logOut.textContent = array[5];

  // adding event listener
  menuButton.addEventListener('click', event => {
    menuDiv.classList.toggle('.menu--open')
  });

  return menuDiv;
}

const header = document.querySelector('.header');
const newItem = menuMaker(array);

newItem.map(item => {
  menuItems.appendChild(header);
})
  

/* Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/




