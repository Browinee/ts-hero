import {Executor, RejectType, ResolveType} from "./types";
import {isPromise} from "./utils";

class Promise<T = any> {
    private readonly resolve!: ResolveType;
    private readonly reject!: RejectType;
    private status: string = "pending";
    private resolve_executor_value!: any;
    private reject_executor_value!: any;
    private resolve_then_callbacks: (() => void)[] = [];
    private reject_then_callbacks: (() => void)[] = [];

    constructor (executor: Executor) {
        this.resolve = (value: any): any => {
            if(this.status === "pending") {
                this.resolve_executor_value = value;
                this.status = "success"
                this.resolve_then_callbacks.forEach(callback => callback());
            }
        }
        this.reject = (reason: any): any => {
            if(this.status === "pending") {
                this.reject_executor_value = reason;
                this.status = "fail"
                this.reject_then_callbacks.forEach(callback => callback());
            }

        }
        try {
            executor(this.resolve, this.reject);
        } catch (e: any) {
            console.error(e.toString())
            this.status = "pending"
            this.reject(e.toString())
        }
    }

    then (resolveInThen: ResolveType, rejectInThen: RejectType) {
        return new Promise((resolve, reject) => {
            let result;
            if(this.status === "success") {
                result = resolveInThen(this.resolve_executor_value)
                resolve(result)
            }
            if(this.status === "fail") {
                result = rejectInThen(this.reject_executor_value)
                reject(result)
            }
            if(this.status === "pending") {
                this.processManyAsyncAndSync(resolveInThen, rejectInThen, resolve, reject);
            }
        })
    }
    processManyAsyncAndSync(resolveInThen: ResolveType, rejectInThen: RejectType, resolve: ResolveType, reject: RejectType) {
        let result: any;
        this.resolve_then_callbacks.push(() => {
            result = resolveInThen(this.resolve_executor_value)
            if(isPromise(result)) {
                // method 1
                // setTimeout(() => {
                //     resolve(result.resolve_executor_value)
                // }, 5);

                // method 2
                result.then((value) => {
                    console.log("value", value);
                    resolve(value)
                }, (error) => {
                    reject(error)
                });

            } else {
                resolve(result);
            }
        });
        this.reject_then_callbacks.push(() => {
            result = resolveInThen(this.resolve_executor_value)
        });
    }
}


export default Promise;
