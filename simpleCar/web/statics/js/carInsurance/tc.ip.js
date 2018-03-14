/* Taoche对象扩展IP定向功能，可作为二手车全站统一公用ip定向脚本。
 * 依赖脚本：tc.istype.js, tc.storage.js
 * create by：yuhf 
 * alter:刘建伟
 * Date:2017年2月27日17:19:08
 * Des：加入了全国 京津冀，云贵川
 * 注意：ipConfig是一个全局变量，用于全局配置，目前只设置了ip相关的配置，此配置对象在需要的页面头部写入 
*修改人：zhangyg
*修改时间：2017/11/16
*功能：增减全国选定逻辑
*约定：www.taohce.com?cn=1  当cn=1时，为全国
 */
; (function () {
    var tc = window.Taoche || {};//所有代码封装到 Taoche 对象下
    window.Taoche = tc;

    //当前是否是城市站(域名是城市站域名表示是城市站)
    tc.isCitySite = false;
    //所有城市信息，2017年1月11日前端优化结构改为 {id:201,big:1,name:"北京",spell:"beijing"}
    tc.allCitys = [ { "id": "0", "big": "1", "name": "全国", "spell": "quanguo" }, { "id": 901, "big": 1, "name": "石家庄", "spell": "shijiazhuang" }, { "id": 902, "big": 1, "name": "唐山", "spell": "tangshan" }, { "id": 905, "big": 1, "name": "秦皇岛", "spell": "qinhuangdao" }, { "id": 907, "big": 1, "name": "邯郸", "spell": "handan" }, { "id": 903, "big": 1, "name": "邢台", "spell": "xingtai" }, { "id": 910, "big": 1, "name": "保定", "spell": "baoding" }, { "id": 911, "big": 1, "name": "张家口", "spell": "zhangjiakou" }, { "id": 912, "big": 1, "name": "承德", "spell": "chengde" }, { "id": 909, "big": 1, "name": "沧州", "spell": "cangzhou" }, { "id": 906, "big": 1, "name": "廊坊", "spell": "langfang" }, { "id": 908, "big": 1, "name": "衡水", "spell": "hengshui" }, { "id": 2201, "big": 1, "name": "太原", "spell": "taiyuan" }, { "id": 2202, "big": 1, "name": "大同", "spell": "datong" }, { "id": 2218, "big": 1, "name": "阳泉", "spell": "yangquan" }, { "id": 2206, "big": 1, "name": "长治", "spell": "changzhi" }, { "id": 2203, "big": 1, "name": "晋城", "spell": "jincheng" }, { "id": 2219, "big": 1, "name": "朔州", "spell": "shuozhou" }, { "id": 2204, "big": 1, "name": "晋中", "spell": "jinzhong" }, { "id": 2207, "big": 1, "name": "运城", "spell": "yuncheng" }, { "id": 2210, "big": 1, "name": "忻州", "spell": "xinzhou" }, { "id": 2205, "big": 1, "name": "临汾", "spell": "linfen" }, { "id": 2227, "big": 1, "name": "吕梁", "spell": "lvliang" }, { "id": 1801, "big": 1, "name": "呼和浩特", "spell": "huhehaote" }, { "id": 1802, "big": 1, "name": "包头", "spell": "baotou" }, { "id": 1805, "big": 1, "name": "乌海", "spell": "wuhai" }, { "id": 1803, "big": 1, "name": "赤峰", "spell": "chifeng" }, { "id": 1804, "big": 1, "name": "通辽", "spell": "tongliao" }, { "id": 1808, "big": 1, "name": "鄂尔多斯", "spell": "eerduosi" }, { "id": 1812, "big": 1, "name": "呼伦贝尔", "spell": "hulunbeier" }, { "id": 1824, "big": 1, "name": "巴彦淖尔", "spell": "bayannaoer" }, { "id": 1825, "big": 1, "name": "乌兰察布", "spell": "wulanchabu" }, { "id": 1814, "big": 1, "name": "兴安盟", "spell": "xinganmeng" }, { "id": 1829, "big": 1, "name": "锡林郭勒", "spell": "xilinguolemeng" }, { "id": 1830, "big": 1, "name": "阿拉善盟", "spell": "alashanmeng" }, { "id": 1401, "big": 3, "name": "长春", "spell": "changchun" }, { "id": 1402, "big": 3, "name": "吉林", "spell": "jilin" }, { "id": 3001, "big": 4, "name": "杭州", "spell": "hangzhou" }, { "id": 3002, "big": 4, "name": "宁波", "spell": "ningbo" }, { "id": 3003, "big": 4, "name": "温州", "spell": "wenzhou" }, { "id": 3005, "big": 4, "name": "嘉兴", "spell": "jiaxing" }, { "id": 3011, "big": 4, "name": "湖州", "spell": "huzhou" }, { "id": 3016, "big": 4, "name": "绍兴", "spell": "shaoxing" }, { "id": 3006, "big": 4, "name": "金华", "spell": "jinhua" }, { "id": 3012, "big": 4, "name": "衢州", "spell": "quzhou" }, { "id": 3020, "big": 4, "name": "舟山", "spell": "zhoushan" }, { "id": 3015, "big": 4, "name": "台州", "spell": "tz" }, { "id": 3009, "big": 4, "name": "丽水", "spell": "lishui" }, { "id": 125, "big": 4, "name": "亳州", "spell": "bozhou" }, { "id": 105, "big": 4, "name": "池州", "spell": "chizhou" }, { "id": 115, "big": 4, "name": "宣城", "spell": "xuancheng" }, { "id": 1601, "big": 5, "name": "南昌", "spell": "nanchang" }, { "id": 1612, "big": 5, "name": "景德镇", "spell": "jingdezhen" }, { "id": 1603, "big": 5, "name": "萍乡", "spell": "pingxiang" }, { "id": 1606, "big": 5, "name": "九江", "spell": "jiujiang" }, { "id": 1604, "big": 5, "name": "新余", "spell": "xinyu" }, { "id": 1615, "big": 5, "name": "鹰潭", "spell": "yingtan" }, { "id": 1607, "big": 5, "name": "赣州", "spell": "ganzhou" }, { "id": 1609, "big": 5, "name": "吉安", "spell": "jian" }, { "id": 1605, "big": 5, "name": "宜春", "spell": "yichun" }, { "id": 1613, "big": 5, "name": "抚州", "spell": "jxfz" }, { "id": 1602, "big": 5, "name": "上饶", "spell": "shangrao" }, { "id": 2301, "big": 2, "name": "西安", "spell": "xian" }, { "id": 2310, "big": 2, "name": "铜川", "spell": "tongchuan" }, { "id": 2305, "big": 2, "name": "宝鸡", "spell": "baoji" }, { "id": 2302, "big": 2, "name": "咸阳", "spell": "xianyang" }, { "id": 2303, "big": 2, "name": "渭南", "spell": "weinan" }, { "id": 2308, "big": 2, "name": "延安", "spell": "yanan" }, { "id": 2307, "big": 2, "name": "汉中", "spell": "hanzhong" }, { "id": 2304, "big": 2, "name": "榆林", "spell": "yl" }, { "id": 2306, "big": 2, "name": "安康", "spell": "ankang" }, { "id": 2313, "big": 2, "name": "商洛", "spell": "shangluo" }, { "id": 401, "big": 2, "name": "兰州", "spell": "lanzhou" }, { "id": 416, "big": 2, "name": "嘉峪关", "spell": "jiayuguan" }, { "id": 417, "big": 2, "name": "金昌", "spell": "jinchang" }, { "id": 418, "big": 2, "name": "白银", "spell": "baiyin" }, { "id": 415, "big": 2, "name": "天水", "spell": "tianshui" }, { "id": 412, "big": 2, "name": "武威", "spell": "wuwei" }, { "id": 410, "big": 2, "name": "张掖", "spell": "zhangye" }, { "id": 405, "big": 2, "name": "平凉", "spell": "pingliang" }, { "id": 409, "big": 2, "name": "酒泉", "spell": "jiuquan" }, { "id": 411, "big": 2, "name": "庆阳", "spell": "qingyang" }, { "id": 402, "big": 2, "name": "定西", "spell": "dingxi" }, { "id": 421, "big": 2, "name": "陇南", "spell": "longnan" }, { "id": 622900, "big": 2, "name": "临夏", "spell": "linxia" }, { "id": 422, "big": 2, "name": "甘南", "spell": "gannan" }, { "id": 2001, "big": 2, "name": "西宁", "spell": "xining" }, { "id": 2029, "big": 2, "name": "海东", "spell": "haidongdiqu" }, { "id": 2023, "big": 2, "name": "海北", "spell": "haibei" }, { "id": 2024, "big": 2, "name": "黄南", "spell": "huangnan" }, { "id": 2030, "big": 2, "name": "海南", "spell": "hainanzangzuzizhizho" }, { "id": 2025, "big": 2, "name": "果洛", "spell": "guoluo" }, { "id": 2026, "big": 2, "name": "玉树", "spell": "yushu" }, { "id": 2027, "big": 2, "name": "海西", "spell": "haixi" }, { "id": 1901, "big": 2, "name": "银川", "spell": "yinchuan" }, { "id": 1905, "big": 2, "name": "石嘴山", "spell": "shizuishan" }, { "id": 1902, "big": 2, "name": "吴忠", "spell": "wuzhong" }, { "id": 1903, "big": 2, "name": "固原", "spell": "guyuan" }, { "id": 1907, "big": 2, "name": "中卫", "spell": "zhongwei" }, { "id": 2801, "big": 2, "name": "乌鲁木齐", "spell": "wulumuqi" }, { "id": 2803, "big": 2, "name": "克拉玛依", "spell": "kelamayi" }, { "id": 2810, "big": 2, "name": "石河子", "spell": "shihezi" }, { "id": 2832, "big": 2, "name": "吐鲁番", "spell": "tulufandiqu" }, { "id": 2833, "big": 2, "name": "哈密", "spell": "hamidiqu" }, { "id": 652300, "big": 2, "name": "昌吉", "spell": "changji" }, { "id": 2821, "big": 2, "name": "博尔塔拉", "spell": "boertala" }, { "id": 2822, "big": 2, "name": "巴音郭楞", "spell": "bazhou" }, { "id": 2829, "big": 2, "name": "阿克苏", "spell": "akesudiqu" }, { "id": 2835, "big": 2, "name": "新疆克州", "spell": "xinjiangkezhou" }, { "id": 2828, "big": 2, "name": "喀什", "spell": "kashidiqu" }, { "id": 2830, "big": 2, "name": "和田", "spell": "hetiandiqu" }, { "id": 2823, "big": 2, "name": "伊犁", "spell": "yili" }, { "id": 2831, "big": 2, "name": "塔城", "spell": "tachengdiqu" }, { "id": 2834, "big": 2, "name": "阿勒泰", "spell": "aletaidiqu" }, { "id": 659000, "big": 2, "name": "新疆直辖", "spell": "xinjiangzhixiaxian" }, { "id": 1301, "big": 5, "name": "长沙", "spell": "changsha" }, { "id": 1307, "big": 5, "name": "株洲", "spell": "zhuzhou" }, { "id": 1309, "big": 5, "name": "湘潭", "spell": "xiangtan" }, { "id": 1304, "big": 5, "name": "衡阳", "spell": "hengyang" }, { "id": 1310, "big": 5, "name": "邵阳", "spell": "shaoyang" }, { "id": 1308, "big": 5, "name": "岳阳", "spell": "yueyang" }, { "id": 1303, "big": 5, "name": "常德", "spell": "changde" }, { "id": 1315, "big": 5, "name": "张家界", "spell": "zhangjiajie" }, { "id": 1313, "big": 5, "name": "益阳", "spell": "yiyang" }, { "id": 1302, "big": 5, "name": "郴州", "spell": "chenzhou" }, { "id": 1312, "big": 5, "name": "永州", "spell": "yongzhou" }, { "id": 1305, "big": 5, "name": "怀化", "spell": "huaihua" }, { "id": 1306, "big": 5, "name": "娄底", "spell": "loudi" }, { "id": 1333, "big": 5, "name": "湘西", "spell": "xiangxi" }, { "id": 501, "big": 7, "name": "广州", "spell": "guangzhou" }, { "id": 511, "big": 7, "name": "韶关", "spell": "shaoguan" }, { "id": 502, "big": 7, "name": "深圳", "spell": "shenzhen" }, { "id": 503, "big": 7, "name": "珠海", "spell": "zhuhai" }, { "id": 507, "big": 7, "name": "汕头", "spell": "shantou" }, { "id": 518, "big": 7, "name": "佛山", "spell": "foshan" }, { "id": 521, "big": 7, "name": "江门", "spell": "jiangmen" }, { "id": 513, "big": 7, "name": "湛江", "spell": "zhanjiang" }, { "id": 515, "big": 7, "name": "茂名", "spell": "maoming" }, { "id": 514, "big": 7, "name": "肇庆", "spell": "zhaoqing" }, { "id": 520, "big": 7, "name": "惠州", "spell": "huizhou" }, { "id": 516, "big": 7, "name": "梅州", "spell": "meizhou" }, { "id": 552, "big": 7, "name": "汕尾", "spell": "shanwei" }, { "id": 535, "big": 7, "name": "河源", "spell": "heyuan" }, { "id": 532, "big": 7, "name": "阳江", "spell": "yangjiang" }, { "id": 524, "big": 7, "name": "清远", "spell": "qingyuan" }, { "id": 504, "big": 7, "name": "东莞", "spell": "dongguan" }, { "id": 505, "big": 7, "name": "中山", "spell": "zhongshan" }, { "id": 510, "big": 7, "name": "潮州", "spell": "chaozhou" }, { "id": 522, "big": 7, "name": "揭阳", "spell": "jieyang" }, { "id": 528, "big": 7, "name": "云浮", "spell": "yunfu" }, { "id": 601, "big": 7, "name": "南宁", "spell": "nanning" }, { "id": 602, "big": 7, "name": "柳州", "spell": "liuzhou" }, { "id": 603, "big": 7, "name": "桂林", "spell": "guilin" }, { "id": 613, "big": 7, "name": "梧州", "spell": "wuzhou" }, { "id": 604, "big": 7, "name": "北海", "spell": "beihai" }, { "id": 615, "big": 7, "name": "防城港", "spell": "fangchenggang" }, { "id": 612, "big": 7, "name": "钦州", "spell": "qinzhou" }, { "id": 608, "big": 7, "name": "贵港", "spell": "guigang" }, { "id": 610, "big": 7, "name": "玉林", "spell": "yulin" }, { "id": 605, "big": 7, "name": "百色", "spell": "baise" }, { "id": 606, "big": 7, "name": "贺州", "spell": "hezhou" }, { "id": 607, "big": 7, "name": "河池", "spell": "hechi" }, { "id": 619, "big": 7, "name": "来宾", "spell": "laibin" }, { "id": 621, "big": 7, "name": "崇左", "spell": "chongzuo" }, { "id": 801, "big": 7, "name": "海口", "spell": "haikou" }, { "id": 803, "big": 7, "name": "三亚", "spell": "sanya" }, { "id": 460300, "big": 7, "name": "三沙", "spell": "sanshashi" }, { "id": 810, "big": 7, "name": "琼北", "spell": "qiongbeidiqu" }, { "id": 811, "big": 7, "name": "琼南", "spell": "qiongnandiqu" }, { "id": 469000, "big": 7, "name": "海南直辖", "spell": "hainanzhixiaxian" }, { "id": 2501, "big": 6, "name": "成都", "spell": "chengdu" }, { "id": 2508, "big": 6, "name": "自贡", "spell": "zigong" }, { "id": 2504, "big": 6, "name": "攀枝花", "spell": "panzhihua" }, { "id": 2517, "big": 6, "name": "泸州", "spell": "luzhou" }, { "id": 2511, "big": 6, "name": "德阳", "spell": "deyang" }, { "id": 2502, "big": 6, "name": "绵阳", "spell": "mianyang" }, { "id": 2510, "big": 6, "name": "广元", "spell": "guangyuan" }, { "id": 2503, "big": 6, "name": "遂宁", "spell": "suining" }, { "id": 2519, "big": 6, "name": "内江", "spell": "neijiang" }, { "id": 2512, "big": 6, "name": "乐山", "spell": "leshan" }, { "id": 2513, "big": 6, "name": "南充", "spell": "nanchong" }, { "id": 2514, "big": 6, "name": "眉山", "spell": "meishan" }, { "id": 2506, "big": 6, "name": "宜宾", "spell": "yibin" }, { "id": 2530, "big": 6, "name": "广安", "spell": "guangan" }, { "id": 2532, "big": 6, "name": "达州", "spell": "dazhou" }, { "id": 2507, "big": 6, "name": "雅安", "spell": "yaan" }, { "id": 2516, "big": 6, "name": "巴中", "spell": "bazhong" }, { "id": 2509, "big": 6, "name": "资阳", "spell": "ziyang" }, { "id": 2535, "big": 6, "name": "阿坝", "spell": "aba" }, { "id": 2536, "big": 6, "name": "甘孜", "spell": "ganzi" }, { "id": 2537, "big": 6, "name": "凉山", "spell": "liangshan" }, { "id": 701, "big": 6, "name": "贵阳", "spell": "guiyang" }, { "id": 708, "big": 6, "name": "六盘水", "spell": "liupanshui" }, { "id": 702, "big": 6, "name": "遵义", "spell": "zunyi" }, { "id": 705, "big": 6, "name": "安顺", "spell": "anshun" }, { "id": 719, "big": 6, "name": "铜仁", "spell": "tongrendiqu" }, { "id": 718, "big": 6, "name": "黔西南", "spell": "qianxinan" }, { "id": 717, "big": 6, "name": "毕节", "spell": "bijiediqu" }, { "id": 714, "big": 6, "name": "黔东南", "spell": "qiandongnan" }, { "id": 715, "big": 6, "name": "黔南", "spell": "qiannan" }, { "id": 2901, "big": 6, "name": "昆明", "spell": "kunming" }, { "id": 2903, "big": 6, "name": "曲靖", "spell": "qujing" }, { "id": 2902, "big": 6, "name": "玉溪", "spell": "yuxi" }, { "id": 2907, "big": 6, "name": "保山", "spell": "baoshan" }, { "id": 2918, "big": 6, "name": "昭通", "spell": "zhaotong" }, { "id": 2922, "big": 6, "name": "丽江", "spell": "lijiang" }, { "id": 2929, "big": 6, "name": "普洱", "spell": "puer" }, { "id": 2911, "big": 6, "name": "临沧", "spell": "lincang" }, { "id": 532300, "big": 6, "name": "楚雄", "spell": "chuxiong" }, { "id": 2923, "big": 6, "name": "红河", "spell": "honghe" }, { "id": 2914, "big": 6, "name": "文山", "spell": "wenshan" }, { "id": 2915, "big": 6, "name": "西双版纳", "spell": "xishuangbanna" }, { "id": 532900, "big": 6, "name": "大理", "spell": "dali" }, { "id": 2925, "big": 6, "name": "德宏", "spell": "dehong" }, { "id": 2927, "big": 6, "name": "怒江", "spell": "nujiang" }, { "id": 2928, "big": 6, "name": "迪庆", "spell": "diqing" }, { "id": 1616, "big": 3, "name": "四平", "spell": "siping" }, { "id": 1405, "big": 3, "name": "辽源", "spell": "liaoyuan" }, { "id": 1403, "big": 3, "name": "通化", "spell": "tonghua" }, { "id": 1406, "big": 3, "name": "白山", "spell": "baishan" }, { "id": 1425, "big": 3, "name": "松原", "spell": "songyuan" }, { "id": 1412, "big": 3, "name": "白城", "spell": "baicheng" }, { "id": 1428, "big": 3, "name": "延边", "spell": "yanbian" }, { "id": 1101, "big": 3, "name": "哈尔滨", "spell": "haerbin" }, { "id": 1103, "big": 3, "name": "齐齐哈尔", "spell": "qiqihaer" }, { "id": 1107, "big": 3, "name": "鸡西", "spell": "jixi" }, { "id": 1104, "big": 3, "name": "鹤岗", "spell": "hegang" }, { "id": 1123, "big": 3, "name": "双鸭山", "spell": "shuangyashan" }, { "id": 1102, "big": 3, "name": "大庆", "spell": "daqing" }, { "id": 1112, "big": 3, "name": "伊春", "spell": "yc" }, { "id": 1106, "big": 3, "name": "佳木斯", "spell": "jiamusi" }, { "id": 1109, "big": 3, "name": "七台河", "spell": "qitaihe" }, { "id": 1108, "big": 3, "name": "牡丹江", "spell": "mudanjiang" }, { "id": 1113, "big": 3, "name": "黑河", "spell": "heihe" }, { "id": 1131, "big": 3, "name": "绥化", "spell": "suihua" }, { "id": 1136, "big": 3, "name": "大兴安岭", "spell": "daxinganlingdiqu" }, { "id": 2401, "big": 4, "name": "上海", "spell": "shanghai" }, { "id": 2601, "big": 1, "name": "天津", "spell": "tianjin" }, { "id": 3101, "big": 6, "name": "重庆", "spell": "chongqing" }, { "id": 1501, "big": 4, "name": "南京", "spell": "nanjing" }, { "id": 1503, "big": 4, "name": "无锡", "spell": "wuxi" }, { "id": 1518, "big": 4, "name": "徐州", "spell": "xuzhou" }, { "id": 1505, "big": 4, "name": "常州", "spell": "changzhou" }, { "id": 1502, "big": 4, "name": "苏州", "spell": "suzhou" }, { "id": 1511, "big": 4, "name": "南通", "spell": "nantong" }, { "id": 1510, "big": 4, "name": "连云港", "spell": "lianyungang" }, { "id": 1507, "big": 4, "name": "淮安", "spell": "huaian" }, { "id": 1512, "big": 4, "name": "盐城", "spell": "yancheng" }, { "id": 1513, "big": 4, "name": "扬州", "spell": "yangzhou" }, { "id": 1515, "big": 4, "name": "镇江", "spell": "zhenjiang" }, { "id": 1517, "big": 4, "name": "泰州", "spell": "taizhou" }, { "id": 1520, "big": 4, "name": "宿迁", "spell": "suqian" }, { "id": 2701, "big": 6, "name": "拉萨", "spell": "lasa" }, { "id": 2709, "big": 6, "name": "昌都", "spell": "changdudiqu" }, { "id": 2704, "big": 6, "name": "山南", "spell": "shannan" }, { "id": 2703, "big": 6, "name": "日喀则", "spell": "rikazediqu" }, { "id": 2705, "big": 6, "name": "那曲", "spell": "naqudiqu" }, { "id": 2707, "big": 6, "name": "阿里", "spell": "alidiqu" }, { "id": 2710, "big": 6, "name": "林芝", "spell": "linzhidiqu" }, { "id": 101, "big": 4, "name": "合肥", "spell": "hefei" }, { "id": 114, "big": 4, "name": "芜湖", "spell": "wuhu" }, { "id": 103, "big": 4, "name": "蚌埠", "spell": "bengbu" }, { "id": 108, "big": 4, "name": "淮南", "spell": "huainan" }, { "id": 110, "big": 4, "name": "马鞍山", "spell": "maanshan" }, { "id": 107, "big": 4, "name": "淮北", "spell": "huaibei" }, { "id": 113, "big": 4, "name": "铜陵", "spell": "tongling" }, { "id": 102, "big": 4, "name": "安庆", "spell": "anqing" }, { "id": 118, "big": 4, "name": "黄山", "spell": "huangshan" }, { "id": 116, "big": 4, "name": "滁州", "spell": "chuzhou" }, { "id": 106, "big": 4, "name": "阜阳", "spell": "fuyang" }, { "id": 120, "big": 4, "name": "宿州", "spell": "sz" }, { "id": 104, "big": 4, "name": "巢湖", "spell": "chaohu" }, { "id": 109, "big": 4, "name": "六安", "spell": "luan" }, { "id": 301, "big": 4, "name": "福州", "spell": "fuzhou" }, { "id": 302, "big": 4, "name": "厦门", "spell": "xiamen" }, { "id": 306, "big": 4, "name": "莆田", "spell": "putian" }, { "id": 318, "big": 4, "name": "三明", "spell": "sanming" }, { "id": 307, "big": 4, "name": "泉州", "spell": "quanzhou" }, { "id": 305, "big": 4, "name": "漳州", "spell": "zhangzhou" }, { "id": 314, "big": 4, "name": "南平", "spell": "nanping" }, { "id": 303, "big": 4, "name": "龙岩", "spell": "longyan" }, { "id": 315, "big": 4, "name": "宁德", "spell": "ningde" }, { "id": 2101, "big": 4, "name": "济南", "spell": "jinan" }, { "id": 2102, "big": 4, "name": "青岛", "spell": "qingdao" }, { "id": 2109, "big": 4, "name": "淄博", "spell": "zibo" }, { "id": 2107, "big": 4, "name": "枣庄", "spell": "zaozhuang" }, { "id": 2110, "big": 4, "name": "东营", "spell": "dongying" }, { "id": 2103, "big": 4, "name": "烟台", "spell": "yantai" }, { "id": 2105, "big": 4, "name": "潍坊", "spell": "weifang" }, { "id": 2118, "big": 4, "name": "济宁", "spell": "jining" }, { "id": 2106, "big": 4, "name": "泰安", "spell": "taian" }, { "id": 2104, "big": 4, "name": "威海", "spell": "weihai" }, { "id": 2120, "big": 4, "name": "日照", "spell": "rizhao" }, { "id": 2132, "big": 4, "name": "莱芜", "spell": "laiwu" }, { "id": 2117, "big": 4, "name": "临沂", "spell": "linyi" }, { "id": 1015, "big": 4, "name": "德州", "spell": "dezhou" }, { "id": 2114, "big": 4, "name": "聊城", "spell": "liaocheng" }, { "id": 2113, "big": 4, "name": "滨州", "spell": "binzhou" }, { "id": 2112, "big": 4, "name": "菏泽", "spell": "heze" }, { "id": 1001, "big": 5, "name": "郑州", "spell": "zhengzhou" }, { "id": 1013, "big": 5, "name": "开封", "spell": "kaifeng" }, { "id": 1002, "big": 5, "name": "洛阳", "spell": "luoyang" }, { "id": 1018, "big": 5, "name": "平顶山", "spell": "pingdingshan" }, { "id": 1019, "big": 5, "name": "济源", "spell": "jiyuan" }, { "id": 1014, "big": 5, "name": "安阳", "spell": "anyang" }, { "id": 1016, "big": 5, "name": "鹤壁", "spell": "hebi" }, { "id": 1005, "big": 5, "name": "新乡", "spell": "xinxiang" }, { "id": 1011, "big": 5, "name": "焦作", "spell": "jiaozuo" }, { "id": 1008, "big": 5, "name": "濮阳", "spell": "puyang" }, { "id": 1023, "big": 5, "name": "许昌", "spell": "xuchang" }, { "id": 1010, "big": 5, "name": "漯河", "spell": "luohe" }, { "id": 1007, "big": 5, "name": "三门峡", "spell": "sanmenxia" }, { "id": 1009, "big": 5, "name": "南阳", "spell": "nanyang" }, { "id": 1006, "big": 5, "name": "商丘", "spell": "shangqiu" }, { "id": 1004, "big": 5, "name": "信阳", "spell": "xinyang" }, { "id": 1003, "big": 5, "name": "周口", "spell": "zhoukou" }, { "id": 1021, "big": 5, "name": "驻马店", "spell": "zhumadian" }, { "id": 419000, "big": 5, "name": "河南直辖", "spell": "henanzhixiaxian" }, { "id": 1201, "big": 5, "name": "武汉", "spell": "wuhan" }, { "id": 1208, "big": 5, "name": "黄石", "spell": "huangshi" }, { "id": 1202, "big": 5, "name": "十堰", "spell": "shiyan" }, { "id": 1207, "big": 5, "name": "宜昌", "spell": "yichang" }, { "id": 1203, "big": 5, "name": "襄阳", "spell": "xiangfan" }, { "id": 1216, "big": 5, "name": "鄂州", "spell": "ezhou" }, { "id": 1209, "big": 5, "name": "荆门", "spell": "jingmen" }, { "id": 1229, "big": 5, "name": "孝感", "spell": "xiaogan" }, { "id": 1210, "big": 5, "name": "荆州", "spell": "jingzhou" }, { "id": 1236, "big": 5, "name": "黄冈", "spell": "huanggang" }, { "id": 1217, "big": 5, "name": "咸宁", "spell": "xianning" }, { "id": 1219, "big": 5, "name": "潜江", "spell": "qianjiang" }, { "id": 1204, "big": 5, "name": "随州", "spell": "suizhou" }, { "id": 1205, "big": 5, "name": "仙桃", "spell": "xiantao" }, { "id": 1206, "big": 5, "name": "天门", "spell": "tianmen" }, { "id": 422800, "big": 5, "name": "恩施", "spell": "enshi" }, { "id": 429000, "big": 5, "name": "湖北直辖", "spell": "hubeizhixiaxian" }, { "id": 201, "big": 1, "name": "北京", "spell": "beijing" }, { "id": 1701, "big": 3, "name": "沈阳", "spell": "shenyang" }, { "id": 1708, "big": 3, "name": "大连", "spell": "dalian" }, { "id": 1710, "big": 3, "name": "鞍山", "spell": "anshan" }, { "id": 1703, "big": 3, "name": "抚顺", "spell": "fushun" }, { "id": 1709, "big": 3, "name": "本溪", "spell": "benxi" }, { "id": 1702, "big": 3, "name": "丹东", "spell": "dandong" }, { "id": 1711, "big": 3, "name": "锦州", "spell": "jinzhou" }, { "id": 1714, "big": 3, "name": "营口", "spell": "yingkou" }, { "id": 1704, "big": 3, "name": "阜新", "spell": "fuxin" }, { "id": 1713, "big": 3, "name": "辽阳", "spell": "liaoyang" }, { "id": 1716, "big": 3, "name": "盘锦", "spell": "panjin" }, { "id": 1717, "big": 3, "name": "铁岭", "spell": "tieling" }, { "id": 1707, "big": 3, "name": "朝阳", "spell": "chaoyang" }, { "id": 1705, "big": 3, "name": "葫芦岛", "spell": "huludao" }, { "id": 1, "big": 4, "name": "安徽", "spell": "anhui" }, { "id": 3, "big": 4, "name": "福建", "spell": "fujian" }, { "id": 4, "big": 2, "name": "甘肃", "spell": "gansu" }, { "id": 5, "big": 7, "name": "广东", "spell": "guangdong" }, { "id": 6, "big": 7, "name": "广西", "spell": "guangxi" }, { "id": 7, "big": 6, "name": "贵州", "spell": "guizhou" }, { "id": 8, "big": 7, "name": "海南", "spell": "hainan" }, { "id": 9, "big": 1, "name": "河北", "spell": "hebei" }, { "id": 10, "big": 5, "name": "河南", "spell": "henan" }, { "id": 11, "big": 3, "name": "黑龙江", "spell": "heilongjiang" }, { "id": 12, "big": 5, "name": "湖北", "spell": "hubei" }, { "id": 13, "big": 5, "name": "湖南", "spell": "hunan" }, { "id": 14, "big": 3, "name": "吉林", "spell": "jl" }, { "id": 15, "big": 4, "name": "江苏", "spell": "jiangsu" }, { "id": 16, "big": 5, "name": "江西", "spell": "jiangxi" }, { "id": 17, "big": 3, "name": "辽宁", "spell": "liaoning" }, { "id": 18, "big": 1, "name": "内蒙古", "spell": "neimenggu" }, { "id": 19, "big": 2, "name": "宁夏", "spell": "ningxia" }, { "id": 20, "big": 2, "name": "青海", "spell": "qinghai" }, { "id": 21, "big": 4, "name": "山东", "spell": "shandong" }, { "id": 22, "big": 1, "name": "山西", "spell": "shanxi" }, { "id": 23, "big": 2, "name": "陕西", "spell": "shaanxi" }, { "id": 25, "big": 6, "name": "四川", "spell": "sichuan" }, { "id": 27, "big": 6, "name": "西藏", "spell": "xizang" }, { "id": 28, "big": 2, "name": "新疆", "spell": "xinjiang" }, { "id": 29, "big": 6, "name": "云南", "spell": "yunnan" }, { "id": 30, "big": 4, "name": "浙江", "spell": "zhejiang" }, { "id": 33, "big": "1", "name": "京津冀", "spell": "jjj" }, { "id": 34, "big": "1", "name": "江浙沪", "spell": "jzh" }, { "id": 35, "big": "1", "name": "珠三角", "spell": "zsj" }, { "id": 36, "big": "1", "name": "长三角", "spell": "csj" }, { "id": 37, "big": "1", "name": "云贵川", "spell": "ygc" } ];

    //IP定位功能模块
    tc.IpLocation = {
        cityId: 0,//定位城市ID
        bigAreaId: 1,//大区ID
        cityName: "全国",//定位城市名称
        citySpell: "quanguo",//定位城市拼音
        //用于记录定位城市ID的Cookie名称，如需更改必须与服务端保持同步更改
        ipCityCookieKey: "t_city",
        //指示当前是否已完成定位
        isLocation: false,
        //用于存放定位成功后才执行的函数列表，按序执行
        _callBacks: [],
        //定位成功后才执行的函数，由于使用jsonp异步获取定位，所以依赖定位信息的相关脚本可以放在此函数中回调处理，以保证定位相关信息已完成初始化
        afterLocation: function (func) {
            if (!tc.isFunc(func)) return;
            if (this.isLocation && this._callBacks.length == 0) {//已经定位成功并且不存在未执行的函数则直接执行此函数
                func();
                return;
            }
            //否则将函数追加到待执行列表中
            this._callBacks.push(func);
        },
        getCityInfo: function (cityId) {//从所有城市数据(Taoche.allCitys)中获取指定城市的信息
            for (var i = 0, lt = tc.allCitys; i < lt.length; i++) {
                if (lt[i].id == cityId) {
                    return { cityId: lt[i].id, bigAreaId: lt[i].big, cityName: lt[i].name, citySpell: lt[i].spell, isProvince: lt[i].id < 100 };
                }
            }
            return { cityId: this.AreaId, bigAreaId: this.bigAreaId, cityName: this.cityName, citySpell: this.citySpell, isProvince: false };
        },
        getProvinceId: function (cityId) {//获取当前定位城市的省份信息
            var ctid = parseInt(cityId);
            if (ctid < 100) return ctid;
            if (ctid >= 100 && ctid <= 999) return cityId.toString().substr(0, 1);
            if (ctid >= 1000 && ctid < 10000) return cityId.toString().substr(0, 2);
            switch (ctid) {
                case 622900: return 4;
                case 422800: return 12;
                case 652300: return 28;
                case 532300: return 29;
                case 532900: return 29;
                case 469000: return 8;
                case 429000: return 12;
                case 419000: return 10;
                case 659000: return 28;
                default: return ctid;
            }
        },
        //获取当前定位城市对应的省份ID
        GetCurrentProvinceId: function () { return this.getProvinceId(this.cityId); },
        //根据国标码查找对应城市Id（目的是兼容新车部分城市采用城市国标码）, 先判断是否是城市国标码，如果不是返回原值，如果是返回易鑫城市Id
        GetCityIdByRegionId: function (regionId) {
            if (!regionId)
                return regionId;
            if (regionId.length <= 4) {
                return regionId;
            }
            var cityCode = parseInt(regionId);
            switch (cityCode) {
                case 419000: return 1019;   //河南济源
                case 429000: return 1206;   //湖南天门
                case 659000: return 2810;   //新疆石河子
                default: return regionId;
            }
        },
        //设置定位城市信息
        _setLocationCity: function (cityId) {
            var city = this.getCityInfo(cityId);
            this.cityId = city.cityId;
            this.bigAreaId = city.bigAreaId;
            this.cityName = city.cityName;
            this.citySpell = city.citySpell;
            this.isLocation = true;//设置定位已完成标识
            //按序执行定位后回调函数列表
            for (var i = 0, callLen = this._callBacks.length; i < callLen; i++) {
                this._callBacks[i]();
            }
            this._callBacks = [];//全部执行后清空回调函数列表
        },
        //设置新车定位城市信息
        _setXincheLocationCity: function () {
            var city = !!window.city ? window.city : { "CityId": 201, "RegionId": 110100, "CityName": "北京", "CitySpell": "beijing", "ProvinceId": 2, "ProvinceName": "北京市" };;
            this.cityId = city.CityId;
            this.bigAreaId = 0;
            this.cityName = city.CityName;
            this.citySpell = city.CitySpell;
            this.isLocation = true;//设置定位已完成标识
            //修改cookie
            tc.Storage.setCookie(this.ipCityCookieKey, this.cityId, this.expire, '/', tc.domain.cookie);
            //按序执行定位后回调函数列表
            for (var i = 0, callLen = this._callBacks.length; i < callLen; i++) {
                this._callBacks[i]();
            }
            this._callBacks = [];//全部执行后清空回调函数列表
        },
        //在客户端记录IP定位的城市ID，有效期24小时
        saveIpCity: function (cityId) {
            var expire = ((typeof ipConfig != 'undefined') && !!ipConfig.gps) ? ipConfig.expire : 24;
            tc.Storage.setCookie(this.ipCityCookieKey, cityId, expire, '/', tc.domain.cookie);
            this._setLocationCity(cityId);
        },
        locationByIp: function () {
            //跨域异步请求ip定向信息
            try {
                var stag = document.createElement('script');
                stag.type = "text/javascript";
                document.getElementsByTagName('head')[0].appendChild(stag);
                stag.src = '//ajax.taoche.cn/city/getcitybyip.ashx?jsonp=1&callback=Taoche.IpLocation.saveIpCity&_r=' + Math.random();
            } catch (E) {
                tc.IpLocation.saveIpCity(this.cityId);
            }
            //5秒后定位请求尚未收到结果视为定位失败，执行默认处理
            var that = this;
            setTimeout(function () {
                if (that.isLocation) return;
                that.saveIpCity(that.cityId);
            }, 5000);
        },
        //初始化执行定位
        init: function () {
            var that = this;
            
            //直接访问城市站相当于用户手动定位，不再走IP定位
            var fd = location.hostname.toLowerCase().split('.')[0];//取出子域名

            var __query = location.search.substr(1),
            	__name='cn',
            	__reg = new RegExp("(^|&)" + __name + "=([^&]*)(&|$)", "i"), 
            	__m = __query.match(__reg),
            	__cn=0;
            if (__m != null)  __cn= unescape(__m[2]);
            if (__cn == 1) {
                fd = "quanguo";
            }
            //判断是否是二手车城市站点
            for (var i = 0, lt = tc.allCitys, tcLen = lt.length; i < tcLen; i++) {
                if (lt[i].spell == fd) {//子域名是某个城市，则定位到此城市，不再走ip定位
                    tc.isCitySite = true;//当前为城市站
                    that.saveIpCity(lt[i].id);
                    return;
                }
            }

            //兼容新车城市选择和定位() Start//
            //规则说明：非城淘车市站，window.city对象有效且window.city.CityId有效时，将window.city.CityId值设置为cookie
            //city对象样例：{"CityId":2501,"RegionId":510100,"CityName":"成都","CitySpell":"chengdu","LocateResultType":0,"ClientIp":null,"ProvinceId":25,"ProvinceName":"四川","Longitude":"104.067923","Latitude":"30.679943"};
            if (!tc.isCitySite && !!window.city && !isNaN(window.city.CityId)) {
                that._setXincheLocationCity();
                return;
            }
            //兼容新车城市选择和定位 End//

            var val = tc.Storage.getCookie(that.ipCityCookieKey);//客户端存储中已有定位城市信息，不再走ip定位
            if (!!val && !isNaN(val)) {
                var cityId = that.GetCityIdByRegionId(val);
                that._setLocationCity(cityId);
                return;
            }

            //不存在定位信息，根据全局配置确定优先走GPS定向还是ip定向
            if (typeof ipConfig == 'undefined' || !ipConfig.gps) {//优先走IP定向逻辑
                that.locationByIp();
                return;
            }
            //优先走gps定位
            var gps = navigator.geolocation;
            if (!gps) {//gps调用失败，走ip定向
                that.locationByIp();
                return;
            }
            var _tms = null;
            if (navigator.userAgent && navigator.userAgent.indexOf('qqnews') > 0) {//腾讯新闻客户端浏览器
                _tms = setTimeout(function () { that.locationByIp(); }, 1000);//解决腾讯新闻客户端ios版不允许使用地理位置时首次加载页面 gps.getCurrentPosition() 方法被阻塞的问题
            }
            //支持HTML5 定位
            gps.getCurrentPosition(function (position) {
                if (_tms !== null) { clearTimeout(_tms); }
                if (position && position.coords) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    try {
                        var stag = document.createElement('script');
                        stag.type = "text/javascript";
                        document.getElementsByTagName('head')[0].appendChild(stag);
                        stag.src = '//ajax.taoche.cn/city/getcitybygps.ashx?callback=Taoche.IpLocation.saveIpCity&x=' + latitude + '&y=' + longitude + '&_r=' + Math.random();
                    } catch (E) {
                        that.locationByIp();
                    }
                } else {
                    that.locationByIp();
                }
            }, function () {
                if (_tms !== null) { clearTimeout(_tms); }
                that.locationByIp();
            }, {
                    enableHighAccuracy: false,
                    timeout: 1000,
                    maximumAge: 0
                });
        }
    };

    //定位后初始化环境变量
    tc.IpLocation.afterLocation(function () {
        tc.currentCityId = tc.IpLocation.cityId;//当前定位城市ID
        //modifier:zhangyg
        //date:2017/11/7 
        //seo不允许出现quanguo,修改为www
        if(tc.IpLocation.citySpell=="quanguo") 
        	tc.currentCitySpell	="www";
        else
        	tc.currentCitySpell = tc.IpLocation.citySpell;//当前定位城市拼音
        tc.currentCityName = tc.IpLocation.cityName;//当前定位城市名称
        //广告投放必需全局变量，对于省站除 宁夏,新疆,西藏,广西,内蒙古 外需要加省字
        var cid = tc.currentCityId;
        window.BitautoCityForAd = tc.currentCityName + ((cid == 18 || cid == 6 || cid == 27 || cid == 28 || cid == 19 || cid > 100) ? "" : "省");
    });
    //为Taoche对象附加 afterLocation 方法，功能同IpLocation.afterLocation，为了方便调用
    tc.afterLocation = function (func) {
        tc.IpLocation.afterLocation(func);
    };
    //ip定位初始化
    tc.IpLocation.init();
})();


/*兼容大数据脚本加载失败，自动种CIGDCID cookie yuhaf*/
!function(){var a=Taoche.Storage.getCookie("CIGDCID");if(!a){Taoche.Storage.setCookie("CIGDCID","abc"+new Date().getTime(),24,'/',Taoche.domain.cookie)}}();