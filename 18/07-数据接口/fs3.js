/**
 * Created by 14486 on 2019/5/10.
 */
// 接到上一个问题  如果有一百个文件读取 难道要写一百个吗? 封装;
let fs = require("fs");
function promiseFile(pathname){
    return new Promise((resolve,reject) =>{
        fs.readFile(pathname,"utf-8",(err,data) =>{
            err?reject(err):resolve(data);
        })
    })
}
promiseFile("./1.txt").then((data) =>{
    console.log(data);
    return promiseFile("./12.txt");
}).then((data) =>{
    console.log(data);
}).catch((err) =>{
    console.log(err);
});