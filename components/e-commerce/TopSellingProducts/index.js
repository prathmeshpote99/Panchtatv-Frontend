import React from "react";
import { Container, Row, Col, Button, Modal } from "reactstrap";
import Link from "next/link";

const TopSellingProducts = ({ s }) => {
  return (
    <>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>Top Selling Products</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              Our most trusted and loved organic powders, chosen by customers
              for their quality and results. Experience the perfect balance of
              tradition, purity, and modern nutrition.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Link href={"/products/afaf98d5-4060-4408-967b-c4f4af3d1869"}>
              <a>
                <section className={`${s.top_first} img-fluid`}>
                  <h6 className={"text-uppercase text-primary fw-bold"}>
                    All new
                  </h6>
                  <h2 className={"fw-bold"}>SPRING THINGS</h2>
                  <div className={s.stroke} />
                  <h6 className={"text-muted mt-4"}>Save up to 30%</h6>
                </section>
              </a>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={6} className={s.topMargin}>
                <Link href="/products/afaf98d5-4060-4408-967b-c4f4af3d1862">
                  <a>
                    <div className={`${s.top2} img-fluid`}>
                      <div>
                        <h6 className={"text-primary fw-bold"}>
                          Online Exclusive
                        </h6>
                        <p>
                          <u>shop now</u>
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/products/afaf98d5-4060-4408-967b-c4f4af3d1863">
                  <a>
                    <div className={`${s.top4} img-fluid`}>
                      <div className={`${s.label}`}>
                        <h6
                          className={"fw-bold text-uppercase mb-0 text-white"}
                        >
                          spring sale
                        </h6>
                      </div>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col xs={12} md={6}>
                <Link href="/products/afaf98d5-4060-4408-967b-c4f4af3d1864">
                  <div className={`${s.top3} img-fluid`}>
                    <div className={`${s.label}`}>
                      <h6 className={"fw-bold text-uppercase mb-0 text-white"}>
                        70% SALE
                      </h6>
                    </div>
                  </div>
                </Link>
                <Link href="/products/afaf98d5-4060-4408-967b-c4f4af3d1865">
                  <div className={`${s.top5} img-fluid`}>
                    <div>
                      <div className={s.stroke} />
                      <div>
                        <p className={"mb-0"}>collection</p>
                        <h5 className={"fw-bold text-primary text-uppercase"}>
                          summer
                        </h5>
                      </div>
                      <div className={s.stroke} />
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopSellingProducts;
