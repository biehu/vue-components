<template>
	<div class="input">
		<select :name="name" :class="name" v-model="val" @change="validate">
			<option :value="opt[1]" v-for="opt in options">{{opt[0]}}</option>
		</select>
		<span v-show="!isValid">
			{{message}}
		</span>
	</div>
</template>

<script>
	import input from '../mixins/input';
	
	export default {
		mixins: [input],
		
		props: {
			options: Array
		}
	};
</script>