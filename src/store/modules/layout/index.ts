import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { LayoutsState } from '@/types'
import { RootState } from '@/types'
import { state } from '@/store/modules/layout/state'

const namespaced: boolean = true

export const layouts: Module<LayoutsState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
}
