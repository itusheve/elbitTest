import Layout from '@/model/Layout'

export interface RootState {
	version: string
}

export interface LayoutsState {
	layouts: Array<Layout>
}
