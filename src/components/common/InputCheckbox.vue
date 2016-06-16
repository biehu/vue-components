<template>
    <div class="input">
    	<span v-for="r in checkboxs">
			<input 
				v-model="val"
				:value="r[1]"
				:name="name" 
				:class="name"  
				type="checkbox"
				:checked="val.indexOf(r[i]) >= 0" /> 
			{{r[0]}}
			<span v-show="!isValid">
                {{message}}
			</span>
		</span>
    </div>
</template>

<script>
    import input from '../mixins/input';
    
    export default {
        mixins: [input],
        
        props: {
            checkboxs:  Array
        }
    };
</script>

