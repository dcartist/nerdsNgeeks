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
    // let Questions = []
    // function QuestionMaker(question, option1, option2, option3, realAnswer) {
    //     this.question = question;
    //     this.option1 = option1;
    //     this.option2 = option2;
    //     this.option3 = option3;
    //     this.realAnswer = realAnswer;
    // }


class QuestionMaker {
    constructor(question, option1, option2, option3, realAnswer) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.realAnswer = realAnswer;
    }
}

class Animal {
    constructor(name, weirdness, bites) {
        this.name = name;
        this.weirdness = weirdness;
        this.bites = bites;
    }
    noise() {
        return console.log("Huh?")
    }
    hungry() {
        return console.log(`${this.name} say to Feed Me hoonman!!`)
    }
}

let ques1 = new QuestionMaker('Where does Spongebob Squarepants work?', 'The Krusty Krab', 'Red Lobster', 'The Chum Bucket', 'Krusty Crab')
let ques2 = new QuestionMaker()