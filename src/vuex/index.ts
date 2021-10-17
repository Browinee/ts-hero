interface Getter<T, U> {
    (state: T, getters: any, rootState: U, rootGetters: any): any
}

interface GetterTree<T, U> {
    [key: string]: Getter<T, U>;
}
interface Mutation<T> {
    (state: T, payload?: any): void
}

interface MutationTree<T> {
    [key: string]: Mutation<S>
}

interface StoreOptions<T> {
    state: T;
    getters: GetterTree<T, T>;
    mutations: MutationTree<T>;

}

class Store<S = any>{
    constructor(options: StoreOptions<S>){
    }
}
