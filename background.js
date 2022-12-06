let toggle = false;

try {
    chrome.action.onClicked.addListener((tab) => {

        if(tab.url.match("https://web.whatsapp.com/*") !== null) {

            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        
            toggle = !toggle;
        
            toggle ? (
                chrome.scripting.insertCSS({
                    target: {tabId: tab.id},
                    css: `.blurrit-class {
                        transition: all 0.3s ease;
                    }
                    
                    .blur-10 {
                        filter: blur(10px);
                    }
                    
                    .blur-4 {
                        filter: blur(4px);
                    }
                    
                    .blurrit-class:hover {
                        filter: none;
                    }`
                })
                ) : (
                    chrome.scripting.insertCSS({
                        target: {tabId: tab.id},
                        css: `.blurrit-class {
                            transition: none;
                        }
                        
                        .blur-10 {
                            filter: none;
                        }
                        
                        .blur-4 {
                            filter: none;
                        }`
                    })
            );

        }

    });
} catch (err) {
    console.log("Outside: ", err);
}