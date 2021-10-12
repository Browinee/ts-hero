class MyLocalStorage {
    private static instance:MyLocalStorage;
     constructor () {
    }
    private static getInstance() {
        if(!this.instance){
            this.instance =  new MyLocalStorage();
        }
        return this.instance;
    }
    setItem (key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem (key: string) {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null;
    }
}


export default  MyLocalStorage