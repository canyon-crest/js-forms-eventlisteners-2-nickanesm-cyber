// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================

// ============================================
//  WARM-UP: Shout It!
// ============================================

// STEP 1: Get the "Shout" button by its ID ("btnShout")
const btnShout = document.getElementById("btnShout");

// STEP 2: Add a click event listener to the button.
btnShout.addEventListener("click", function() {
    // a) Get the text from the input with ID "shoutInput"
    const text = document.getElementById("shoutInput").value;
    
    // b) Convert to uppercase and c) add "!"
    const shoutedText = text.toUpperCase() + "!";
    
    // d) Display the result in the element with ID "outShout"
    document.getElementById("outShout").innerHTML = shoutedText;
});


// ============================================
//  MAIN: Pizza Builder
// ============================================

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", function() {
    // a) Get the selected size price from radio buttons ("rg")
    const sizeRadios = document.getElementsByName("rg");
    let sizePrice = 0;
    for (let i = 0; i < sizeRadios.length; i++) {
        if (sizeRadios[i].checked) {
            sizePrice = parseFloat(sizeRadios[i].value);
            break;
        }
    }

    // b) Count checked toppings ("cb")
    const checkboxes = document.getElementsByName("cb");
    let toppingCount = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppingCount++;
        }
    }
    const toppingTotal = toppingCount * 0.50;

    // c) Get the service fee from dropdown ("serviceSelect")
    const serviceValue = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    if (serviceValue === "takeout") {
        serviceFee = 1.50;
    } else if (serviceValue === "delivery") {
        serviceFee = 3.00;
    } else {
        serviceFee = 0; // "dinein"
    }

    // d) Calculate total
    const total = sizePrice + toppingTotal + serviceFee;

    // e) Get the customer name from the input with ID "myInput"
    let customerName = document.getElementById("myInput").value.trim();
    if (customerName === "") {
        customerName = "Customer";
    }

    // f) Display the result in the element with ID "myPara"
    const resultMessage = `${customerName}, your total is $${total.toFixed(2)}`;
    document.getElementById("myPara").innerHTML = resultMessage;
});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function() {
    // a) Set the name input value to ""
    document.getElementById("myInput").value = "";

    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById("r3").checked = true;

    // c) Uncheck ALL topping checkboxes
    const checkboxes = document.getElementsByName("cb");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    // d) Set the service dropdown value to "dinein"
    document.getElementById("serviceSelect").value = "dinein";

    // e) Set the output paragraph innerHTML to ""
    document.getElementById("myPara").innerHTML = "";
});
