/**
 * Created by 14486 on 2019/5/10.
 */
let fs = require("fs");
fs.readFile("./1.txt","utf-8",(err,data) =>{
    if(err) {
        console.log("文件读取失败");
    }else{
        console.log(data);
    }    
});
// 异步读取数据 读取顺序取决于文件的大小, 而不是看代码的顺序
// throw err 好处:1阻止代码往下运行, 2 打印错误信息
fs.readFile("./2.txt",(err,data) =>{
   if(err) {
       console.log("文件读取失败");
   }else{
       console.log(data.toString());
   }
});