import {Executor, RejectType, ResolveType} from "./types";


class Promise<T = any> {
    private readonly resolve!: ResolveType;
    private readonly reject!: RejectType;
    private status: string = "pending";
    private resolve_executor_value!: any;
    private reject_executor_value!: any;

    constructor (executor: Executor) {
        this.resolve = (value: any): any => {
            if(this.status === "pending") {
                 this.resolve_executor_value = value;
                this.status = "success"
            }
        }
        this.reject = (value: any): any => {
            if(this.status === "pending") {
                this.reject_executor_value = value;
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
            if(this.status === "success") {
                result = resolveInThen(this.resolve_executor_value)
                resolve(result)
            }
            if(this.status === "fail") {
                result = rejectInThen(this.reject_executor_value)
                reject(result)
            }
        })
    }
}


export default Promise;