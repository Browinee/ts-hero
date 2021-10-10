import Promise from "./promise";

function isPromise(val: unknown): val is Promise {
    return isObject(val) &&  isFunction(val.then);

}

function isObject(val: unknown): val is object {
    return val !== null && typeof val === "object";
}

function isFunction(data: unknown): data is Function {
    return typeof data === "function"

}

export {isPromise, isObject, isFunction}