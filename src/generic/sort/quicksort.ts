function quickSort<T>(arr: Array<T>): Array<T> {
    if (arr.length < 2) { return arr }

    var left: Array<T> = [];
    var right: Array<T> = [];
    var mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    console.log("mid:", mid)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}
function sortChinese<T>(arr: Array<T>): T[] {//Array<T>=T[]
    return arr.sort(function (firstnum, secondnum) {
        return (firstnum as any).localeCompare(secondnum, "zh-CN")
    })
}

function sort(data: string, count: number):string
function sort<T>(data: T, count: number ): T[]
function sort<T>(data: T, count: number = 5): T[] | string {

}