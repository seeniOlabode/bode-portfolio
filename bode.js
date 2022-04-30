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

function Tab (searchID , navID, boxtype) {
    this.Name = searchID;
    this.Element = document.getElementById(searchID);
    this.NavElement = document.getElementById(navID);
    this.BoxType = boxtype;
    this.Display = false;
}

tabsArray.push( new Tab ('intro-section', 'intro-nav' , 'block'));
tabsArray.push( new Tab ('contact-section' , 'contact-nav' , 'grid'));
tabsArray.push( new Tab ('work-section' , 'work-nav' , 'block'))


const setTab = (input) => {
    const workingTab = tabsArray.filter( tab => {
        return tab.Name === input;
    });
    workingTab[0].Display = true;
    workingTab[0].Element.style.display = workingTab[0].BoxType;
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

const setContact = () => {
    handleTab('contact-section');
}

const setWork = () => {
    handleTab('work-section');
}


// Event Listener 

tabsArray[0].NavElement.addEventListener('click' , setIntro);
tabsArray[1].NavElement.addEventListener('click' , setContact);
tabsArray[2].NavElement.addEventListener('click' , setWork)


// Set Intro 

setIntro();


// Form Stuff


const emailBox = document.getElementById('email');
const subjectBox = document.getElementById('subject');
const textBox = document.getElementById('message');
const sendButton = document.getElementById('send');

const sendEmail = () => {
    if ( emailBox.value.length > 5 && subjectBox.value.length > 5 && textBox.value.length > 5 ) {
        window.open(`mailto:seeniolabode8734@gmail.com?subject=${subjectBox.value}&body${textBox.value}`)
    } else {
        alert('Invalid Email Attempt');
    }
}
