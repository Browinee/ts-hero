import Order from "./Order";
import OrderDetail from "./OrderDetail";

class ObjectImpl<T extends object, K extends keyof T>{
    object!: T;
    key!: K
    constructor(object_: T, key_: K) {
        this.object = object_;
        this.key = key_;
    }
    getValue() {
        return this.object[this.key]
    }
    setValue(newVal: T[K]) {
        this.object[this.key] = newVal;
    }
}
let orderDetailOne = new OrderDetail(10, "television", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "desk", 2000, 2);
var orderDate = new Date(2023, 10, 17, 5, 20, 0);
let order = new Order(1, orderDate, "justin", "33333",
    [orderDetailOne, orderDetailTwo]);
const result = order.orderDetailArray;
console.log("result:", result)

//const objectImpl = new ObjectImpl<Order, "orderDetailArray">(order, "orderDetailArray");
const objectImpl = new ObjectImpl(order, "orderDetailArray");
console.log("objectImpl.getValue():", objectImpl.getValue());
objectImpl.getValue().forEach((orderDetail)=>{
    console.log(orderDetail.productname);
})