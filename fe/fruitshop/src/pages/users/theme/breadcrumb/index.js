import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";

const breadCrumb = (props) => {
  return (
    <div className="breadCrumb">
      <div className="breadcrumb-text">
        <h2>FRUIT SHOP</h2>
        <div className="breadcrumb-option">
          <ul>
            <li className="link">
              <Link to={ROUTERS.USER.HOME}>Trang Chủ</Link>
            </li>
            <li>
              {props.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(breadCrumb);
