import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/types'
import { layouts } from '@/store/modules/layout'

Vue.use( Vuex )

const store: StoreOptions<RootState> = {
	state: {
		version: '1.0.0' // a simple property
	},
	modules: {
		layouts
	}
}

export default new Vuex.Store<RootState>( store )
