// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Creating Elements 
  header = document.createElement('div');
  spanOne = document.createElement('span');
  hOne = document.createElement('h1');
  spanTwo = document.createElement('span');

  //  Assigning Classes And Content
  header.classList.add('header');
  spanOne.classList.add('date');
  spanOne.textContent = 'SMARCH 28, 2019';
  hOne.textContent = 'Lambda Times';
  spanTwo.textContent = '98°';

  // Appending Elements
  header.append(spanOne, hOne, spanTwo);
  
  document.querySelector('.header-container').append(header)

}
Header()