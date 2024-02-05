let sentenceClickedOn = document.getElementById('clickhere');
let messageShowed = document.getElementById('algorithms');
let clickedOn2 = document.getElementById('clickhere2');
let messageShowed2 = document.getElementById('lastjoke');

messageShowed.hidden = true;
messageShowed2.hidden = true;

const showjoke = (event) => {
    messageShowed.hidden = false;
}

const showjoke2 = (event) => {
    messageShowed2.hidden = false;
}

sentenceClickedOn.addEventListener('click', showjoke);
clickedOn2.addEventListener('click', showjoke2);
