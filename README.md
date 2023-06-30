# Fortune Cookie API Consumer

This JavaScript project provides a fun interface to interact with an API that serves random quotes. By clicking on a virtual fortune cookie, users can receive a new quote or "fortune."

## How It Works

This application interacts with the https://api.api-ninjas.com/v1/quotes API to retrieve quotes.

Upon starting the app, the user is asked to provide an API key via a prompt. This key is used to authenticate with the API and retrieve the quotes.

The main screen of the application displays a closed fortune cookie. When the user clicks on this cookie, it "opens" to reveal a quote. After reading the quote, the user can click a button to "get a new fortune," which closes the current cookie and opens a new one with a fresh quote.

## Features

- Interacts with the Quotes API to fetch and display quotes
- Uses modern async/await syntax for asynchronous operations
- Minimalist design focusing on the fortune cookie and the revealed quote

## Usage

To use this application, you need a valid API key for the https://api.api-ninjas.com/v1/quotes API. 

1. Load the application in your browser. 
2. Input your API key when prompted.
3. Click on the fortune cookie to reveal a quote.
4. After reading the quote, click the "Get a new fortune" button to close the current cookie and get a new one.

## Dependencies

This project is purely frontend-based and does not require any additional dependencies.

## Known Issues and Limitations

- The application currently does not handle cases where an incorrect or nonexistent API key is provided. In such cases, the application will fail to fetch quotes, and no feedback is provided to the user. Future updates may add better error handling and user feedback.

## Contributing

Feel free to submit issues and pull requests, they are always welcome!

---
