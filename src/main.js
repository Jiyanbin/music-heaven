// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import './common/stylus/icon.styl';
import homePage from './components/homePage/homePage.vue';
import courses from './components/courses/courses.vue';
import myLearn from './components/myLearn/myLearn.vue';
import account from './components/account/account.vue';


Vue.use(VueRouter);

const routes = [{
		path: '',
		component: homePage
	},
	{
		path: '/homePage',
		component: homePage
	},
	{
		path: '/courses',
		component: courses
	},
	{
		path: '/myLearn',
		component: myLearn
	},
	{
		path: '/account',
		component: account
	}
];
const router = new VueRouter({
  	routes: routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});