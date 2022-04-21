const titleScreen = {
    title: "Quick knowledge check!",
    image_on: true,
    image_above_60: "https://a.storyblok.com/f/112136/179x150/a1995ca8a4/correct.gif",
    image_above_40: "https://a.storyblok.com/f/112136/205x150/12867bb205/sporting-hero.png",
    image_below_40: "https://a.storyblok.com/f/112136/205x150/a1d0507319/incorrect.gif",
    end_image_on: true,
    end_image: "https://a.storyblok.com/f/112136/205x150/12867bb205/sporting-hero.png",
    end_comment_90: "Incredible!",
    end_comment_70: "Well done!",
    end_comment_60: "Well tried!",
    end_comment_40: "You can do better!",
    end_comment_0: "Please click try again..."
}

const design = {
    btnColour: {
        start_btn: "#25517B",
        question_btn: "#172B49",
        check_result_btn: "#25517B",
        next_btn: "#25517B",
        try_again_btn: "#25517B"
    },
    btnFontColour: {
        start_btn: "pink",
        question_btn: "pink",
        check_result_btn: "pink",
        next_btn: "pink",
        try_again_btn: "pink"
    },
    textFontColour: {
        questionFontColour: "pink",
        titleFontColour: "pink",
        scoreFontColour: "pink",
        endCommentFontColour: "pink",
        endScoreColour: "pink"
    },
    changeAllFontColour: true,
    allFontColour: "white",
    backgroundColour: "rgba(0, 0, 0, 0.463)",
    backgroundImage: "https://a.storyblok.com/f/112136/1920x1409/5ba98e7f92/texture-bg-5efdcf3715f790-74747584-606d864d1b22d1-55861802.jpg",
    incorrectColour: "white",
    incorrectFontColour: "#172B49",
    correctColour: "#01a101",
    correctFontColour: "white",
    correctBoxShadow: "none", // write "none" for no box-shadow
    incorrectBoxShadow: "red" // write "none" for no box-shadow
}

const allQuestions = [{
    question_string: "Which one of the follwing does not fall into the Plan phase? ",
    correct_text: "✔ Well done! You are correct.",
    incorrect_text: "❌Incorrect! The correct answer is Launch Campaign.",
    choices: {
        all_choices: ["Discovery Phase", "Launch Campaign", "Define Campaign Objectives", "Define Business Case", "Collaborate with Stakeholders", "Identify KPIs and metrics"],
        correct: "Launch Campaign",
    }
}];

const question = document.getElementById('question');
const mainContainer = document.getElementById('mainContainer');
const choice = document.getElementById('choice');
const nextBtn = document.getElementById('next');
const resultCheck = document.getElementById('resultCheck');
const tryAgain = document.getElementById('tryAgain');
const counterContainer = document.getElementById('counterContainer');
const score = document.getElementById('score');
const counter = document.getElementById('counter');
const title = document.getElementById('title');
const titleContainer = document.getElementById('titleContainer');
const header = document.getElementById('header');
const start = document.getElementById('start');
const endComment = document.getElementById('endComment');
const navigation = document.getElementById('navigation');
const image = document.getElementById('image');
const endImage = document.getElementById('endImage');
const container = document.getElementById('choicePageContainer')

title.textContent = titleScreen.title;
score.textContent = 0;
endScore.style.display = 'none';
endComment.style.display = 'none';
endImage.style.display = 'none';

start.style.backgroundColor = design.btnColour.start_btn;
start.style.color = design.btnFontColour.start_btn;
mainContainer.style.background = design.backgroundColour;
mainContainer.style.backgroundImage = `url(${design.backgroundImage})`;
tryAgain.style.backgroundColor = design.btnColour.try_again_btn;
tryAgain.style.color = design.btnFontColour.try_again_btn;
nextBtn.style.backgroundColor = design.btnColour.next_btn;
nextBtn.style.color = design.btnFontColour.next_btn;
resultCheck.style.backgroundColor = design.btnColour.check_result_btn;
resultCheck.style.color = design.btnFontColour.check_result_btn;
question.style.color = design.textFontColour.questionFontColour;
endComment.style.color = design.textFontColour.endCommentFontColour;
endScore.style.color = design.textFontColour.endScoreColour;
counterContainer.style.color = design.textFontColour.scoreFontColour;
title.style.color = design.textFontColour.titleFontColour;

if (design.changeAllFontColour) {
    start.style.color = design.allFontColour;
    tryAgain.style.color = design.allFontColour;
    nextBtn.style.color = design.allFontColour;
    resultCheck.style.color = design.allFontColour;
    question.style.color = design.allFontColour;
    endComment.style.color = design.allFontColour;
    endScore.style.color = design.allFontColour;
    counterContainer.style.color = design.allFontColour;
    title.style.color = design.allFontColour;
}

if (titleScreen.image_on) {
    image.src = titleScreen.image;
} else {
    image.style.display = 'none';
}

let i = 0;
let count = allQuestions.length;

counter.textContent = count;
header.style.display = 'none';

const choicePages = []
const choicePage = document.createElement("div")
allQuestions.forEach(object => {
    console.log(object.choices.all_choices)
    choicePage.className = "choices"
    choicePage.id = "choices"
    choicePages.push(choicePage)
});

const selected = event => {
    resultCheck.style.display = 'flex'

    choiceElements.forEach(element => {
        element.classList.remove('selected')
    });
    if (event.currentTarget.classList.contains('selected')) {
        event.currentTarget.classList.remove('selected')
    } else {
        event.currentTarget.classList.add('selected')
    }
};


const choiceElements = []
j = 0;
allQuestions[0].choices.all_choices.forEach(element => {
    const choiceElement = document.createElement("div")
    choiceElement.className = "choice"
    choiceElement.textContent = allQuestions[0].choices.all_choices[j]
    choiceElements.push(choiceElement)
    choicePages[0].appendChild(choiceElement)
    choiceElement.style.setProperty('background-color', design.btnColour.question_btn)
    choiceElement.style.setProperty('color', design.btnFontColour.question_btn)
    if (design.changeAllFontColour) {
        choiceElement.style.setProperty('color', design.allFontColour)
    }
    choiceElement.addEventListener('click', selected)
    j++
});

const beginQuiz = () => {

    titleContainer.style.display = 'none';
    mainContainer.style.justifyContent = 'top!important';
    header.style.display = 'flex';
    question.textContent = allQuestions[0].question_string
    container.appendChild(choicePages[0])
}
start.addEventListener('click', beginQuiz)

let r = 0;
let s = 0;
const checkResult = () => {
    choicePage.childNodes.forEach(element => {
        if (element.classList.contains('selected') && element.textContent === allQuestions[r].choices.correct) {
            element.textContent = allQuestions[r].correct_text
            element.classList.add('correct')
            element.classList.remove('selected')
            element.style.setProperty('background-color', design.correctColour)
            element.style.setProperty('color', design.correctFontColour)
            element.style.setProperty('box-shadow', `0 0 5px 4px ${design.correctBoxShadow}`)
            container.style.pointerEvents = 'none'
            resultCheck.style.pointerEvents = 'none'
            nextBtn.style.display = 'flex'
            score.textContent = ++s
        } else if (element.classList.contains('selected') && element.textContent != allQuestions[r].choices.correct) {
            element.textContent = allQuestions[r].incorrect_text
            element.classList.add('incorrect')
            element.style.setProperty('background-color', design.incorrectColour)
            element.style.setProperty('color', design.incorrectFontColour)
            element.style.setProperty('box-shadow', `0 0 5px 4px ${design.incorrectBoxShadow}`)
            element.classList.remove('selected')
            container.style.pointerEvents = 'none'
            resultCheck.style.pointerEvents = 'none'
            nextBtn.style.display = 'flex'
        } else if (!element.classList.contains('selected') && element.textContent === allQuestions[r].choices.correct) {
            element.classList.add('correct')
            element.style.setProperty('background-color', design.correctColour)
            element.style.setProperty('color', design.correctFontColour)
            element.style.setProperty('box-shadow', `${design.correctBoxShadow} 0 0 5px 4px `)
        }
    });
    r++
}

resultCheck.addEventListener('click', checkResult)


let n = 0;
const loadNext = () => {
    const max = allQuestions.length - 1
    let c = 0
    container.style.pointerEvents = 'all'
    resultCheck.style.pointerEvents = 'all'
    if (n < max) {
        n++
        const questions = document.querySelectorAll('.choice')
        questions.forEach(element => {
            choicePage.removeChild(element)
        })
        allQuestions[n].choices.all_choices.forEach(element => {
            const newChoice = document.createElement("div")
            newChoice.style.setProperty('background-color', design.btnColour.question_btn)
            newChoice.style.setProperty('color', design.btnFontColour.question_btn)
            if (design.changeAllFontColour) {
                newChoice.style.setProperty('color', design.allFontColour)
            }
            newChoice.className = 'choice'
            choicePage.appendChild(newChoice)
            newChoice.textContent = allQuestions[n].choices.all_choices[c]
            question.textContent = allQuestions[n].question_string
            newChoice.addEventListener('click', event => {
                document.querySelectorAll('.choice').forEach(element => {
                    element.classList.remove('selected')
                });
                if (event.currentTarget.classList.contains('selected')) {
                    event.currentTarget.classList.remove('selected')

                } else {
                    event.currentTarget.classList.add('selected')
                }
            })
            c++
        });
    } else {
        const choices = document.getElementById('choices')
        const endScore = document.getElementById('endScore');
        choices.style.display = 'none'
        nextBtn.style.display = 'none';
        resultCheck.style.display = 'none';
        endComment.style.display = 'flex';


        tryAgain.style.display = 'flex';
        question.textContent = 'Your Score';
        endScore.style.display = 'flex';
        endScore.textContent = `${score.textContent} / ${counter.textContent}`;
        counterContainer.style.display = 'none';
        navigation.style.justifyContent = 'center';
        let mark = Number(score.textContent) / count * 100;
        if (mark >= 90) {
            endComment.textContent = titleScreen.end_comment_90
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 70) {
            endComment.textContent = titleScreen.end_comment_70
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 60) {
            endComment.textContent = titleScreen.end_comment_60
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 40) {
            endComment.textContent = titleScreen.end_comment_40
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_40;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 0) {
            endComment.textContent = titleScreen.end_comment_0
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_below_40;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        }
    }

}
nextBtn.addEventListener('click', loadNext)

const reset = () => {
    window.location.reload();
}
tryAgain.addEventListener('click', reset);
