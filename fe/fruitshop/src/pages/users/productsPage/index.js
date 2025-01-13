import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import cat1Img from "assets/users/images/categories/camtuoi.png";
import cat2Img from "assets/users/images/categories/suahop.png";
import cat3Img from "assets/users/images/categories/raucutuoi.png";
import cat4Img from "assets/users/images/categories/hoaquakho.png";
import cat5Img from "assets/users/images/categories/thitbo.png";
import feature1Img from "assets/users/images/featured/camtuoi.png";
import ProductCard from "component/ProductCard";

const ProductsPage = () => {
    const sorts = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];

    const products = [
        {
            img: cat1Img,
            name: "Thịt bò",
            price: "20000"
        },
        {
            img: cat1Img,
            name: "Chuối",
            price: "17500"
        },
        {
            img: cat1Img,
            name: "Ổi",
            price: "15000"
        },
        {
            img: cat1Img,
            name: "Dưa hấu",
            price: "10000"
        },
        {
            img: cat1Img,
            name: "Nho tím",
            price: "67000"
        },
        {
            img: cat1Img,
            name: "Humburger",
            price: "64000"
        },
    ]


    return (<>
        <Breadcrumb name="Danh sách sản phẩm" />
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-sx-12">
                    <div className="sidebar">
                        <div className="sidebar-item">
                            <h2>Tìm kiếm</h2>
                            <input type="text" />
                        </div>
                        <div className="sidebar-item">
                            <h2>Mức giá</h2>
                            <div className="price-range-wrap">
                                <div >
                                    <p>Từ:</p>
                                    <input type="number" min={0} />
                                </div>
                                <div >
                                    <p>Đến:</p>
                                    <input type="number" min={0} />
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <h2>Sắp xếp</h2>
                            <div className="tags">
                                {sorts.map((item, key) => (
                                    <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <h2>Thể loại khác</h2>
                            <ul>
                                {categories.map((name, key) => (
                                    <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-sx-12">
                    <div className="row">
                        {
                            products.map((item, key) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                                    <ProductCard name={item.name} img={item.img} price={item.price} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default memo(ProductsPage);