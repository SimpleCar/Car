/*
SQLyog Professional v12.09 (64 bit)
MySQL - 5.7.16 : Database - simplecar
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`simplecar` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `simplecar`;

/*Table structure for table `business` */

DROP TABLE IF EXISTS `business`;

CREATE TABLE `business` (
  `bId` int(24) NOT NULL AUTO_INCREMENT,
  `bName` varchar(24) DEFAULT NULL COMMENT '商家名字',
  `bPwd` varchar(24) DEFAULT NULL COMMENT '商家密码',
  `bPhone` varchar(24) DEFAULT NULL COMMENT '商家手机号码',
  `bAdd` varchar(24) DEFAULT NULL COMMENT '商家地址',
  `imgUrl` varchar(24) DEFAULT NULL COMMENT '商家证件照',
  `bType` varchar(24) DEFAULT NULL COMMENT '商家类别',
  PRIMARY KEY (`bId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='商家信息表';

/*Data for the table `business` */

insert  into `business`(`bId`,`bName`,`bPwd`,`bPhone`,`bAdd`,`imgUrl`,`bType`) values (1,'长江4S店','123','13344445555','贵州省贵阳市','changjiang.jpg','4S店'),(2,'贵车','123','14455556666','云南省云安市','guiche.jpg','个人'),(3,'黄河4S店','123','15566665555','福建省福田区','huanghe.jpg','4S店'),(4,'控制台',NULL,'13737374848','贵州省遵义市',NULL,'个人');

/*Table structure for table `car` */

DROP TABLE IF EXISTS `car`;

CREATE TABLE `car` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(20) DEFAULT NULL COMMENT '名字',
  `cprice` float DEFAULT NULL COMMENT '价格',
  `cleavel` int(20) DEFAULT NULL COMMENT '级别 0是跑车 1是豪车',
  `cvariety` varchar(20) DEFAULT NULL COMMENT '品种',
  `cstock` int(10) DEFAULT NULL COMMENT '存货',
  `cmin` float DEFAULT NULL COMMENT '最低价',
  `cmax` float DEFAULT NULL COMMENT '最高价',
  `cimage` varchar(100) DEFAULT NULL COMMENT '图片',
  `bid` int(10) DEFAULT NULL COMMENT '商家ID',
  `cBusiness` int(5) DEFAULT NULL COMMENT '卖家',
  `cState` varchar(24) DEFAULT '待下单' COMMENT '待下单',
  `cUser` int(4) DEFAULT NULL COMMENT '车的买家',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;

/*Data for the table `car` */

insert  into `car`(`cid`,`cname`,`cprice`,`cleavel`,`cvariety`,`cstock`,`cmin`,`cmax`,`cimage`,`bid`,`cBusiness`,`cState`,`cUser`) values (1,'丰田86',247300,0,'丰田',1,22.98,28.8,'/statics/image/0354295037_6.jpg',NULL,NULL,'待下单',NULL),(2,'斯巴鲁BRZ',269800,0,'斯巴鲁',1,24.98,28.78,'/statics/image/1005247693_6.jpg',NULL,NULL,'待下单',NULL),(3,'MUSTANG',356300,0,'福特',1,32.28,129.8,'/statics/image/1044399460_6.jpg',NULL,3,'待下单',NULL),(4,'科迈罗',399600,0,'雪佛兰',1,31.84,49.98,'/statics/image/1044399460_6.jpg',NULL,2,'待下单',NULL),(5,'马自达MX-5',339000,0,'马自达',1,33.8,34,'/statics/image/1044399460_6.jpg',NULL,1,'待下单',NULL),(6,'保时捷718',588000,0,'保时捷',1,52.92,85.8,'/statics/image/1044399460_6.jpg',NULL,2,'待下单',NULL),(7,'宝马Z4',583000,0,'宝马',1,40.12,90.9,'/statics/image/1105295463_6.jpg',NULL,2,'待下单',NULL),(8,'奥迪TT',456900,0,'奥迪',1,32.49,56.68,'/statics/image/1105295463_6.jpg',NULL,3,'待下单',NULL),(9,'Aventador',7478500,0,'兰博基尼',1,673.97,801.15,'/statics/image/0650090774_6.jpg',NULL,1,'待下单',NULL),(10,'法拉利LaFerrari',22500000,0,'法拉利',1,2250,2250,'/statics/image/0556511002_6.jpg',NULL,2,'待下单',NULL),(11,'保时捷911',2528000,0,'保时捷',1,118.8,414.3,'/statics/image/0624306749_6.jpg',NULL,2,'待下单',NULL),(12,'奥迪R8',2112600,0,'奥迪',1,164.98,259.8,'/statics/image/0435570542_6.jpg',NULL,3,'待下单',NULL),(13,'宝马i8',2032700,0,'宝马',1,131.52,208.12,'/statics/image/1013434811_6.jpg',NULL,3,'待下单',NULL),(14,'阿斯顿·马丁DB11',2398000,0,'阿斯顿·马丁',1,236.8,325.9,'/statics/image/0319300949_6.jpg',NULL,3,'待下单',NULL),(15,'捷豹F-TYPE',747800,0,'捷豹',1,299,429.09,'/statics/image/0349380027_6.jpg',NULL,1,'待下单',NULL),(16,'Huracan',4237780,0,'兰博基尼',1,51.87,203.8,'/statics/image/0218266700_6.jpg',NULL,1,'待下单',NULL),(17,'阿斯顿·马丁DB9',3888000,0,'阿斯顿·马丁',1,358.88,438,'/statics/image/0951399821_6.jpg',NULL,1,'待下单',NULL),(18,'阿斯顿·马丁V8 Vantage',1998000,0,'阿斯顿·马丁',1,198.8,218.8,'/statics/image/1021533628_6.jpg',NULL,2,'待下单',NULL),(19,'玛莎拉蒂GranCabrio',2878500,0,'玛莎拉蒂',1,221.8,302.8,'/statics/image/0256018231_6.jpg',NULL,3,'待下单',NULL),(20,'法拉利488',3388000,0,'法拉利',1,338.8,388.8,'/statics/image/0814113039_6.jpg',NULL,2,'待下单',NULL),(21,'日产GT-R',1628000,0,'日产',1,156,255,'/statics/image/0927318558_6.jpg',NULL,1,'待下单',NULL),(22,'阿斯顿·马丁Vanquish',6280000,0,'阿斯顿·马丁',1,628,628,'/statics/image/1023357847_6.jpg',NULL,NULL,'待下单',NULL),(23,'玛莎拉蒂GranTurismo',2722600,0,'玛莎拉蒂',1,186.8,288.8,'/statics/image/0443181841_6.jpg',NULL,NULL,'待下单',NULL),(24,'阿斯顿·马丁Rapide',2988000,0,'阿斯顿·马丁',1,298.8,364.5,'/statics/image/0539467218_6.jpg',NULL,NULL,'待下单',NULL),(25,'奔驰SLC级',543800,0,'奔驰',1,43.46,68.9,'/statics/image/0733199698_6.jpg',NULL,NULL,'待下单',NULL),(26,'法拉利California T',3088000,0,'法拉利',1,308.8,308.8,'/statics/image/0601439637_6.jpg',NULL,NULL,'待下单',NULL),(27,'阿斯顿·马丁V12 Vantage',2998000,0,'阿斯顿·马丁',1,289.8,309.8,'/statics/image/1022105158_6.jpg',NULL,NULL,'待下单',NULL),(28,'奔驰SL级',1208000,0,'奔驰',1,94.8,120.8,'/statics/image/0942493075_6.jpg',NULL,NULL,'待下单',NULL),(29,'法拉利F12berlinetta',5308000,0,'法拉利',1,530.8,530.8,'/statics/image/0728078252_6.jpg',NULL,NULL,'待下单',NULL),(30,'AMG GT',1418000,0,'奔驰',1,122,228.8,'/statics/image/0731041443_6.jpg',NULL,NULL,'待下单',NULL),(31,'雷克萨斯RC',488000,0,'雷克萨斯',1,43.8,58.62,'/statics/image/0732414495_6.jpg',NULL,NULL,'待下单',NULL),(32,'雷克萨斯RC F',1116000,0,'雷克萨斯',1,109.8,128.62,'/statics/image/0452534757_6.jpg',NULL,NULL,'待下单',NULL),(33,'迈凯伦540C',2720000,0,'迈凯伦',1,225,225,'/statics/image/21525524739195_4003259_6.jpg',NULL,NULL,'待下单',NULL),(34,'日产370Z',533200,0,'日产',1,50.5,70,'/statics/image/0926066511_6.jpg',NULL,NULL,'待下单',NULL),(35,'AMG SL级',2398000,0,'奔驰',1,218.22,239.8,'/statics/image/1139197191_6.jpg',NULL,NULL,'待下单',NULL),(36,'法拉利812Superfast',5388000,0,'法拉利',1,538.8,538.8,'/statics/image/1201078464_6.jpg',NULL,NULL,'待下单',NULL),(37,'迈凯伦570S',2999000,0,'迈凯伦',1,255.6,255.6,'/statics/image/0542462739_6.jpg',NULL,NULL,'待下单',NULL),(38,'法拉利GTC4Lusso',3588000,0,'法拉利',1,358.8,538.8,'/statics/image/0617332820_6.jpg',NULL,NULL,'待下单',NULL),(39,'奥迪TTS',609400,0,'奥迪',1,42.82,69.88,'/statics/image/0833548156_6.jpg',NULL,NULL,'待下单',NULL),(40,'法拉利Portofino',2908000,0,'法拉利',1,290.8,290.8,'/statics/image/0411102388_6.jpg',NULL,NULL,'待下单',NULL),(41,'迈凯伦625C',3498000,0,'迈凯伦',1,299,381.8,'/statics/image/0438243080_6.jpg',NULL,NULL,'待下单',NULL),(42,'蔚来EP9',9960000,0,'蔚来',1,996,996,'/statics/image/0621109448_6.jpg',NULL,NULL,'待下单',NULL),(43,'讴歌NSX',2890000,0,'讴歌',1,280,289.02,'/statics/image/0928201535_6.jpg',NULL,NULL,'待下单',NULL),(44,'奥迪TT RS',803600,0,'奥迪',1,55.12,85,'/statics/image/0448444900_6.jpg',NULL,NULL,'待下单',NULL),(45,'迈凯伦720S',4054000,0,'迈凯伦',1,405.4,405.4,'/statics/image/0527002678_6.jpg',NULL,NULL,'待下单',NULL),(46,'迈凯伦570GT',3140000,0,'迈凯伦',1,273.1,273.1,'/statics/image/0531332337_6.jpg',NULL,NULL,'待下单',NULL),(47,'雷克萨斯LC',1268000,0,'雷克萨斯',1,126.78,138.62,'/statics/image/0338315367_6.jpg',NULL,NULL,'待下单',NULL),(48,'宝马7系',758100,1,'宝马',1,66.15,265.8,'/statics/image/1049335235_6.jpg',NULL,NULL,'待下单',NULL),(49,'奔驰S级',926300,1,'奔驰',1,73.3,199.8,'/statics/image/0622007809_6.jpg',NULL,NULL,'待下单',NULL),(50,'奥迪A8L',927800,1,'奥迪',1,62.5,256.8,'/statics/image/0803097272_6.jpg',NULL,NULL,'待下单',NULL),(51,'保时捷Panamera',1082700,1,'保时捷',1,100,233.82,'/statics/image/0709362006_6.jpg',NULL,NULL,'待下单',NULL),(52,'迈巴赫S级',1498000,1,'奔驰',1,136.8,309.8,'/statics/image/0423036271_6.jpg',NULL,NULL,'待下单',NULL),(53,'捷豹XJ',898000,1,'捷豹',1,51.87,127.8,'/statics/image/0442411383_6.jpg',NULL,NULL,'待下单',NULL),(54,'阿斯顿·马丁Lagonda',8100000,1,'阿斯顿·马丁',1,810,810,'/statics/image/0422264678_6.jpg',NULL,NULL,'待下单',NULL),(55,'幻影',6890000,1,'劳斯莱斯',1,688,988,'/statics/image/0652196451_6.jpg',NULL,NULL,'待下单',NULL),(56,'欧陆',2880000,1,'宾利',1,228,526.8,'/statics/image/0442469458_6.jpg',NULL,NULL,'待下单',NULL),(57,'飞驰',2780000,1,'宾利',1,222,393.8,'/statics/image/0251291907_6.jpg',NULL,NULL,'待下单',NULL),(58,'慕尚',4400000,1,'宾利',1,435,688,'/statics/image/0310398910_6.jpg',NULL,NULL,'待下单',NULL),(59,'宝马7系 插电混动',1089200,1,'宝马',1,85.17,115.8,'/statics/image/0616357959_6.jpg',NULL,NULL,'待下单',NULL),(60,'奥迪S8',1787800,1,'奥迪',1,147.08,198.8,'/statics/image/1011563023_6.jpg',NULL,NULL,'待下单',NULL),(61,'雷克萨斯LS',888000,1,'雷克萨斯',1,88.3,238.82,'/statics/image/1026379731_6.jpg',NULL,NULL,'待下单',NULL),(62,'AMG S级',2498000,1,'奔驰',1,225.5,300,'/statics/image/0345147792_6.jpg',NULL,NULL,'待下单',NULL),(63,'古思特',4190000,1,'劳斯莱斯',1,419,511.8,'/statics/image/0213490418_6.jpg',NULL,NULL,'待下单',NULL),(64,'魅影',5470000,1,'劳斯莱斯',1,471,547,'/statics/image/0500463802_6.jpg',NULL,NULL,'待下单',NULL),(65,'保时捷Panamera 插电混动',2628000,1,'保时捷',1,132.8,273.8,'/statics/image/0549117575_6.jpg',NULL,NULL,'待下单',NULL),(66,'S级插电混动',1758000,1,'奔驰',1,175.8,175.8,'/statics/image/0526348581_6.jpg',NULL,NULL,'待下单',NULL),(67,'曜影',4778000,1,'劳斯莱斯',1,477.8,477.8,'/statics/image/1107005507_6.jpg',NULL,NULL,'待下单',NULL),(68,'克鲁斯',500000,0,'雪弗兰',NULL,NULL,NULL,NULL,NULL,NULL,'待下单',NULL),(69,'克鲁斯',500000,0,'雪弗兰',NULL,NULL,NULL,NULL,NULL,2,'待下单',NULL),(70,'Z4',4444,0,'宝马',NULL,NULL,NULL,NULL,NULL,2,'待下单',NULL),(71,'718',788,1,'保时捷',NULL,NULL,NULL,NULL,NULL,2,'待下单',NULL);

/*Table structure for table `creditinfo` */

DROP TABLE IF EXISTS `creditinfo`;

CREATE TABLE `creditinfo` (
  `cid` int(10) NOT NULL,
  `uid` int(10) DEFAULT NULL COMMENT '用户ID',
  `profession` varchar(20) DEFAULT NULL COMMENT '职业',
  `income` varchar(20) DEFAULT NULL COMMENT '工资收入',
  `socialSecurity` int(2) DEFAULT NULL COMMENT '社保情况：(1,0)：(有，无)',
  `accumulationFund` int(2) DEFAULT NULL COMMENT '公积金:(1,0)：(有，无)',
  `creditRecord` varchar(20) DEFAULT NULL COMMENT '信用记录',
  `housing` varchar(20) DEFAULT NULL COMMENT '住房状况',
  PRIMARY KEY (`cid`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

/*Data for the table `creditinfo` */

/*Table structure for table `order` */

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `oid` int(10) NOT NULL COMMENT '订单ID',
  `uid` int(10) DEFAULT NULL COMMENT '买家ID',
  `bid` int(10) DEFAULT NULL COMMENT '卖家ID',
  `date` datetime DEFAULT NULL COMMENT '下单时间',
  `state` int(2) DEFAULT NULL COMMENT '订单状态',
  `orderNum` int(15) DEFAULT NULL COMMENT '订单号',
  `cid` int(10) DEFAULT NULL COMMENT '车的ID',
  PRIMARY KEY (`oid`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

/*Data for the table `order` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) DEFAULT NULL,
  `upwd` varchar(20) DEFAULT NULL,
  `uphone` varchar(20) DEFAULT NULL,
  `gender` int(2) DEFAULT NULL COMMENT '1,0：男，女',
  `city` varchar(10) DEFAULT NULL COMMENT '买家所在地城市',
  `address` varchar(50) DEFAULT NULL COMMENT '详细地址',
  `creditId` int(10) DEFAULT '0' COMMENT '信用信息ID',
  `orderId` int(10) DEFAULT '0' COMMENT '订单ID',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`uid`,`uname`,`upwd`,`uphone`,`gender`,`city`,`address`,`creditId`,`orderId`) values (1,'用户1','123','13668925834',1,'广州','富力盈隆',0,0),(2,'用户2','123','13668925835',2,'广州','富力盈隆',0,0),(3,'110','123','110',NULL,NULL,NULL,0,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
