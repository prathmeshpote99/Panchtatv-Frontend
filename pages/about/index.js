import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from "public/images/e-commerce/about/img1.png";
import img2 from "public/images/e-commerce/about/img2.png";
import s from "./About.module.scss";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>About | Panchtatv</title>
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
      <Container className={"mb-5"} style={{ marginTop: 32 }}>
        <Row>
          <Col lg={7} md={7} xs={12}>
            <h3 className="fw-bold mb-5">About Us</h3>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                01
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Nature
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  Pure Nutrition Rooted in Tradition
                </h4>
                <p className={`${s.text}`}>
                  Nature has always been the foundation of true wellness. At
                  Panchtatv, we source high-quality organic herbs and plants
                  directly from trusted farmers. Our powders are minimally
                  processed to preserve their natural strength, taste, and
                  nutritional value—just as nature intended.{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                02
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Sustainability
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  Conscious Choices for a Better Tomorrow
                </h4>
                <p className="text-muted" style={{ width: "93%" }}>
                  Wellness should not harm the planet. Panchtatv follows
                  responsible sourcing, eco-conscious practices, and sustainable
                  packaging wherever possible. Every product reflects our
                  commitment to both personal health and environmental care.{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                03
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Wellness
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  Ancient Wisdom for Modern Living
                </h4>
                <p className="text-muted" style={{ width: "93%" }}>
                  Our organic powders are designed for today’s lifestyle—easy to
                  consume, versatile, and effective. Whether mixed into
                  smoothies, meals, or daily routines, Panchtatv supports
                  balance, energy, and holistic wellness.{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
          </Col>
          <Col lg={5} md={5} xs={12} className="d-flex flex-column">
            <img src={img1} alt="img1" className={`${s.aboutImg} mb-5`} />
            <img src={img2} alt="img2" className={s.aboutImg} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
