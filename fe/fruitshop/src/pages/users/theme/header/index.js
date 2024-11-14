import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategories, setIsShowCategories] = useState(true);
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <AiOutlineMail />
                  hoanh472001@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header-top-right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header-logo">
              <h1>Fruit Shop</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header-menu">
              <ul>
                {menus?.map((menu, key) => (
                  <li key={key} className={key === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header-menu-dropdown">
                        {menu.child.map((menuChild, keyChild) => (
                          <li key={`${key}-${keyChild}`}>
                            <Link to={menuChild.path}>{menuChild.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header-cart">
              <div className="header-cart-price">
                <span>{formatter(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero-categories-container">
          <div className="col-lg-3 hero-categories">
            <div
              className="hero-categories-all"
              onClick={() => setIsShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to="">Thịt tươi</Link>
              </li>
              <li>
                <Link to="">Rau củ</Link>
              </li>
              <li>
                <Link to="">Nước trái cây</Link>
              </li>
              <li>
                <Link to="">Trái cây</Link>
              </li>
              <li>
                <Link to="">Hải sản</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">phai</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
