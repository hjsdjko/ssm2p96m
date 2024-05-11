const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm2p96m/",
            name: "ssm2p96m",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2p96m/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园二手数码交易平台小程序"
        } 
    }
}
export default base
