fetch (`https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple`)
.then (res =>res.json())
.then ((data)=>{
        //console.log(data);
        //const all = (data.results[0].question)
        console.log(data.results[0].question);
        console.log(data.results[1].question);
        console.log(data.results[2].question);
        console.log(data.results[3].question);
        console.log(data.results[4].question);
        console.log(data.results[5].question);




})
/*
.then (data => console.log(data))*/



