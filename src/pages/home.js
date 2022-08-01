const home = () => {
    //home wrapper
    const home = document.createElement('div');
    home.classList.add('home');

    //gif background
    const backgroundWrapper = document.createElement('div');
    backgroundWrapper.classList.add('background-wrapper');
    home.appendChild(backgroundWrapper);

    //text panel
    const homePanel = document.createElement('div');
    homePanel.classList.add('home-panel');

    const panelHeading = document.createElement('div');
    panelHeading.classList.add('panel-heading');
    panelHeading.textContent = "We sell really small food";

    const panelSubtitle = document.createElement('div');
    panelSubtitle.classList.add('panel-subtitle');
    panelSubtitle.textContent = "It's just... really small."

    homePanel.appendChild(panelHeading);
    homePanel.appendChild(panelSubtitle);

    home.appendChild(homePanel);

    return home;
}

export default home;