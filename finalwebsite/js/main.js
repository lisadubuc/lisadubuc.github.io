let queries = [{
        Question: "What do you eat in the morning?",
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
        Question: "What do you drink on your way to work?",
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
        Question: "What do you eat for lunch?",
        Answer1: {
            Text: "Hamburger",
            Image: "hamberg.jpg"
        },
        Answer2: {
            Text: "Sushi",
            Image: "sushi.jpg"
        }
    },
    {
        Question: "Walking back from lunch you see a homeless person what do you do?",
        Answer1: {
            Text: "Give money to the homeless",
            Image: "money.jpg"
        },
        Answer2: {
            Text: "Give your food",
            Image: "lunch.jpg"
        }
    },
    {
        Question: "What snack do you eat at work?",
        Answer1: {
            Text: "Fruit",
            Image: "fruit.jpg"
        },
        Answer2: {
            Text: "Cookies",
            Image: "cookie.jpg"
        }
    },
    {
        Question: "What do you eat for supper?",
        Answer1: {
            Text: "Soup",
            Image: "soup.png"
        },
        Answer2: {
            Text: "Chicken pot pie",
            Image: "pie.jpg"
        }
    },
    {
        Question: "What about dessert?",
        Answer1: {
            Text: "Cupcake",
            Image: "cupcake.jpg"
        },
        Answer2: {
            Text: "Popcorn",
            Image: "popcorn.png"
        }
    },
    {
        Question: "What do you think at your night out?",
        Answer1: {
            Text: "Gin tonic",
            Image: "gin_tonic.jpg"
        },
        Answer2: {
            Text: "Beer",
            Image: "beer.jpg"
        }
    },
    {
        Question: "What about your late night snack?",
        Answer1: {
            Text: "Pizza",
            Image: "pizza.jpg"
        },
        Answer2: {
            Text: "Fries",
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
    imageElement.style.backgroundImage = "url(image/" + answer.Image + ")";
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
    } else if (currentQuery === numberOfQuestions) {
        displayOutroPage();
    }
}

function startOver() {
    currentQuery = -1;
    animatePageChange(getIntroPage());
}