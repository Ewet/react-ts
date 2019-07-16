import * as React from 'react';

// 函数的定义
// function getInfo(name: string, age: number): any {
//     return {name, age}
// }
// console.log(getInfo('chen', 23))

// 函数可选参数

// function getInfo2(name:string, age?:number):any{
//     if(age){
//         console.log(1)
//     }else {
//         console.log(2)
//     }
// }
// getInfo2('chen')

// 函数的重载

// function dog(name:string):string;
// function dog(age:number):string;

// function dog(str:any):any{
//     if(typeof str === 'string') {
//         return '狗的名字是：' + str;
//     } else{
//         return '狗的年龄是：' + str +'岁';
//     }
// }

// // console.log(dog('小黄'))
// console.log(dog(5))

// #### 构造类

// es5构造类

    // function Person() {
    //    this.name = 'ka';
    // }

    // Person.prototype.work = function() {
    //     console.log('kkkkk')
    // }

    // let p = new Person;

    // console.log(p.name); 
// 继承
    // function Web() {
    //     Person.call(this)
    // }

    // Web.prototype = new person()


// ts构造类

// class Person {
//     name: string;
//     constructor(n:string) {
//         this.name = n;
//     }
//     run():void {
//         console.log(this.name)
//     }
// }

// let p = new Person('ka');
// p.run()


// ts继承
// class Person {
//     name: string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     run():string {
//         return this.name
//     }
// }

// class Web extends Person{
//     name: string;
//     constructor(name:string){
//         super(name)
//     }
// }
// let w = new Web('kkkka')
// console.log(w.run())





class Fun extends React.Component {
    render() {
        return (
            <div className='login'>functions page</div>
        )
    }
}
export default Fun;