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

interface Dispatch {
    (type: string, payload?: any): any
}

interface Commit {
    (type: string, payload?: any): any
}

interface ActionContext<T, U> {
    dispatch: Dispatch;
    commit: Commit;
    state: T;
}

interface Actions<T, U> {
    (context: ActionContext<T, U>, payload: any): void
}

interface ActionTree<T, U> {
    [key: string]: Actions<T, U>;
}

interface StoreOptions<T> {
    state: T;
    getters: GetterTree<T, T>;
    mutations: MutationTree<T>;
    actions: ActionTree<T, T>;

}


function createStore<S> (options: StoreOptions<S>) {
    return new Store<S>(options);
}

class Store<S = any> {
    constructor (options: StoreOptions<S>) {
    }
}
