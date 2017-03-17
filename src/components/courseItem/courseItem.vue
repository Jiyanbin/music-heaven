<template>
	<div class='courseItem' v-show='classItemShow' ref='courseItem'>
		<div class='header'>
			<i class='el-icon-close' @click.stop.prevent='hide'></i>
			<span class='course-detail'>课程详情</span>
			<i class='el-icon-share'></i>
		</div>
		<div class='img-wrapper'>
			<img :src='course.image' width='100%' height='200px'/>
		</div>
		<el-tabs v-model="activeName">
    		<el-tab-pane label="介绍" name="first">
    			<div class='course-infomation'>
    				<span class='course-name'>{{course.name}}</span>
    				<div class='attend-area'>
    					<i :class='attendClass' class='attend-icon'></i>
    					<span v-if='attendClass2'>{{attendTextTrue}}</span>
    					<span v-if='!attendClass2'>{{attendTextFalse}}</span>
    				</div>
    				<ul>
    					<li v-for='(item,index) in courseDifficulty'><i class='el-icon-star-on'></i></li>
    				</ul>
    				<span>难度：{{course.difficulty}}颗星</span>
    			</div>
    			<div class='cost-information'>
    				<span>免费</span>
    			</div>
    			<split></split>
    			<div class='course-introduce'>
    				<h2>课程介绍</h2>
    				<p>{{course.info}}</p>
    				<br/>
    				<br/>
    				<br/>
    			</div>
    		</el-tab-pane>
    		<el-tab-pane label="目录" name="second">
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    			<br/>
    		</el-tab-pane>
    		<el-tab-pane label="评价" name="third" class='evaluate'>
    			<span class='evaluate-header'>评价详情（{{course.rating}}个人评价）</span>
    			<ul>
    				<li class='evaluate-item-wrapper' v-for='(item, index) in course.ratings'>
    					<div class='avatar-wrapper'>
	    					<img :src='item.avatar' width='36px' height='36px'/>
	    				</div>
	    				<div class='evaluate-text-wrapper'>
	    					<div class='evaluate-name'>{{item.username}}</div>
	    					<div class='evaluate-text'>{{item.text}}</div>
	    				</div>
    				</li>
    			</ul>
    		</el-tab-pane>
  		</el-tabs>
	</div>
</template>
<script type="text/ecmascript-6">
	import split from '../../components/split/split.vue';
    export default {
		props: {
			course: {
				type: Object
			},
			user: {
				type: Object
			}
		},
		data () {
			return {
				classItemShow: false,
				activeName: 'first',
				courseDifficulty: [],
				attendClass2: false,
				attendClass: {
					'el-icon-plus': true,
					'el-icon-check': false
				},
				attendTextTrue: '已参加该课程',
				attendTextFalse: '参加课程'
			};
		},
		created () {
			console.log(this.course);
		},
		methods: {
			show () {
				this.classItemShow = true;
				this._initCourseDifficulty();
				this.hasLearn();
			},
			hide () {
				this.classItemShow = false;
				this.courseDifficulty.length = 0;
			},
			_initCourseDifficulty () {
				if (this.course.difficulty === 1) {
					this.courseDifficulty.push('1');
				} else if (this.course.difficulty === 2) {
					this.courseDifficulty.push('1', '2');
				} else {
					this.courseDifficulty.push('1', '2', '3');
				}
				return this.courseDifficulty;
			},
			hasLearn () {
				for (let i = 0; i < this.user.hasLearnItems.length; i++) {
					console.log(this.course.name);
					if (this.course.name === this.user.hasLearnItems[i].name) {
						this.attendClass['el-icon-plus'] = false;
						this.attendClass['el-icon-check'] = true;
						this.attendClass2 = true;
					}
				}
			}
		},
		components: {
			split
		}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
    @import './courseItem.styl'
</style>