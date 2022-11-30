-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 30, 2022 lúc 06:49 AM
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
  `totalMoney` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `roleId`, `displayName`, `email`, `totalMoney`) VALUES
(1, 'admin', '$2b$10$AGAs75F.yvblYlebE8vnROuMJBqJ5yuCyHsHWLWH3IDh2X74RzmTS', 3, NULL, NULL, NULL),
(2, 'nguyen', '$2b$10$bnhKIIvvdm3pH4WbuWoYieJeQ9rnf5Q7j0xZs9.rbQZx8vP/qz1Eq', 2, 'Trung Nguyên', 'nguyen1234@gmail.com', '173017'),
(4, 'thuyvy', '$2b$10$1RSrD9Jm8jBKSOnZgcwvQe8VzaW55oFDcCilfoDooNELGPGaj2gDi', 1, NULL, NULL, NULL),
(5, 'hihi', '$2b$10$UcmW6fjz4Ee8.3GqprYJl.C.Z56zjaImnKpH4Z06Bd5qH8fmiXvjC', 2, 'Nguyễn Đình Thúy Vy', 'thuyvycva26@gmail.com', '100000'),
(6, '123', '$2b$10$IClImDz32KlYnyUdakhPZ.qNAtSmlQZexrXkkrZDGvWlLvdHa.XHG', 1, NULL, NULL, '100000'),
(7, 'nguyen12', '$2b$10$AabETzdMNzD6UWAs3gCoQekHrfHiQu63HnvKAFCrDPKm25XFDWvku', 2, 'Lai Thị Hồng Loan', NULL, '50000'),
(8, '1234', '$2b$10$tLLlzP11wpFjaI1mC3v4O.2fq6YH3RjUVBvU71UKeSBM/ZvFhlfTK', 1, 'Test 1', NULL, '430000');

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
(56, 300000, '7'),
(57, 100000, '7'),
(58, 100000, '2'),
(59, 100000, '2'),
(60, 50000, '8'),
(61, 50000, '8');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `participants`
--

CREATE TABLE `participants` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `lead` tinyint(1) DEFAULT 0,
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `participants`
--

INSERT INTO `participants` (`id`, `userID`, `lead`, `postId`) VALUES
(9, 7, 1, 13),
(10, 2, 1, 5),
(13, 8, 1, 2);

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
('2022-11-29 17:30:20', '2022-11-29 17:30:20', 5, 59),
('2022-11-29 17:37:04', '2022-11-29 17:37:04', 5, 61),
('2022-11-29 12:57:40', '2022-11-29 12:57:40', 13, 56),
('2022-11-29 12:59:19', '2022-11-29 12:59:19', 13, 57),
('2022-11-29 16:51:04', '2022-11-29 16:51:04', 13, 58),
('2022-11-29 17:35:17', '2022-11-29 17:35:17', 13, 60);

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
  `review` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `money` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `accountId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `hot`, `status`, `desc`, `image`, `review`, `money`, `createdAt`, `updatedAt`, `accountId`) VALUES
(2, ' MẤT NGƯỜI THÂN, CHỈ CÒN CUỘC SỐNG NEO ĐƠN VỚI CĂN BỆNH TIM', 1, 2, 'Chồng mất sớm, đứa con gái duy nhất cũng qua đời khi mới 18 tuổi. Cuộc đời chịu quá nhiều đau thương, mất mát những người thân, căn bệnh suy tim ngày càng diễn biến xấu đi. Nhập viện cấp cứu và được chỉ định phẫu thuật nhưng chi phí quá lớn vượt ngoài khả năng, đã có lúc chị N tuyệt vọng muốn từ bỏ.\nChị Nguyễn T.H.N, sinh năm 1968 tại Bình Phước bị bệnh tim từ năm 18 tuổi nhưng chưa ảnh hưởng nhiều đến sức khỏe, Chị vẫn đi khám và uống thuốc duy trì. Chị lập gia đình và có 1 người con gái. Nhưng số phận trớ trêu, chồng chị mắc bệnh và qua đời sớm. Tất cả cuộc sống của chị chỉ còn lại cô con gái để nương tựa nhau trong cuộc sống nhưng một lần nữa, chị lại đón nhận sự mất mát gần như là tất cả, con gái chị qua đời khi chỉ 18 tuổi. Tinh thần suy sup, sức khỏe của chị lại càng ngày kém đi. Chị N được chẩn đoán suy tim, hở van 2 lá, hở van 3 lá và thường xuyên đến bệnh viện kiểm tra', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668493883/pbl4/q8oygoj6pd9idtfzf5wt.png', NULL, NULL, '2022-11-15 06:31:28', '2022-11-29 17:34:12', 1),
(4, 'THA PHƯƠNG MƯU SINH GẶP TAI NẠN NGHIÊM TRỌNG', 0, 1, 'Lê T.L, sinh năm 2007, quê ở Huế, gia đình có 3 anh em, L vào Tp.Hồ Chí Minh làm việc chưa tròn một năm thì giữa tháng 9, em bị tai nạn giao thông trên đường đi làm về bị đa chấn thương. L được chẩn đoán chấn thương bụng, vỡ tạng. Mặc dù đã được cấp cứu qua cơn nguy kịch nhưng hiện tại em chỉ mới có lại nhận thức, vẫn phải thở máy, lọc máu, chưa ăn uống được, cần được chăm sóc đặc biệt. L đang được điều trị tại khoa Ngoại Bụng, Bệnh viện 175.\nGia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê gì làm đó nuôi 3 anh em. Người anh lớn từ sớm đã vào Đồng Nai làm công nhân phụ giúp gia đình, L là người con thứ, nghỉ học từ năm lớp 7, ở nhà với ba mẹ đến nay thì muốn vào HCM tìm công việc mưu sinh. Một mình lặn lội từ miền Trung vào Sài Gòn với người cậu. L chỉ đi làm được vài tháng thì xảy ra chuyện không may. Những ngày đầu một mình người cậu chăm lo cho L trong khi chờ bố mẹ em vào.\nNghe tin con gặp tai nạn nghiêm trọng, tình trạng nguy kịch và chi phí điều trị vô cùng lớn với gia đình. Chị T-mẹ của bệnh nhân-thất thần nhưng cũng chạy đi vay mượn tiền để vào với con trai. Chắc hẳn chuyến xe đưa chị vào chăm con là chuyến xe xa nhất, lâu nhất và nặng nề nhất chị từng đi. Vì hoàn cảnh gia đình khó khăn nên các con không có điều kiện học hành buộc lòng các con phải ra đời bươn chải sớm. L có BHYT nhưng quá trình điều trị lâu dài, tình trạng chấn thương nghiêm trọng nên tính đến đầu tháng 10, gia đình vẫn đang nợ viện phí gần 30 triệu đồng. Gia đình đóng được 71 triệu tạm ứng hoàn toàn là tiền vay mượn. Ngày thường chi tiêu sinh hoạt đã thiếu trước, hụt sau thì nay tiền chục triệu là một con số vượt quá khả năng.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668494145/pbl4/cg15ju09o8oppco7emvm.png', NULL, NULL, '2022-11-15 06:35:58', '2022-11-15 06:35:58', 2),
(5, 'CÔ GIÁO MẦM NON PHẢI NGHỈ VIỆC VÌ BỆNH TẬT BỦA VÂY', 1, 2, 'Từng là giáo viên, từng là hiệu trưởng của một trường mầm non với hơn 20 năm công tác trong công việc dạy trẻ. Nhưng tai nạn bất ngờ trong lúc công tác đã cắt ngang con đường giảng dạy của chị. Đau đớn, hụt hẫng, bệnh tật bủa vây chị trong cùng một thời điểm, mất tất cả từ sự nghiệp đến sức khỏe, chị đã gần như tuyệt vọng.\nChị Nguyễn T.M.H, sinh năm 1979, tại Tp.Hồ Chí Minh. Vốn mang trong người căn bệnh thận phải ra vô bệnh viện theo dõi thường xuyên. Năm 2018, khi tổng vệ sinh tại trường, chị H bị mảnh gỗ đâm vào mắt dẫn đến nhiễm trùng, mặc dù đã cố gắng cứu chữa nhưng chị đã không thể giữ lại một bên mắt của mình. Chẳng bao lâu sau đó, căn bệnh thận của chị trở nặng, tay chân phù nề chị bước sang giai đoạn chạy thận. Di chứng từ bệnh thận dẫn đến chị bị đái tháo đường và làm cho một bên mắt còn lại của chị suy giảm nặng nề. Thị lực gần như mất đi, chị buộc lòng phải nghỉ việc. Sau một thời gian cố gắng làm thêm bên ngoài, chị đã chính thức không thể đứng lớp khi thị lực chỉ còn khoảng 20% và đươc duy trì bằng việc phải tiêm thuốc hàng tháng.\nCuộc sống của chị từ một giáo viên giỏi, cô hiệu trưởng tận tụy ngày ngày đến trường thì giờ đây chị phải đều đặn 3 ngày/tuần đến bệnh viện Hóc Môn để chạy thận, lọc máu. Số tiền dành dụm, tích góp sau bao năm đi làm vơi dần theo năm tháng vừa chạy thận, vừa điều trị mắt nhưng trong vô vọng. Ba mẹ chị đã ở tuổi 70 không còn sức lao động do bệnh đau và tai nạn giao thông, cả nhà đang ở nhờ trong căn nhà của người họ hàng. Giờ đây, tất cả chi phí sinh hoạt, khám bệnh hàng tháng đều được người quen và em gái hỗ trợ.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668494196/pbl4/kwttg839s5wfk0csvwze.png', NULL, NULL, '2022-11-15 06:36:41', '2022-11-29 13:18:00', 2),
(13, '12332112', 1, 2, '213', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1668644380/pbl4/aiqwj5h4xftyf9fogvwl.png', NULL, NULL, '2022-11-17 00:19:47', '2022-11-29 09:56:38', 2),
(14, 'Người đàn bà lực điền', 1, 1, '“Chỉ vài tháng sau khi tôi bắt đầu tập luyện, tôi đã đi trình diễn ở các trận đấu trong vùng và tôi nhận ra rằng tôi đã rất thích nó. Tôi đã trở thành một nhà vô địch bất bại của giải Zabaikalye Region khi tôi chỉ 16 tuổi. Đó là cách mọi thứ bắt đầu. Tôi thậm chí đã từng tham gia một trận chiến đối kháng khốc liệt. Dù rằng tôi không dành chiến thắng, nhưng kết quả thật sự không quá tệ. Song, những kết quả sẽ bị lãng quên một cách nhanh chóng thôi”.', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669429433/pbl4/ipalvaswzsqeia1dkkmt.jpg', NULL, NULL, '2022-11-26 02:24:00', '2022-11-29 09:53:23', 5),
(15, '123123', 1, 1, '213123', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669432002/pbl4/iuzo1hwbejy2irgzlgxq.png', NULL, NULL, '2022-11-26 03:07:18', '2022-11-26 03:07:18', 7),
(24, '123', 0, 1, '123', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669658175/pbl4/qk7actnl0hrudqa7oix4.jpg', NULL, NULL, '2022-11-28 17:56:19', '2022-11-28 17:56:19', 7),
(26, 'test_11111111', 0, 1, '1111111111111111111', 'http://res.cloudinary.com/drx9ycs46/image/upload/v1669787151/pbl4/ms3yyst4ttgdx6z7paad.jpg', NULL, NULL, '2022-11-30 05:46:01', '2022-11-30 05:46:01', 2);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `donates`
--
ALTER TABLE `donates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT cho bảng `participants`
--
ALTER TABLE `participants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
