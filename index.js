const redactOptions = {"ellipsis": '...', "questions": '???', "dashes": '---', "underscores": '___', "blur":'', "asterisk": '***'};
const redactTypeSelect= document.getElementById("redactType");
redactTypeSelect.addEventListener('change', redact);
var arrayOfRedactWords =[];
var tempMsg;

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
    
    // Select redact type value
    // let redactType= document.getElementById("redactType").value;

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

    console.log(tempMsg);

    return tempMsg
}



// function findCensoredArray(censorString) {
//     console.log("This is censroString", censorString.value);
// inputLength = censorString.value.trim();
// const censorWords = censorString.value.trim().split();
// const listArrays = censorWords.map((word) => [...msg.toLowerCase().matchAll(word)]);
// // console.log(listArrays);
// // l= listArrays;
// msgList =listArrays[0].map((obj) => [obj['index'], obj['index']+ obj[0].length]);
// console.log(msgList);
// l= msgList;

//     return msgList;
// }

// function remainderParagraph(arr) {
//     const start = 0;
//     final = [];

//     for (let i =0; i < arr.length; i++) {
//         if (i == 0 && arr[i][0] != 0 && arr[i][1] != inputLength - 1 ) {
//             final.append([start, arr[i][0] - start]); 
//             final.append([arr[i][0], arr[i][1], 'span' ])
//             start  = arr[i][1] + 1;           
//         }
//         else if (i == 0 && arr[i][0] == 0) {
//             final.append([start, arr[i][0], 'span']);
//             start = arr[i][1] + 1;
//         }


//         else if (arr[i][1] == inputLength - 1) {
//             final.append([arr[i][0], arr[i][1] ]);
//             return final;
//         }
//         else if (arr[i-1][1] == arr[i][0] ) {
//             final.append([arr[i][0], arr[i][1]  ])
//             start  = arr[i][1] + 1; 
//         }
//         else {
//             final.append([start, arr[i][0] - 1]);  
//             start  = arr[i][0]; 
//         }
//     }
//     arr.map((idx)=> {start, idx[1] - start;} );
// }

// function remainderIndices(arr) {
//     // newArr = [start, arr[1] start]
// }



    // newMsg = arrayOfRedactWords.map((word) => {
        
    //     var regex = new RegExp(`(?:[".(_*-]|\\b)${word}(?:[".(_*-]|\\b)`, "gim");
    //     tempMsg= arrayOfRedactWords.map((word) => msg.replaceAll(regex, redactOptions[type]));
    // });

    // console.log(tempMsg[0]);

    // return tempMsg[0] ;