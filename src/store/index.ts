import { createStore, Store, useStore as useVuexStore } from 'vuex'

// 这里声明后下面泛型里使用后，必须实现所有接口里的属性
// interface IRootState {
//   name: string
//   age: number
// }
import login from './login/login'
import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'libeicai',
      age: 18
    }
  },
  modules: {
    login
  }
})
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
