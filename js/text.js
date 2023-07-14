var quotes = [
	{ quote: "A leader is one who knows the way, goes the way, and shows the way.", author: ""},
	{ quote: "Always remember that you are absolutely unique. Just like everyone else.", author: ""},
	{ quote: "Education is the most powerful weapon which you can use to change the world.", author: ""},
	{ quote: "Everything has beauty, but not everyone sees it.", author: ""},
	{ quote: "Honesty is the first chapter in the book of wisdom.", author: ""},
	{ quote: "The best preparation for tomorrow is doing your best today.", author: ""},
	{ quote: "Nothing is impossible, the word itself says \'Im possible\'!", author: ""},
	{ quote: "If you cannot do great things, do small things in a great way.", author: ""},
	{ quote: "All our dreams can come true, if we have the courage to pursue them.", author: ""},
	{ quote: "If opportunity doesn\'t knock, build a door.", author: ""},
	{ quote: "The secret of success is getting started.", author: ""},
	{ quote: "Everything you can imagine is real. ", author: ""},
	{ quote: "Defeat is simply a signal to press onward. ", author: ""},
	{ quote: "Life is a story. Make yours the best seller.", author: ""},
	{ quote: "Life always offers you a second chance. It\'s called tomorrow.", author: ""},
	{ quote: "Where there is a will, there is a way.", author: ""},
	{ quote: "Genius is one percent inspiration and ninety-nine percent perspiration", author: ""},
	{ quote: "On the way to success, there is no trace of lazy men.", author: ""},
	{ quote: "I can accept failure, everyone fails at something. But I can\'t accept not trying.", author: ""},
	{ quote: "Nothing is too small to know, and nothing too big to attempt.", author: ""},
	{ quote: "Life doesn\'t require that we be the best, only that we try our best.", author: ""},
	{ quote: "The measure of life is not its duration but its donation.", author: ""},
	{ quote: "Don\'t cry because it\'s over, smile because it happened.", author: "― Dr. Seuss"},
	
	{ quote: "The only person you should try to be better than is the person you were yesterday.", author: "— Anonymous"},
	{ quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one\'s definition of your life; define yourself.", author: "— Harvey Fierstein"},
	{ quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.", author: "— C.S. Lewis"},
	{ quote: "Life\'s too mysterious to take too serious.", author: "— Mary Engelbreit"},
	{ quote: "No one can make you feel inferior without your consent.", author: "— Eleanor Roosevelt"},
	{ quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.", author: "— Albert Einstein"},
	{ quote: "You can\'t go around building a better world for people. Only people can build a better world for people. Otherwise it\'s just a cage.", author: "— Terry Pratchett, Witches Abroad"},
	{ quote: " There isn\'t a way things should be. There\'s just what happens, and what we do.", author: "—  Terry Pratchett"},
	{ quote: "Be where your feet are", author: "—  Anonymous"},
	{ quote: "It\'s not about how hard you can hit; it\'s about how hard you can get hit and keep moving forward.", author: "— Rocky Balboa, Rocky"},
	{ quote: "The trick in life is learning how to deal with it.", author: "— Helen Mirren"},
	{ quote: "If you want to go fast, go alone. If you want to go far, go together.", author: "— African proverb"},
	{ quote: "I can be changed by what happens to me but I refuse to be reduced by it.", author: "— Maya Angelou"},
	{ quote: "Believe you can and you\'re halfway there.", author: "— T. Roosevelt"},
	{ quote: " Defeat is simply a signal to press onward.", author: "— Helen Keller"},
	{ quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.", author: "— Marie Curie"},
	{ quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.", author: "— Jose Luis Borges"},
	{ quote: "Don\'t sweat the petty things and don\'t pet the sweaty things.", author: "— George Carlin"},
	{ quote: "Not how long, but how well you have lived is the main thing.", author: "—  Seneca"},
	
]
function randomNumber(range) {
	return Math.floor(Math.random() * range);
}
function getQuote(){
		return quotes[randomNumber(quotes.length)];
}
function makeQuote() {
	var quote = getQuote();

	var elequote = document.getElementById('quote');
	var eleauthor = document.getElementById('author');

	elequote.innerText = quote.quote;
	eleauthor.innerText = quote.author;
}
window.onload = makeQuote;

const boxText = document.querySelector('.column-quotes_text');
const boxTextClose = document.querySelector('.column-quotes_icon');
function closeBoxText() {
	closeBox = boxText.classList.add('closed');
}
function openBoxText() {
	boxText.classList.remove('closed');
}