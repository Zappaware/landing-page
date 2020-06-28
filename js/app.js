/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navMenu = document.querySelector('.navbar__menu');
let navBar = document.getElementById('navbar__list');
let pageHeader = document.querySelector('.page__header');
let mainSelec = document.querySelector('main');
let paraContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';

let paraContentTwo = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
 function addSection (num){
     let count = num;
     for (i=0; i <= num-2; i++) {
         let  newSection = document.createElement('section');
         let newDiv = document.createElement('div');
         newDiv.classList.add('landing__container');
         let newHeader = document.createElement('h2');
         let newPara = document.createElement('p');
         let newParaTwo = document.createElement('p');
         newHeader.textContent = `Section-${count}`;
         newPara.textContent = paraContent;
         newParaTwo.textContent = paraContentTwo;
         newDiv.appendChild(newHeader);
         newDiv.appendChild(newPara);
         newDiv.appendChild(newParaTwo);
         newSection.appendChild(newDiv);
         mainSelec.appendChild(newSection);
         count +=1;
   }
 };


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let buildNav = () => {
    let count = 1;
    for (i=0; i < 6; i++){
        let newLiElement = document.createElement('li');
        let liText = `Section-${count}`;
        newLiElement.textContent = liText;
        newLiElement.style.cssText = 'color:black; font-size: 1.5rem; margin: 25px 50px 25px 50px; padding: 10px 0; text-align: center'
        navBar.appendChild(newLiElement);
        count += 1;
    };
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navBar.style.width = '100%';
navBar.style.height = '100px';
navBar.style.display = 'flex';
navBar.style.flexDirection = 'row';
navBar.style.flexWrap = 'wrap';
navBar.style.justifyContent= 'space-evenly';
navMenu.appendChild(navBar);


// Scroll to section on link click

// Set sections as active

buildNav();
addSection(4);