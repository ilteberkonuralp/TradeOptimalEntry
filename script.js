document.getElementById("calculate-btn").addEventListener("click", function() {
    // Fetch input values

    var position = document.getElementById("position").value;
    var entryPrice = parseFloat(document.getElementById("entry-price").value);
    var exitPrice = parseFloat(document.getElementById("exit-price").value);
    var stopPrice = parseFloat(document.getElementById("stop-price").value);
    var BaseAccountBalance = parseFloat(document.getElementById("balance").value);
    var risk_ratio = parseFloat(document.getElementById("risk_ratio").value);
    var risk=BaseAccountBalance*risk_ratio/100;
    // Perform calculation
    var entry_amount = 0;
    var reward_amount=0;
    var goods_amount=0;
    var first_tp=0
    if (position === "long") {
        entry_amount = risk/(entryPrice-stopPrice ) * entryPrice;
        goods_amount=entry_amount/entryPrice;
        reward_amount=(exitPrice - entryPrice)*goods_amount;
    } else if (position === "short") {
        entry_amount = risk/(stopPrice - entryPrice) * entryPrice;
        goods_amount=entry_amount/entryPrice;
        reward_amount=(entryPrice-exitPrice)*goods_amount;
    }
    
    // Display result
    var resultDiv = document.getElementById("result");

    // Concatenate all the HTML strings together
    var htmlContent = "<div class='result-value'>Optimal entry amount: " + entry_amount.toFixed(2) + " USD</div>";
    htmlContent += "<div class='result-value risk'>Risk amount: " + risk.toFixed(2) + " USD</div>";
    htmlContent += "<div class='result-value reward'>Reward amount: " + reward_amount.toFixed(2) + " USD</div>";

    // Assign the concatenated HTML content to resultDiv.innerHTML
    resultDiv.innerHTML = htmlContent;

});


document.getElementById("position").addEventListener("change", function() {
    var position = document.getElementById("position").value;

    var calculateBtn = document.getElementById("calculate-btn");

    if (position === "short") {

        calculateBtn.style.backgroundColor = "red";
    } else {

        calculateBtn.style.backgroundColor = "#4caf50"; // Reset to default green color
    }
});

