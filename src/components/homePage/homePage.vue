<template>
	<div class='homePage'>
		<div class='header'>
			<div class='inputArea'>
				<el-input placeholder="music-heaven" icon="search" v-model="input2" :on-icon-click="handleIconClick">
				</el-input>
			</div>
			<div class='icon-wrapper'>
				<i class='el-icon-menu'></i>
			</div>
		</div>
		<div class='content'>
			<el-carousel trigger="click" height="150px">
      			<el-carousel-item v-for="(item,index) in courses[1].course">
      				<img :src='courses[1].course[index].image'/>
      			</el-carousel-item>
    		</el-carousel>
    		<split></split>
    		<div class='courses-list'>
    			<ul>
    				<li v-for='(item,index) in courses' class='courses-list-item'>
    					<div class='headline'>{{item.name}}</div>
    					<i class='el-icon-arrow-right'></i>
    					<ul>
    						<li v-for='(musicClass,index) in item.course' class='courses-item'>
    							<img :src='musicClass.image' />
    							<span class='musicClassName'>{{musicClass.name}}</span>
    						</li>
    					</ul>
    				</li>
    			</ul>
    		</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import split from '../../components/split/split.vue';
    export default {
    	props: {
    		courses: {
    			type: Array
    		}
    	},
    	data () {
    		return {
    			input2: ''
    		};
    	},
    	methods: {
    		handleIconClick () {
    			alert('点击');
    		}
    	},
    	components: {
    		split
    	}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
	@import './homePage.styl'
</style>