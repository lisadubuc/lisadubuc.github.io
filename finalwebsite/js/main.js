let queries = [{
        Question: "Eggs or toast?",
        Answer1: {
            Text: "Eggs",
            Image: "egg.jpg"
        },
        Answer2: {
            Text: "Toast",
            Image: "toast.jpg"
        }
    },
    {
        Question: "Walking to work?",
        Answer1: {
            Text: "Cafe",
            Image: "cafe.jpg"
        },
        Answer2: {
            Text: "Tea",
            Image: "tea.jpg"
        }
    },
    {
        Question: "Lunch?",
        Answer1: {
            Text: "Hamburger",
            Image: "hamberg.jpg"
        },
        Answer2: {
            Text: "sushi",
            Image: "sushi.jpg"
        }
    },
    {
        Question: "Streets?",
        Answer1: {
            Text: "Give money to the homeless",
            Image: "money.jpg"
        },
        Answer2: {
            Text: "your food",
            Image: "lunch.jpg"
        }
    },
    {
        Question: "Work?",
        Answer1: {
            Text: "Fruit",
            Image: "fruit.jpg"
        },
        Answer2: {
            Text: "cookies",
            Image: "cookie.jpg"
        }
    },
    {
        Question: "Home supper?",
        Answer1: {
            Text: "Soup",
            Image: "soup.png"
        },
        Answer2: {
            Text: "chicken pot pie",
            Image: "pie.jpg"
        }
    },
    {
        Question: "Desert?",
        Answer1: {
            Text: "Cupcake",
            Image: "cupcake.jpg"
        },
        Answer2: {
            Text: "popcorn",
            Image: "popcorn.png"
        }
    },
    {
        Question: "Night out?",
        Answer1: {
            Text: "Gin tonic",
            Image: "gin_tonic.jpg"
        },
        Answer2: {
            Text: "beer",
            Image: "beer.jpg"
        }
    },
    {
        Question: "Late night snack?",
        Answer1: {
            Text: "Pizza",
            Image: "pizza.jpg"
        },
        Answer2: {
            Text: "fries",
            Image: "fries.jpg"
        }
    },
];

let pageContainerElement = document.querySelector("#page-container");
let queryPageTemplate = document.querySelector("#query-template");
let introPageTemplate = document.querySelector("#intro-template");
let outroPageTemplate = document.querySelector("#outro-template");
let mainPageElement;
let numberOfQuestions = queries.length;
let currentQuery = -1;

mainPageElement = getIntroPage();
mainPageElement.id = "main-page";
pageContainerElement.appendChild(mainPageElement);

function getIntroPage() {
    let introPageElement = introPageTemplate.cloneNode(true);
    introPageElement.classList.remove("hidden");
    return introPageElement;
}

function displayCurrentQuery() {
    let query = queries[currentQuery];
    let transitionPageElement = queryPageTemplate.cloneNode(true);
    transitionPageElement.classList.remove("hidden");
    transitionPageElement.id = "transition-page";

    let questionElement = transitionPageElement.querySelector(".question");
    questionElement.textContent = query.Question;

    let answer1Element = transitionPageElement.querySelector(".answer-1");
    let answer2Element = transitionPageElement.querySelector(".answer-2");
    changeAnswer(answer1Element, query.Answer1);
    changeAnswer(answer2Element, query.Answer2);

    animatePageChange(transitionPageElement);
}

function displayOutroPage() {
    let outroPageElement = outroPageTemplate.cloneNode(true);
    outroPageElement.classList.remove("hidden");
    outroPageElement.id = "transition-page";
    animatePageChange(outroPageElement);
}

function changeAnswer(element, answer) {
    let textElement = element.querySelector(".answer-text");
    let imageElement = element.querySelector(".answer-image");

    textElement.textContent = answer.Text;
    imageElement.src = "image/" + answer.Image;
}

function animatePageChange(newElement) {
    pageContainerElement.appendChild(newElement);

    pageContainerElement.classList.add("slide");
    pageContainerElement.style.marginLeft = "-100vw";

    setTimeout(() => {
        pageContainerElement.classList.remove("slide");
        mainPageElement.remove();
        newElement.id = "main-page";
        mainPageElement = newElement;
        pageContainerElement.style.marginLeft = "0";
    }, 500);
}

function nextQuestion() {
    currentQuery++;
    if (currentQuery < numberOfQuestions) {
        displayCurrentQuery();
    } else {
        displayOutroPage();
    }
}

function startOver() {
    currentQuery = -1;
    animatePageChange(getIntroPage());
}