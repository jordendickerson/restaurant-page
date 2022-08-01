import menuItem from "../components/menu-item";

import burgerImg from "../imgs/menu-items/burger.jpg";

const menu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuLabelWrapper = document.createElement('div');
    menuLabelWrapper.classList.add('menu-label-wrapper');
    menu.appendChild(menuLabelWrapper);

    const menuLabel = document.createElement('div');
    menuLabel.classList.add('menu-label');
    menuLabel.textContent = "Menu";
    menuLabelWrapper.appendChild(menuLabel);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.appendChild(menuItems);

    for (let i = 0; i<10; i++){
        const burger = menuItem(burgerImg, "Really Small Burger", "You can't tell, but this burger is really small");
        menuItems.appendChild(burger);
    }
    

    return menu;
}

export default menu;