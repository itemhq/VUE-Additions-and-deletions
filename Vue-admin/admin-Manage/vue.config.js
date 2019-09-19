module.exports = {
    publicPath: '',                 //根路径
    outputDir: 'dist',          //打包输出的路径  默认dist
    assetsDir: '',              //静态资源输出的路径(把css  img  js  fonts  放在一个文件夹中)
    lintOnSave: false,          //是否开启eslint
    indexPath:'scrook.html',    //设置输出首页的名字
    devServer:{
        open:true,              //自动开启首页
        host:'localhost',
        port:'',            //端口号
    }


}