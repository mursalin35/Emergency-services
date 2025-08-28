// Heart counter 
let heartCount = 0;
function increaseHeart() {
    heartCount++;
    document.getElementById('heratCounter').innerText = heartCount;
}




// copy counter 
let copyCount = 0;
function increaseCopy() {
    copyCount++;
    document.getElementById('copyCounter').innerText = copyCount;
}




// Alert Copy massage
// card no 1 
function emergencyCopy() {
    let emergencyText = document.getElementById("emergencyNumber").innerText;
    navigator.clipboard.writeText(emergencyText)
        .then(function () {
            alert("📋 Number copied 999...");
        });
}
// card no 2 
function policeCopy() {
    let policeText = document.getElementById("policeNumber").innerText;
    navigator.clipboard.writeText(policeText)
        .then(function () {
            alert("📋 Number copied 999...");
        });
}
// card no 3 
function fireCopy() {
    let fireText = document.getElementById("fireNumber").innerText;
    navigator.clipboard.writeText(fireText)
        .then(function () {
            alert("📋 Number copied 999...");
        });
}
// card no 4 
function ambulanceCopy() {
    let ambulanceText = document.getElementById("ambulanceNumber").innerText;
    navigator.clipboard.writeText(ambulanceText)
        .then(function () {
            alert("📋 Number copied 1994-999999...");
        });
}
// card no 5 
function womenCopy() {
    let womenText = document.getElementById("womenNumber").innerText;
    navigator.clipboard.writeText(womenText)
        .then(function () {
            alert("📋 Number copied 109...");
        });
}
// card no 6 
function corruptionCopy() {
    let corruptionText = document.getElementById("corruptionNumber").innerText;
    navigator.clipboard.writeText(corruptionText)
        .then(function () {
            alert("📋 Number copied 106...");
        });
}
// card no 7 
function electricityCopy() {
    let electricityText = document.getElementById("electricityNumber").innerText;
    navigator.clipboard.writeText(electricityText)
        .then(function () {
            alert("📋 Number copied 16216...");
        });
}
// card no 8 
function bracCopy() {
    let bracText = document.getElementById("bracNumber").innerText;
    navigator.clipboard.writeText(bracText)
        .then(function () {
            alert("📋 Number copied 16445...");
        });
}
// card no 9 
function railwayCopy() {
    let railwayText = document.getElementById("railwayNumber").innerText;
    navigator.clipboard.writeText(railwayText)
        .then(function () {
            alert("📋 Number copied 163...");
        });
}




// Alert Call massage 
// card no 1 
function emergency() {
    alert("📞 Calling National Emergency 999...");
}
// card no 2 
function police() {
    alert("📞 Calling Police 999...");
}
// card no 3 
function fire() {
    alert("📞 Calling Fire Service 999...");
}
// card no 4 
function ambulance() {
    alert("📞 Calling Ambulance 1994-999999...");
}
// card no 5 
function women() {
    alert("📞 Calling Women & Child Helpline 109...");
}
// card no 6 
function corruption() {
    alert("📞 Calling Anti-Corruption 106...");
}
// card no 7 
function electricity() {
    alert("📞 Calling Electricity Outage 16216...");
}
// card no 8 
function brac() {
    alert("📞 Calling Brac 16445...");
}
// card no 9 
// function railway() {
//     alert("📞 Calling Bangladesh Railway 163...");
// }



// Call Manage 
let coin = 100;
function railway(button) {
    if (coin < 20) {
        alert("⚠️ You don't have enough coins! At least 20 coins are needed. Refresh to add coins...");
        return;
    }
    alert("📞 Calling Bangladesh Railway 163...");
    coin -= 20;
    document.getElementById('coin').innerText = coin;

    // button betels 
    const name = button.getAttribute('');
}

