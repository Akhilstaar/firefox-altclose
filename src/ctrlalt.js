browser.commands.onCommand.addListener(async function(command) {
    if (command === "closeTab") {
        const tabs = await browser.tabs.query({ currentWindow: true, active: true });
        if (tabs.length > 0) {
            browser.tabs.remove(tabs[0].id);
        }
    }
});