import { SearchOutlined } from '@ant-design/icons';

function Header() {
    return (
        <>
            <header className="header">
                <div className="top-nav">
                    <div className="top-nav-left">
                        <ul className="top-nav-left-list">
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span>096.9049.035</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Vị trí cửa hàng</span>
                            </li>
                        </ul>
                    </div>
                    <div className="top-nav-right">
                        <ul className="top-nav-right-list">
                            <li>Đăng kí</li>
                            <li>Đăng nhập</li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                    <img
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/firjewelry-871f7.appspot.com/o/Jewelry-Image%2FGOLD-removebg.png?alt=media&token=5e27d372-365a-4228-a414-39d5e12028c1'
                        }
                        alt="logo"
                    />
                </div>
                <div className="sub-nav">
                    <div className="sub-nav-menu">
                        <ul className="sub-nav-menu-list">
                            <li className="sub-nav-menu-item">
                                <span>Giới thiệu</span>
                            </li>
                            <li className="sub-nav-menu-item">
                                Trang sức cưới
                                <div className="menu-show">
                                    <ul className="menu-show-list">
                                        Theo mục đích
                                        <li className="menu-show-item">Cầu hôn</li>
                                        <li className="menu-show-item">Kết hôn</li>
                                        <li className="menu-show-item">Kỷ niệm</li>
                                    </ul>
                                    <ul className="menu-show-list">
                                        Loại
                                        <li className="menu-show-item">Nhẫn</li>
                                        <li className="menu-show-item">Bông tai</li>
                                        <li className="menu-show-item">Lắc tay</li>
                                        <li className="menu-show-item">Dây chuyền</li>
                                        <li className="menu-show-item">Vòng tay</li>
                                        <li className="menu-show-item">Kiềng</li>
                                    </ul>
                                    <ul className="menu-show-list">
                                        Chất liệu
                                        <li className="menu-show-item">
                                            <span>Vàng 18k</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Vàng 24k</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Vàng 22k</span>
                                        </li>
                                    </ul>
                                    <div className="menu-image"></div>
                                </div>
                            </li>

                            <li className="sub-nav-menu-item">
                                <span>Trang sức nam</span>
                                <div className="menu-show">
                                    <ul className="menu-show-list">
                                        <span>Theo mục đích</span>
                                        <li className="menu-show-item">
                                            <span>Cầu hôn</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Kết hôn</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Kỷ niệm</span>
                                        </li>
                                    </ul>
                                    <ul className="menu-show-list">
                                        <span>Loại</span>
                                        <li className="menu-show-item">
                                            <span>Nhẫn</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Bông tai</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Lắc tay</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Dây chuyền</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Vòng tay</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Kiềng</span>
                                        </li>
                                    </ul>
                                    <ul className="menu-show-list">
                                        <span>Chất liệu</span>
                                        <li className="menu-show-item">
                                            <span>Vàng 18k</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Vàng 24k</span>
                                        </li>
                                        <li className="menu-show-item">
                                            <span>Vàng 22k</span>
                                        </li>
                                    </ul>
                                    <div className="menu-image"></div>
                                </div>
                            </li>
                            <li className="sub-nav-menu-item">
                                <span>Trang sức nữ</span>
                            </li>
                            <li className="sub-nav-menu-item">
                                <span>Đá phong thủy</span>
                            </li>
                            <li className="sub-nav-menu-item">
                                <span>Kiến thức</span>
                            </li>
                        </ul>
                    </div>
                    <div className="header-search">
                        <input type="text" className="header-search-input" placeholder="Search..." autoComplete="off" />
                        <div className="header-search-btn">
                            <SearchOutlined className="search-icon" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
