// Heart counter 

let heartCount = 0;
function increaseHeart() {
    heartCount++;
    document.getElementById('heratCounter').innerText = heartCount;
}






// Copy container start 

// copy counter 
let copyCount = 0;
function increaseCopy() {
    copyCount++;
    document.getElementById('copyCounter').innerText = copyCount;
}

// copy alert massage & service number copy 
const copyBtn = document.getElementsByClassName('copy-btn');
for (const copy of copyBtn) {
    copy.addEventListener('click', function () {

        const copyNumber = copy.parentNode.parentNode.children[3].innerText;
        navigator.clipboard.writeText(copyNumber)
        alert(`📋 Number copied  ${copyNumber}...`)
    })
}
// Copy container end 



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

            // local time zoon
            const time = new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,

            }
            );

            const newDiv = document.createElement('div');
            const historyContainer = document.getElementById('history-container');

            newDiv.innerHTML = `

            <div class="bg-gray-100 h-16 px-3.5 rounded-lg flex justify-between items-center text-[0.8rem] ">
                     <div>
                            <p class="leading-7.5 font-bold font-[Noto_Serif_Bengali]">${cartHading}</p>
                            <p>${serviceNumber}</p>
                     </div>
                     <h1>${time}</h1>

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




