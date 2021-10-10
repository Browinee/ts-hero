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
                console.log("value", value)
                console.log("  this.resolve_then_callbacks", this.resolve_then_callbacks)
                this.resolve_then_callbacks.forEach(callback => callback());
            }
        }
        this.reject = (reason: any): any => {
            if(this.status === "pending") {
                this.reject_executor_value = reason;
                this.status = "fail"
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
            console.log("this", this)
            if(this.status === "success") {
                result = resolveInThen(this.resolve_executor_value)
                resolve(result)
            }
            if(this.status === "fail") {
                result = rejectInThen(this.reject_executor_value)
                reject(result)
            }
            if(this.status === "pending") {
                this.resolve_then_callbacks.push(() => {
                    result = resolveInThen(this.resolve_executor_value)
                    if(isPromise(result)) {
                        setTimeout(() => {
                            resolve(result.resolve_then_callbacks)
                        }, 5);
                    } else {
                        resolve(result);
                    }
                });
                this.reject_then_callbacks.push(() => {
                    result = resolveInThen(this.resolve_executor_value)
                });
            }
        })
    }
}

export default Promise;
