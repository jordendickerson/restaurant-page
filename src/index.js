require('./styles/main.scss');
import navBar from './navigation/nav-bar';
import home from './pages/home';

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