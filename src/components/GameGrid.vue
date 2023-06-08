<script setup lang="ts">
import { Ref, ref } from 'vue';

import useCards from '@/composables/useCards';

import { ICard } from '@/model/Card';
import { State } from '@/model/common';

import ImageCard from '@/components/ImageCard.vue';

const props = defineProps({
	pairs: { type: Number, required: true },
});

const cards = useCards(props.pairs);
const turns = ref(0);
const turnedCards: Ref<ICard[]> = ref([]);
const matchedCards: Ref<ICard[]> = ref([]);
const isGameOver = ref(false);

const onClick = (card: ICard): void => {
	if (turnedCards.value.length < 2) {
		card.state = State.TURNED;
		turnedCards.value.push(card);
	}
	if (turnedCards.value.length === 2) {
		const cardOne = turnedCards.value[0];
		const cardTwo = turnedCards.value[1];
		if (cardOne.name === cardTwo.name) {
			cardOne.state = State.MATCHED;
			cardTwo.state = State.MATCHED;
			matchedCards.value.push(cardOne, cardTwo);
		} else {
			setTimeout(() => {
				cardOne.state = State.DEFAULT;
				cardTwo.state = State.DEFAULT;
			}, 1000);
		}
		turnedCards.value.splice(0,2);
		turns.value++;
	}
	if (matchedCards.value.length === cards.value.length) {
		isGameOver.value = true;
	}
}
</script>

<template>
	<p>Match two pictures</p>
	<div class="score">
		<p>Turns: {{ turns }}</p>
		<p>Matches found: {{ matchedCards.length/2 }}</p>
	</div>
	<div v-if="isGameOver" class="game-over">GAME OVER</div>
	<div class="grid">
		<ImageCard v-for="(card, index) in cards" :key="index"
			:card="card"
			@clicked="onClick"></ImageCard>
	</div>
</template>