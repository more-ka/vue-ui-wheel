module.exports = {
    title: '轱辘 UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav:[
            {title:'主页',link:'/'}
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/']
            },
            {
                title: '组件',
                children: ['/components/button']
            }
        ]
    }
}