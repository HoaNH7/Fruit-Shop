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
  AiOutlinePhone,
  AiOutlineGlobal,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import { ROUTERS } from "utils/router";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [isShowCategories, setIsShowCategories] = useState(true);
  const [isShowHumberger, setIsShowHumberger] = useState(false);
  const [menus, setMenus] = useState([
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
      <div
        className={`humberger-menu-overlay ${isShowHumberger ? "active" : ""}`}
        onClick={() => setIsShowHumberger(false)}
      ></div>
      <div
        className={`humberger-menu-wrapper ${isShowHumberger ? "show" : ""}`}
      >
        <div className="header-logo">
          <h1>Fruit Shop</h1>
        </div>
        <div className="humberger-menu-cart">
          <ul>
            <li>
              <Link to={""}>
                <AiOutlineShoppingCart /> <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header-cart-price">
            Giỏ hàng: <span>{formatter(1001230)}</span>
          </div>
        </div>
        <div className="humberger-menu-widget">
          <div className="header-top-right-auth">
            <Link to={""}>
              <BiUser /> Đăng nhập
            </Link>
          </div>
        </div>
        <div className="humberger-menu-nav">
          <ul>
            {menus.map((menu, key) => (
              <li key={key} to={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => {
                    const newMenus = [...menus];
                    newMenus[key].isShowSubmenu = !newMenus[key].isShowSubmenu;
                    setMenus(newMenus);
                  }}
                >
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubmenu ? (
                      <AiOutlineDownCircle />
                    ) : (
                      <AiOutlineUpCircle />
                    ))}
                </Link>
                {menu.child && (
                  <ul
                    className={`header-menu-dropdown ${
                      menu.isShowSubmenu ? "show-submenu" : ""
                    }`}
                  >
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${key}-${childKey}`}>
                        <Link to={childItem.path}>{childItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="header-top-right-social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>
          <Link to={""}>
            <AiOutlineInstagram />
          </Link>
          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>
          <Link to={""}>
            <AiOutlineGlobal />
          </Link>
        </div>
        <div className="humberger-menu-contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> hoanh472001@gmail.com
            </li>
            <li>Miễn phí đơn từ {formatter(200000)}</li>
          </ul>
        </div>
      </div>

      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <MdEmail />
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
          <div className="col-lg-3">
            <div className="header-logo">
              <h1>Fruit Shop</h1>
            </div>
          </div>
          <div className="col-lg-6">
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
          <div className="col-lg-3">
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
            <div className="humberger-open">
              <AiOutlineMenu onClick={() => setIsShowHumberger(true)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero-categories-container">
          <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 hero-categories">
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
          <div className="col-lg-9 col-sm-12 col-md-12 col-xs-12 hero-search-container">
            <div className="hero-search">
              <div className="hero-search-form">
                <form>
                  <input
                    type="text"
                    name=""
                    value=""
                    placeholder="Bạn đang tìm gì?"
                  />
                  <button type="submit" className="site-btn">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero-search-phone">
                <div className="hero-search-phone-icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero-search-phone-text">
                  <p>0961.186.670</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero-item">
              <div className="hero-text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="primay-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
