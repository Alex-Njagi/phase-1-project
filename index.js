//This is the main function that interacts with the API and outputs its data
function generator (){
    fetch (`https://opentdb.com/api.php?amount=10&category=32&difficulty=medium&type=multiple`)
    //Fetches data from the API
    .then (res =>res.json())
    .then ((data)=>{
    //This code displays the ten questions to the user
    document.getElementById(`first`).innerHTML=`#1. ${data.results[0].question}`
    document.getElementById(`second`).innerHTML=`#2. ${data.results[1].question}`
    document.getElementById(`third`).innerHTML=`#3. ${data.results[2].question}`
    document.getElementById(`fourth`).innerHTML=`#4. ${data.results[3].question}`
    document.getElementById(`fifth`).innerHTML=`#5. ${data.results[4].question}`
    document.getElementById(`sixth`).innerHTML=`#6. ${data.results[5].question}`
    document.getElementById(`seventh`).innerHTML=`#7. ${data.results[6].question}`
    document.getElementById(`eighth`).innerHTML=`#8. ${data.results[7].question}`
    document.getElementById(`ninth`).innerHTML=`#9. ${data.results[8].question}`
    document.getElementById(`tenth`).innerHTML=`#10. ${data.results[9].question}`
    
    //Displays the choices for the first question
    document.getElementById(`choicesOne`).innerHTML=`
            A. ${data.results[0].incorrect_answers[1]}
            B. ${data.results[0].incorrect_answers[0]}
            C. ${data.results[0].correct_answer}
            D. ${data.results[0].incorrect_answers[2]}
        `
    //Displays the choices for the second question
    document.getElementById(`choicesSecond`).innerHTML=`
            A. ${data.results[1].incorrect_answers[2]}
            B. ${data.results[1].correct_answer}
            C. ${data.results[1].incorrect_answers[1]}
            D. ${data.results[1].incorrect_answers[0]}
        `
    //Displays the choices for the third question
    document.getElementById(`choicesThird`).innerHTML=`
            A. ${data.results[2].incorrect_answers[2]}
            B. ${data.results[2].incorrect_answers[1]}
            C. ${data.results[2].correct_answer}
            D. ${data.results[2].incorrect_answers[0]}
        `
    //Displays the choices for the fourth question
    document.getElementById(`choicesFourth`).innerHTML=`
            A. ${data.results[3].correct_answer}
            B. ${data.results[3].incorrect_answers[1]}
            C. ${data.results[3].incorrect_answers[2]}
            D. ${data.results[3].incorrect_answers[0]}
        `
    //Displays the choices for the fifth question
    document.getElementById(`choicesFifth`).innerHTML=`
            A. ${data.results[4].incorrect_answers[1]}
            B. ${data.results[4].correct_answer}
            C. ${data.results[4].incorrect_answers[2]}
            D. ${data.results[4].incorrect_answers[0]}
        `
    //Displays the choices for the sixth question
    document.getElementById(`choicesSixth`).innerHTML=`
            A. ${data.results[5].incorrect_answers[0]}
            B. ${data.results[5].correct_answer}
            C. ${data.results[5].incorrect_answers[1]}
            D. ${data.results[5].incorrect_answers[2]}
        `
    //Displays the choices for the seventh question
    document.getElementById(`choicesSeventh`).innerHTML=`
            A. ${data.results[6].incorrect_answers[0]}
            B. ${data.results[6].incorrect_answers[1]}
            C. ${data.results[6].incorrect_answers[2]}
            D. ${data.results[6].correct_answer}
        `
    //Displays the choices for the eighth question
    document.getElementById(`choicesEighth`).innerHTML=`
            A. ${data.results[7].incorrect_answers[2]}
            B. ${data.results[7].incorrect_answers[1]}
            C. ${data.results[7].incorrect_answers[0]}
            D. ${data.results[7].correct_answer}
        `
    //Displays the choices for the ninth question
    document.getElementById(`choicesNinth`).innerHTML=`
            A. ${data.results[8].correct_answer}
            B. ${data.results[8].incorrect_answers[0]}
            C. ${data.results[8].incorrect_answers[1]}
            D. ${data.results[8].incorrect_answers[2]}
        `
    //Displays the choices for the tenth question
    document.getElementById(`choicesTenth`).innerHTML=`
            A. ${data.results[9].incorrect_answers[0]}
            B. ${data.results[9].incorrect_answers[2]}
            C. ${data.results[9].correct_answer}
            D. ${data.results[9].incorrect_answers[1]}
        `
    //This block of code handles the storing of correct answers in variables
    let ansOne = (data.results[0].correct_answer);
    let ansTwo = (data.results[1].correct_answer);
    let ansThree = (data.results[2].correct_answer);
    let ansFour = (data.results[3].correct_answer);
    let ansFive = (data.results[4].correct_answer);
    let ansSix = (data.results[5].correct_answer);
    let ansSeven = (data.results[6].correct_answer);
    let ansEight = (data.results[7].correct_answer);
    let ansNine = (data.results[8].correct_answer);
    let ansTen = (data.results[9].correct_answer);

    let points = 0;             //Sets the score to zero by default

    //This event handles submission of the first answer and calculation of points
    document.getElementById(`firstAnswerSub`).addEventListener(`click`, (event)=>{
        let trialOne = document.getElementById(`firstAnswer`).value
        //Links the data to a textbox
        if (trialOne == ansOne){
            points = points + 1
        } else if (trialOne != ansOne){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the second answer and calculation of points
    document.getElementById(`secondAnswerSub`).addEventListener(`click`, (event)=>{
        let trialTwo = document.getElementById(`secondAnswer`).value
        //Links the data to a textbox
        if (trialTwo == ansTwo){
            points = points + 1
        } else if (trialTwo != ansTwo){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the third answer and calculation of points
    document.getElementById(`thirdAnswerSub`).addEventListener(`click`, (event)=>{
        let trialThree = document.getElementById(`thirdAnswer`).value
        //Links the data to a textbox
        if (trialThree == ansThree){
            points = points + 1
        } else if (trialThree != ansThree){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the fourth answer and calculation of points
    document.getElementById(`fourthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialFourth = document.getElementById(`fourthAnswer`).value
        //Links the data to a textbox
        if (trialFourth == ansFour){
            points = points + 1
        } else if (trialFourth != ansFour){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the fifth answer and calculation of points
    document.getElementById(`fifthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialFifth = document.getElementById(`fifthAnswer`).value
        //Links the data to a textbox
        if (trialFifth == ansFive){
            points = points + 1
        } else if (trialFifth != ansFive){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the sixth answer and calculation of points
    document.getElementById(`sixthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialSixth = document.getElementById(`sixthAnswer`).value
        //Links the data to a textbox
        if (trialSixth == ansFive){
            points = points + 1
        } else if (trialSixth != ansSix){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the seventh answer and calculation of points
    document.getElementById(`seventhAnswerSub`).addEventListener(`click`, (event)=>{
        let trialSeventh = document.getElementById(`seventhAnswer`).value
        //Links the data to a textbox
        if (trialSeventh == ansSeven){
            points = points + 1
        } else if (trialSeventh != ansSeven){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the eighth answer and calculation of points
    document.getElementById(`eighthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialEighth = document.getElementById(`eighthAnswer`).value
        //Links the data to a textbox
        if (trialEighth == ansEight){
            points = points + 1
        } else if (trialEighth != ansEight){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the ninth answer and calculation of points
    document.getElementById(`ninthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialNinth = document.getElementById(`ninthAnswer`).value
        //Links the data to a textbox
        if (trialNinth == ansNine){
            points = points + 1
        } else if (trialNinth != ansNine){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles submission of the tenth answer and calculation of points
    document.getElementById(`tenthAnswerSub`).addEventListener(`click`, (event)=>{
        let trialTenth = document.getElementById(`tenthAnswer`).value
        //Links the data to a textbox
        if (trialTenth == ansTen){
            points = points + 1
        } else if (trialTenth != ansTen){
            points = points
        } //Checks the correctness of the answer
        event.target.style[`display`]=`none`;   //Makes the button disappear
        console.log(points);                    //Displays the points on the console
    })
    //This event handles the outputting of results
    document.getElementById(`resultsButton`).addEventListener(`click`, (event)=>{
        //This changes the contents of the button to display the results' message
        event.target.value=`Congrats! You scored a total of ${points} points!! :D`
    })
    })
}
//This event invokes the previous function and runs the code
document.getElementById(`button`).addEventListener(`click`, ()=>{
    generator()
});