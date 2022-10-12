
// let items = document.getElementsByClassName("message-in");
// let whatsappMessageTexts = document.querySelectorAll("div.copyable-text");

/*
    Multiple problems
    0. Blurs <forwarded> instead of name.
    1. Doesn't blur names for above a <sent media>; because of `.copyable-text`.
    2. Doesn't blur names in tagged messages.
*/ 

// for (let text of whatsappMessageTexts) {
//     let textSibling = text.parentElement.firstChild;
//     if(textSibling != text) {
//         textSibling.style.filter = "blur(4px)";
//     }
// }

blurIt = () => {

    let chatList = document.getElementById("side");
    chatList ? chatList.style.filter = "blur(10px)" : " ";
    
    let header = document.getElementsByTagName('header')[1];
    header ? header.style.filter = "blur(4px)" : " ";

    for(i = 0; i < 256; ++i) {
        let potentialListOfUserNameColors = document.getElementsByClassName(`color-${i+1}`);
        let potentialListOfUserNameBgColors = document.getElementsByClassName(`bg-color-${i+1}`);
        for (item of potentialListOfUserNameColors) {item.style.filter = "blur(4px)";}
        for (item of potentialListOfUserNameBgColors) {item.style.filter = "blur(4px)";}
    }
    
    setTimeout(blurIt, 1000);
}

window.addEventListener('load', blurIt);
