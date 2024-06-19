const cities = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", 
    "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", 
    "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đà Nẵng", 
    "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", 
    "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", 
    "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", 
    "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", 
    "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", 
    "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", 
    "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", 
    "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", 
    "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", 
    "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

const districts = {
    "An Giang": ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"],
    "Bà Rịa - Vũng Tàu": ["Thành phố Vũng Tàu", "Thành phố Bà Rịa", "Thị xã Phú Mỹ", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Xuyên Mộc"],
    "Bắc Giang": ["Thành phố Bắc Giang", "Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Lục Nam", "Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Tân Yên", "Huyện Việt Yên", "Huyện Yên Dũng", "Huyện Yên Thế"],
    "Bắc Kạn": ["Thành phố Bắc Kạn", "Huyện Ba Bể", "Huyện Bạch Thông", "Huyện Chợ Đồn", "Huyện Chợ Mới", "Huyện Na Rì", "Huyện Ngân Sơn", "Huyện Pác Nặm"],
    "Bạc Liêu": ["Thành phố Bạc Liêu", "Thị xã Giá Rai", "Huyện Đông Hải", "Huyện Hòa Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Huyện Vĩnh Lợi"],
    "Bắc Ninh": ["Thành phố Bắc Ninh", "Thị xã Từ Sơn", "Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ", "Huyện Thuận Thành", "Huyện Tiên Du", "Huyện Yên Phong"],
    "Bến Tre": ["Thành phố Bến Tre", "Huyện Ba Tri", "Huyện Bình Đại", "Huyện Châu Thành", "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Mỏ Cày Bắc", "Huyện Mỏ Cày Nam", "Huyện Thạnh Phú"],
    "Bình Định": ["Thành phố Quy Nhơn", "Thị xã An Nhơn", "Thị xã Hoài Nhơn", "Huyện An Lão", "Huyện Hoài Ân", "Huyện Phù Cát", "Huyện Phù Mỹ", "Huyện Tây Sơn", "Huyện Tuy Phước", "Huyện Vân Canh", "Huyện Vĩnh Thạnh"],
    "Bình Dương": ["Thành phố Thủ Dầu Một", "Thành phố Dĩ An", "Thành phố Thuận An", "Thị xã Bến Cát", "Thị xã Tân Uyên", "Huyện Bắc Tân Uyên", "Huyện Bàu Bàng", "Huyện Dầu Tiếng", "Huyện Phú Giáo"],
    "Bình Phước": ["Thành phố Đồng Xoài", "Thị xã Bình Long", "Thị xã Phước Long", "Huyện Bù Đăng", "Huyện Bù Đốp", "Huyện Bù Gia Mập", "Huyện Chơn Thành", "Huyện Đồng Phú", "Huyện Hớn Quản", "Huyện Lộc Ninh", "Huyện Phú Riềng"],
    "Bình Thuận": ["Thành phố Phan Thiết", "Thị xã La Gi", "Huyện Bắc Bình", "Huyện Đức Linh", "Huyện Hàm Tân", "Huyện Hàm Thuận Bắc", "Huyện Hàm Thuận Nam", "Huyện Phú Quí", "Huyện Tánh Linh", "Huyện Tuy Phong"],
    "Cà Mau": ["Thành phố Cà Mau", "Huyện Cái Nước", "Huyện Đầm Dơi", "Huyện Năm Căn", "Huyện Ngọc Hiển", "Huyện Phú Tân", "Huyện Thới Bình", "Huyện Trần Văn Thời", "Huyện U Minh"],
    "Cần Thơ": ["Quận Ninh Kiều", "Quận Bình Thủy", "Quận Cái Răng", "Quận Ô Môn", "Quận Thốt Nốt", "Huyện Cờ Đỏ", "Huyện Phong Điền", "Huyện Thới Lai", "Huyện Vĩnh Thạnh"],
    "Cao Bằng": ["Thành phố Cao Bằng", "Huyện Bảo Lạc", "Huyện Bảo Lâm", "Huyện Hạ Lang", "Huyện Hà Quảng", "Huyện Hòa An", "Huyện Nguyên Bình", "Huyện Quảng Hòa", "Huyện Thạch An", "Huyện Trùng Khánh"],
    "Đà Nẵng": ["Quận Hải Châu", "Quận Thanh Khê", "Quận Sơn Trà", "Quận Ngũ Hành Sơn", "Quận Liên Chiểu", "Quận Cẩm Lệ", "Huyện Hòa Vang", "Huyện Hoàng Sa"],
    "Đắk Lắk": ["Thành phố Buôn Ma Thuột", "Thị xã Buôn Hồ", "Huyện Buôn Đôn", "Huyện Cư Kuin", "Huyện Cư M'gar", "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp", "Huyện Krông Ana", "Huyện Krông Bông", "Huyện Krông Búk", "Huyện Krông Năng", "Huyện Krông Pắk", "Huyện Lắk", "Huyện M'Drắk"],
    "Đắk Nông": ["Thành phố Gia Nghĩa", "Huyện Cư Jút", "Huyện Đăk Glong", "Huyện Đắk Mil", "Huyện Đắk R'Lấp", "Huyện Đắk Song", "Huyện Krông Nô", "Huyện Tuy Đức"],
    "Điện Biên": ["Thành phố Điện Biên Phủ", "Thị xã Mường Lay", "Huyện Điện Biên", "Huyện Điện Biên Đông", "Huyện Mường Ảng", "Huyện Mường Chà", "Huyện Mường Nhé", "Huyện Nậm Pồ", "Huyện Tủa Chùa", "Huyện Tuần Giáo"],
    "Đồng Nai": ["Thành phố Biên Hòa", "Thành phố Long Khánh", "Huyện Cẩm Mỹ", "Huyện Định Quán", "Huyện Long Thành", "Huyện Nhơn Trạch", "Huyện Tân Phú", "Huyện Thống Nhất", "Huyện Trảng Bom", "Huyện Vĩnh Cửu", "Huyện Xuân Lộc"],
    "Đồng Tháp": ["Thành phố Cao Lãnh", "Thành phố Sa Đéc", "Thành phố Hồng Ngự", "Huyện Cao Lãnh", "Huyện Châu Thành", "Huyện Hồng Ngự", "Huyện Lai Vung", "Huyện Lấp Vò", "Huyện Tam Nông", "Huyện Tân Hồng", "Huyện Thanh Bình", "Huyện Tháp Mười"],
    "Gia Lai": ["Thành phố Pleiku", "Thị xã An Khê", "Thị xã Ayun Pa", "Huyện Chư Păh", "Huyện Chư Prông", "Huyện Chư Pưh", "Huyện Chư Sê", "Huyện Đắk Đoa", "Huyện Đăk Pơ", "Huyện Đức Cơ", "Huyện Ia Grai", "Huyện Ia Pa", "Huyện KBang", "Huyện Kông Chro", "Huyện Krông Pa", "Huyện Mang Yang", "Huyện Phú Thiện"],
    "Hà Giang": ["Thành phố Hà Giang", "Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Đồng Văn", "Huyện Hoàng Su Phì", "Huyện Mèo Vạc", "Huyện Quản Bạ", "Huyện Quang Bình", "Huyện Vị Xuyên", "Huyện Xín Mần", "Huyện Yên Minh"],
    "Hà Nam": ["Thành phố Phủ Lý", "Thị xã Duy Tiên", "Huyện Bình Lục", "Huyện Kim Bảng", "Huyện Lý Nhân", "Huyện Thanh Liêm"],
    "Hà Nội": ["Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Hai Bà Trưng", "Quận Đống Đa", "Quận Tây Hồ", "Quận Cầu Giấy", "Quận Thanh Xuân", "Quận Hoàng Mai", "Quận Long Biên", "Huyện Thanh Trì", "Quận Bắc Từ Liêm", "Huyện Gia Lâm", "Huyện Đông Anh", "Huyện Sóc Sơn", "Huyện Mê Linh", "Quận Hà Đông", "Thị xã Sơn Tây", "Huyện Ba Vì", "Huyện Phúc Thọ", "Huyện Đan Phượng", "Huyện Hoài Đức", "Huyện Quốc Oai", "Huyện Thạch Thất", "Huyện Chương Mỹ", "Huyện Thanh Oai", "Huyện Thường Tín", "Huyện Phú Xuyên", "Huyện Ứng Hòa", "Huyện Mỹ Đức"],
    "Hà Tĩnh": ["Thành phố Hà Tĩnh", "Thị xã Hồng Lĩnh", "Thị xã Kỳ Anh", "Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ", "Huyện Hương Khê", "Huyện Hương Sơn", "Huyện Kỳ Anh", "Huyện Lộc Hà", "Huyện Nghi Xuân", "Huyện Thạch Hà", "Huyện Vũ Quang"],
    "Hải Dương": ["Thành phố Hải Dương", "Thành phố Chí Linh", "Thị xã Kinh Môn", "Huyện Bình Giang", "Huyện Cẩm Giàng", "Huyện Gia Lộc", "Huyện Kim Thành", "Huyện Nam Sách", "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Thanh Miện", "Huyện Tứ Kỳ"],
    "Hải Phòng": ["Quận Hồng Bàng", "Quận Ngô Quyền", "Quận Lê Chân", "Quận Hải An", "Quận Kiến An", "Quận Đồ Sơn", "Quận Dương Kinh", "Huyện An Dương", "Huyện An Lão", "Huyện Bạch Long Vĩ", "Huyện Cát Hải", "Huyện Kiến Thụy", "Huyện Thủy Nguyên", "Huyện Tiên Lãng", "Huyện Vĩnh Bảo"],
    "Hậu Giang": ["Thành phố Vị Thanh", "Thành phố Ngã Bảy", "Thị xã Long Mỹ", "Huyện Châu Thành", "Huyện Châu Thành A", "Huyện Long Mỹ", "Huyện Phụng Hiệp", "Huyện Vị Thủy"],
    "Hòa Bình": ["Thành phố Hòa Bình", "Huyện Cao Phong", "Huyện Đà Bắc", "Huyện Kim Bôi", "Huyện Kỳ Sơn", "Huyện Lạc Sơn", "Huyện Lạc Thủy", "Huyện Lương Sơn", "Huyện Mai Châu", "Huyện Tân Lạc", "Huyện Yên Thủy"],
    "Hưng Yên": ["Thành phố Hưng Yên", "Thị xã Mỹ Hào", "Huyện Ân Thi", "Huyện Khoái Châu", "Huyện Kim Động", "Huyện Phù Cừ", "Huyện Tiên Lữ", "Huyện Văn Giang", "Huyện Văn Lâm", "Huyện Yên Mỹ"],
    "Khánh Hòa": ["Thành phố Nha Trang", "Thành phố Cam Ranh", "Thị xã Ninh Hòa", "Huyện Cam Lâm", "Huyện Diên Khánh", "Huyện Khánh Sơn", "Huyện Khánh Vĩnh", "Huyện Trường Sa", "Huyện Vạn Ninh"],
    "Kiên Giang": ["Thành phố Rạch Giá", "Thành phố Hà Tiên", "Thành phố Phú Quốc", "Huyện An Biên", "Huyện An Minh", "Huyện Châu Thành", "Huyện Giang Thành", "Huyện Giồng Riềng", "Huyện Gò Quao", "Huyện Hòn Đất", "Huyện Kiên Hải", "Huyện Kiên Lương", "Huyện Tân Hiệp", "Huyện U Minh Thượng", "Huyện Vĩnh Thuận"],
    "Kon Tum": ["Thành phố Kon Tum", "Huyện Đăk Glei", "Huyện Đăk Hà", "Huyện Đăk Tô", "Huyện Ia H'Drai", "Huyện Kon Plông", "Huyện Kon Rẫy", "Huyện Ngọc Hồi", "Huyện Sa Thầy", "Huyện Tu Mơ Rông"],
    "Lai Châu": ["Thành phố Lai Châu", "Huyện Mường Tè", "Huyện Nậm Nhùn", "Huyện Phong Thổ", "Huyện Sìn Hồ", "Huyện Tân Uyên", "Huyện Tam Đường", "Huyện Than Uyên"],
    "Lâm Đồng": ["Thành phố Đà Lạt", "Thành phố Bảo Lộc", "Huyện Bảo Lâm", "Huyện Cát Tiên", "Huyện Đạ Huoai", "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh", "Huyện Đơn Dương", "Huyện Đức Trọng", "Huyện Lạc Dương", "Huyện Lâm Hà"],
    "Lạng Sơn": ["Thành phố Lạng Sơn", "Huyện Bắc Sơn", "Huyện Bình Gia", "Huyện Cao Lộc", "Huyện Chi Lăng", "Huyện Đình Lập", "Huyện Hữu Lũng", "Huyện Lộc Bình", "Huyện Tràng Định", "Huyện Văn Lãng", "Huyện Văn Quan"],
    "Lào Cai": ["Thành phố Lào Cai", "Thị xã Sa Pa", "Huyện Bảo Thắng", "Huyện Bảo Yên", "Huyện Bát Xát", "Huyện Bắc Hà", "Huyện Mường Khương", "Huyện Si Ma Cai", "Huyện Văn Bàn"],
    "Long An": ["Thành phố Tân An", "Thị xã Kiến Tường", "Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc", "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ", "Huyện Mộc Hóa", "Huyện Tân Hưng", "Huyện Tân Thạnh", "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Huyện Thủ Thừa", "Huyện Vĩnh Hưng"],
    "Nam Định": ["Thành phố Nam Định", "Huyện Giao Thủy", "Huyện Hải Hậu", "Huyện Mỹ Lộc", "Huyện Nam Trực", "Huyện Nghĩa Hưng", "Huyện Trực Ninh", "Huyện Vụ Bản", "Huyện Xuân Trường", "Huyện Ý Yên"],
    "Nghệ An": ["Thành phố Vinh", "Thị xã Cửa Lò", "Thị xã Hoàng Mai", "Thị xã Thái Hòa", "Thị xã Hoàng Mai", "Huyện Anh Sơn", "Huyện Con Cuông", "Huyện Diễn Châu", "Huyện Đô Lương", "Huyện Hưng Nguyên", "Huyện Kỳ Sơn", "Huyện Nam Đàn", "Huyện Nghi Lộc", "Huyện Nghĩa Đàn", "Huyện Quế Phong", "Huyện Quỳ Châu", "Huyện Quỳ Hợp", "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Huyện Thanh Chương", "Huyện Tương Dương", "Huyện Yên Thành"],
    "Ninh Bình": ["Thành phố Ninh Bình", "Thành phố Tam Điệp", "Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn", "Huyện Nho Quan", "Huyện Yên Khánh", "Huyện Yên Mô"],
    "Ninh Thuận": ["Thành phố Phan Rang - Tháp Chàm", "Huyện Bác Ái", "Huyện Ninh Hải", "Huyện Ninh Phước", "Huyện Ninh Sơn", "Huyện Thuận Bắc", "Huyện Thuận Nam"],
    "Phú Thọ": ["Thành phố Việt Trì", "Thị xã Phú Thọ", "Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hòa", "Huyện Lâm Thao", "Huyện Phù Ninh", "Huyện Tam Nông", "Huyện Tân Sơn", "Huyện Thanh Ba", "Huyện Thanh Sơn", "Huyện Thanh Thủy", "Huyện Yên Lập"],
    "Phú Yên": ["Thành phố Tuy Hòa", "Thị xã Đông Hòa", "Thị xã Sông Cầu", "Huyện Đồng Xuân", "Huyện Phú Hòa", "Huyện Sơn Hòa", "Huyện Sông Hinh", "Huyện Tây Hòa", "Huyện Tuy An"],
    "Quảng Bình": ["Thành phố Đồng Hới", "Thị xã Ba Đồn", "Huyện Bố Trạch", "Huyện Lệ Thủy", "Huyện Minh Hóa", "Huyện Quảng Ninh", "Huyện Quảng Trạch", "Huyện Tuyên Hóa"],
    "Quảng Nam": ["Thành phố Tam Kỳ", "Thành phố Hội An", "Thị xã Điện Bàn", "Huyện Bắc Trà My", "Huyện Đại Lộc", "Huyện Đông Giang", "Huyện Duy Xuyên", "Huyện Hiệp Đức", "Huyện Nam Giang", "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành", "Huyện Phú Ninh", "Huyện Phước Sơn", "Huyện Quế Sơn", "Huyện Tây Giang", "Huyện Thăng Bình", "Huyện Tiên Phước"],
    "Quảng Ngãi": ["Thành phố Quảng Ngãi", "Thị xã Đức Phổ", "Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Lý Sơn", "Huyện Minh Long", "Huyện Mộ Đức", "Huyện Nghĩa Hành", "Huyện Sơn Hà", "Huyện Sơn Tây", "Huyện Sơn Tịnh", "Huyện Trà Bồng", "Huyện Tư Nghĩa"],
    "Quảng Ninh": ["Thành phố Hạ Long", "Thành phố Móng Cái", "Thành phố Cẩm Phả", "Thành phố Uông Bí", "Thị xã Đông Triều", "Thị xã Quảng Yên", "Huyện Ba Chẽ", "Huyện Bình Liêu", "Huyện Cô Tô", "Huyện Đầm Hà", "Huyện Hải Hà", "Huyện Hoành Bồ", "Huyện Tiên Yên", "Huyện Vân Đồn"],
    "Quảng Trị": ["Thành phố Đông Hà", "Thị xã Quảng Trị", "Huyện Cam Lộ", "Huyện Cồn Cỏ", "Huyện Đa Krông", "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hóa", "Huyện Triệu Phong", "Huyện Vĩnh Linh"],
    "Sóc Trăng": ["Thành phố Sóc Trăng", "Thị xã Ngã Năm", "Thị xã Vĩnh Châu", "Huyện Châu Thành", "Huyện Cù Lao Dung", "Huyện Kế Sách", "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Mỹ Xuyên", "Huyện Thạnh Trị", "Huyện Trần Đề"],
    "Sơn La": ["Thành phố Sơn La", "Huyện Bắc Yên", "Huyện Mai Sơn", "Huyện Mộc Châu", "Huyện Mường La", "Huyện Phù Yên", "Huyện Quỳnh Nhai", "Huyện Sông Mã", "Huyện Sốp Cộp", "Huyện Thuận Châu", "Huyện Vân Hồ", "Huyện Yên Châu"],
    "Tây Ninh": ["Thành phố Tây Ninh", "Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu", "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên", "Huyện Tân Châu", "Huyện Trảng Bàng"],
    "Thái Bình": ["Thành phố Thái Bình", "Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Kiến Xương", "Huyện Quỳnh Phụ", "Huyện Thái Thụy", "Huyện Tiền Hải", "Huyện Vũ Thư"],
    "Thái Nguyên": ["Thành phố Thái Nguyên", "Thành phố Sông Công", "Thị xã Phổ Yên", "Huyện Đại Từ", "Huyện Định Hóa", "Huyện Đồng Hỷ", "Huyện Phú Bình", "Huyện Phú Lương", "Huyện Võ Nhai"],
    "Thanh Hóa": ["Thành phố Thanh Hóa", "Thị xã Bỉm Sơn", "Thị xã Nghi Sơn", "Huyện Bá Thước", "Huyện Cẩm Thủy", "Huyện Đông Sơn", "Huyện Hà Trung", "Huyện Hậu Lộc", "Huyện Hoằng Hóa", "Huyện Lang Chánh", "Huyện Mường Lát", "Huyện Nga Sơn", "Huyện Ngọc Lặc", "Huyện Như Thanh", "Huyện Như Xuân", "Huyện Nông Cống", "Huyện Quan Hóa", "Huyện Quan Sơn", "Huyện Quảng Xương", "Huyện Thạch Thành", "Huyện Thiệu Hóa", "Huyện Thọ Xuân", "Huyện Thường Xuân", "Huyện Triệu Sơn", "Huyện Vĩnh Lộc", "Huyện Yên Định"],
    "Thừa Thiên Huế": ["Thành phố Huế", "Thị xã Hương Thủy", "Thị xã Hương Trà", "Huyện A Lưới", "Huyện Nam Đông", "Huyện Phong Điền", "Huyện Phú Lộc", "Huyện Phú Vang", "Huyện Quảng Điền"],
    "Tiền Giang": ["Thành phố Mỹ Tho", "Thị xã Cai Lậy", "Thị xã Gò Công", "Huyện Cái Bè", "Huyện Cai Lậy", "Huyện Châu Thành", "Huyện Chợ Gạo", "Huyện Gò Công Đông", "Huyện Gò Công Tây", "Huyện Tân Phú Đông", "Huyện Tân Phước"],
    "TP Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12", "Quận Bình Tân", "Quận Bình Thạnh", "Quận Gò Vấp", "Quận Phú Nhuận", "Quận Tân Bình", "Quận Tân Phú", "Quận Thủ Đức", "Huyện Bình Chánh", "Huyện Cần Giờ", "Huyện Củ Chi", "Huyện Hóc Môn", "Huyện Nhà Bè"],
    "Trà Vinh": ["Thành phố Trà Vinh", "Thị xã Duyên Hải", "Huyện Càng Long", "Huyện Cầu Kè", "Huyện Cầu Ngang", "Huyện Châu Thành", "Huyện Duyên Hải", "Huyện Tiểu Cần", "Huyện Trà Cú"],
    "Tuyên Quang": ["Thành phố Tuyên Quang", "Huyện Chiêm Hóa", "Huyện Hàm Yên", "Huyện Lâm Bình", "Huyện Na Hang", "Huyện Sơn Dương", "Huyện Yên Sơn"],
    "Vĩnh Long": ["Thành phố Vĩnh Long", "Thị xã Bình Minh", "Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít", "Huyện Tam Bình", "Huyện Trà Ôn", "Huyện Vũng Liêm"],
    "Vĩnh Phúc": ["Thành phố Vĩnh Yên", "Thành phố Phúc Yên", "Huyện Bình Xuyên", "Huyện Lập Thạch", "Huyện Sông Lô", "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Vĩnh Tường", "Huyện Yên Lạc"],
    "Yên Bái": ["Thành phố Yên Bái", "Thị xã Nghĩa Lộ", "Huyện Lục Yên", "Huyện Mù Cang Chải", "Huyện Trạm Tấu", "Huyện Trấn Yên", "Huyện Văn Chấn", "Huyện Văn Yên", "Huyện Yên Bình"],
};

document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    document.getElementById('loanForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thông tin của bạn đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    });
});

function loadDistricts() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const selectedCity = citySelect.value;

    districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';

    if (districts[selectedCity]) {
        districts[selectedCity].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var modalBtn = document.getElementById('modalBtn');
    var mainContent = document.querySelector('main');

    modalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        mainContent.style.display = 'block';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const commentList = [
        {
            id:1,
            name:'Lương Nguyễn',
            gender:1,
            comment:'Cảm ơn công ty đã hỗ trợ tôi nhận về khoản vay nhanh chóng , nhân viên rất nhiệt tình.',
            time:'1 phút trước',
            like:'Thích (1)',
            reward:'Phản hồi (0)'
        },
        {
            id:2,
            name:'Tâm Đàm',
            gender:1,
            comment:'Tôi đã vay vốn bên công ty  , thủ tục nhanh gọn nhận tiền nhanh',
            time:'3 phút trước',
            like:'Thích (4)',
            reward:'Phản hồi (3)'
        },
        {
            id:3,
            name:'Trần Thị Kim Ngọc',
            gender:2,
            comment:'Giải ngân nhanh, bảo mật thông tin khách hàng tốt.',
            time:'5 phút trước',
            like:'Thích (13)',
            reward:'Phản hồi (5)'
        },
        {
            id:4,
            name:'Nguyễn Dương Phát',
            gender:2,
            comment:'Mình rất hài lòng về thái độ chuyên nghiệp của chuyên viên , khoản vay giải ngân nhanh chóng thủ tục rất nhanh gọn',
            time:'7 phút trước',
            like:'Thích (10)',
            reward:'Phản hồi (17)'
        },
        {
            id:5,
            name:'Hoàng Phương Thảo',
            gender:1,
            comment:'Mình đã vay và được giải ngân thành công',
            time:'9 phút trước',
            like:'Thích (9)',
            reward:'Phản hồi (6)'
        },
        {
            id:6,
            name:'Lưu Hải Ninh',
            gender:2,
            comment:'Tôi đã vay hai lần ở công ty này rồi ,giải ngân nhanh chóng và rất đáng tin cậy để vay khoản vay lớn',
            time:'11 phút trước',
            like:'Thích (2)',
            reward:'Phản hồi (10)'
        },
        {
            id:7,
            name:'Đặng Thị Thu Phương',
            gender:1,
            comment:'Tôi vay 300tr 6 tháng thanh toán trước kì hạn lãi xuất ok lắm ',
            time:'13 phút trước',
            like:'Thích (5)',
            reward:'Phản hồi (10)'
        },
        {
            id:8,
            name:'Quốc Thái',
            gender:1,
            comment:'Cảm ơn công ty đã giúp tôi lúc khó khan',
            time:'15 phút trước',
            like:'Thích (3)',
            reward:'Phản hồi (7)'
        },
        {
            id:9,
            name:'Mai Nhi',
            gender:2,
            comment:'Vừa ra tết tiền không có 1 xu dính túi, mà vào gg tại thấy trang này nên vay luôn ai ngờ được giải ngân 60tr, các ông vay thử đi ok lắm',
            time:'17 phút trước',
            like:'Thích (0)',
            reward:'Phản hồi (4)'
        },
        {
            id:10,
            name:'Thanh Minh Nguyễn Thị',
            gender:2,
            comment:'Ai hướng dẫn tui với, tui đang cần tiền quá trời',
            time:'19 phút trước',
            like:'Thích (24)',
            reward:'Phản hồi (37)'
        },
        {
            id:11,
            name:'Nguyễn Thị Thu Hà',
            gender:1,
            comment:'Uy tín giải ngân nhanh, lãi suất thấp ',
            time:'21 phút trước',
            like:'Thích (18)',
            reward:'Phản hồi (7)'
        },
        {
            id:12,
            name:'Nguyễn Tươi',
            gender:1,
            comment:'Tv e với ạ.Trong thời điểm tôi khó khăn tài chính công ty đã hỗ trợ tôi khoản vay phù hợp để trang chải cuộc sống và đã giúp tôi lúc khó khăn nhất. chân thành cảm ơn công ty ạ',
            time:'23 phút trước',
            like:'Thích (11)',
            reward:'Phản hồi (9)'
        },
        {
            id:13,
            name:'Phạm Thu Thảo',
            gender:1,
            comment:'Vay 50 củ 2 tháng trả mà lãi có tí tẹo , cứ tưởng như FE',
            time:'25 phút trước',
            like:'Thích (4)',
            reward:'Phản hồi (2)'
        },
        {
            id:14,
            name:'Minh Trang Nguyen',
            gender:1,
            comment:'Uy tín vay mà không thẩm định người thân mọi người à',
            time:'27 phút trước',
            like:'Thích (27)',
            reward:'Phản hồi (19)'
        },
        {
            id:15,
            name:'Đặng Kim Hằng',
            gender:1,
            comment:'Công ty ổn quá có mỗi CCCD vs lịch sử nhận lương là nhận được tiền rồi',
            time:'29 phút trước',
            like:'Thích (35)',
            reward:'Phản hồi (48)'
        },
        {
            id:16,
            name:'Hoa Bi Ngan',
            gender:1,
            comment:'Cứ tưởng rắc rối mà hóa ra thủ tục đơn giản quá mọi ng à ',
            time:'31 phút trước',
            like:'Thích (3)',
            reward:'Phản hồi (7)'
        },
        {
            id:17,
            name:'Linh Bui',
            gender:2,
            comment:'Mình bị nợ xấu mà vẫn vay được cảm ơn công ty đã hỗ trợ',
            time:'33 phút trước',
            like:'Thích (13)',
            reward:'Phản hồi (17)'
        },
        {
            id:18,
            name:'Trần Linh Linh',
            gender:2,
            comment:'Uy tín quá mọi người thủ tục nhanh lắm',
            time:'35 phút trước',
            like:'Thích (23)',
            reward:'Phản hồi (12)'
        },
        {
            id:19,
            name:'Lê Hữu',
            gender:2,
            comment:'Tôi đi vay cũng nhiều mà toàn bị lừa thôi, hôm nay thật sự gặp được công ty là may mắn, nhân viên bên công ty đã hỗ trợ tôi vay rất nhiệt tình, thủ tục nhanh gọn, minh bạch lãi suất tốt, cảm ơn công ty',
            time:'37 phút trước',
            like:'Thích (8)',
            reward:'Phản hồi (17)'
        },
        {
            id:20,
            name:'Tai Tiên',
            gender:2,
            comment:'Có tiền sắm tết rồi mọi người ơi cảm ơn công ty đã giúp đỡ',
            time:'39 phút trước',
            like:'Thích (14)',
            reward:'Phản hồi (18)'
        },
        {
            id:21,
            name:'Tố Trinh',
            gender:2,
            comment:'Mình vay kinh doanh lãi xuất hợp lý quá mà không phải thế chấp gì cả ',
            time:'41 phút trước',
            like:'Thích (45)',
            reward:'Phản hồi (68)'
        },
        {
            id:22,
            name:'Phan Huy Quyết',
            gender:2,
            comment:'Mình lúc đầu k tin còn đến tận công ty làm việc, nhận tiền r uy tín lắm mn nha',
            time:'43 phút trước',
            like:'Thích (39)',
            reward:'Phản hồi (40)'
        },
        {
            id:23,
            name:'Dương Dương',
            gender:2,
            comment:'Tiền vù cái 30 phút đã nhận , mất có 200k phí ưu tiên , thỏa mái kịp cần những lúc muốn',
            time:'45 phút trước',
            like:'Thích (103)',
            reward:'Phản hồi (77)'
        },
        {
            id:24,
            name:'Quyền Guxì',
            gender:2,
            comment:'Cứ tưởng bị lừa, nhận được tiền rồi thì tôi mới thấy công ty uy tín.',
            time:'47 phút trước',
            like:'Thích (0)',
            reward:'Phản hồi (2)'
        },
        {
            id:25,
            name:'Bùi Lê',
            gender:2,
            comment:'Uy tín - bảo mật . Tôi đã giới thiệu bạn bè vay qua',
            time:'49 phút trước',
            like:'Thích (3)',
            reward:'Phản hồi (0)'
        },
        {
            id:26,
            name:'Sang Nguyen Van Sang',
            gender:2,
            comment:'Đặt lòng tin đúng chỗ luôn',
            time:'51 phút trước',
            like:'Thích (4)',
            reward:'Phản hồi (1)'
        },
        {
            id:27,
            name:'Hiếu Công Tử',
            gender:2,
            comment:'Vay nhanh uy tín ,đáng tin cậy',
            time:'53 phút trước',
            like:'Thích (118)',
            reward:'Phản hồi (97)'
        },
        {
            id:28,
            name:'Duy Milo',
            gender:1,
            comment:'Tôi đã từng vay qua và được giải ngân thành công, công ty uy tín , nhân viên nhiệt tình chu đáo',
            time:'55 phút trước',
            like:'Thích (19)',
            reward:'Phản hồi (18)'
        },
        {
            id:29,
            name:'Nguyễn Phát',
            gender:2,
            comment:'Được bạn mình giới thiệu qua công ty lúc khó khăn nhờ vậy tôi đã vượt qua thời gian khó khăn này.',
            time:'57 phút trước',
            like:'Thích (23)',
            reward:'Phản hồi (12)'
        },
        {
            id:30,
            name:'Tuý Bùi',
            gender:1,
            comment:'Đến đúng chỗ và đặt đúng niềm tin cảm ơn công ty rất nhiều',
            time:'59 phút trước',
            like:'Thích (5)',
            reward:'Phản hồi (9)'
        },
        {
            id:31,
            name:'Hoàng Hữu',
            gender:1,
            comment:'Mình vay 50tr trả 3 tháng lãi xuất rất là ok hợp lý',
            time:'2 phút trước',
            like:'Thích (31)',
            reward:'Phản hồi (21)'
        },
        {
            id:32,
            name:'Remix Quang',
            gender:1,
            comment:'CSKH tư vấn nhiệt tình , tôi sẽ giới thiệu bạn bè liên hệ để vay vốn',
            time:'4 phút trước',
            like:'Thích (14)',
            reward:'Phản hồi (23)'
        },
        {
            id:33,
            name:'Quách Gia Hân',
            gender:2,
            comment:'Giờ lừa đảo nhiều quá may mắn tôi lên google tìm hiểu đã biết đến công ty, lãi xuất rất hợp lý',
            time:'6 phút trước',
            like:'Thích (63)',
            reward:'Phản hồi (33)'
        },
        {
            id:34,
            name:'trang hứa',
            gender:2,
            comment:'Vay nhanh dễ dàng giải ngân lại nhanh đáng để vay.',
            time:'8 phút trước',
            like:'Thích (28)',
            reward:'Phản hồi (20)'
        },
        {
            id:35,
            name:'My My',
            gender:2,
            comment:'Công ty uy tín , giải ngân nhanh .',
            time:'10 phút trước',
            like:'Thích (0)',
            reward:'Phản hồi (1)'
        },
        {
            id:36,
            name:'Somi Hà',
            gender:2,
            comment:'Trả cần đến tận nơi cũng có tiền về',
            time:'12 phút trước',
            like:'Thích (0)',
            reward:'Phản hồi (0)'
        },
        {
            id:37,
            name:'anh minh',
            gender:2,
            comment:'Công ty rất ok, 10 điểm',
            time:'14 phút trước',
            like:'Thích (3)',
            reward:'Phản hồi (5)'
        },
        {
            id:38,
            name:'Nguyen Nam',
            gender:2,
            comment:'Lãi suất có cao hơn ngân hàng chút ít , nhưng thủ tục đơn giản nhận tiền nhanh',
            time:'16 phút trước',
            like:'Thích (10)',
            reward:'Phản hồi (7)'
        },
        {
            id:39,
            name:'mỹ hà',
            gender:1,
            comment:'Mình dính nợ xấu đã vay nhiều chổ nhưng không vay được nhưng vay công ty này rất ok',
            time:'18 phút trước',
            like:'Thích (18)',
            reward:'Phản hồi (25)'
        },
        {
            id:40,
            name:'Vũ Thái Sơn',
            gender:2,
            comment:'Nhân viên rất giỏi em có lời khen',
            time:'20 phút trước',
            like:'Thích (2)',
            reward:'Phản hồi (9)'
        },
        {
            id:41,
            name:'Lô Thị Thảo Đan',
            gender:2,
            comment:'Tưởng thế nào lãi xuất hơi cao chút, nhưng được cái giải ngân nhanh',
            time:'22 phút trước',
            like:'Thích (4)',
            reward:'Phản hồi (6)'
        },
        {
            id:42,
            name:'phạm hữu minh',
            gender:2,
            comment:'Mình mới giải ngân được khoản vay 250tr cảm ơn cty ạ',
            time:'24 phút trước',
            like:'Thích (38)',
            reward:'Phản hồi (77)'
        },
        {
            id:43,
            name:'nguyễn kiên',
            gender:1,
            comment:'Tôi vay kinh doanh mà có được ưu đãi về lãi xuất rất nhiều',
            time:'26 phút trước',
            like:'Thích (159)',
            reward:'Phản hồi (106)'
        },
        {
            id:44,
            name:'Hoàng Long',
            gender:1,
            comment:'Ai có nhu cầu vay thì vào công ty này vay vốn lãi suất hợp lý với lương thu nhập của tôi',
            time:'30 phút trước',
            like:'Thích (44)',
            reward:'Phản hồi (51)'
        },
        {
            id:45,
            name:'Trịnh Phương',
            gender:1,
            comment:'Không thẩm định người thân luôn mọi ng à công ty này được đấy',
            time:'32 phút trước',
            like:'Thích (38)',
            reward:'Phản hồi (27)'
        },
        {
            id:46,
            name:'nguyễn Trí',
            gender:1,
            comment:'Alo ai hỗ trợ em vay vốn với',
            time:'34 phút trước',
            like:'Thích (61)',
            reward:'Phản hồi (45)'
        },
        {
            id:47,
            name:'Minh Tú Nè',
            gender:1,
            comment:'Thủ tục có đơn giản không mọi người ',
            time:'36 phút trước',
            like:'Thích (7)',
            reward:'Phản hồi (1)'
        },
        {
            id:48,
            name:'Dung Vo',
            gender:2,
            comment:'Ai vay rồi tư vấn giúp em cần những giấy tờ gì vậy',
            time:'38 phút trước',
            like:'Thích (81)',
            reward:'Phản hồi (75)'
        },
        {
            id:49,
            name:'Trần Thanh Thanh',
            gender:2,
            comment:'Mẹ đang bị ốm nằm viên nhờ công ty hỗ trợ để em có tiền chữa bệnh cho mẹ, em sẽ trả đầy đủ đúng kì hạn',
            time:'40 phút trước',
            like:'Thích (9)',
            reward:'Phản hồi (9)'
        },
        {
            id:50,
            name:'Chỉ Yêu Mình Em',
            gender:2,
            comment:'Cảm ơn công ty lần sau em sẽ vay tiếp',
            time:'42 phút trước',
            like:'Thích (25)',
            reward:'Phản hồi (37)'
        },
        
        // Add more comments as needed
    ];

    const commentContainer = document.getElementById("comments");

    commentList.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";

        const avatarElement = document.createElement("img");
        avatarElement.src = `https://picsum.photos/50?random=${comment.id}`; // Sử dụng ảnh ngẫu nhiên từ Picsum.photos
        avatarElement.alt = "User Avatar";
        avatarElement.className = "avatar";

        const contentElement = document.createElement("div");
        contentElement.className = "comment-content";

        const userElement = document.createElement("p");
        userElement.className = "comment-user";
        userElement.textContent = comment.name;

        const textElement = document.createElement("p");
        textElement.textContent = comment.comment;

        const footerElement = document.createElement("div");
        footerElement.className = "comment-footer";
        footerElement.innerHTML = `
            <span>${comment.time}</span>
            <a href="#">${comment.like}</a>
            <a href="#">${comment.reward}</a>
        `;

        contentElement.appendChild(userElement);
        contentElement.appendChild(textElement);
        contentElement.appendChild(footerElement);

        commentElement.appendChild(avatarElement);
        commentElement.appendChild(contentElement);

        commentContainer.appendChild(commentElement);
    });
});
// Function to make comments auto-scroll
function autoScrollComments() {
    const commentsContainer = document.getElementById('comments');
    setInterval(() => {
        commentsContainer.scrollTop += 1;
        if (commentsContainer.scrollTop >= commentsContainer.scrollHeight - commentsContainer.clientHeight) {
            commentsContainer.scrollTop = 0;
        }
    }, 100);
}

// Call the function on page load
window.onload = function() {
    autoScrollComments();
};
document.addEventListener("DOMContentLoaded", function() {
    const commentsContainer = document.querySelector('.comments');
    let scrollSpeed = 1; // Adjust the speed of scrolling
    let scrollDirection = 1; // 1 for down, -1 for up

    function autoScroll() {
        if (commentsContainer.scrollTop + commentsContainer.clientHeight >= commentsContainer.scrollHeight) {
            scrollDirection = -1;
        } else if (commentsContainer.scrollTop <= 0) {
            scrollDirection = 1;
        }
        commentsContainer.scrollTop += scrollSpeed * scrollDirection;
    }

    setInterval(autoScroll, 15); // Adjust the interval for smoother or faster scrolling
});

