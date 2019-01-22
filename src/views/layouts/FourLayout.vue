<template>
    <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="10"
            :is-draggable="true"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >
        <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" v-bind:key="item.i">
            {{ item.i }}
        </grid-item>
    </grid-layout>
</template>

<script lang="ts">
	const VueGridLayout = require( 'vue-grid-layout' )
	import { Component, Vue } from 'vue-property-decorator'

	@Component( {
		components: {
			GridLayout: VueGridLayout.GridLayout,
			GridItem: VueGridLayout.GridItem
		}
	} )
	export default class FourLayout extends Vue {
		public layout: Array<any> = [
			{ x: 2, y: 3, w: 2, h: 30, i: 0 },
			{ x: 4, y: 5, w: 2, h: 30, i: 1 },
			{ x: 6, y: 7, w: 2, h: 30, i: 2 },
			{ x: 8, y: 9, w: 2, h: 30, i: 3 }
		]

		constructor( props: any ) {
			super( props )
		}
	}
</script>

<style lang="scss">
    .vue-grid-item {
        background: #ee44aa;
    }
</style>
