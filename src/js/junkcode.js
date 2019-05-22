/* 
activeQuestion.innerHTML = checkedInfo.question
questNumber.innerHTML = `${questCounter + 1}`
answer1.innerHTML = questionsAsked[questCounter].option1
answer2.innerHTML = questionsAsked[questCounter].option2
answer3.innerHTML = questionsAsked[questCounter].option3
quizInput[0].value = questionsAsked[questCounter].option1
quizInput[1].value = questionsAsked[questCounter].option2
quizInput[2].value = questionsAsked[questCounter].option3
 */



/* 
                                let checkedInfo = questionsAsked[questCounter]
                                activeQuestion.innerHTML = checkedInfo.question
                                questNumber.innerHTML = `${questCounter + 1}`
                                answer1.innerHTML = questionsAsked[questCounter].option1
                                answer2.innerHTML = questionsAsked[questCounter].option2
                                answer3.innerHTML = questionsAsked[questCounter].option3
                                quizInput[0].value = questionsAsked[questCounter].option1
                                quizInput[1].value = questionsAsked[questCounter].option2
                                quizInput[2].value = questionsAsked[questCounter].option3 */

// displayQuiz(questCounter)





// console.log(mainQList[10].option1)
// console.log(mainQList[10].question)
// answer1.innerHTML = "testing #1"
// answer2.innerHTML = "testing #6"



answer1.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(answer1.innerHTML)
    userChoice = answer1.innerHTML
    console.log(userChoice)
    return userChoice
})

answer2.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(answer2.innerHTML)
    userChoice = answer2.innerHTML
    console.log(userChoice)
    return userChoice
})
answer3.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(answer3.innerHTML)
    userChoice = answer3.innerHTML
    console.log(userChoice)
    return userChoice
})


for (i = 0; i < 3; i++) {
    if (quizInput[i].checked == answer) {
        let checkedInfo = questionsAsked[questCounter]
        console.log(`The option ${quizInput[i].value} has been checked off `)
        questCounter += 1 // displayQuiz(questCounter)
        console.log(questCounter)
        displayQuiz1(questCounter)
            // return questCounter
    } else {
        console.log('Wrong answer')
        questCounter += 1
        console.log(questCounter)
        displayQuiz1(questCounter)
            // return questCounter
    }
}




/* 
quizForm.addEventListener("submit", function(evt, questCounter) {
    evt.preventDefault();
    console.log(questionsAsked[questCounter])
    let answer = questionsAsked[questCounter].realAnswer
    console.log(questionsAsked[questCounter].realAnswer)
    if (quizTrigger) {
        for (i = 0; i < 3; i++) {
            if (quizInput[i].checked == answer) {
                let checkedInfo = questionsAsked[questCounter]
                console.log(`The option ${quizInput[i].value} has been checked off `)
                questCounter++ // displayQuiz(questCounter)
            } else {
                console.log('Wrong answer')
                console.log(questCounter)
            }
        }

    }
    return questCounter++

})




console.log(questionsAsked)
console.log(quizInput) */





// displayQuiz(questCounter)
// activeQuestion.innerHTML = newQuestion.question
// questNumber.innerHTML = `${questCounter + 1}`
// answer1.innerHTML = newQuestion.option1
// answer2.innerHTML = newQuestion.option2
// answer3.innerHTML = newQuestion.option3
// quizInput[0].value = newQuestion.option1
// quizInput[1].value = newQuestion.option2
// quizInput[2].value = newQuestion.option3
// return [questionsAsked, questCounter]




// Murphy's law


console.log(quizInput)
console.log(newQuestion)
console.log(questionsAsked[questCounter].realAnswer)
    //checking to see if the selected button is correct or not
if (quizInput[0].checked && quizInput[0].value == questionsAsked[questCounter].realAnswer) {
    console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)
    questCounter += 1 // adds to the quiz counter
    console.log(questCounter) // testing to see if counter works
        // return questCounter
} else if (quizInput[1].checked && quizInput[1].value == questionsAsked[questCounter].realAnswer) {
    console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)
    questCounter += 1 // adds to the quiz counter
    console.log(questCounter) // testing to see if counter works

    // return questCounter
} else if (quizInput[2].checked && quizInput[2].value == questionsAsked[questCounter].realAnswer) {
    console.log(`${questionsAsked[questCounter].realAnswer} value 3 is stated`)
    questCounter += 1 // adds to the quiz counter
    console.log(questCounter)   // testing to see if counter works
    return questCounter
} else {
    questCounter += 1

}
// newQuestion = questionsAsked[questCounter]
console.log(newQuestion)
console.log(newQuestion.question)
    // clearTheQuiz()
    // quizForm.reset()
clearTheQuiz()
return questCounter