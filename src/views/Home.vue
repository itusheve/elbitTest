<template>
    <v-container fluid grid-list-xl>
        <v-layout row>
            <v-flex xs12>
                <h1 style="border-bottom: 1px solid #fff">Layouts</h1>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md3 v-for="layout of layouts" v-bind:key="layout.name">
                <v-card tile flat height="100%">
                    <router-link :to="'/layout/' + layout.link">
                        <v-img :src="layout.img" style="display: block;"></v-img>
                    </router-link>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { State } from 'vuex-class'
	import Layout from '@/model/Layout'
	import { ComponentOptions, DefaultProps } from 'vue/types/options'

	const namespace: string = 'layouts'

	@Component
	export default class Home extends Vue {
		@State( 'layouts', { namespace } )
		public layouts: Array<Layout>
	}
</script>
