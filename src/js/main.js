console.log("this is a test")
console.log("another")
console.log('abc')
let questNumber = document.querySelector('#questNumber')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
questNumber.innerHTML = "This is another test"
answer1.innerHTML = "testing #1"
answer2.innerHTML = "testing #6"

class Questions {
    constructor(question, option1, option2, option3, realAnswer) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.realAnswer = realAnswer;
    }
}