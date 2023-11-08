const redactTypeSelect= document.getElementById("redactType");
redactTypeSelect.addEventListener('change', redact);

// Function to begin redaction
function redact() {

    //Acquire message input
    const message = document.getElementById("message");

    // If message is empty dispaly message, box error color change, end function 
    if (!message.value)  {
        message.style.borderBlockColor = 'red';
        alert("Enter your message in the message box");
        return;
    } 
    
    // Message input box blue confirmation chaage 
    else {
        message.style.borderBlockColor = 'blue';
    }

    // Created redacted mesage output
    var redactedMsg = document.getElementById("redactedMsg");
    // Acquire words to be redacted
    const redactionString= document.getElementById("redactStr");

    // Edit message if redact words, else dispaly the exact message 
    !redactionString.value ? redactedMsg.innerHTML = message.value : redactedMsg.innerHTML = redactFxn(message.value, redactionString.value, redactTypeSelect.value);

}

// Actual redaction function logic
function redactFxn(msg, redactString, type ) {

    if (type == 'none' ) {
        return message.value;
    }

    let tempMsg = msg;

    // Create array of words from redact words
    arrayOfRedactWords = redactString.split(',').map((word) => word.trim());

    // Loop through redact words and modify the input message, redacting where necessary
    for (word of arrayOfRedactWords) {
        console.log(word);
        
        // Regex based on redact words with boundary condition to exclude false matches
        var regex = new RegExp(`(?:[".(_*-]|\\b)${word}(?:[".(_*-]|\\b)`, "gim");
        
        // Blur replacemenet with a span
        if (type == 'blur') {
            tempMsg = tempMsg.replaceAll(regex, `<span id='filter'>${word}</span>`);
        } 
        else if (!type) {
            return ;
        }
        // All other types of redact methods
        else {
            console.log(type);
            tempMsg = tempMsg.replaceAll(regex, type);
        }
    }
    return ;
}