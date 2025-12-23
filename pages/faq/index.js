import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import s from "./Faq.module.scss";
import Head from "next/head";

const Index = () => {
  const handleScroll = (elementId) => {
    const element = document.querySelector(`#${elementId}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>FAQ | Panchtatv</title>
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
      <Container className={"mb-5"} style={{ paddingTop: 32 }}>
        <Row className="d-flex justify-content-between">
          <Col sm={3} style={{ position: "sticky", top: 100, height: "100%" }}>
            <h1 className="fw-bold text-uppercase mb-4">faq</h1>
            <p className={`${s.pageSubtitle} mb-5`}>
              Strong brands grow through trust, consistency, and word of mouth.
              At Panchtatv, transparency matters as much as product quality.
              Below you’ll find helpful information to guide your journey with
              us.
            </p>
            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("company")}
            >
              Company Policies
            </Button>
            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("payment")}
            >
              Payment Options
            </Button>
            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("terms")}
            >
              Terms & Conditions
            </Button>
            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("delivery")}
            >
              Delivery & Service
            </Button>
          </Col>
          <Col sm={8}>
            <div id={"company"}>
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                company Policies
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Learn About Our Rules, Guidelines & Support
              </h4>
              <p className="text-muted">
                Our company policies explain everything from payment methods to
                shipping, returns, and customer support. If you have any
                questions, this guide is the best place to start—or feel free to
                contact our team anytime.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"payment"}>
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                payment options
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Secure & Flexible Payments Made Easy
              </h4>
              <p className="text-muted">
                We offer safe and convenient payment options for a seamless
                shopping experience. You can pay using UPI, debit/credit cards,
                net banking, and other supported methods with complete security.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"terms"}>
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                terms & conditions
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Important Information for All Users
              </h4>
              <p className="text-muted">
                These terms apply to everyone using the Panchtatv website. They
                define rights, responsibilities, and acceptable usage to ensure
                a fair and secure experience for all customers.{" "}
              </p>
            </div>
            <hr className="mb-5" />
            <div id={"delivery"}>
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                delivery & service
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Reliable Delivery You Can Count On
              </h4>
              <p className="text-muted">
                Fast and safe delivery is a priority at Panchtatv. We carefully
                pack every order and work with trusted logistics partners to
                ensure your products arrive fresh and on time.{" "}
              </p>
            </div>
            <hr />
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
