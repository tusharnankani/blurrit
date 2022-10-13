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
    chatList ? chatList.classList.add("blurrit-class", "blur-10") : "";
    
    let header = document.getElementsByTagName('header')[1];
    header ? header.classList.add("blurrit-class", "blur-4") : "";

    for(i = 0; i < 256; ++i) {
        let potentialListOfUserNameColors = document.getElementsByClassName(`color-${i+1}`);
        let potentialListOfUserNameBgColors = document.getElementsByClassName(`bg-color-${i+1}`);
        for (item of potentialListOfUserNameColors) {item.classList.add("blurrit-class", "blur-4");}
        for (item of potentialListOfUserNameBgColors) {item.classList.add("blurrit-class", "blur-4");}
    }
    
    setTimeout(blurIt, 1000);
}

window.addEventListener('load', blurIt);