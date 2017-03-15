<template>
	<div class='courseItem' v-show='classItemShow' ref='courseItem'>
	</div>
</template>
<script type="text/ecmascript-6">
    export default {
		props: {
			course: {
				type: Object
			}
		},
		data () {
			return {
				classItemShow: false
			};
		},
		created () {
			console.log(this.course);
		},
		methods: {
			show () {
				this.classItemShow = true;
			}
		}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
    @import './courseItem.styl'
</style>