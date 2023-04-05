function generator (){
fetch (`https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple`)
.then (res =>res.json())
.then ((data)=>{
        let oneS = (data.results[0].question);                  //Variable to hold the first question
        let twoS = (data.results[1].question);                  //Variable to hold the second question
        let threeS = (data.results[2].question);                //Variable to hold the third question
        let fourS = (data.results[3].question);                 //Variable to hold the fourth question
        let fiveS = (data.results[4].question);                 //Variable to hold the fifth question
        let sixS = (data.results[5].question);                  //Variable to hold the sixth question
        let sevenS = (data.results[6].question);                //Variable to hold the seventh question
        let eightS = (data.results[7].question);                //Variable to hold the eighth question
        let nineS = (data.results[8].question);                 //Variable to hold the ninth question
        let tenS = (data.results[9].question);                  //Variable to hold the tenth question
    oneS
    
    document.getElementById(`first`).innerHTML=`#1. ${oneS}`
    document.getElementById(`second`).innerHTML=`#2. ${twoS}`
    document.getElementById(`third`).innerHTML=`#3. ${threeS}`
    document.getElementById(`fourth`).innerHTML=`#4. ${fourS}`
    document.getElementById(`fifth`).innerHTML=`#5. ${fiveS}`
    document.getElementById(`sixth`).innerHTML=`#6. ${sixS}`
    document.getElementById(`seventh`).innerHTML=`#7. ${sevenS}`
    document.getElementById(`eighth`).innerHTML=`#8. ${eightS}`
    document.getElementById(`ninth`).innerHTML=`#9. ${nineS}`
    document.getElementById(`tenth`).innerHTML=`#10. ${tenS}`
})
}
generator()
