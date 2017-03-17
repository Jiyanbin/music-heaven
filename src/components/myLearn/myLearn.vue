<template>
	<div class='myLearn'>
		<div class='header'>
			<div class='avatar-wrapper'>
				<img :src='user.usericon' width='80px' height='80px'/>
			</div>
			<div class='text-wrapper'>
				<div class='previewTime'>
					<span class='smallText'>上次学习</span>
					<span class='bigText'>{{user.previewTime}}</span><span>天前</span>
				</div>
				<div class='hasLearn'>
					<span class='smallText'>本月已学课程</span>
					<span class='bigText'>5</span><span>个</span>
				</div>
			</div>
		</div>
		<div class='course-list-wrapper'>
			<div class='course-list-header'>
				<span>参加的课程</span>
				<i class='el-icon-arrow-right'></i>
			</div>
			<ul>
				<li v-for='(item,index) in user.hasLearnItems' class='course-item' @click.stop.prevent='classItemClick(item, $event)'>
					<div class='img-wrapper'>
						<img :src='item.image' width='120px' height='80px'/>
					</div>
					<div class='desc-wrapper'>
						<span class='name'>{{item.name}}</span>
						<div class='has-learnTime'>
							<i class='el-icon-check'></i>
							<span>已完成{{item.hasLearnTime}}/{{item.time}}课</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<br/>
		<br/>
		<courseItem :course='selectedClass' ref='courseItem'></courseItem>
	</div>
</template>
<script type="text/ecmascript-6">
	import courseItem from '../../components/courseItem/courseItem.vue';
	const ERR_OK = 0;
    export default {
    	data () {
    		return {
    			user: {},
    			selectedClass: {}
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
    	},
    	methods: {
    		classItemClick (item, $event) {
    			this.selectedClass = item;
    			this.$refs.courseItem.show();
    		}
    	},
    	components: {
    		courseItem
    	}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
    @import './myLearn.styl'
</style>