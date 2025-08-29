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





//  Event listener call btn 

const callBtn = document.getElementsByClassName('call-btn');
for (const call of callBtn) {
    call.addEventListener('click', function () {

        let coinCount = parseInt(document.getElementById('coin-count').innerText);

        if (coinCount >= 20) {

            document.getElementById('coin-count')
                .innerText = coinCount - 20;

            // cartHading is add dynamic history-container 
            const cartHading = call.parentNode.parentNode.children[1].innerText;

            const serviceName = call.parentNode.parentNode.children[2].innerText;
            const serviceNumber = call.parentNode.parentNode.children[3].innerText;

            alert(`📞 Calling ${serviceName}  ${serviceNumber}...`)

            // dynamic div add start
            const date = new Date().toLocaleTimeString();
            const newDiv = document.createElement('div');
            const historyContainer = document.getElementById('history-container');

            newDiv.innerHTML = `

            <div class="bg-gray-100 h-16 px-3.5 rounded-lg flex justify-between items-center text-[0.8rem] ">
                     <div>
                            <p class="leading-7.5 font-bold font-[Noto_Serif_Bengali]">${cartHading}</p>
                            <p>${serviceNumber}</p>
                     </div>
                     <h1>${date}</h1>

              </div> `

            historyContainer.append(newDiv);
            // dynamic div add end



        } else {
            alert("⚠️ You don't have enough coins! At least 20 coins are needed. Refresh to add coins...")
        }
    })
}




// clear history section 

const clearBtn = document.getElementById('clear-history-btn');
clearBtn.addEventListener('click', function () {

    const domElement = document.getElementById('history-container')
        .innerHTML = '';
})














/* <div class="cart-div flex justify-between items-center bg-gray-100 p-2 rounded-lg mt-5"></div>  */

// // Just 1 item ok
//  let coin = 100;
// function makeCall(serviceName, number) {
//     if (coin < 20) {
//         alert("⚠️ You don't have enough coins! At least 20 coins are needed. Refresh to add coins...");
//         return;
//     }

//     alert('📞 Calling serviceName{number}...');
//     coin -= 20;
//     document.getElementById('coin').innerText = coin;
// }




