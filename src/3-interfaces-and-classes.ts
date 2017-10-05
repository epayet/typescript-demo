// You can create your own type
interface Pub {
    name: string;
    beers: Array<string>;
    foodType: string;
}

const goodPub: Pub = {
    name: 'Heist Bank',
    beers: ['Gipsy Hill', 'Neck Oil', 'such good beers'],
    foodType: 'Really good pizza',
};

// Let's try to add another pub

// Did you know you could get different results depending on your ES target?
class BeerDrinker {
    drinkBestBeerFromPub(pub: Pub): string {
        return `Drinking ${pub.beers[0]}`;
        // Try autocompletion here
    }
}

// Oops, am I drunk already?
let mani = BeerDrinker();
let drinking: string = mani.drinkBestBeerFromPub(); // try use different args
