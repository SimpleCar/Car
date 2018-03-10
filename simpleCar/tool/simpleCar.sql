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
