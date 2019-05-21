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
let ques2 = new QuestionMaker('Who was the captain of the Enterprise in the pilot episode of Star Trek?', 'Captain Kirk', 'Captain Pike', 'Captian Jones', 'Captain Pike')
let ques3 = new QuestionMaker('In the arcade game Joust, the player controls a knight riding what animal?', 'Camel', 'Ostrich', 'Horse', 'Ostrich')
let ques4 = new QuestionMaker('The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?', 'Cole', 'LeCo', 'Coleco', 'Coleco')
let ques5 = new QuestionMaker('What now retired NBA player starred in the 1996 movie Kazaam', 'Sinbad', 'Shaquille O’Neal', 'Micheal Jordan', 'Shaquille')
let ques6 = new QuestionMaker('The first person shooter video game DOOM was first released in what year?', '1991', '1993', '1992', '1993')
let ques7 = new QuestionMaker('Appearing on the show in 1982, who was the youngest person to ever host Saturday Night Live?', 'Jodi Foster', 'Drew Barrymore', 'Brooke Shields', 'Drew Barrymore')
let ques8 = new QuestionMaker('What was the first publicly traded U.S. company to reach a $1 trillion market cap? ', 'Microsoft', 'Facebook', 'Apple', 'Apple')
let ques9 = new QuestionMaker('In what year did Nintendo release its first game console in North America?', '1985', '1986', '1987', '1985')
let ques10 = new QuestionMaker('What heavy metal element was once known as quicksilver?', 'Iron', 'Mercury', 'Nickel', 'Mercury')
let ques11 = new QuestionMaker('Orson Welles provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Unicron')
let ques12 = new QuestionMaker('What is the most abundant chemical element in the Universe?', 'Hydrogen', 'Oxygen', 'Carbon', 'Hydrogen')
let ques13 = new QuestionMaker('What was the name of the Eminem single that set the world’s record in 2013 for the most words used in a song?', 'Berzerk', 'Loose Yourself', 'Rap God', 'Rap God')
let ques14 = new QuestionMaker('The Star Trek episode "Mirror, Mirror" has certain members of the crew switch places with their counterparts in an alternate, or mirror, universe. Which of these characters did not switch places?', 'Spock', 'Uhura', 'Scotty', 'Spock')
let ques15 = new QuestionMaker('In which film was the spaceship called Nostromo?', '2001: A Space Odyssey', 'Alien', 'Spaceballs', 'Alien')
let ques16 = new QuestionMaker('What is the registry number for the star ship Enterprise in the original series?', 'NCC-1401', 'NCC-1610', 'NCC-1701', 'NCC-1701')
let ques17 = new QuestionMaker("What is Captain Kirk's middle name?", 'Tiberius', 'Titus', 'Thaddeus', 'Tiberius')
let ques18 = new QuestionMaker('Which of the following is not a name used to describe the stable wormhole on "Deep Space Nine"?', 'The Passageway', 'The Galactic Vortex', 'The Eye of the Universe', 'The Galactic Vortex')
let ques19 = new QuestionMaker('Head of Scientific Research at UNIT, this cunning lady has met The Doctor multiple times. She helped him deal with small black cubes, the Zygons and even the terrifying Daleks', 'River Song', 'Clara Oswald', 'Kate Stewart', 'Kate Stewart')
let ques20 = new QuestionMaker('Who is the author of the book “A Brief History of Time”?', 'Stephen Hawking', 'Michio Kaku', 'Lawrence M. Krauss', 'Stephen Hawking')
let ques21 = new QuestionMaker('Leonard Nimoy  provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Galvatron')
console.log(ques2)
console.log(ques2.question)