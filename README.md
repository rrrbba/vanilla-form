# This is a collection of vanilla JS projects with each project focusing on a different topic

1. Form Validator
    - This project is a simple form validator
        + It uses event listeners and simple functions to run the checks on each input
            - Regex for valid email
            - Passwords are correct length
            - Etc.

2. Movie Seat Booking
    - This project allows the user to select movie tickets and their seats for the respective movie
    - This project focuses on DOM manipulation and makes use of local storage
        - Uses local storage so taken seats persist upon refreshing and the data is parsed to the UI

3. Custom Video Player
    - This project allows a custom video to played, paused, stopped and allows the user to seek to a desired portion of the video
    - This project focuses on the use of th HTML5 Video API
        - A function is continously ran to set current time on the player to match the the timestamp for the video
        - Another function is also used to so the user can seek within the video using the progress bar 
        ### NOTE: I added the video folder to gitignore however normally there would be a video folder with the video file inside of it.

4. Exchange Rate Calculator
    - Allows the user to calculate the exchange rate of the currency of their choice
    - This project focuses on the use of the Fetch API and JSON
        - Uses the Fetch API to make HTTP requests to the exchange rate API to get the exchange rates. Fetch is built into the web browser