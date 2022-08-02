const footer = () => {
    const footer = document.createElement('footer');
    
    const footerText = document.createElement('span');
    footerText.textContent = "©Jorden Dickerson 2022";
    footer.appendChild(footerText);

    return footer;
}

export default footer;