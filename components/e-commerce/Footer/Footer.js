import React from "react";
import s from "./Footer.module.scss";
import { Container, Row, Col, Input, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/e-commerce/Panchatatva_White.png";
import Google from "public/images/e-commerce/Google";
import Twitter from "public/images/e-commerce/Twitter";
import Linkedin from "public/images/e-commerce/Linkedin";
import Facebook from "public/images/e-commerce/Facebook";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Row className="justify-content-between">
          <Col xl={5} md={5}>
            <h5 className="text-white fw-bold">Many desktop publishing</h5>
            <p className="text-muted mt-3">
              Do you want to receive exclusive email offers? Subscribe to our
              newsletter! Get a special 20% discount code delivered straight to
              your inbox within minutes.
            </p>
          </Col>

          <Col xl={5} md={7} className="d-flex align-items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="mr-3 border-0"
              style={{ height: 51 }}
            />
            <Button color="primary" className="fw-bold">
              Subscribe
            </Button>
          </Col>
        </Row>

        <hr className={s.footer__hr} />

        <Row className="my-5 justify-content-between">
          <Col
            xl={5}
            md={3}
            className="d-flex flex-column justify-content-between"
          >
            <div>
              <Link href="/" legacyBehavior>
                <a className={s.logoStyle}>
                  <Image
                    src={logo}
                    alt="Panchtatv Logo"
                    width={200}
                    height={50}
                    priority
                  />
                </a>
              </Link>
              <p className="text-white fw-thin mb-0">
                Panchtatv brings you pure, organic powders inspired by Ayurveda
                and backed by mindful sourcing. We believe in clean nutrition,
                honest ingredients, and products that nourish your body the
                natural way.
              </p>
            </div>

            <div className={s.socialLinks}>
              <Link href="https://flatlogic.com/" passHref legacyBehavior>
                <a
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Google />
                </a>
              </Link>

              <Link
                href="https://twitter.com/panchatatva"
                passHref
                legacyBehavior
              >
                <a
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </Link>

              <Link
                href="https://www.linkedin.com/company/panchatatva/"
                passHref
                legacyBehavior
              >
                <a
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </Link>

              <Link
                href="https://www.facebook.com/panchatatva/"
                passHref
                legacyBehavior
              >
                <a
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </Link>
            </div>
          </Col>

          <Col md={9} xl={7} sm={12}>
            <Row className={s.linksRow}>
              <Col md={4} sm={6} xs={12}>
                <h5 className="text-white fw-bold text-uppercase mb-4">
                  company
                </h5>

                <Link href="/about" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    What We Do
                  </a>
                </Link>

                {/* <Link href="/shop" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    Available Services
                  </a>
                </Link> */}

                <Link href="/faq" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>FAQs</a>
                </Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <h5 className="text-white fw-bold text-uppercase mb-4">
                  my account
                </h5>

                <Link href="/login" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>Sign In</a>
                </Link>

                {/* <Link href="/cart" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    View Cart
                  </a>
                </Link> */}

                <Link href="/contact" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    Help & Support
                  </a>
                </Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <h5 className="text-white fw-bold text-uppercase text-nowrap mb-4">
                  customer service
                </h5>

                <Link href="/contact" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    Help & Contact Us
                  </a>
                </Link>

                <Link href="/termsandconditions" passHref legacyBehavior>
                  <a className={`${s.navigationLink} mb-3 d-block`}>
                    Terms & Conditions
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr className={`${s.footer__hr} mb-0`} />

        <Row style={{ padding: "30px 0" }}>
          <Col sm={12}>
            <p className="text-muted mb-0">© {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
