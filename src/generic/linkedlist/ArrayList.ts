export default class ArrayList<T = any> {
  public element: Array<T>
  public index: number = 0;
  constructor() {
    this.element = []
  }

  public add(ele: T) {
    this.checkIndex();
    this.element[this.index++] = ele;
  }
  public checkIndex() {
    if (this.index < 0) {
      throw new Error("index can't be zero");
    }
  }

  public size() {
    return this.element ? this.element.length : 0;
  }
  get(index: number): T {

    return this.element[index];

  }

  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    })
  }

  remove(value: number): number
  remove(value: object): object
  remove(value: any): any {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === "number") {
        return value !== index
      } else {
        return value !== ele
      }
    })
    return value;
  }

}

export { }

