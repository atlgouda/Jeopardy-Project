$(() => {

    var score = 0
    //Add 10 points and display correct
    $(".correctTenPoints").on('click', () => {
        score += 10
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score);
    })
    //Add 20 points and display correct
    $(".correctTwentyPoints").on('click', () => {
        score += 20
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score)
    })
    //Add 30 points
    $(".correctThirtyPoints").on('click', () => {
        score += 30
        console.log(score)
        swal({
            title: "CORRECT",
            icon: "success",
        })
        newScore(score);
    })
    //Alert for INCORRECT
    $(".incorrect").on('click', () => {
        swal({
            title: "INCORRECT",
            icon: "error",
        })
        newScore(score);
    })
    //Disable button once selected
    $(".btn-primary").on('click', (e) => {
        e.target.classList.add('disabled')
    })
    // RESET BUTTON
    $('#reset').click(function() {
        location.reload();
    });
})
// WIN GAME
function newScore(score) {
    $(".scoreboard").text("Score: " + score);
    if (score >= 100)
        swal({
            title: "YOU WIN!",
            icon: "success",
        });
        
}
