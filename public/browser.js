document.addEventListener("click", function(e){
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter your desire new text")
        axios.post('/update-item', {text: userInput}).then(function(){
            // do something intersiting here inthe next video
        }).catch(function(){
            console.log("Please try again later.")
        })
    }
})