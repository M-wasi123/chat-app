let userMessage = document.getElementById('user-message')
let userInput = document.getElementById('user-input')
let userInput2 = document.getElementById('user-input2')
let userInput3 = document.getElementById('user-input3')
let sendBotton = document.getElementById('send-btn')
let sendBotton2 = document.getElementById('send-btn2')
let sendBotton3 = document.getElementById('send-btn3')
let chatBox = document.getElementById('chat-box')


const gfsObjectArr = {
        id:"auto-answer",
        message:`<h2>Welcome to GFS BDR Chat </h2> Our company is provided residential plots and commercial shop on 5 year easy monthly installment. <br> Press 1: For residential <br> Press 2: For commercial`,

        residential:`<h3 style='font-family:Arial'>Residential Plots</h3> <p>Housing rates block wise and additional charges. <br></p> Press 1: For block 1 <br> Press 2: For block 5 <br> Press 3: For block 6 <br> Press 4: For bolan block <br> Press 5: For additional charges detail`, 
    

        block1:`<h4>Block 1</h4> 80 SQ Yds. 550,000 down payment Total cost 23lac <br> 120 SQ Yds. 6lac down payment Total cost 29lac <br><a href="https://wa.me/923111484053">For more details</a>`,

    
        block5:`<h4>Block 5</h4> 80 SQ Yds. 5lac down payment Total cost 23lac <br> 120 SQ Yds. 5lac down payment Total cost 28lac<br><a href="https://wa.me/923111484053">For more details</a>`,

    
            block6:`<h4>Block 6</h4> 80 SQ Yds. 350,000 down payment Total cost 21lac <br> 120 SQ Yds. 4lac down payment Total cost 27lac<br><a href="https://wa.me/923111484053">For more details</a>`,

    
           bolanBlock:`<h4>Bolan Block</h4> 80 SQ Yds. 350000 down payment Total cost 21lac <br> 120 SQ Yds. 4lac down payment Total cost 27lac <br> Executive Bolan Corner 100 SQ Yds.<br> For side corner plots.<br> 350000 down payment Total cost 26 lac<br><a href="https://wa.me/923111484053">For more details</a>`,

    
            additional:`<h4>Additional Charges</h4> Additional charges for each plot will be added to the down payment.<br> Executive corner 1 lac <br> West open 1 lac <br> Road facing 1 lac <br> Park facing<br><a href="https://wa.me/923111484053">For more details</a>`,
    
            commercial:`<h4>Commercial Area Detail</h4> Press 1: For Jodia Bazar <br> Press 2: For Saddar Mobile Mall <br> Press 3: For Mega Bazar <br> Press 4: For Zainab Market <br> Press 5: For North Town Mall <br>`,
    
            jodiaBazar:`<h4>Jodia Bazar</h4> <br>
        <h5>Shop 50 Sq.Ft:</h5>
        Booking: 2lac<br>Allocation: 50,000 <br> Confirmation: 50,000 <br>Monthly Installment: 5,000 <br> Half Yearly Installment: 20,000<br> Possession: 100,000<br> Total Coast: 900,000 <br><br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Shop 55 Sq.Ft:</h5>
        Booking: 2lac<br>Allocation: 50,000 <br> Confirmation: 50,000 <br>Monthly Installment: 5,000 <br> Half Yearly Installment: 29,000<br> Possession: 100,000<br> Total Coast: 990,000 <br><br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Shop 80 Sq.Ft:</h5>
        Booking: 2lac<br>Allocation: 50,000 <br> Confirmation: 50,000 <br>Monthly Installment: 5,000 <br> Half Yearly Installment: 38,000<br> Possession: 100,000<br> Total Coast: 1,080,000<br><a href="https://wa.me/923111484053">For more details</a>`,
    
        saddarMobile:`<h4>Saddar Mobile Mall</h4> <br> 
        <h5>Shop 40 Sq.Ft:</h5>
        Booking: 2lac<br>Allocation: 150,000 <br> Confirmation: 150,000 <br>Monthly Installment: 5,000 <br> Yearly Installment: 24,000<br> Possession: 100,000<br> Total Coast: 1,020,000 <br><br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Shop 50 Sq.Ft:</h5>
        Booking: 225,000<br>Allocation: 150,000 <br> Confirmation: 150,000 <br>Monthly Installment: 5,000 <br> Yearly Installment: 45,000<br> Possession: 150,000<br> Total Coast: 1,200,000 <br><br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Shop 80 Sq.Ft:</h5>
        Booking: 250,000<br>Allocation: 150,000 <br> Confirmation: 150,000 <br>Monthly Installment: 10,000 <br> Yearly Installment: 80,000<br> Possession: 140,000<br> Total Coast: 1,690,000<br><a href="https://wa.me/923111484053">For more details</a>`,
    
       megaBazar:`<h4>Mega Bazar</h4> <br>
         <h5>Ground Floor 50 Sq.Ft:</h5>
         Booking: 2lac<br>Monthly Installment: 12,000 <br> Half Yearly Installment: 55,000<br> Possession: 130,000<br> Total Coast: 16Lac <br><br><a href="https://wa.me/923111484053">For more details</a><br>
         <h5>Ground Floor 70 Sq.Ft:</h5>
         Booking: 2lac<br>Allocation: 50,000 <br> Confirmation: 50,000 <br>Monthly Installment: 18,000 <br> Half Yearly Installment: 70,000<br> Possession: 160,000<br> Total Coast: 2,240,000<br><a href="https://wa.me/923111484053">For more details</a>`,
    
         
        ZainabMarket:`<h4>Zainab Market</h4> <br> 
        <h5>Upper Ground:</h5>
40 Sq. Ft Shop: 12lac <br>
50 Sq. Ft Shop: 15lac <br>
80 Sq.Ft Shop: 24 lac <br>
<br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Lower Ground:</h5>
        40 Sq. Ft Shop: 440,000 <br>
        50 Sq. Ft Shop: 550,000 <br>
        80 Sq.Ft Shop:  880,000 <br>
        <br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>1st Floor:</h5>
        40 Sq. Ft Shop: 680,000 <br>
        50 Sq. Ft Shop: 850,000 <br>
        80 Sq.Ft Shop: 1,360,000 <br>
        <br><a href="https://wa.me/923111484053">For more details</a><>br
        <h5>2nd Floor:</h5>
        40 Sq. Ft Shop: 640,000 <br>
        50 Sq. Ft Shop: 800,000 <br>
        80 Sq.Ft Shop:  1,280,000 <br>
        <br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>3rd Floor:</h5>
        40 Sq. Ft Shop: 560,000 <br>        
        50 Sq. Ft Shop: 700,000 <br>
        80 Sq.Ft Shop: 1,120,000 <br><br><a href="https://wa.me/923111484053">For more details</a>`,
    
        northTown:`<h4>North Town Mall</h4> <br>
        <h5>Upper Ground:</h5>
40 Sq. Ft Shop: 1,440,000 <br>
50 Sq. Ft Shop: 18lac <br>
80 Sq.Ft Shop: 2,880,000 <br>
<br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>Lower Ground:</h5>
        40 Sq. Ft Shop: 8lac <br>
        50 Sq. Ft Shop: 10lac <br>
        80 Sq.Ft Shop:  16lac <br>
        <br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>1st Floor:</h5>
        40 Sq. Ft Shop: 8lac <br>
        50 Sq. Ft Shop: 10lac <br>
        80 Sq.Ft Shop:  16lac <br>
        <br><a href="https://wa.me/923111484053">For more details</a><br>
        <h5>2nd Floor:</h5>
        40 Sq. Ft Shop: 720,000 <br>
        50 Sq. Ft Shop: 9lac <br>
        80 Sq.Ft Shop:  1,440,000 <br><br><a href="https://wa.me/923111484053">For more details</a>`
    


 }
 userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`

 userInput.addEventListener('keydown',function () {
    sendBotton.style.display = 'block' 
})
userInput.addEventListener('keyup',function () {
if (userInput.value === '') {
    sendBotton.style.display = 'block'
}
})
userInput2.addEventListener('keydown',function () {
  sendBotton2.style.display = 'block' 
})
userInput2.addEventListener('keyup',function () {
if (userInput2.value === '') {
  sendBotton2.style.display = 'block'
}
})
userInput3.addEventListener('keydown',function () {
  sendBotton3.style.display = 'block' 
})
userInput3.addEventListener('keyup',function () {
if (userInput3.value === '') {
  sendBotton3.style.display = 'block'
}
})
sendBotton.addEventListener('click',function () {
    userMessage.innerHTML +=`<li class="user">${userInput.value}</li>`
      if (userInput.value == 1) {
      userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.residential}</li>`
      userInput.value = ''
        userInput2.style.display = 'block'
        userInput.style.display = 'none'
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput.value == 2) {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.commercial}</li>`
      userInput.value = ''
        userInput3.style.display = 'block'
        userInput2.style.display = 'none'
        userInput.style.display = 'none'
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput.value > 2 ) {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput.value !== '') {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
})
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('send-btn');
        userMessage.innerHTML +=`<li class="user">${userInput.value}</li>`
          if (userInput.value == 1) {
          userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.residential}</li>`
          userInput.value = ''
            userInput2.style.display = 'block'
            userInput.style.display = 'none'
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
          }
          if (userInput.value == 2) {
            userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.commercial}</li>`
          userInput.value = ''
            userInput3.style.display = 'block'
            userInput2.style.display = 'none'
            userInput.style.display = 'none'
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
          }
          if (userInput.value > 2 ) {
            userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
            userInput.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
          }
          if (userInput.value !== '') {
            userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
            userInput.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
          }
          
        
        
        
    }
}
document.addEventListener('keydown',handleEnterKey)
sendBotton2.addEventListener('click',function () {
    userMessage.innerHTML +=`<li class="user">${userInput2.value}</li>`
    if (userInput2.value == 1) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block1}</li>`
      userInput.style.display = 'block'
          userInput2.style.display = 'none'
          userInput2.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput2.value == 2) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block5}</li>`
      userInput.style.display = 'block'
          userInput2.style.display = 'none'
          userInput2.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput2.value == 3) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block6}</li>`
      userInput.style.display = 'block'
          userInput2.style.display = 'none'
          userInput2.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput2.value == 4) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.bolanBlock}</li>`
      userInput.style.display = 'block'
          userInput2.style.display = 'none'
          userInput2.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput2.value == 5) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.additional}</li>`
      userInput.style.display = 'block'
          userInput2.style.display = 'none'
          userInput2.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput2.value > 5 ) {
      userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
      userInput2.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
    if (userInput2.value !== '') {
      userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
      userInput2.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
})
function handlEnterKey(even) {
  if (even.key === 'Enter') {
      even.preventDefault();
      document.getElementById('send-btn2');
      userMessage.innerHTML +=`<li class="user">${userInput2.value}</li>`
      if (userInput2.value == 1) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block1}</li>`
        userInput.style.display = 'block'
            userInput2.style.display = 'none'
            userInput2.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput2.value == 2) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block5}</li>`
        userInput.style.display = 'block'
            userInput2.style.display = 'none'
            userInput2.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput2.value == 3) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.block6}</li>`
        userInput.style.display = 'block'
            userInput2.style.display = 'none'
            userInput2.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput2.value == 4) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.bolanBlock}</li>`
        userInput.style.display = 'block'
            userInput2.style.display = 'none'
            userInput2.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput2.value == 5) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.additional}</li>`
        userInput.style.display = 'block'
            userInput2.style.display = 'none'
            userInput2.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput2.value > 5 ) {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput2.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput2.value !== '') {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput2.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
    }
  }
document.addEventListener('keydown',handlEnterKey)
sendBotton3.addEventListener('click',function () {
    userMessage.innerHTML +=`<li class="user">${userInput3.value}</li>`
    if (userInput3.value == 1) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.jodiaBazar}</li>`
      userInput.style.display = 'block'
          userInput3.style.display = 'none'
          userInput3.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput3.value == 2) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.saddarMobile}</li>`
      userInput.style.display = 'block'
      userInput3.style.display = 'none'
      userInput3.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
    if (userInput3.value == 3) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.megaBazar}</li>`
      userInput.style.display = 'block'
          userInput3.style.display = 'none'
          userInput3.value = ''
          sendBotton.style.display = 'none'
          sendBotton2.style.display = 'none'
          sendBotton3.style.display = 'none'
    }
    if (userInput3.value == 4) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.ZainabMarket}</li>`
      userInput.style.display = 'block'
      userInput3.style.display = 'none'
      userInput3.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
    if (userInput3.value == 5) {
      userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.northTown}</li>`
      userInput.style.display = 'block'
      userInput3.style.display = 'none'
      userInput3.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
    if (userInput3.value > 5 ) {
      userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
      userInput3.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
    if (userInput3.value !== '') {
      userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
      userInput3.value = ''
      sendBotton.style.display = 'none'
      sendBotton2.style.display = 'none'
      sendBotton3.style.display = 'none'
    }
})
function handEnterKey(eve) {
  if (eve.key === 'Enter') {
      eve.preventDefault();
      document.getElementById('send-btn3');
      userMessage.innerHTML +=`<li class="user">${userInput3.value}</li>`
      if (userInput3.value == 1) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.jodiaBazar}</li>`
        userInput.style.display = 'block'
            userInput3.style.display = 'none'
            userInput3.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput3.value == 2) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.saddarMobile}</li>`
        userInput.style.display = 'block'
        userInput3.style.display = 'none'
        userInput3.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput3.value == 3) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.megaBazar}</li>`
        userInput.style.display = 'block'
            userInput3.style.display = 'none'
            userInput3.value = ''
            sendBotton.style.display = 'none'
            sendBotton2.style.display = 'none'
            sendBotton3.style.display = 'none'
      }
      if (userInput3.value == 4) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.ZainabMarket}</li>`
        userInput.style.display = 'block'
        userInput3.style.display = 'none'
        userInput3.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput3.value == 5) {
        userMessage.innerHTML +=`<li class="${gfsObjectArr.id}">${gfsObjectArr.northTown}</li>`
        userInput.style.display = 'block'
        userInput3.style.display = 'none'
        userInput3.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput3.value > 5 ) {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput3.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
      if (userInput3.value !== '') {
        userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
        userInput3.value = ''
        sendBotton.style.display = 'none'
        sendBotton2.style.display = 'none'
        sendBotton3.style.display = 'none'
      }
    }
  }
document.addEventListener('keydown',handEnterKey)
function residential() {
  if (userInput.value == 1) {
    userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.residential}</li>`
    userInput.value = ''
  }
}
function commercial() {
  if (userInput.value == 2) {
    userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.commercial}</li>`
    userInput.value = ''
  }
}
// function chose() {

//    if (userInput.value == 1) {
//     if (userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.residential}</li>`) {
//        userInput.value
//     }

//    }else if (userInput.value == 2) {
//     userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.commercial}</li>` 
//   }
//    else{
//     userMessage.innerHTML += `<li class='${gfsObjectArr.id}'>${gfsObjectArr.message}</li>`
//    }
// }


