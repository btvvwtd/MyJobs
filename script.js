const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteButton');
const loader = document.getElementById('loader');

newQuoteButton.addEventListener('click', getQuote);


function getQuote() {

    loader.style.display = 'block';


    quoteText.textContent = '';
    quoteAuthor.textContent = '';


    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {

            quoteText.textContent = "${data.content}";
            quoteAuthor.textContent = - ${data.author};

            loader.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching quote:', error);

            loader.style.display = 'none';
        });
}
