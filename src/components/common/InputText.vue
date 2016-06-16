<template>
	<div class="input">
		<input :name="name" :class="name" type="text" v-model="val" @blur="validate">
		<span v-show="!isValid">
			{{message}}
		</span>
	</div>
	
</template>

<script>
	import input from '../mixins/input';
	
	export default input;
</script>