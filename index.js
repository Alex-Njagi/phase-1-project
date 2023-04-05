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
            ${data.results[0].incorrect_answers[1]},
            ${data.results[0].incorrect_answers[0]},
            ${data.results[0].correct_answer},
            ${data.results[0].incorrect_answers[2]},
        `
    document.getElementById(`choicesSecond`).innerHTML=`
            ${data.results[1].incorrect_answers[2]},
            ${data.results[1].correct_answer},
            ${data.results[1].incorrect_answers[1]},
            ${data.results[1].incorrect_answers[0]},
        `
    document.getElementById(`choicesThird`).innerHTML=`
            ${data.results[2].incorrect_answers[2]},
            ${data.results[2].incorrect_answers[1]},
            ${data.results[2].correct_answer},
            ${data.results[2].incorrect_answers[0]},
        `
    document.getElementById(`choicesFourth`).innerHTML=`
            ${data.results[3].correct_answer},
            ${data.results[3].incorrect_answers[1]},
            ${data.results[3].incorrect_answers[2]},
            ${data.results[3].incorrect_answers[0]},
        `
    document.getElementById(`choicesFifth`).innerHTML=`
            ${data.results[4].incorrect_answers[1]},
            ${data.results[4].correct_answer},
            ${data.results[4].incorrect_answers[2]},
            ${data.results[4].incorrect_answers[0]},
        `
    document.getElementById(`choicesSixth`).innerHTML=`
            ${data.results[5].incorrect_answers[0]},
            ${data.results[5].correct_answer},
            ${data.results[5].incorrect_answers[1]},
            ${data.results[5].incorrect_answers[2]},
        `
    document.getElementById(`choicesSeventh`).innerHTML=`
            ${data.results[6].incorrect_answers[0]},
            ${data.results[6].incorrect_answers[1]},
            ${data.results[6].incorrect_answers[2]},
            ${data.results[6].correct_answer},
        `
    document.getElementById(`choicesEighth`).innerHTML=`
            ${data.results[7].incorrect_answers[2]},
            ${data.results[7].incorrect_answers[1]},
            ${data.results[7].incorrect_answers[0]},
            ${data.results[7].correct_answer},
        `
    document.getElementById(`choicesNinth`).innerHTML=`
            ${data.results[8].correct_answer},
            ${data.results[8].incorrect_answers[0]},
            ${data.results[8].incorrect_answers[1]},
            ${data.results[8].incorrect_answers[2]},
        `
    document.getElementById(`choicesTenth`).innerHTML=`
            ${data.results[9].incorrect_answers[0]},
            ${data.results[9].incorrect_answers[2]},
            ${data.results[9].correct_answer},
            ${data.results[9].incorrect_answers[1]},
        `
})
}
generator()
//document.getElementById(`startButton`).addEventListener(`click`, generator())

