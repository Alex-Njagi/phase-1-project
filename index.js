function generator (){
    fetch (`https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple`)
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

    document.getElementById(`choicesOne`).innerHTML=`
            A. ${data.results[0].incorrect_answers[1]}
            B. ${data.results[0].incorrect_answers[0]}
            C. ${data.results[0].correct_answer}
            D. ${data.results[0].incorrect_answers[2]}
        `
    document.getElementById(`choicesSecond`).innerHTML=`
            A. ${data.results[1].incorrect_answers[2]}
            B. ${data.results[1].correct_answer}
            C. ${data.results[1].incorrect_answers[1]}
            D. ${data.results[1].incorrect_answers[0]}
        `
    document.getElementById(`choicesThird`).innerHTML=`
            A. ${data.results[2].incorrect_answers[2]}
            B. ${data.results[2].incorrect_answers[1]}
            C. ${data.results[2].correct_answer}
            D. ${data.results[2].incorrect_answers[0]}
        `
    document.getElementById(`choicesFourth`).innerHTML=`
            A. ${data.results[3].correct_answer}
            B. ${data.results[3].incorrect_answers[1]}
            C. ${data.results[3].incorrect_answers[2]}
            D. ${data.results[3].incorrect_answers[0]}
        `
    document.getElementById(`choicesFifth`).innerHTML=`
            A. ${data.results[4].incorrect_answers[1]}
            B. ${data.results[4].correct_answer}
            C. ${data.results[4].incorrect_answers[2]}
            D. ${data.results[4].incorrect_answers[0]}
        `
    document.getElementById(`choicesSixth`).innerHTML=`
            A. ${data.results[5].incorrect_answers[0]}
            B. ${data.results[5].correct_answer}
            C. ${data.results[5].incorrect_answers[1]}
            D. ${data.results[5].incorrect_answers[2]}
        `
    document.getElementById(`choicesSeventh`).innerHTML=`
            A. ${data.results[6].incorrect_answers[0]}
            B. ${data.results[6].incorrect_answers[1]}
            C. ${data.results[6].incorrect_answers[2]}
            D. ${data.results[6].correct_answer}
        `
    document.getElementById(`choicesEighth`).innerHTML=`
            A. ${data.results[7].incorrect_answers[2]}
            B. ${data.results[7].incorrect_answers[1]}
            C. ${data.results[7].incorrect_answers[0]}
            D. ${data.results[7].correct_answer}
        `
    document.getElementById(`choicesNinth`).innerHTML=`
            A. ${data.results[8].correct_answer}
            B. ${data.results[8].incorrect_answers[0]}
            C. ${data.results[8].incorrect_answers[1]}
            D. ${data.results[8].incorrect_answers[2]}
        `
    document.getElementById(`choicesTenth`).innerHTML=`
            A. ${data.results[9].incorrect_answers[0]}
            B. ${data.results[9].incorrect_answers[2]}
            C. ${data.results[9].correct_answer}
            D. ${data.results[9].incorrect_answers[1]}
        `
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
    //return ansOne, ansTwo, ansThree, ansFour, ansFive, ansSix, ansSeven, ansEight, ansNine, ansTen
    
    /*document.getElementById(`firstAnswer`).addEventListener(`input`, ()=>{

    })*/
    document.getElementById(`firstAnswerSub`).addEventListener(`click`, ()=>{
        let points = 0;
        let trialOne = document.getElementById(`firstAnswer`).value
        if (trialOne == ansOne){
            points = points + 1
        } else if (trialOne != ansOne){
            points = points
        }
    })
    })
}

document.getElementById(`button`).addEventListener(`click`, ()=>{
    generator()
});