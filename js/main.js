const ratingItems = [...document.querySelectorAll('.rating-item')];
const submitButton = document.querySelector('.submit-button');
const ratingContainer = document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.thank-you-container'); 
const ratingValue = document.querySelector('.rating-value');

let rating = 0;

ratingItems.forEach((ratingItem) => {
    ratingItem.addEventListener('click', (e) => ratingItemHandler(e));
});

submitButton.addEventListener('click', () => submitHandler());

function ratingItemHandler(e) {
    ratingItems.forEach(ratingItem => {
        ratingItem.setAttribute('aria-checked', 'false');
        if(e.currentTarget === ratingItem) {
            ratingItem.setAttribute('aria-checked', 'true');
            rating = parseInt(e.currentTarget.textContent);
        }
    });
}

function submitHandler() {
    ratingContainer.setAttribute('aria-hidden', 'true');
    thankYouContainer.setAttribute('aria-hidden', 'false');
    ratingValue.textContent = rating;
}