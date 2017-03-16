<template>
	<div class='courses'>
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
			<div class='menu-left' ref='menuLeft'>
				<div class='menu-split'></div>
				<ul>
					<li v-for='(item, index) in courses' class='menu-left-item'>{{item.name}}</li>
				</ul>
			</div>
			<div class='class-right' ref='classRight'>
				<ul>
					<li v-for='(item, index) in courses' class='class-right-item'>
						<div class='class-split'>{{item.name}}</div>
						<ul>
							<li v-for='(classItem, index) in item.course' class='class-item' @click='classItemClick(classItem,$event)'>
								<img width='100px' height='80px' :src='classItem.image'/>
								<span class='classItemName'>{{classItem.name}}</span>
								<span class='classItemTime'>{{classItem.time}}节课</span>
								<span class='classItemDifficulty'>难度：{{difficultyMap[classItem.difficulty-1]}}</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<courseItem :course='selectedClass' :user='user' ref='courseItem'></courseItem>
	</div>
</template>
<script type="text/ecmascript-6">
	import courseItem from '../../components/courseItem/courseItem.vue';
	import BetterScroll from 'better-scroll';
	const ERR_OK = 0;
    export default {
    	data () {
    		return {
    			courses: [],
                user: {},
    			input2: '',
    			selectedClass: {},
    			difficultyMap: []
    		};
    	},
    	created () {
    		this.difficultyMap = [ '入门级', '进阶级', '困难级' ];
    		this.$http.get('/api/courses').then((respsonse) => {
    			respsonse = respsonse.body;
    			if (respsonse.errno === ERR_OK) {
    				this.courses = respsonse.data;
    			}
    		});
            this.$http.get('/api/user').then((respsonse) => {
                respsonse = respsonse.body;
                if (respsonse.errno === ERR_OK) {
                    this.user = respsonse.data;
                }
            });
    	},
    	methods: {
    		_initScroll () {
    			this.menuScroll = new BetterScroll(this.$refs.menuLeft, {
    				click: true
    			});
    			this.classScroll = new BetterScroll(this.$refs.classRight, {
    				click: true
    			});
    		},
    		handleIconClick () {
    		},
    		classItemClick (classItem, event) {
    			this.selectedClass = classItem;
    			this.$refs.courseItem.show();
    		}
    	},
    	components: {
    		courseItem
    	}
    };
</script>
<style lang ="stylus" rel="stylesheet/stylus">
    @import './courses.styl'
</style>