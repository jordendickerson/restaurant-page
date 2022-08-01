require('./styles/main.scss');
import navBar from './navigation/nav-bar';

const contentDiv = document.getElementById('content')

function app(){
    //create app div
    const app = document.createElement('div');
    app.classList.add('app');

    app.appendChild(navBar());

    return app;
}

contentDiv.appendChild(app());