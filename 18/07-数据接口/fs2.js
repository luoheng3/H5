/**
 * Created by 14486 on 2019/5/10.
 */
let fs = require("fs");
new Promise((resolve,reject)=>{
    /*
    * promise
    *   是一个容器,里面放着将来可能要完成的事情;*/
    fs.readFile("./1.txt","utf-8",(err,data) =>{
        if(err){
            console.log("文件读取失败");
        }else{
            console.log(data);
            resolve();
        }
    })
}).then(() =>{
    fs.readFile("./2.txt","utf-8",(err,data) =>{
        if(err){
            console.log("文件读取失败");
        }else{
            console.log(data);
        }
    })
});
