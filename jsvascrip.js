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
    document.getElementById('copy').innerText = copyCount;
}


// Alert massage 
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

