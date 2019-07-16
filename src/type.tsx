import * as React from 'react';
// import { clearScreenDown } from 'readline';
// 枚举类型
// enum Color {red, yellow, blue};
// let c: Color = Color.blue;
// console.log(c); // 2

// 数组类型

// let arr:number[] = [1,2,3,4]
// console.log(arr);

// let arr1:Array<number> = [1,2,3]
// console.log(arr1)

// let arr2:[number, string] = [2, '333']
// console.log(arr2)

// 泛型：可以支持不确定的数据类型；要求：传入什么类型，返回就是什么类型了；就是任意类型

// 方法的泛型
// function getData<T>(value:T):T{
//     return value;
// }

// let a = getData<string>('we are data')
// console.log(a)


// 类的泛型

class WhichMin<T>{
    list:T[] = []
    add(value:T){
        this.list.push(value)
    };
    min():T{
        let minData = this.list[0];
        for(let i of this.list){
            if(i<minData){
                minData = i
            }
        }
        return minData
    }
}

let m = new WhichMin<number>(); // 实例化类
m.add(23);
m.add(22);
m.add(21);
console.log(m.min())






class Type extends React.Component{
    render() {
        return (
            <div className='login'>Type page</div>
        )
    }
}
export default Type;