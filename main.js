console.log("hello world")



$(() => {
//     $(".scoreboard").append("<p>").append('User One').append("<p>").append("User Two")
//     $("#categoryOnePointsTen").click(function() {
//         console.log("10 point question")
// })
//     $("#categoryOnePointsTwenty").click(function() {
//         console.log("20 point question")
// }) 
//     $("#categoryOnePointsThirty").click(function() {
//         console.log("30 point question")
// })
//     $("#categoryOnePointsForty").click(function() {
//         console.log("40 point question")
// })
//     $("#categoryOnePointsFifty").click(function() {
//         console.log("50 point question")
// })


var score = 0
//Add 10 points and display correct
    $(".correctTenPoints").on('click', () => {
        score+=10
        console.log(score)
        swal("CORRECT!")
       
       
        newScore(score);
        
    
     
    })
//Add 20 points and display correct
$(".correctTwentyPoints").on('click', () => {
    score+=20
    console.log(score)
    swal("CORRECT!")

    newScore(score)


})

//Add 30 points
$(".correctThirtyPoints").on('click', () => {
    score+=30
    console.log(score)
    swal("CORRECT!")

    newScore(score);

})

//Alert for INCORRECT
    $(".incorrect").on('click', () => {
        swal("INCORRECT!")
        newScore(score);

    })
    
    //Disable button once selected
    $(".btn-primary").on('click', (e) => {
        e.target.classList.add('disabled')
    })



    })
  


function newScore(score) {
    $(".scoreboard").text("Score: " + score);
    if (score>=100)
    swal("YOU WIN")

    }




// $(".correctTenPoints").click(function(){
//         console.log("add 10 points")
// })
// })


   
    




// })
// if loop for displaying correct/incorrect answer
//Use JSON to display question in array; selections; 

// //tenPointCategory
// Question: ""
// Answer: {'answer1' Points: 10, correct: true}
