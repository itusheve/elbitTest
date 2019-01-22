<template>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
        <v-list dense>
            <v-list-tile v-for="layout of layouts" v-bind:key="layout.name" :to="'/layout/' + layout.link">
                <img :src="layout.img" class="screenshot" :alt="layout.name">
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'
	import { State } from 'vuex-class'
	import Layout from '@/model/Layout'

	const namespace: string = 'layouts'

	@Component
	export default class Navigation extends Vue {
		@State( 'layouts', { namespace } )
		public layouts: Array<Layout>

		@Prop()
		public drawer: boolean = false
	}
</script>

<style lang="scss">
    .v-list__tile:not(.v-list__tile--avatar) {
        height: auto !important;
        margin: 20px 0;
    }

    img.screenshot {
        display: block;
        height: 110px;
        width: 268px;
    }
</style>
