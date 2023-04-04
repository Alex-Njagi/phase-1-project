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

        document.write(oneS);
        document.write(twoS);
        document.write(threeS);
        document.write(fourS);
        document.write(fiveS);
        document.write(sixS);
        document.write(sevenS);
        document.write(eightS);
        document.write(nineS);
        document.write(tenS);
})
}
generator()



