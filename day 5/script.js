const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');


function generateQuote() {
    const url = 'https://api.quotable.io/quotes/random';
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const quoteContent = data[0].content;
        quote.innerHTML = quoteContent;
      })
      .catch(error => console.error('Error fetching the quote:', error));
  }
  