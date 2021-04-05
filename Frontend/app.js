
const btn = document.querySelector("#send");
const list = document.querySelector("#list");
const input = document.querySelector("#input-message");

// This function adds list elements when the add button is clicked
btn.addEventListener('click', () => {
    
    var message = document.getElementById('input-message').value;
    if(message == '') { // If message is empty
        alert('you must write something');
    } 
    else {
        // Create list element with the message
        li = document.createElement('li');
        li.innerHTML = message;
        li.setAttribute("class", "human-list-items");
        list.insertBefore(li, list.childNodes[0]);
        input.value = ''; // Reset input box value
    }

    // Input message is sent to ChatBot API
    const api = `http://127.0.0.1:5000/chatbot/${message}`;
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Extract response string from API response
            const {response} = data;
            // Response string is then added to the chat list
            li = document.createElement('li');
            li.setAttribute("class", "bot-list-items");
            li.innerHTML = response;
            list.insertBefore(li, list.childNodes[0]);
        });
});
