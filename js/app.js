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
let menuElement = document.createElement('li');
let menuAchor = document.createElement('a');
let pageHeader = document.querySelector('.page__header');
let mainSelec = document.querySelector('main');
const styleElements = 'color:black; font-size: 1.2rem; margin: 25px 20px; padding: 10px 0; text-align: center'; 
const menuStyle = 'width:100%; display:flex; flexDirection: row';
let paraContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod';
let paraContentTwo = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
let addSectionCount = 4;
let addLiCount = 4;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//This function helps to add more anchors by creating new elements, style them and adding them with appendChild method.
let addMoreAchors = () => {
    let newLiElement = document.createElement('li');
    newLiElement.style.cssText = styleElements;
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', `#Section-${addLiCount}`);
    let liText = `Section-${addLiCount}`;
    newAnchor.textContent = liText;
    newAnchor.style.cssText = 'color: black';
    newLiElement.appendChild(newAnchor);
    navBar.appendChild(newLiElement);
    navMenu.appendChild(navBar);
    addLiCount += 1;
};

//This function works the same way the one it is up
 function addSection (){
         let  newSection = document.createElement('section');
         newSection.setAttribute('id', `Section-${addSectionCount}`);
         newSection.setAttribute('data-nav', `Section ${addSectionCount}`)
         let newDiv = document.createElement('div');
         newDiv.classList.add('landing__container');
         let newHeader = document.createElement('h2');
         let newPara = document.createElement('p');
         let newParaTwo = document.createElement('p');
         newHeader.textContent = `Section ${addSectionCount}`;
         newPara.textContent = paraContent;
         newParaTwo.textContent = paraContentTwo;
         newDiv.appendChild(newHeader);
         newDiv.appendChild(newPara);
         newDiv.appendChild(newParaTwo);
         newSection.appendChild(newDiv);
         mainSelec.appendChild(newSection);
         addSectionCount +=1;
 };


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let buildNav = () => {
    let count = 1;
    for (i=0; i < 3; i++){
        let newLiElement = document.createElement('li');
        let newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', `#Section-${count}`)
        newLiElement.appendChild(newAnchor);
        let liText = `Section-${count}`;
        newAnchor.textContent = liText;
        newAnchor.style.cssText = 'color:black';
        newLiElement.style.cssText = styleElements;
        navBar.appendChild(newLiElement);
        count += 1;
    };
};


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;
    const navLinks = document.querySelectorAll('.navbar__menu li a');
    navLinks.forEach((element) => {
        if (!element.hash) {
            return;
        }
        let section = document.querySelector(element.hash);
        // Ignore scrolling if the section doesn't have href
        if (!section) {
            return;
        }

        // Add or remove active class
        if (section.offsetTop <= fromTop + 200 && section.offsetTop + section.offsetHeight - 200 > fromTop) {
            section.classList.add('your-active-class');
            element.classList.add('link_active');
        } else {
            section.classList.remove('your-active-class');
            element.classList.remove('link_active');
        }
    });
 });


// Scroll to anchor ID using scrollTO event

const scrollToSection = (target) => {
    let section = document.querySelector(target.hash);
    let height = section.offsetTop - navBar.offsetHeight;

    scrollTo({
        top: height,
        behavior: 'smooth'
    });
};


navBar.addEventListener('click', function(e) {
    event.preventDefault();
    
    if (e.target.nodeName == 'A'){
        scrollToSection(e.target);
        return;
    }

    if (e.target.nodeName == 'LI') {
        scrollToSection(e.target.children[0]);
        return;
    } 
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navBar.style.cssText = menuStyle;
navBar.style.flexWrap = 'wrap';
navBar.style.justifyContent= 'space-evenly';
menuAchor.textContent = 'New Section';
menuAchor.style.cssText = 'color: black';
menuAchor.addEventListener('click', ()=> {
    addSection();
    addMoreAchors(); 
});
menuElement.style.cssText = styleElements;
menuElement.appendChild(menuAchor);
navBar.appendChild(menuElement);
navMenu.appendChild(navBar);




buildNav();