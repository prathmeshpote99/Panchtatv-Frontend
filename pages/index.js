import React from "react";
import { Container, Row, Col, Button, Modal } from "reactstrap";
import s from "pages/index.module.scss";
import Link from "next/link";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Head from "next/head";

import arrowRight from "public/images/e-commerce/home/arrow-rightp.svg";

import InfoBlock from "components/e-commerce/InfoBlock";
import NewArrivals from "components/e-commerce/NewArrivals";
import TopSellingProducts from "components/e-commerce/TopSellingProducts";
import FromOurBlogs from "components/e-commerce/FromOurBlogs";
import InstagramWidget from "components/e-commerce/Instagram";
import article1 from "public/images/e-commerce/home/article1.jpg";
import article2 from "public/images/e-commerce/home/article2.jpg";
import article3 from "public/images/e-commerce/home/article3.jpg";

import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import rating from "../public/images/e-commerce/details/stars.svg";
import productsListActions from "../redux/actions/products/productsListActions";

const Index = ({ products: serverSideProducts }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatchStore = useDispatch();
  const openReducer = (state, action) => {
    switch (action.type) {
      case "open0":
        return {
          ...state,

          open0: !state.open0,
        };
      case "open1":
        return {
          ...state,
          open1: !state.open1,
        };
      case "open2":
        return {
          ...state,

          open2: !state.open2,
        };
      case "open3":
        return {
          ...state,

          open3: !state.open3,
        };
      case "open4":
        return {
          ...state,

          open4: !state.open4,
        };
      case "open5":
        return {
          ...state,

          open5: !state.open5,
        };
      case "open6":
        return {
          ...state,

          open6: !state.open6,
        };
      case "open7":
        return {
          ...state,

          open7: !state.open6,
        };
      case "open8":
        return {
          ...state,

          open8: !state.open8,
        };
    }
  };
  const [secs, setSecs] = React.useState(23);
  const [products, setProducts] = React.useState(serverSideProducts);

  const [openState, dispatch] = React.useReducer(openReducer, {
    open0: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open8: false,
  });
  const currentUser = useSelector((store) => store.auth.currentUser);

  const addToCart = (id, quantity = 1) => {
    if (currentUser) {
      axios.post(`/orders/`, {
        data: {
          amount: quantity,
          order_date: new Date(),
          product: id,
          status: "in cart",
          user: currentUser.id,
        },
      });
      return;
    }
    const localProducts =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("products"))) ||
      [];
    localProducts.push({
      amount: quantity,
      order_date: new Date(),
      product: id,
      status: "in cart",
    });
    typeof window !== "undefined" &&
      localStorage.setItem("products", JSON.stringify(localProducts));
    dispatchStore(productsListActions.doAdd(localProducts));
  };

  const addToWishlist = (id) => {
    if (currentUser) {
      axios.put(`/users/${currentUser.id}`, {
        id: currentUser.id,
        data: {
          ...currentUser,
          wishlist: [id],
        },
      });
    }
    const localWishlist =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("wishlist"))) ||
      [];
    localWishlist.push({ amount: 1, product: id });
    typeof window !== "undefined" &&
      localStorage.setItem("wishlist", JSON.stringify(localWishlist));
  };

  const secsInterval = () => {
    let secsInt = setInterval(() => {
      if (secs === 0) {
        clearInterval(secsInt);
      }
      setSecs((prev) => --prev);
    }, 1000);
  };

  React.useEffect(() => {
    secsInterval();
  }, []);

  const HERO_SLIDES = [
    {
      id: 1,
      className: "firstImg",
      interval: 1000,
      tag: "Pure Wellness from Nature",
      title: "Organic powders crafted with care for everyday health",
    },
    {
      id: 2,
      className: "secondImg",
      interval: 3000,
      tag: "From Farm to You",
      title: "Ethically sourced • Gently processed • 100% Natural",
    },
    {
      id: 3,
      className: "thirdImg",
      interval: 5000,
      tag: "Ancient Ayurveda. Modern Lifestyle.",
      title: "Fuel your body with Panchtatv’s organic goodness",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | Panchtatv</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="Beautifully designed web application template built with React and Bootstrap to create modern apps and speed up development"
        />
        <meta name="keywords" content="flatlogic, react templates" />
        <meta name="author" content="Flatlogic LLC." />
        <meta charSet="utf-8" />

        <meta
          property="og:title"
          content="Flatlogic - React, Vue, Angular and Bootstrap Templates and Admin Dashboard Themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://flatlogic-ecommerce.herokuapp.com/"
        />
        <meta
          property="og:image"
          content="https://flatlogic-ecommerce-backend.herokuapp.com/images/blogs/content_image_six.jpg"
        />
        <meta
          property="og:description"
          content="Beautifully designed web application template built with React and Bootstrap to create modern apps and speed up development"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="fb:app_id" content="712557339116053" />

        <meta property="og:site_name" content="Flatlogic" />
        <meta name="twitter:site" content="@flatlogic" />
      </Head>
      <ToastContainer />
      <Carousel prevLabel="prev" nextLabel="next">
        {HERO_SLIDES.map((slide) => (
          <Carousel.Item key={slide.id} interval={slide.interval}>
            <section
              className={`${s.carousel} ${s[slide.className]} ${s.parallax}`}
            >
              <Container className="h-100">
                <Row className="h-100">
                  <Col
                    sm={12}
                    className="h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start"
                  >
                    <p className="text-uppercase text-primary fw-bold mb-2">
                      {slide.tag}
                    </p>

                    <h1 className="text-uppercase fw-bold mt-1 w-75">
                      {slide.title}
                    </h1>

                    <Link href="/shop">
                      {typeof window !== "undefined" &&
                      window.innerWidth <= 768 ? (
                        <Button
                          color="primary"
                          className="text-uppercase mt-4 fw-bold"
                        >
                          view more
                        </Button>
                      ) : (
                        <Button
                          outline
                          color="primary"
                          className={`text-uppercase mt-4 mr-auto fw-bold d-flex align-items-center ${s.viewMoreBtn}`}
                        >
                          <p className="mb-0">view more</p>
                          <div className={`ml-2 ${s.arrowRight}`} />
                        </Button>
                      )}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
      <NewArrivals
        products={products}
        s={s}
        addToCart={addToCart}
        dispatch={dispatch}
        addToWishlist={addToWishlist}
        setQuantity={setQuantity}
        quantity={quantity}
        arrowRight={arrowRight}
        openState={openState}
        rating={rating}
        toast={toast}
      />
      <TopSellingProducts s={s} />
      <InfoBlock />
      {/* <FromOurBlogs
        s={s}
        article1={article1}
        article2={article2}
        article3={article3}
      /> */}
      <InstagramWidget />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get("/products");
  const products = res.data.rows;

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Index;
