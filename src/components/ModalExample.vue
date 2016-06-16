<template>
	<button @click="isShow = true">弹窗</button>
	
	<Modal :show.sync="isShow">
		<div>
			这里是弹窗的内容
		</div>
	</Modal>
	
</template>

<script>
	import Modal from './common/Modal';
	
	export default {
		data() {
			return {
				isShow: false
			}
		},
		
		components: {
			Modal
		}
	}
</script>