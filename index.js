const form = document.querySelector('form');
const input = document.querySelector('.input');


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: pickColors,
        args: [input.value]
    });
});