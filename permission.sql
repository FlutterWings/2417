/*
SQLyog v10.2 
MySQL - 5.5.28 : Database - permission
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`permission` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `permission`;

/*Table structure for table `oauth_client_details` */

DROP TABLE IF EXISTS `oauth_client_details`;

CREATE TABLE `oauth_client_details` (
  `client_id` varchar(128) NOT NULL,
  `resource_ids` varchar(128) DEFAULT NULL,
  `client_secret` varchar(128) DEFAULT NULL,
  `scope` varchar(128) DEFAULT NULL,
  `authorized_grant_types` varchar(128) DEFAULT NULL,
  `web_server_redirect_uri` varchar(128) DEFAULT NULL,
  `authorities` varchar(128) DEFAULT NULL,
  `access_token_validity` int(11) DEFAULT NULL,
  `refresh_token_validity` int(11) DEFAULT NULL,
  `additional_information` varchar(128) DEFAULT NULL,
  `autoapprove` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `oauth_client_details` */

insert  into `oauth_client_details`(`client_id`,`resource_ids`,`client_secret`,`scope`,`authorized_grant_types`,`web_server_redirect_uri`,`authorities`,`access_token_validity`,`refresh_token_validity`,`additional_information`,`autoapprove`) values ('OrderManagement',NULL,'$2a$10$8yVwRGY6zB8wv5o0kRgD0ep/HVcvtSZUZsYu/586Egxc1hv3cI9Q6','all','authorization_code,refresh_token','http://localhost:8083/orderSystem/login',NULL,7200,NULL,NULL,'true'),('UserManagement',NULL,'$2a$10$ZRmPFVgE6o2aoaK6hv49pOt5BZIKBDLywCaFkuAs6zYmRkpKHgyuO','all','authorization_code,refresh_token','http://localhost:8082/memberSystem/login',NULL,7200,NULL,NULL,'true');

/*Table structure for table `sys_permission` */

DROP TABLE IF EXISTS `sys_permission`;

CREATE TABLE `sys_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT '0' COMMENT '父ID',
  `type` tinyint(4) NOT NULL COMMENT '资源类型（1：菜单，2：按钮，3：操作）',
  `name` varchar(64) CHARACTER SET latin1 NOT NULL COMMENT '资源名称',
  `code` varchar(64) CHARACTER SET latin1 NOT NULL COMMENT '资源标识（或者叫权限字符串）',
  `uri` varchar(64) CHARACTER SET latin1 DEFAULT NULL COMMENT '资源URI',
  `seq` int(11) DEFAULT '1' COMMENT '序号',
  `create_user` varchar(64) CHARACTER SET latin1 DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_user` varchar(64) CHARACTER SET latin1 DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `idx_type` (`type`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_permission` */

insert  into `sys_permission`(`id`,`pid`,`type`,`name`,`code`,`uri`,`seq`,`create_user`,`create_time`,`update_user`,`update_time`) values (1,0,3,'add','member:add','/member/add',1,'system','2019-03-03 18:50:17','system','2019-03-03 18:50:20');

/*Table structure for table `sys_role` */

DROP TABLE IF EXISTS `sys_role`;

CREATE TABLE `sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(32) NOT NULL COMMENT '角色名称',
  `role_code` varchar(32) NOT NULL,
  `role_description` varchar(64) DEFAULT NULL COMMENT '角色描述',
  `create_user` varchar(64) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_role` */

insert  into `sys_role`(`id`,`role_name`,`role_code`,`role_description`,`create_user`,`create_time`,`update_user`,`update_time`) values (1,'员工','normal','普通员工','system','2019-02-12 11:14:41',NULL,NULL),(2,'部门经理','manager','部门经理','system','2019-02-12 11:15:37',NULL,NULL),(3,'客服','kefu','客服','system','2019-02-12 11:16:27',NULL,NULL);

/*Table structure for table `sys_role_permission` */

DROP TABLE IF EXISTS `sys_role_permission`;

CREATE TABLE `sys_role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `permission_id` int(11) NOT NULL COMMENT '权限ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_role_permission` */

insert  into `sys_role_permission`(`id`,`role_id`,`permission_id`) values (1,2,1);

/*Table structure for table `sys_user` */

DROP TABLE IF EXISTS `sys_user`;

CREATE TABLE `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL COMMENT '账号',
  `password` varchar(256) NOT NULL COMMENT '密码',
  `nickname` varchar(64) NOT NULL COMMENT '昵称',
  `email` varchar(64) DEFAULT NULL COMMENT '邮箱',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态（0：锁定，1：解锁）',
  `create_user` varchar(64) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user` varchar(64) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_user` */

insert  into `sys_user`(`id`,`username`,`password`,`nickname`,`email`,`status`,`create_user`,`create_time`,`update_user`,`update_time`) values (1,'admin','admin','管理员','abc@123.com',1,'system','2019-02-12 11:12:19',NULL,NULL),(2,'zhangsan','123456','张三','zhangsan@126.com',1,'system','2019-02-12 11:13:27',NULL,NULL);
insert  into `sys_user`(`id`,`username`,`password`,`nickname`,`email`,`status`,`create_user`,`create_time`,`update_user`,`update_time`) values (2,'zhangsan','123456','张三','zhangsan@126.com',1,'system','2019-02-12 11:13:27',NULL,NULL);
/*Table structure for table `sys_user_role` */

DROP TABLE IF EXISTS `sys_user_role`;

CREATE TABLE `sys_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sys_user_role` */

insert  into `sys_user_role`(`id`,`user_id`,`role_id`) values (1,1,1),(2,1,2),(3,1,3),(4,2,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
