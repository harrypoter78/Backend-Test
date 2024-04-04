-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for eigen_test
CREATE DATABASE IF NOT EXISTS `eigen_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `eigen_test`;

-- Dumping structure for table eigen_test.books
CREATE TABLE IF NOT EXISTS `books` (
  `code` varchar(10) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table eigen_test.books: ~9 rows (approximately)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
REPLACE INTO `books` (`code`, `title`, `author`, `stock`) VALUES
	('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1),
	('JK-45', 'Harry Potter', 'J.K Rowling', 1),
	('MM-1', 'MMMM', 'WWW', 1),
	('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1),
	('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1),
	('SSS-99', 'Swagger', 'Swag Author', 1),
	('TST-55', 'Test Book', 'Test Author', 1),
	('TST-99', 'Test Book', 'Test Author', 0),
	('TW-11', 'Twilight', 'Stephenie Meyer', 0);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- Dumping structure for table eigen_test.borrowedbooks
CREATE TABLE IF NOT EXISTS `borrowedbooks` (
  `borrow_id` int(11) NOT NULL AUTO_INCREMENT,
  `member_code` varchar(10) DEFAULT NULL,
  `book_code` varchar(10) DEFAULT NULL,
  `borrow_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  PRIMARY KEY (`borrow_id`),
  KEY `member_code` (`member_code`),
  KEY `book_code` (`book_code`),
  CONSTRAINT `borrowedbooks_ibfk_1` FOREIGN KEY (`member_code`) REFERENCES `members` (`code`),
  CONSTRAINT `borrowedbooks_ibfk_2` FOREIGN KEY (`book_code`) REFERENCES `books` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Dumping data for table eigen_test.borrowedbooks: ~17 rows (approximately)
/*!40000 ALTER TABLE `borrowedbooks` DISABLE KEYS */;
REPLACE INTO `borrowedbooks` (`borrow_id`, `member_code`, `book_code`, `borrow_date`, `return_date`) VALUES
	(10, 'M002', 'TW-11', '2024-04-04', '2024-04-05'),
	(11, 'M002', 'TST-99', '2024-04-04', '2024-04-25'),
	(12, 'M001', 'TST-99', '2024-04-04', '2024-04-06'),
	(13, 'M001', 'TST-99', '2024-04-04', '2024-04-06'),
	(14, 'M002', 'TST-99', '2024-04-04', '2024-04-25'),
	(15, 'M002', 'TW-11', '2024-04-04', '2024-04-05'),
	(16, 'M002', 'TST-99', '2024-04-04', '2024-04-25'),
	(17, 'M002', 'TST-99', '2024-04-04', '2024-04-25'),
	(18, 'M001', 'TST-99', '2024-04-04', '2024-04-06'),
	(19, 'M001', 'TST-99', '2024-04-04', '2024-04-06'),
	(20, 'M001', 'TST-99', '2024-04-04', '2024-04-06'),
	(21, 'M003', 'TST-99', '2024-04-04', NULL),
	(23, 'M003', 'TST-55', '2024-04-04', '2024-04-04'),
	(24, 'M001', 'SSS-99', '2024-04-04', '2024-04-24'),
	(25, 'M001', 'SHR-1', '2024-04-04', '2024-04-05'),
	(26, 'M001', 'SSS-99', '2024-04-04', '2024-04-24'),
	(27, 'M003', 'TW-11', '2024-04-04', NULL);
/*!40000 ALTER TABLE `borrowedbooks` ENABLE KEYS */;

-- Dumping structure for table eigen_test.members
CREATE TABLE IF NOT EXISTS `members` (
  `code` varchar(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `penalty_start_date` date DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table eigen_test.members: ~7 rows (approximately)
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
REPLACE INTO `members` (`code`, `name`, `penalty_start_date`) VALUES
	('M001', 'Angga', '2024-04-04'),
	('M002', 'Ferry', NULL),
	('M003', 'Putri', NULL),
	('M004', 'Rizky', NULL),
	('M005', 'Kiki', NULL),
	('M006', 'Dummy', NULL),
	('M007', 'Dummy', NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
