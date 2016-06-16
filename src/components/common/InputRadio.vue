<template>
	<div class="input">
		<span v-for="r in radios">
		  <input 
		      v-model="val"
			  :value="r[1]"
		      :name="name" 
			  :class="name"  
			  type="radio"
			  :checked="r[1] == val" /> 
		  {{r[0]}}
		</span>
	</div>
</template>

<script>
	import input from '../mixins/input';
	
	export default {
		mixins: [input],
		
		props: {
			radios:  Array
		}
	};
</script>

