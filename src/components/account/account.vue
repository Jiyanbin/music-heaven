<template>
	<div class='account'>
		<div class='account-header'>
			<div class='user-wrapper'>
				<img :src='user.usericon' width='100px' height='100px'/>
				<span class='user-name'>{{user.username}}</span>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	const ERR_OK = 0;
    export default {
    	data () {
    		return {
    			user: {}
    		};
    	},
    	created () {
    		this.$http.get('/api/user').then((response) => {
    			response = response.body;
    			if (response.errno === ERR_OK) {
    				this.user = response.data;
    				console.log(this.user);
    			}
    		});
    	}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
    @import './account.styl'
</style>