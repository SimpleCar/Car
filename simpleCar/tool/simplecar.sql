/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.20 : Database - simplecar
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='商家信息表';

/*Data for the table `business` */

insert  into `business`(`bId`,`bName`,`bPwd`,`bPhone`,`bAdd`,`imgUrl`,`bType`) values (1,'长江4S店','123','13344445555','贵州省贵阳市','changjiang.jpg','4S店'),(2,'贵车','123','14455556666','云南省云安市','guiche.jpg','个人'),(3,'黄河4S店','123','15566665555','福建省福田区','huanghe.jpg','4S店');

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
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

/*Data for the table `car` */

insert  into `car`(`cid`,`cname`,`cprice`,`cleavel`,`cvariety`,`cstock`,`cmin`,`cmax`,`cimage`,`bid`) values (1,'丰田86',247300,0,'丰田',1,22.98,28.8,'/statics/image/0354295037_6.jpg',NULL),(2,'斯巴鲁BRZ',269800,0,'斯巴鲁',1,24.98,28.78,'/statics/image/1005247693_6.jpg',NULL),(3,'MUSTANG',356300,0,'福特',1,32.28,129.8,NULL,NULL),(4,'科迈罗',399600,0,'雪佛兰',1,31.84,49.98,NULL,NULL),(5,'马自达MX-5',339000,0,'马自达',1,33.8,34,NULL,NULL),(6,'保时捷718',588000,0,'保时捷',1,52.92,85.8,NULL,NULL),(7,'宝马Z4',583000,0,'宝马',1,40.12,90.9,NULL,NULL),(8,'奥迪TT',456900,0,'奥迪',1,32.49,56.68,NULL,NULL),(9,'Aventador',7478500,0,'兰博基尼',1,673.97,801.15,NULL,NULL),(10,'法拉利LaFerrari',22500000,0,'法拉利',1,2250,2250,NULL,NULL),(11,'保时捷911',2528000,0,'保时捷',1,118.8,414.3,NULL,NULL),(12,'奥迪R8',2112600,0,'奥迪',1,164.98,259.8,NULL,NULL),(13,'宝马i8',2032700,0,'宝马',1,131.52,208.12,NULL,NULL),(14,'阿斯顿·马丁DB11',2398000,0,'阿斯顿·马丁',1,236.8,325.9,NULL,NULL),(15,'捷豹F-TYPE',747800,0,'捷豹',1,299,429.09,NULL,NULL),(16,'Huracan',4237780,0,'兰博基尼',1,51.87,203.8,NULL,NULL),(17,'阿斯顿·马丁DB9',3888000,0,'阿斯顿·马丁',1,358.88,438,NULL,NULL),(18,'阿斯顿·马丁V8 Vantage',1998000,0,'阿斯顿·马丁',1,198.8,218.8,NULL,NULL),(19,'玛莎拉蒂GranCabrio',2878500,0,'玛莎拉蒂',1,221.8,302.8,NULL,NULL),(20,'法拉利488',3388000,0,'法拉利',1,338.8,388.8,NULL,NULL),(21,'日产GT-R',1628000,0,'日产',1,156,255,NULL,NULL),(22,'阿斯顿·马丁Vanquish',6280000,0,'阿斯顿·马丁',1,628,628,NULL,NULL),(23,'玛莎拉蒂GranTurismo',2722600,0,'玛莎拉蒂',1,186.8,288.8,NULL,NULL),(24,'阿斯顿·马丁Rapide',2988000,0,'阿斯顿·马丁',1,298.8,364.5,NULL,NULL),(25,'奔驰SLC级',543800,0,'奔驰',1,43.46,68.9,NULL,NULL),(26,'法拉利California T',3088000,0,'法拉利',1,308.8,308.8,NULL,NULL),(27,'阿斯顿·马丁V12 Vantage',2998000,0,'阿斯顿·马丁',1,289.8,309.8,NULL,NULL),(28,'奔驰SL级',1208000,0,'奔驰',1,94.8,120.8,NULL,NULL),(29,'法拉利F12berlinetta',5308000,0,'法拉利',1,530.8,530.8,NULL,NULL),(30,'AMG GT',1418000,0,'奔驰',1,122,228.8,NULL,NULL),(31,'雷克萨斯RC',488000,0,'雷克萨斯',1,43.8,58.62,NULL,NULL),(32,'雷克萨斯RC F',1116000,0,'雷克萨斯',1,109.8,128.62,NULL,NULL),(33,'迈凯伦540C',2720000,0,'迈凯伦',1,225,225,NULL,NULL),(34,'日产370Z',533200,0,'日产',1,50.5,70,NULL,NULL),(35,'AMG SL级',2398000,0,'奔驰',1,218.22,239.8,NULL,NULL),(36,'法拉利812Superfast',5388000,0,'法拉利',1,538.8,538.8,NULL,NULL),(37,'迈凯伦570S',2999000,0,'迈凯伦',1,255.6,255.6,NULL,NULL),(38,'法拉利GTC4Lusso',3588000,0,'法拉利',1,358.8,538.8,NULL,NULL),(39,'奥迪TTS',609400,0,'奥迪',1,42.82,69.88,NULL,NULL),(40,'法拉利Portofino',2908000,0,'法拉利',1,290.8,290.8,NULL,NULL),(41,'迈凯伦625C',3498000,0,'迈凯伦',1,299,381.8,NULL,NULL),(42,'蔚来EP9',9960000,0,'蔚来',1,996,996,NULL,NULL),(43,'讴歌NSX',2890000,0,'讴歌',1,280,289.02,NULL,NULL),(44,'奥迪TT RS',803600,0,'奥迪',1,55.12,85,NULL,NULL),(45,'迈凯伦720S',4054000,0,'迈凯伦',1,405.4,405.4,NULL,NULL),(46,'迈凯伦570GT',3140000,0,'迈凯伦',1,273.1,273.1,NULL,NULL),(47,'雷克萨斯LC',1268000,0,'雷克萨斯',1,126.78,138.62,NULL,NULL),(48,'宝马7系',758100,1,'宝马',1,66.15,265.8,NULL,NULL),(49,'奔驰S级',926300,1,'奔驰',1,73.3,199.8,NULL,NULL),(50,'奥迪A8L',927800,1,'奥迪',1,62.5,256.8,NULL,NULL),(51,'保时捷Panamera',1082700,1,'保时捷',1,100,233.82,NULL,NULL),(52,'迈巴赫S级',1498000,1,'奔驰',1,136.8,309.8,NULL,NULL),(53,'捷豹XJ',898000,1,'捷豹',1,51.87,127.8,NULL,NULL),(54,'阿斯顿·马丁Lagonda',8100000,1,'阿斯顿·马丁',1,810,810,NULL,NULL),(55,'幻影',6890000,1,'劳斯莱斯',1,688,988,NULL,NULL),(56,'欧陆',2880000,1,'宾利',1,228,526.8,NULL,NULL),(57,'飞驰',2780000,1,'宾利',1,222,393.8,NULL,NULL),(58,'慕尚',4400000,1,'宾利',1,435,688,NULL,NULL),(59,'宝马7系 插电混动',1089200,1,'宝马',1,85.17,115.8,NULL,NULL),(60,'奥迪S8',1787800,1,'奥迪',1,147.08,198.8,NULL,NULL),(61,'雷克萨斯LS',888000,1,'雷克萨斯',1,88.3,238.82,NULL,NULL),(62,'AMG S级',2498000,1,'奔驰',1,225.5,300,NULL,NULL),(63,'古思特',4190000,1,'劳斯莱斯',1,419,511.8,NULL,NULL),(64,'魅影',5470000,1,'劳斯莱斯',1,471,547,NULL,NULL),(65,'保时捷Panamera 插电混动',2628000,1,'保时捷',1,132.8,273.8,NULL,NULL),(66,'S级插电混动',1758000,1,'奔驰',1,175.8,175.8,NULL,NULL),(67,'曜影',4778000,1,'劳斯莱斯',1,477.8,477.8,NULL,NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`uid`,`uname`,`upwd`,`uphone`,`gender`,`city`,`address`,`creditId`,`orderId`) values (1,'用户1','123','13668925834',1,'广州','富力盈隆',0,0),(2,'用户2','123','13668925835',2,'广州','富力盈隆',0,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
