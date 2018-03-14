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
  PRIMARY KEY (`bId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='车的信息表';

/*Data for the table `business` */

insert  into `business`(`bId`,`bName`,`bPwd`,`bPhone`) values (1,'长江4S店','123','13344445555'),(2,'黄河4S店','123','14455556666');

/*Table structure for table `carinfo` */

DROP TABLE IF EXISTS `carinfo`;

CREATE TABLE `carinfo` (
  `carId` int(24) NOT NULL AUTO_INCREMENT,
  `carName` varchar(24) DEFAULT NULL COMMENT '车的名字',
  `carBrand` varchar(24) DEFAULT NULL COMMENT '车的品牌',
  `carPrice` varchar(24) DEFAULT '0.00' COMMENT '车的价格',
  `carLevel` varchar(24) DEFAULT NULL COMMENT '车的级别也就是类型',
  `carFirstPay` varchar(24) DEFAULT '0.00' COMMENT '车的首付金额',
  `carPayNumber` varchar(24) DEFAULT '0' COMMENT '分几期',
  `carLastPay` varchar(24) DEFAULT '0.00' COMMENT '减去首付还该支付多少钱',
  `carDesc` varchar(24) DEFAULT NULL COMMENT '车的描述信息',
  `carState` varchar(24) DEFAULT '未卖出' COMMENT '车的卖出状态',
  PRIMARY KEY (`carId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='车的信息表';

/*Data for the table `carinfo` */

insert  into `carinfo`(`carId`,`carName`,`carBrand`,`carPrice`,`carLevel`,`carFirstPay`,`carPayNumber`,`carLastPay`,`carDesc`,`carState`) values (1,'宝俊510','宝俊','79000.00','SUV','9000.00','12','70000.00','眯眯眼','已经卖出'),(2,'卡罗拉','大众','200000.00','轿车','80000.00','36','120000.00','自动档','已经卖出'),(3,'汉兰达','丰田','300000.00','SUV','10000.00','24','200000.00','大空间','已卖出'),(4,'大黄蜂','雪弗兰','4000000.00','轿跑','200000.00','0','200000.00','变形金刚','未卖出');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` int(10) NOT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `upwd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`uid`,`uname`,`upwd`) values (1,'user1','123'),(2,'user2','123');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
