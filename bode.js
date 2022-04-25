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