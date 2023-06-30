// Selecting screen elements for closed and open states
const screenClose = document.querySelector(".screenClose")
const screenOpen = document.querySelector(".screenOpen")

// Selecting the message element
const message = document.querySelector(".message")
const myKey = prompt()

let messageText


async function fetchQuote() {
    try {
        // Attempt to fetch the quote
        let response = await fetch('https://api.api-ninjas.com/v1/quotes?category=life', {
            method: 'GET',
            headers: { 
                'X-Api-Key': myKey,
                'Content-Type': 'application/json'
            }
        });
        
        let result = await response.json();
        
        // Return the quote from the response
        return result[0].quote;

    } catch (error) {
        console.error('Error:', error);
    }
}

(async () => {messageText = await fetchQuote()})()

function initializeApp() {
    // Selecting the button to open the cookie and the button to open another
    const cookieBtn = document.querySelector(".cookieBtn")
    const newOne = document.querySelector("#openNewOne")

    // Adding an event listener for clicks on the buttons
    cookieBtn.addEventListener('click', openCookie)
    newOne.addEventListener('click', newMessage)
}

// Function to toggle between the closed cookie screen and open screen
async function openCookie() {
    message.innerHTML = messageText;
    screenClose.classList.toggle('hide');
    screenOpen.classList.toggle('hide');
    messageText = await fetchQuote();
}

function newMessage() {
    screenClose.classList.toggle('hide');
    screenOpen.classList.toggle('hide');
}

initializeApp()
