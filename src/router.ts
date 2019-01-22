import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Home from './views/Home.vue'
import DoubleLayout from '@/views/layouts/DoubleLayout.vue'
import TripleLayout from '@/views/layouts/TripleLayout.vue'
import FourLayout from '@/views/layouts/FourLayout.vue'
import FiveLayout from '@/views/layouts/FiveLayout.vue'

Vue.use( Router )

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/layout/double',
		name: 'double-layout',
		component: DoubleLayout,
	},
	{
		path: '/layout/triple',
		name: 'triple-layout',
		component: TripleLayout,
	},
	{
		path: '/layout/four',
		name: 'four-layout',
		component: FourLayout,
	},
	{
		path: '/layout/five',
		name: 'five-layout',
		component: FiveLayout,
	},
]

const router: Router = new Router( {
	mode: 'history',
	base: process.env.BASE_URL,
	routes
} )

export default router
