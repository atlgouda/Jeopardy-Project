console.log("hello world")

$(() => {
    $(".scoreboard").append("<p>").append('User One').append("<p>").append("User Two")
    $("#categoryOnePointsTen").click(function() {
        console.log("10 point question")
})
    $("#categoryOnePointsTwenty").click(function() {
        console.log("20 point question")
}) 
    $("#categoryOnePointsThirty").click(function() {
        console.log("30 point question")
})
    $("#categoryOnePointsForty").click(function() {
        console.log("40 point question")
})
    $("#categoryOnePointsFifty").click(function() {
        console.log("50 point question")
})
})