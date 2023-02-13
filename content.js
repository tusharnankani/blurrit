
var id = 0;

blurIt = () => {
    clearTimeout(id);
    
    let chatList = document.getElementById("side");
    chatList ? chatList.classList.add("blurrit-class", "blur-10") : "";
    
    let header = document.getElementsByTagName('header')[1];
    header ? header.classList.add("blurrit-class", "blur-4") : "";
    
    let taggedNameList = document.getElementsByClassName("matched-mention");
    for (item of taggedNameList) {item.classList.add("blurrit-class", "blur-4");}

    for(i = 0; i < 256; ++i) {
        let potentialListOfUserNameColors = document.getElementsByClassName(`color-${i+1}`);
        let potentialListOfUserNameBgColors = document.getElementsByClassName(`bg-color-${i+1}`);
        for (item of potentialListOfUserNameColors) {item.classList.add("blurrit-class", "blur-4");}
        for (item of potentialListOfUserNameBgColors) {item.classList.add("blurrit-class", "blur-4");}
    }
    
    id = setTimeout(blurIt, 1000);
}

blurIt();
