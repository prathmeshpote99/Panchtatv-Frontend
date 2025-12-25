import React from "react";
import { Container, Row, Col, Button, Modal } from "reactstrap";
import Link from "next/link";

const FromOurBlogs = ({ s, article1, article2, article3 }) => {
  return (
    <>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>From Our Blogs</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              Design your home interior story! Here are the latest trends, tips,
              and design tricks to help you out.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <div className={s.imgAnimation}>
              <Link href="/blog/article/07aeff53-31e5-4276-8307-f855b22b6436">
                <img src={article1} className={"img-fluid"} />
              </Link>
            </div>
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              What is Shabby Chic?
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/07aeff53-31e5-4276-8307-f855b22b6436">
                Read More
              </Link>
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <div className={s.imgAnimation}>
              <Link href="/blog/article/c4245ff9-6a53-4b13-8539-0b69b442cfd1">
                <img src={article2} className={"img-fluid"} />
              </Link>
            </div>
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              Best Examples of Maximalism
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/c4245ff9-6a53-4b13-8539-0b69b442cfd1">
                Read More
              </Link>
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <div className={s.imgAnimation}>
              <Link href="/blog/article/57fbad3f-528a-43b2-83e8-32ba30708194">
                <img src={article3} className={"img-fluid"} />
              </Link>
            </div>
            <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              What is Lorem Ipsum?
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/57fbad3f-528a-43b2-83e8-32ba30708194">
                Read More
              </Link>
            </h6>
          </Col>
        </Row>
        <Row className={"d-flex justify-content-center"}>
          <Link href={"/blog"}>
            <Button
              outline
              color="primary"
              className={"text-uppercase mx-auto mt-5 fw-bold"}
            >
              view more
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default FromOurBlogs;
