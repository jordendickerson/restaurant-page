const menuItem = (imageUrl, title, description) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    //create side divs
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    menuItem.appendChild(leftSide);
    menuItem.appendChild(rightSide);
    //menu image
    const menuImage = document.createElement('img');
    menuImage.src = imageUrl;

    leftSide.appendChild(menuImage);

    //menu title
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-item-title');
    menuTitle.textContent = title;

    rightSide.appendChild(menuTitle);

    //menu description
    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-item-description');
    menuDescription.textContent = description;

    rightSide.appendChild(menuDescription);



    return menuItem;
}

export default menuItem;