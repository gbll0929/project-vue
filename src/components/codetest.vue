<template>
    <div class="code" @click="refreshCode">
		<s-identify :identifyCode="identifyCode"></s-identify>
	</div>
</template>

<script>
	import SIdentify from './identify.vue'
	export default {
		name: "codetest",
		components:{
			"s-identify":SIdentify
		},
		data() {
			return {
				identifyCodes: "1234567890",
				identifyCode: ""
			};
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			this.$emit('event',this.identifyCode)
	    },
		methods: {
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
				this.$emit('event',this.identifyCode)
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
				}
			},
	    }
	};
</script>

<style>
</style>
