import { ref, Ref } from 'vue';
import seedrandom from 'seedrandom';

import Card, { ICard } from '@/model/Card';

const RNG = seedrandom();

const IMAGES = ["beach", "castle", "deer", "dusk", "fall", "forest", "island", "manta", "mountain", "mountainrange", "orbit", "peak", "pier", "plains", "sailboats", "storm", "sunset", "town", "windmill", "wintertown"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(RNG() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function useCards(count: number): Ref<ICard[]> {
	const images = [];
	while (images.length < count) {
		const image = IMAGES[(Math.floor(RNG() * IMAGES.length))];
		if (!images.includes(image)) {
			images.push(image);
		}
	}
	const pairs = images.concat(...images);
	shuffleArray(pairs);
	const cards = ref(pairs.map(image => new Card(image)));
	return cards;
}