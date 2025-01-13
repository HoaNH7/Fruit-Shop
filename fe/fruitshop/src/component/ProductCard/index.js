import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "utils/formater";
import { generatePath, Link } from "react-router-dom";
import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "utils/router";


const ProductCard = ({ img, name, price }) => {
    return (
        <>
            <div className="featured-item pl-r-3">
                <div
                    className="featured-item-pic"
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                >
                    <ul className="featured-item-pic-hover">
                        <li>
                            <AiOutlineEye />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>
                </div>
                <div className="featured-item-text">
                    <h6>
                        <Link to={generatePath(ROUTERS.USER.PRODUCTS, { id: 1 })}>{name}</Link>
                    </h6>
                    <h5>{formatter(price)}</h5>
                </div>
            </div>
        </>
    )
}

export default memo(ProductCard);