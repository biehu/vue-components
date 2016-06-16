<template>
	<div class="modal-mask" @click="close"
	   v-show="show" transition="modal">
	   <div class="modal-container" @click.stop>
	   	   <slot></slot>
		   <a class="modal-close" href="#" @click.prevent="close">关闭</a>
	   </div> 	
   </div>
</template>

<script>
	export default {
		props: ['show'],
		
		methods: {
			close: function () {
				this.show = false;
			}
		},
		
		ready: function () {
			document.addEventListener('keydown', (e) => {
				if (this.show && e.keyCode == 27) {
					this.close();
				}
			});
		}
	};
</script>

<style>
	.modal-close {
		position: absolute;
		top: 5px;
		right: 5px;
	}
	.modal-container {
	   position: absolute;
	   left: 50%;
	   top: 50%;
	   width: 300px;
	   height: 100px;
	   padding: 20px;
	   margin: -50px 0 0 -150px;
	   background: #fff;
	}
	.modal-mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
	}
</style>

