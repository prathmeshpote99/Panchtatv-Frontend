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
        <title>Terms & Conditions | Panchtatv</title>

        <meta
          name="description"
          content="Read Panchtatv’s Terms & Conditions to understand your rights, responsibilities, payments, deliveries, and website usage policies."
        />
        <meta
          name="keywords"
          content="Panchtatv terms conditions, organic products policy, ecommerce terms India"
        />
        <meta name="author" content="Panchtatv" />
        <meta charSet="utf-8" />
      </Head>

      <Container className="mb-5" style={{ paddingTop: 32 }}>
        <Row className="d-flex justify-content-between">
          {/* LEFT SIDEBAR */}
          <Col sm={3} style={{ position: "sticky", top: 100, height: "100%" }}>
            <h1 className="fw-bold text-uppercase mb-4">Terms</h1>
            <p className={`${s.pageSubtitle} mb-5`}>
              These Terms & Conditions govern your access and use of the
              Panchtatv website and services. Please read them carefully.
            </p>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("usage")}
            >
              Website Usage
            </Button>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("orders")}
            >
              Orders & Payments
            </Button>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("shipping")}
            >
              Shipping & Delivery
            </Button>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("returns")}
            >
              Returns & Refunds
            </Button>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("liability")}
            >
              Liability
            </Button>

            <Button
              className={`fw-bold mb-4 bg-transparent border-0 p-0 ${s.btn} d-block`}
              onClick={() => handleScroll("changes")}
            >
              Changes to Terms
            </Button>
          </Col>

          {/* RIGHT CONTENT */}
          <Col sm={8}>
            {/* WEBSITE USAGE */}
            <div id="usage">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                website usage
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Responsible Use of Our Website
              </h4>
              <p className="text-muted">
                By accessing the Panchtatv website, you agree to use it only for
                lawful purposes. Any misuse, unauthorized access, or attempt to
                disrupt website functionality is strictly prohibited.
              </p>
            </div>

            <hr className="mb-5" />

            {/* ORDERS & PAYMENTS */}
            <div id="orders">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                orders & payments
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Secure Ordering & Transactions
              </h4>
              <p className="text-muted">
                All orders placed on Panchtatv are subject to availability and
                confirmation. Prices are listed in INR and may change without
                prior notice. Payments are processed securely using trusted
                payment gateways.
              </p>
            </div>

            <hr className="mb-5" />

            {/* SHIPPING */}
            <div id="shipping">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                shipping & delivery
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Timely & Reliable Delivery
              </h4>
              <p className="text-muted">
                We strive to deliver all orders within the estimated timeframe.
                Delivery timelines may vary depending on location, availability,
                and external factors beyond our control.
              </p>
            </div>

            <hr className="mb-5" />

            {/* RETURNS */}
            <div id="returns">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                returns & refunds
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Transparent Refund Policy
              </h4>
              <p className="text-muted">
                Due to the nature of consumable organic products, returns are
                accepted only for damaged or incorrect items. Refunds, if
                applicable, will be processed after verification.
              </p>
            </div>

            <hr className="mb-5" />

            {/* LIABILITY */}
            <div id="liability">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                liability
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Limitation of Liability
              </h4>
              <p className="text-muted">
                Panchtatv is not responsible for indirect or consequential
                damages arising from the use of our products or website. Our
                products are not intended to diagnose, treat, or cure medical
                conditions.
              </p>
            </div>

            <hr className="mb-5" />

            {/* CHANGES */}
            <div id="changes">
              <h6
                className={`${s.categoryTitle} text-primary text-uppercase mb-3 fw-bold`}
              >
                changes to terms
              </h6>
              <h4 className={`${s.faqTitle} fw-bold mb-4`}>
                Updates & Modifications
              </h4>
              <p className="text-muted">
                Panchtatv reserves the right to update or modify these Terms &
                Conditions at any time. Continued use of the website implies
                acceptance of the updated terms.
              </p>
            </div>

            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
