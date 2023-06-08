<script setup lang="ts">
import { nextTick, ref } from 'vue';

import GameGrid from '@/components/GameGrid.vue';

const OPTIONS = [10, 15, 20];

const pairs = ref(0);
const startGame = ref(false);
const start = () => {
	// reset GameGrid
	startGame.value = false;
	nextTick(() => {
		startGame.value = true;
	});
};
</script>

<template>
	<header>
		<select v-model="pairs">
			<option disabled value="0">Select number of pairs</option>
			<option
				v-for="option in OPTIONS"
				:key="option"
				:value="option"
			>
				{{ option }}
			</option>
		</select>
		<button @click="start">Start Game</button>
	</header>
	<GameGrid v-if="startGame" :pairs="pairs"></GameGrid>
</template>
