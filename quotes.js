const quotes = [
{
    quote: "The way to get started is to quit talking and begin doing.\n",
    author: "-Walt Disney-",
},
{
    quote: "Life is what happens whne you're busy making other plans.\n",
    author: "-John Lennon-",
},
{
    quote: "Be yourself; everyone else is already taken.\n",
    author: "-Oscar Wilde-",
},
{
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogman\n",
    author: "-Steve Jobs-",
},
{
    quote: "Whether you think you can or you think you can't, you're right.\n",
    author: "-Henry Ford-",
},
{
    quote: "If you're going through hell, keep going.\n",
    author: "-Winston Churchill-",
},
{
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.\n",
    author: "-Mark Twain-",
},
{
    quote: "Those who dare to fail miserably can achieve greatly.\n",
    author: "-John F.Kennedy-",
},
{
    quote: "Life is like a box of chocolates. You never know what you're going to get.\n",
    author: "-Forrest Gump-",
},
{
    quote: "The future belongs to those who prepare for it today.\n",
    author: "-Malcom X-",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;

author.innerText = todayQuote.author;

