const navBar = () => {
    //create nav bar wrapper
    const navWrapper = document.createElement('div');
    navWrapper.classList.add('nav-wrapper');

    //create logo in nav bar
    const navLogo = document.createElement('img');
    navLogo.setAttribute("src", "../src/microfood.svg");
    navLogo.classList.add('logo');

    //nav wrappers
    const navButtonWrapper1 = document.createElement('div');
    navButtonWrapper1.classList.add('nav-button-wrapper');

    const navButtonWrapper2 = document.createElement('div');
    navButtonWrapper2.classList.add('nav-button-wrapper');

    //create menu button
    const menuButton = document.createElement('div');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';

    //create about button
    const aboutButton = document.createElement('div');
    aboutButton.classList.add('nav-button');
    aboutButton.innerText = 'About';

    //append nav bar elements to navWrapper
    navWrapper.appendChild(navLogo);
    navWrapper.appendChild(navButtonWrapper1);
    navWrapper.appendChild(navButtonWrapper2);
    navButtonWrapper1.appendChild(menuButton);
    navButtonWrapper2.appendChild(aboutButton);
    
    return navWrapper;
}

export default navBar;