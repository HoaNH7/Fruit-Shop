import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import cat1Img from "assets/users/images/categories/camtuoi.png";
import cat2Img from "assets/users/images/categories/suahop.png";
import cat3Img from "assets/users/images/categories/raucutuoi.png";
import {  AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { formatter } from "utils/formater";

const ProductDetailPage = () => {
    const imgs = [cat1Img, cat2Img, cat3Img]

    return (<>
        <Breadcrumb name="Chi tiết sản phẩm" />
        <div className="container">
            <div className="row">
                <div className="col-lg-6 product-detail-pic">
                    <img src={cat3Img} alt="product-pic" />
                    <div className="main">
                        {
                            imgs.map((item, key) => (
                                <img src={item} alt="product-pic" key={key} />
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-6 product-detail-text">
                    <h2>Rau củ xanh</h2>
                    <div className="seen-icon">
                        <AiOutlineEye/>
                        { `10 (lượt đã xem)`}
                    </div>
                    <h3>{formatter(200000)}</h3>
                    <p>
                        Fruit SHOP là một trong những hệ thống cửa hàng hoa quả nhập khẩu
                        ở Hà Nội cung cấp cho quý khách những trái dưa lưới Egarden tươi
                        ngon nhất cũng như các loại hoa quả nhập khẩu, hoa quả vùng miên khác.
                    </p>
                    <ul>
                        <li>
                            <b>Tình trạng:</b> <span>Còn hàng</span>
                        </li>
                        <li>
                            <b>Số lượng:</b> <span>20</span>
                        </li>
                        <li>
                            <b>Chia sẻ:</b>{" "}
                            <span>
                                <AiOutlineFacebook/>
                                <AiOutlineLinkedin/>
                                <AiOutlineCopy/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
};

export default memo(ProductDetailPage);