require('./styles/main.scss');
import navBar from './navigation/nav-bar';
import home from './pages/home';
import menu from './pages/menu';
import about from './pages/about';
import footer from './components/footer';

const contentDiv = document.getElementById('content')

function app(){
    //create app div
    const app = document.createElement('div');
    app.classList.add('app');

    //create app content div
    const appContent = document.createElement('div');
    appContent.classList.add('app-content');

    
    app.appendChild(navBar());
    app.appendChild(appContent);

    appContent.appendChild(home());
    

    return app;
}

contentDiv.appendChild(app());
contentDiv.appendChild(footer());

const logo = document.getElementById('logo');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');
const appContent = document.querySelector('.app-content');

logo.addEventListener('click', () => appContent.replaceChildren(home()));
menuButton.addEventListener('click', () => appContent.replaceChildren(menu()));
aboutButton.addEventListener('click', () => appContent.replaceChildren(about()));