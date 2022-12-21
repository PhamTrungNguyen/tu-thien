-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 21, 2022 lúc 07:04 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `pbl4`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `displayName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalMoney` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `roleId`, `displayName`, `email`, `totalMoney`, `code`) VALUES
(1, 'admin', '$2b$10$AGAs75F.yvblYlebE8vnROuMJBqJ5yuCyHsHWLWH3IDh2X74RzmTS', 3, NULL, NULL, NULL, NULL),
(2, 'nguyen', '$2b$10$bnhKIIvvdm3pH4WbuWoYieJeQ9rnf5Q7j0xZs9.rbQZx8vP/qz1Eq', 2, 'Trung Nguyên', 'nguyen12345@gmail.com', '9378017', '12345'),
(4, 'thuyvy', '$2b$10$1RSrD9Jm8jBKSOnZgcwvQe8VzaW55oFDcCilfoDooNELGPGaj2gDi', 1, NULL, NULL, NULL, NULL),
(5, 'hihi', '$2b$10$UcmW6fjz4Ee8.3GqprYJl.C.Z56zjaImnKpH4Z06Bd5qH8fmiXvjC', 2, 'Nguyễn Đình Thúy Vy', 'thuyvycva26@gmail.com', '100000', NULL),
(6, '123', '$2b$10$IClImDz32KlYnyUdakhPZ.qNAtSmlQZexrXkkrZDGvWlLvdHa.XHG', 1, NULL, NULL, '100000', NULL),
(7, 'nguyen12', '$2b$10$AabETzdMNzD6UWAs3gCoQekHrfHiQu63HnvKAFCrDPKm25XFDWvku', 2, 'Nguyên 2', 'nguyen@gmail.com', '50000', '12345'),
(8, '1234', '$2b$10$tLLlzP11wpFjaI1mC3v4O.2fq6YH3RjUVBvU71UKeSBM/ZvFhlfTK', 1, 'Test 1', NULL, '230000', NULL),
(9, 'ron', '$2b$10$4GUUOCns/ceeLGlzRvaoc.09n9QmPh88peGitmXKKgXcOBt2V5hZG', 2, 'Hồng Loan', 'loan@gmail.com', '0', NULL),
(10, 'test', '$2b$10$PkMfMjKl/1HIs69GQvkc0O3nfvlin5K6znTMomfSBO6kMgl3X0LGe', 1, NULL, NULL, '0', NULL),
(11, 'aaaa', '$2b$10$HaI.fK5fmlDxYNNMei4kCOLZ0U4cjbORLXxhGJURcDkwyipc1h86G', 1, 'Nguyễn Văn A', 'abc@gmail.com', '0', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hot` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `userID`, `text`, `hot`) VALUES
(5, 2, 'Bài viết rất có ích', 0),
(6, 7, 'Tôi sẽ ủng hộ', 0),
(8, 2, 'bài viết rất hay', 0),
(11, 2, '123123', 0),
(16, 9, 'Bài viết hay lắm', 0),
(36, 2, 'Việc theo dõi và điều trị sau phẫu thuật cho chú K vẫn còn kéo dài, để tiếp sức thêm cho việc điều trị của chú K, Quỹ Tình Thương hy vọng sẽ có thể vận động được thêm 22.000.000 đồng. Trong đó, 20 triệu chi trả viện phí, 2 triệu để bồi dưỡng sức khỏe phục', 1),
(40, 8, '123123', 0),
(42, 8, '23131231231312', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donates`
--

CREATE TABLE `donates` (
  `id` int(11) NOT NULL,
  `money` double NOT NULL,
  `userID` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `donates`
--

INSERT INTO `donates` (`id`, `money`, `userID`) VALUES
(59, 100000, '2'),
(61, 50000, '8'),
(64, 100000, '9'),
(65, 200000, '10'),
(66, 100000, '9'),
(67, 100000, '8'),
(68, 100000, '8'),
(69, 200000, '2'),
(70, 200000, '2'),
(71, 1500000, '2'),
(72, 1000000, '7');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `participants`
--

CREATE TABLE `participants` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `lead` tinyint(1) DEFAULT 0,
  `postId` int(11) DEFAULT NULL,
  `finish` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `participants`
--

INSERT INTO `participants` (`id`, `userID`, `lead`, `postId`, `finish`) VALUES
(10, 2, 1, 5, 1),
(13, 8, 1, 2, 1),
(23, 2, 0, 2, 1),
(24, 11, 0, 5, 1),
(48, 8, 1, 14, 0),
(51, 2, 0, 14, 0),
(52, 11, 1, 30, 0),
(53, 7, 1, 24, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `postcomments`
--

CREATE TABLE `postcomments` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `commentId` int(11) DEFAULT NULL,
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `postcomments`
--

INSERT INTO `postcomments` (`id`, `createdAt`, `updatedAt`, `commentId`, `postId`) VALUES
(5, '2022-12-03 11:34:48', '2022-12-03 11:34:48', 5, 5),
(6, '2022-12-03 11:35:46', '2022-12-03 11:35:46', 6, 5),
(8, '2022-12-03 16:39:50', '2022-12-03 16:39:50', 8, 5),
(11, '2022-12-03 16:51:15', '2022-12-03 16:51:15', 11, 2),
(16, '2022-12-04 17:03:39', '2022-12-04 17:03:39', 16, 2),
(36, '2022-12-07 18:27:26', '2022-12-07 18:27:26', 36, 5),
(40, '2022-12-10 16:05:50', '2022-12-10 16:05:50', 40, 5),
(42, '2022-12-10 17:08:11', '2022-12-10 17:08:11', 42, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `postdonates`
--

CREATE TABLE `postdonates` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `postId` int(11) NOT NULL,
  `donateId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `postdonates`
--

INSERT INTO `postdonates` (`createdAt`, `updatedAt`, `postId`, `donateId`) VALUES
('2022-12-02 17:45:38', '2022-12-02 17:45:38', 2, 65),
('2022-11-29 17:30:20', '2022-11-29 17:30:20', 5, 59),
('2022-11-29 17:37:04', '2022-11-29 17:37:04', 5, 61),
('2022-12-02 13:04:55', '2022-12-02 13:04:55', 5, 64),
('2022-12-06 08:11:07', '2022-12-06 08:11:07', 5, 66),
('2022-12-10 16:21:02', '2022-12-10 16:21:02', 5, 68),
('2022-12-10 16:16:31', '2022-12-10 16:16:31', 14, 67),
('2022-12-20 18:34:21', '2022-12-20 18:34:21', 14, 69),
('2022-12-21 16:45:03', '2022-12-21 16:45:03', 14, 70),
('2022-12-21 16:48:53', '2022-12-21 16:48:53', 14, 71),
('2022-12-21 17:55:54', '2022-12-21 17:55:54', 24, 72);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `desc` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `accountId` int(11) DEFAULT NULL,
  `totalParticipant` int(11) DEFAULT 5,
  `date` int(11) DEFAULT 30,
  `totalMoney` double DEFAULT 2000000
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `hot`, `status`, `desc`, `image`, `createdAt`, `updatedAt`, `accountId`, `totalParticipant`, `date`, `totalMoney`) VALUES
(2, ' MẤT NGƯỜI THÂN, CHỈ CÒN CUỘC SỐNG NEO ĐƠN VỚI CĂN BỆNH TIM', 1, 3, 'Chồng mất sớm, đứa con gái duy nhất cũng qua đời khi mới 18 tuổi. Cuộc đời chịu quá nhiều đau thương, mất mát những người thân, căn bệnh suy tim ngày càng diễn biến xấu đi. Nhập viện cấp cứu và được chỉ định phẫu thuật nhưng chi phí quá lớn vượt ngoài khả năng, đã có lúc chị N tuyệt vọng muốn từ bỏ.\nChị Nguyễn T.H.N, sinh năm 1968 tại Bình Phước bị bệnh tim từ năm 18 tuổi nhưng chưa ảnh hưởng nhiều đến sức khỏe, Chị vẫn đi khám và uống thuốc duy trì. Chị lập gia đình và có 1 người con gái. Nhưng số phận trớ trêu, chồng chị mắc bệnh và qua đời sớm. Tất cả cuộc sống của chị chỉ còn lại cô con gái để nương tựa nhau trong cuộc sống nhưng một lần nữa, chị lại đón nhận sự mất mát gần như là tất cả, con gái chị qua đời khi chỉ 18 tuổi. Tinh thần suy sup, sức khỏe của chị lại càng ngày kém đi. Chị N được chẩn đoán suy tim, hở van 2 lá, hở van 3 lá và thường xuyên đến bệnh viện kiểm tra', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668493883/pbl4/q8oygoj6pd9idtfzf5wt.png', '2022-11-15 06:31:28', '2022-12-10 14:05:56', 1, 5, 30, 2000000),
(4, 'THA PHƯƠNG MƯU SINH GẶP TAI NẠN NGHIÊM TRỌNG', 1, 1, 'Lê T.L, sinh năm 2007, quê ở Huế, gia đình có 3 anh em, L vào Tp.Hồ Chí Minh làm việc chưa tròn một năm thì giữa tháng 9, em bị tai nạn giao thông trên đường đi làm về bị đa chấn thương. L được chẩn đoán chấn thương bụng, vỡ tạng. Mặc dù đã được cấp cứu qua cơn nguy kịch nhưng hiện tại em chỉ mới có lại nhận thức, vẫn phải thở máy, lọc máu, chưa ăn uống được, cần được chăm sóc đặc biệt. L đang được điều trị tại khoa Ngoại Bụng, Bệnh viện 175.\nGia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê gì làm đó nuôi 3 anh em. Người anh lớn từ sớm đã vào Đồng Nai làm công nhân phụ giúp gia đình, L là người con thứ, nghỉ học từ năm lớp 7, ở nhà với ba mẹ đến nay thì muốn vào HCM tìm công việc mưu sinh. Một mình lặn lội từ miền Trung vào Sài Gòn với người cậu. L chỉ đi làm được vài tháng thì xảy ra chuyện không may. Những ngày đầu một mình người cậu chăm lo cho L trong khi chờ bố mẹ em vào.\nNghe tin con gặp tai nạn nghiêm trọng, tình trạng nguy kịch và chi phí điều trị vô cùng lớn với gia đình. Chị T-mẹ của bệnh nhân-thất thần nhưng cũng chạy đi vay mượn tiền để vào với con trai. Chắc hẳn chuyến xe đưa chị vào chăm con là chuyến xe xa nhất, lâu nhất và nặng nề nhất chị từng đi. Vì hoàn cảnh gia đình khó khăn nên các con không có điều kiện học hành buộc lòng các con phải ra đời bươn chải sớm. L có BHYT nhưng quá trình điều trị lâu dài, tình trạng chấn thương nghiêm trọng nên tính đến đầu tháng 10, gia đình vẫn đang nợ viện phí gần 30 triệu đồng. Gia đình đóng được 71 triệu tạm ứng hoàn toàn là tiền vay mượn. Ngày thường chi tiêu sinh hoạt đã thiếu trước, hụt sau thì nay tiền chục triệu là một con số vượt quá khả năng.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668494145/pbl4/cg15ju09o8oppco7emvm.png', '2022-11-15 06:35:58', '2022-12-15 17:05:38', 2, 5, 30, 2000000),
(5, 'CÔ GIÁO MẦM NON PHẢI NGHỈ VIỆC VÌ BỆNH TẬT BỦA VÂY', 1, 3, 'Từng là giáo viên, từng là hiệu trưởng của một trường mầm non với hơn 20 năm công tác trong công việc dạy trẻ. Nhưng tai nạn bất ngờ trong lúc công tác đã cắt ngang con đường giảng dạy của chị. Đau đớn, hụt hẫng, bệnh tật bủa vây chị trong cùng một thời điểm, mất tất cả từ sự nghiệp đến sức khỏe, chị đã gần như tuyệt vọng.\nChị Nguyễn T.M.H, sinh năm 1979, tại Tp.Hồ Chí Minh. Vốn mang trong người căn bệnh thận phải ra vô bệnh viện theo dõi thường xuyên. Năm 2018, khi tổng vệ sinh tại trường, chị H bị mảnh gỗ đâm vào mắt dẫn đến nhiễm trùng, mặc dù đã cố gắng cứu chữa nhưng chị đã không thể giữ lại một bên mắt của mình. Chẳng bao lâu sau đó, căn bệnh thận của chị trở nặng, tay chân phù nề chị bước sang giai đoạn chạy thận. Di chứng từ bệnh thận dẫn đến chị bị đái tháo đường và làm cho một bên mắt còn lại của chị suy giảm nặng nề. Thị lực gần như mất đi, chị buộc lòng phải nghỉ việc. Sau một thời gian cố gắng làm thêm bên ngoài, chị đã chính thức không thể đứng lớp khi thị lực chỉ còn khoảng 20% và đươc duy trì bằng việc phải tiêm thuốc hàng tháng.\nCuộc sống của chị từ một giáo viên giỏi, cô hiệu trưởng tận tụy ngày ngày đến trường thì giờ đây chị phải đều đặn 3 ngày/tuần đến bệnh viện Hóc Môn để chạy thận, lọc máu. Số tiền dành dụm, tích góp sau bao năm đi làm vơi dần theo năm tháng vừa chạy thận, vừa điều trị mắt nhưng trong vô vọng. Ba mẹ chị đã ở tuổi 70 không còn sức lao động do bệnh đau và tai nạn giao thông, cả nhà đang ở nhờ trong căn nhà của người họ hàng. Giờ đây, tất cả chi phí sinh hoạt, khám bệnh hàng tháng đều được người quen và em gái hỗ trợ.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668494196/pbl4/kwttg839s5wfk0csvwze.png', '2022-11-15 06:36:41', '2022-12-21 17:21:07', 2, 2, 10, 1000000),
(14, 'Người đàn bà lực điền', 1, 2, '“Chỉ vài tháng sau khi tôi bắt đầu tập luyện, tôi đã đi trình diễn ở các trận đấu trong vùng và tôi nhận ra rằng tôi đã rất thích nó. Tôi đã trở thành một nhà vô địch bất bại của giải Zabaikalye Region khi tôi chỉ 16 tuổi. Đó là cách mọi thứ bắt đầu. Tôi thậm chí đã từng tham gia một trận chiến đối kháng khốc liệt. Dù rằng tôi không dành chiến thắng, nhưng kết quả thật sự không quá tệ. Song, những kết quả sẽ bị lãng quên một cách nhanh chóng thôi”.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669429433/pbl4/ipalvaswzsqeia1dkkmt.jpg', '2022-11-26 02:24:00', '2022-12-10 17:26:20', 5, 5, 30, 2000000),
(24, '123', 0, 2, '123', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669658175/pbl4/qk7actnl0hrudqa7oix4.jpg', '2022-11-28 17:56:19', '2022-12-21 18:03:11', 7, 3, 13, 2000000),
(26, 'test_11111111', 0, 1, '1111111111111111111', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669787151/pbl4/ms3yyst4ttgdx6z7paad.jpg', '2022-11-30 05:46:01', '2022-11-30 05:46:01', 2, 5, 30, 2000000),
(29, '2222222222222', 0, 1, '2222222222222', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1671119701/pbl4/sypkeihn7zcgbahpi0qm.gif', '2022-12-06 07:16:25', '2022-12-15 15:55:05', 9, 4, 30, 2000000),
(30, 'wwwwwwwwwwwww', 1, 2, 'wwwwwwwwwwwwwww', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1671122183/pbl4/hfopjuwonlzsnuyt5ydo.png', '2022-12-15 16:05:06', '2022-12-15 16:36:28', 2, 4, 30, 2000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `createdAt`) VALUES
(1, 1, '2022-11-15 07:27:32'),
(2, 2, '2022-11-15 07:27:32'),
(3, 3, '2022-11-15 07:27:32');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `donates`
--
ALTER TABLE `donates`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId` (`postId`);

--
-- Chỉ mục cho bảng `postcomments`
--
ALTER TABLE `postcomments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentId` (`commentId`),
  ADD KEY `postId` (`postId`);

--
-- Chỉ mục cho bảng `postdonates`
--
ALTER TABLE `postdonates`
  ADD PRIMARY KEY (`postId`,`donateId`),
  ADD KEY `donateId` (`donateId`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accountId` (`accountId`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `donates`
--
ALTER TABLE `donates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT cho bảng `participants`
--
ALTER TABLE `participants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT cho bảng `postcomments`
--
ALTER TABLE `postcomments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `participants`
--
ALTER TABLE `participants`
  ADD CONSTRAINT `participants_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `postcomments`
--
ALTER TABLE `postcomments`
  ADD CONSTRAINT `postcomments_ibfk_395` FOREIGN KEY (`commentId`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postcomments_ibfk_396` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `postdonates`
--
ALTER TABLE `postdonates`
  ADD CONSTRAINT `postdonates_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postdonates_ibfk_2` FOREIGN KEY (`donateId`) REFERENCES `donates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
