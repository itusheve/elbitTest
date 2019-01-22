<template>
    <v-app id="inspire" dark>
        <Navigation v-bind:drawer="drawer" v-if="currentRoute() !== 'home'"/>

        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="currentRoute() !== 'home'"></v-toolbar-side-icon>
            <router-link to="/">
                <v-icon class="mx-3">home</v-icon>
            </router-link>
            <v-toolbar-title>Layouts</v-toolbar-title>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator'
	import Navigation from '@/components/Navigation.vue'

	@Component( {
		components: {
			Navigation
		}
	} )
	export default class App extends Vue {
		public drawer: boolean = false

		public currentRoute(): any {
			return this.$route.name
		}

		@Watch( '$route.name' )
		public something( name: string ): void {
			if ( name === 'home' ) {
				this.drawer = false
			}
		}
	}
</script>
