/**
 * Created by 14486 on 2019/3/2.
 */
let http = require("http");
let url = require("url");
let server = http.createServer();
server.on("request",(req,res) =>{
    //  req.url 是获取的完整路由(包含参数)
    let urlObj = url.parse(req.url,"true"); // 将路由字符串转为对象
    res.writeHeader(200,{
        "Content-Type":"text/html;charset=utf-8",
        // 允许跨域
        "Access-Control-Allow-Origin":"*"
    });
    let data = {
        user: [
            {
                id:1,
                name:"罗恒",
                age:18
            },
            {
                id:2,
                name:"赖你",
                age:23
            },
            {
                id:3,
                name:"范雨菲",
                age:24
            }
        ],
        job:[
            {
                id:1,
                job:"厨师"
            },
            {
                id:2,
                job:"web"
            },
            {
                id:3,
                job:"java"
            },
            {
                id:4,
                job:"python"
            }
        ]
    };
    let passName = urlObj.pathname;
    let result = "";
    if(passName === "/user"){
        if(urlObj.query.id){
            let id = urlObj.query.id;
            result = data.user.find(function (item) {
                return item.id == id;
            })
        }else{
            result = data.user;
        }
    }
    res.end(JSON.stringify(result));
});
server.listen(8080,function () {
    console.log("服务器启动成功");
});