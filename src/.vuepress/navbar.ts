import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: '入坑准备',
        children: [
            {
                text: '下载注册与创建角色',
                link: '/main/index1',
                icon: 'download'
            },
            {
                text: '安装汉化',
                link: '/main/index2',
                icon: 'language'
            },
            {
                text: '系别选择',
                link: '/main/index3',
                icon: 'wand-magic'
            },
            {
                text: '游戏收费方式与福利介绍',
                link: '/main/index4',
                icon: 'coins'
            }
        ]
    },
    {
        text: '旧站攻略',
        children: [
            {
                text: '新手入门',
                link: '/wordpress/新手入门/',
                icon: 'star'
            },
            {
                text: '战斗机制',
                link: '/wordpress/战斗机制/',
                icon: 'fire'
            },
            {
                text: '资源养成',
                link: '/wordpress/资源养成/',
                icon: 'hammer'
            },
            {
                text: '玩法活动',
                link: '/wordpress/玩法活动/',
                icon: 'play'
            },
            {
                text: '站点工具',
                link: '/wordpress/站点工具/',
                icon: 'tools'
            }
        ]
    },
    {
        text: '启动器',
        children:[
            {
                text: '更新日志',
                link: '/subatamd/update',
                icon: 'sun'
            },{
                text: '前往下载',
                link: '/subatamd/download',
                icon: 'download'
            },{
                text: '使用说明',
                link: '/subatamd/introduction',
                icon: 'book'
            },{
                text: '常见问题',
                link: '/subatamd/question',
                icon: 'question'
            }
        ]
    },
    {
        text: '网站工具',
        children:[
            {
                text: '宠物计算器',
                link: '/subata-tools/index3',
                icon: 'calculator'
            },
            {
                text: '皇冠答题',
                link: '/subata-tools/index4',
                icon: 'question-circle'
            },
            {
                text: '卡包抽卡',
                link: '/subata-tools/index5',
                icon: 'box-open'
            },
            {
                text: '物品图鉴',
                link: '/subata-tools/index6',
                icon: 'book-open'
            }
        ]
    },
    // {
    //     text: '商城',
    //     children:[
    //         {
    //             text: '中文',
    //             link: '/shop/zh-CN',
    //             icon: 'chinese'
    //         },{
    //             text: 'English',
    //             link: '/shop/en-US',
    //             icon: 'english'
    //         }
    //     ]
    // }
]);
