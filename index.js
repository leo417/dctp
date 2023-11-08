const redactTypeSelect= document.getElementById("redactType");
redactTypeSelect.addEventListener('change', redact);

// Function to begin redaction
function redact() {

    // Store message input
    const message = document.getElementById("message");
    // Created redacted message output
    var redactedMsg = document.getElementById("redactedMsg");
    // Store words to be redacted
    const redactionString= document.getElementById("redactStr").value;

    // If message is empty dispaly message, box error color change, end function 
    if (!message.value)  {
        message.style.borderBlockColor = 'red';
        alert("Enter your message in the message box");
        return;
    } 
    // If there is a message but no words to redact, then return message and end function
    else if  (message.value && !redactionString) {
        redactedMsg.innerHTML = message.value;
        return; 
    }
    
    // Message input box blue confirmation chaage 
    else {
        message.style.borderBlockColor = 'blue';
        // Create array of words from redact words
    arrayOfRedactWords = redactionString.split(',').map((word) => word.trim());

     // Loop through redact words and modify the input message, redacting where necessary
    for (word of arrayOfRedactWords) {
        console.log(word);
        
        // Regex based on redact words with boundary condition to exclude false matches
        var regex = new RegExp(`(?:[".(_*-]|\\b)${word}(?:[".(_*-]|\\b)`, "gim");
        
        // Blur replacemenet with a span
        if (redactTypeSelect.value == 'blur') {
            redactedMsg.innerHTML = message.value.replaceAll(regex, `<span id='filter'>${word}</span>`);
        } 
        else if (redactTypeSelect.value == 'none') {
            redactedMsg.innerHTML = message.value;
        } 
        else if (!redactTypeSelect.value) {
            return ;
        }
        // All other types of redact methods
        else {
            redactedMsg.innerHTML = message.value.replaceAll(regex, redactTypeSelect.value);            
        }
    }
}
    return ;
}