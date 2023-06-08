<script setup lang="ts">
import { type PropType } from 'vue';

import { State } from '@/model/common';
import ICard from '@/model/Card';

const props = defineProps({
	card: { type: Object as PropType<ICard>, required: true },
});
const emit = defineEmits(['clicked']);

const onClick = () :void => {
	if (props.card.state === State.DEFAULT) {
		emit('clicked', props.card);
	}
}
</script>

<template>
	<div class="card" :class="card.state"
		@click="onClick">
		<div class="flip-card-inner">
			<div class="flip-card-front"></div>
			<div class="flip-card-back">
				<img :src="card.src" width="306" height="200">
			</div>
		</div>
	</div>
</template>