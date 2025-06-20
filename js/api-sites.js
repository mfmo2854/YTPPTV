// API站点配置 - 在前端和后端共享
const API_SITES = {
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    dyttzy:  {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
     xiaomaomi: {
         api: 'https://zy.xiaomaomi.cc/api.php/provide/vod',
         name: '小猫咪资源',
     },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
     // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
     ckzy: {
         api: 'https://ckzy.me/api.php/provide/vod',
         name: 'CK资源',
         adult: true
     },
     jkun: {
         api: 'https://jkunzyapi.com/api.php/provide/vod',
         name: 'jkun资源',
         adult: true
     },
     bwzy: {
         api: 'https://api.bwzym3u8.com/api.php/provide/vod',
         name: '百万资源',
         adult: true
     },
     souav: {
         api: 'https://api.souavzy.vip/api.php/provide/vod',
         name: 'souav资源',
         adult: true
     },
     r155: {
         api: 'https://155api.com/api.php/provide/vod',
         name: '155资源',
         adult: true
     },
     lsb: {
         api: 'https://apilsbzy1.com/api.php/provide/vod',
         name: 'lsb资源',
         adult: true
     },
     huangcang: {
         api: 'https://hsckzy.vip/api.php/provide/vod/from/hsckyun/at/json',
         name: '黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'https://apiyutu.com/api.php/provide/vod',
         name: '玉兔资源',
         adult: true
     },
     nxzy: {
         api: 'https://naixxzy.com/api.php/provide/vod',
         name: '奶香资源',
         adult: true
     },
     taohua: {
         api: 'https://thzy1.me/api.php/provide/vod',
         name: '桃花资源',
         adult: true
     },
     siwa: {
         api: 'https://www.siwazyw.tv/api.php/provide/vod/at/json',
         name: '丝袜资源',
         adult: true
     },
     caoliu: {
         api: 'https://www.caoliuzyw.com/api.php/provide/vod/at/json',
         name: '草榴资源',
         adult: true
     },
     fanhao: {
         api: 'http://fhapi9.com/api.php/provide/vod',
         name: '番号资源',
         adult: true
     },
     senlin: {
         api: 'https://slapibf.com/api.php/provide/vod',
         name: '森林资源',
         adult: true
     },
     slyuan: {
         api: 'https://xxavs.com/api.php/provide/vod',
         name: '湿乐园',
         adult: true
     },
     yyzyuan: {
         api: 'https://a.uezy.pw/api.php/provide/vod',
         name: '优异资源',
         adult: true
     },
     jumzy: {
         api: 'https://to.to-long.com/api.php/provide/vod',
         name: '橘猫资源',
         adult: true
     },
     lbzy: {
         api: 'https://lbapi9.com/api.php/provide/vod',
         name: '乐播资源',
         adult: true
     },
     didizy: {
         api: 'https://api.ddapi.cc/api.php/provide/vod',
         name: '滴滴资源',
         adult: true
     },

    // 下面是资源失效率高的API源，不建议使用
     subo: {
         api: 'https://subocaiji.com/api.php/provide/vod',
         name: '速播资源'
     },
     fczy: {
         api: 'https://api.fczy888.me/api.php/provide/vod',
         name: '蜂巢资源'
     },
     ukzy: {
         api: 'https://api.ukuapi88.com/api.php/provide/vod',
         name: 'U酷资源'
     },
     yjxmt: {
         api: 'https://mov.5ixmt.com/api.php/provide/vod',
         name: '遇见小馒头'
     },
     lzzy: {
         api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
         name: '量子資源'
     },
     gszy: {
         api: 'https://api.guangsuapi.com/api.php/provide/vod',
         name: '光速资源'
     },
     hhzy: {
         api: 'https://hhzyapi.com/api.php/provide/vod',
         name: '火狐资源'
     },
     xlzy: {
         api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod',
         name: '新浪资源'
     },
     sjyis: {
         api: 'https://www.394tv.com/api.php/provide/vod',
         name: '39影视'
     },
     plys: {
         api: 'https://p2100.net/api.php/provide/vod',
         name: '飘零影视'
     },
     jyyszy: {
         api: 'https://jyzyapi.com/provide/vod',
         name: '金鹰资源'
     },
};

// 在Node.js环境中导出为模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_SITES;
} 
