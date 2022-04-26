const menuButton = document.getElementById('mobile-menu');

const navigationBar = document.getElementById('page-nav');

const toggleFunction = () => {
    let toggle = true;
    return () => {
        output = toggle;
        if (toggle) {
            toggle = false;
        } else {
            toggle = true;
        }
        return output;
    }
}

// Function to change the MenuButton Icon

const buttonToggle = toggleFunction();

const switchButton = () => {
    if (buttonToggle()) {
        menuButton.setAttribute( 'src' , 'img/xmark-solid.svg');
    } else {
        menuButton.setAttribute( 'src' , 'img/bars-solid.svg')
    }
}

// Function to adjust the styles 

const styleToggle = toggleFunction();

const switchStyle = () => {
    if(styleToggle()) {
        navigationBar.style.display = "block";
    } else {
        navigationBar.style.display = "none";
    }
}


// Function to do both 

const responsiveMenu = () => {
    switchButton();
    switchStyle();
}

menuButton.addEventListener("click" , responsiveMenu);



// TAB SWITCHING CODE 

const tabsArray = [];

function Tab (searchID , navID) {
    this.Name = searchID;
    this.Element = document.getElementById(searchID);
    this.NavElement = document.getElementById(navID);
    this.Display = false;
}

tabsArray.push( new Tab ('intro-section', 'intro-nav'));
tabsArray.push( new Tab ('contact-section' , 'contact-nav'));
tabsArray.push( new Tab ('skills-section' , 'skill-nav'));


const setTab = (input) => {
    const workingTab = tabsArray.filter( tab => {
        return tab.Name === input;
    });
    workingTab[0].Display = true;
    workingTab[0].Element.style.display = 'block';
    workingTab[0].NavElement.classList.add('active');
}

const removeCurrentTab = () => {
    const workingTab = tabsArray.filter( tab => {
        return tab.Display === true;
    })
    if ( workingTab.length === 1 ) {
        workingTab[0].Display = false;
        workingTab[0].Element.style.display = 'none';
        workingTab[0].NavElement.classList.remove('active');
    } else {
        return true;
    }
}

const handleTab = (input) => {
    removeCurrentTab();
    setTab(input);
}

const setIntro = () => {
    handleTab('intro-section');
}

const setSkills = () => {
    handleTab('skills-section');
}

const setContacts = () => {
    handleTab('contact-section');
}


// Event Listener 

tabsArray[0].NavElement.addEventListener('click' , setIntro);
tabsArray[1].NavElement.addEventListener('click' , setContacts);
tabsArray[2].NavElement.addEventListener('click' , setSkills);


// Set Intro 

handleTab( 'intro-section');





// Cursor Stuff


const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });

}
