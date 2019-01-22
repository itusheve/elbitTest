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
    export default class FiveLayout extends Vue {
        public layout: Array<any> = [
            { x: 1, y: 2, w: 2, h: 30, i: 0 },
            { x: 3, y: 4, w: 2, h: 30, i: 1 },
            { x: 5, y: 6, w: 2, h: 30, i: 2 },
            { x: 7, y: 8, w: 2, h: 30, i: 3 },
            { x: 9, y: 10, w: 2, h: 30, i: 4 }
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
