const about = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    
    //create side divs
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    about.appendChild(leftSide);
    about.appendChild(rightSide);

    //label
    const aboutLabelWrapper = document.createElement('div');
    aboutLabelWrapper.classList.add('label-wrapper');
    rightSide.appendChild(aboutLabelWrapper);

    const aboutLabel = document.createElement('div');
    aboutLabel.classList.add('label');
    aboutLabel.textContent = "About Us";
    aboutLabelWrapper.appendChild(aboutLabel);

    //about text
    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.textContent = "\u3000 I am Gill Bates, the founder of Microfood. Originally, I was the founder of Microsoft. However, my evil twin Bill Gates stole my company from me and prevented me from making billions of dollars. Now, I have founded Microfoods to get what is rightfully mine. I will use company funds to build a private army, Pepsi-style. I never have, and never will, forgive Billiam for what he has done to me. It constantly lives in the back of my mind. I cannot rest until I make things right. I'm coming for you William. I'm coming." 
    rightSide.appendChild(aboutText);


    return about;
}

export default about;