import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import "./style.scss";
import cat1Img from "assets/users/images/categories/camtuoi.png";
import cat2Img from "assets/users/images/categories/suahop.png";
import cat3Img from "assets/users/images/categories/raucutuoi.png";
import cat4Img from "assets/users/images/categories/hoaquakho.png";
import cat5Img from "assets/users/images/categories/thitbo.png";
import feature1Img from "assets/users/images/featured/camtuoi.png";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "utils/formater";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Cam Tươi",
    },
    {
      bgImg: cat2Img,
      name: "Sữa hộp",
    },
    {
      bgImg: cat3Img,
      name: "Rau củ Tươi",
    },
    {
      bgImg: cat4Img,
      name: "Hoa quả khô",
    },
    {
      bgImg: cat5Img,
      name: "Thịt bò",
    },
  ];

  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạc",
          price: 20000,
        },
        {
          img: feature1Img,
          name: "Chuối",
          price: 17800,
        },
        {
          img: feature1Img,
          name: "Ổi",
          price: 25000,
        },
        {
          img: feature1Img,
          name: "Dưa hấu",
          price: 44000,
        },
        {
          img: feature1Img,
          name: "Nho tím",
          price: 120000,
        },
        {
          img: feature1Img,
          name: "Hambuger",
          price: 86000,
        },
        {
          img: feature1Img,
          name: "Xoài",
          price: 69000,
        },
        {
          img: feature1Img,
          name: "Táo",
          price: 53000,
        },
      ],
    },

    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạc",
          price: 20000,
        },
      ],
    },

    fruits: {
      title: "Trái cây",
      products: [
        {
          img: feature1Img,
          name: "Chuối",
          price: 17800,
        },
        {
          img: feature1Img,
          name: "Ổi",
          price: 25000,
        },
        {
          img: feature1Img,
          name: "Dưa hấu",
          price: 44000,
        },
        {
          img: feature1Img,
          name: "Nho tím",
          price: 120000,
        },
        {
          img: feature1Img,
          name: "Xoài",
          price: 69000,
        },
        {
          img: feature1Img,
          name: "Táo",
          price: 53000,
        },
      ],
    },

    fastFood: {
      title: "Thức ăn nhanh",
      products: [
        {
          img: feature1Img,
          name: "Hambuger",
          price: 87000,
        },
      ],
    }
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="featured-item">
              <div
                className="featured-item-pic"
                style={{
                  backgroundImage: `url(${item.img})`,
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
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/*Categorries Begin*/}
      <div className="container container-categories-slider">
        <Carousel responsive={responsive} className="categories-slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories-slider-item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Categorries End*/}

      {/*Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/*Featured End */}

      {/*Banner Begin */}
      <div className="container">
        <div className="banner">
          <div className="banner-pic">
            <img src={feature1Img} alt="banner" />
          </div>
          <div className="banner-pic">
            <img src={feature1Img} alt="banner" />
          </div>
        </div>
      </div>
      {/*Banner End */}
    </>
  );
};

export default memo(HomePage);
