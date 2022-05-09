// BASIC DATA

const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
};

// HTML ELEMENTS

const header = (logo) => {
    return `
    <header>
        <p>${logo}</p>
        <span class="material-symbols-outlined">menu</span>
    </header>    
    `
};

const createCard = (i, title, sub, text, buttonText) => {
    return `
    <div class="card-container">
        <h1>${i}</h1>
        <h2>${title}</h2>
        <h3>${sub}</h3>
        <h4>${text}</h4>
        <button>${buttonText}
            <span class="material-symbols-outlined">arrow_forward</span>
        </button>
    </div>
    `
};

const createCards = () => {
    return beers.cards.map( (beer, i) => createCard(i+1, beer.title, beer.sub, beer.text, beers.button)).join("")
};

const loadEvent = () => {

const rootElement = document.getElementById("root");

rootElement.insertAdjacentHTML("beforeend", header(beers.logo));
rootElement.insertAdjacentHTML("beforeend", createCards(beers.cards))
    
}

window.addEventListener("load", loadEvent)