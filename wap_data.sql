/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : wap_data

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2018-02-27 10:56:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list_data
-- ----------------------------
DROP TABLE IF EXISTS `list_data`;
CREATE TABLE `list_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(60) CHARACTER SET utf8 NOT NULL,
  `u_mobile` varchar(11) CHARACTER SET utf8 NOT NULL,
  `u_renshu` tinyint(4) NOT NULL DEFAULT '1',
  `u_sex` tinyint(1) NOT NULL DEFAULT '1',
  `u_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list_data
-- ----------------------------
