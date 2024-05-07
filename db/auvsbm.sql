/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : auvsbm

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 07/05/2024 17:06:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for columns
-- ----------------------------
DROP TABLE IF EXISTS `columns`;
CREATE TABLE `columns` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `type` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '类型',
  `parent_id` int DEFAULT NULL COMMENT '父节点',
  `title` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '标题',
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '关键词',
  `descrption` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '描述',
  `jump_url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '跳转页面地址',
  `template_id` int DEFAULT NULL COMMENT '关联模板',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` varchar(255) COLLATE utf8_bin NOT NULL COMMENT '站点id',
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `description` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '描述',
  `keywords` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '关键词',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for material
-- ----------------------------
DROP TABLE IF EXISTS `material`;
CREATE TABLE `material` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '素材名',
  `src` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '素材地址',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for template
-- ----------------------------
DROP TABLE IF EXISTS `template`;
CREATE TABLE `template` (
  `id` int(10) unsigned zerofill NOT NULL,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '内容',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `nick_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '姓名',
  `tel` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '手机号',
  `gender` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '性别',
  `root` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '权限',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;
