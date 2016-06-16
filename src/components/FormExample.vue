<template>
	<form @submit.prevent="save">
	   <div class="form-row">
		   <label>姓名：</label>
		   <input-text 
		       name="username"
			   :val.sync="formData.username"
			   :rules="[['isNotNull', '不能为空'], ['isEmail', '邮箱格式不正确']]">
		   </input-text>
	   </div>
	   
	   <div class="form-row">
		   <label>城市：</label>
		   <input-select 
		       name="city"
		       :val.sync="formData.city"
			   :options="[['请选择城市', ''],['北京', 1], ['河北', 2]]"
		       :rules="[['isNotNull', '不能为空']]">
		   </input-select>
       </div>	
	   
	   <div class="form-row"> 
		   <label>性别：</label>
		   <input-radio 
	           name="sex"
	   	       :val.sync="formData.sex"
			   :radios="[['男', '1'], ['女', '0']]">
		   </input-radio>
	   </div>  
	   
	   <div class="form-row">
		   <label>爱好:</label>
		   <input-checkbox
		       name="like"
			   :val.sync="formData.like"
			   :checkboxs="[['足球', '0'], ['篮球', '1']]">
		   </input-checkbox>
	   </div>
	   
	   <button type="submit">提交</button>
   </form>
</template>

<script>
	import InputText from './common/InputText';
	import InputSelect from './common/InputSelect';
	import InputRadio from './common/InputRadio';
	import InputCheckbox from './common/InputCheckbox';
	
	export default {
		components: {
			InputText,
			InputSelect,
			InputRadio,
			InputCheckbox
		},
		
		data() {
			return {
				formData: {
					username: 'beal',
					city: '1',
					sex: '1',
					like: ['1']
				},
				isAllValid: true
			};
		},
		
		events: {
			setAllValid(valid) {
				this.isAllValid = this.isAllValid && valid;
			}
		},
		
		methods: {
			save() {
				this.$broadcast('formValidate');
				
				if (this.isAllValid) {
					console.log(JSON.stringify(this.formData));
				}
				
				this.isAllValid = true;
			}
		}
	};
</script>

<style>
	.input {
        display: inline-block;
    }
	.form-row {
		margin-bottom: 10px;
	}	
</style>