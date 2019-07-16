import * as React from 'react';

// ts接口 对 ajax 的封装(json类型的接口)
// interface Config{
//     type: string;
//     url: string;
//     data?: string;
//     dataType: string;
// }

// function ajax(config:Config){
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type,config.url, true);
//     xhr.send(config.data);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log('成功')
//             if(config.dataType === 'application/json'){
//                 console.log(JSON.parse(xhr.responseText))
//             }else {
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }

// ajax({
//     type: 'get',
//     url: 'https://tspawn.motaobox.com/pawnserver/employee',
//     dataType: 'application/json'
// })


// 函数类型接口
// interface encrypt{
//     (key:string,value:string):string;
// }

// var md5:encrypt = function(key:string,value:string):string{
//     return key+value;
// }

// console.log(md5('name','chen'))

// // 数组的接口

// interface fmtArray{
//     // []括号里面的为索引值，外面的为值
//     [index:number]:string;
// }

// let arr:fmtArray = ['sss']
// console.log(arr);

// // 类类型接口

// interface FmtClass{
//     name:string;
//     eat(params:string):void;
// }


// class Dog implements FmtClass{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     };
//     eat(){
//         console.log(this.name + '吃粮食')
//     }
// }

// let d = new Dog('小黑');

// d.eat();

// class Cat{
//     eat():void{
//         console.log('maomao')
//     }
// }
// let c = new Cat();
// c.eat()


// // 接口的继承

// interface Animal{
//     eat():void;
// }

// interface Piana extends Animal{
//     sleep():void;
// }

// class Zee implements Piana{
//     eat(){
//         console.log('熊猫在吃竹子')
//     };
//     sleep(){
//         console.log('熊猫在睡觉')
//     }
// }

// let p = new Zee();
// p.eat()
// p.sleep()



// 泛型接口

// 函数泛型接口

// interface Config{
//     <T>(value:T):T
// }

// let getData:Config = function<T>(value:T):T{
//     return value
// }

// console.log(getData<string>('kk'))





class Ajaxs extends React.Component {
    render() {
        return (
            <div className='login'>Interface page</div>
        )
    }
}
export default Ajaxs;