import React from "react";
import { Container, Row, Col, Button, Modal } from "reactstrap";
import Link from "next/link";
import Countdown from "pages/home/Countdown/index";

const NewArrivals = ({
  products,
  s,
  addToCart,
  dispatch,
  addToWishlist,
  setQuantity,
  quantity,
  arrowRight,
  openState,
  rating,
  toast,
}) => {
  return (
    <>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={`text-center fw-bold mb-4`}>New Arrivals</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              Discover our newest collection of freshly prepared organic
              powders, made to preserve natural nutrients and purity. Each
              product is thoughtfully crafted to support your daily
              wellness—naturally and effectively.
            </p>
          </Col>
        </Row>
        <Row>
          {products.map((item, index) => (
            <Col
              sm={6}
              md={3}
              xs={12}
              className={`mb-4 ${s.product}`}
              key={index}
            >
              <Modal
                isOpen={openState[`open${index}`]}
                toggle={() => dispatch({ type: `open${index}` })}
              >
                <div className={s.modalWidndow}>
                  <div className={s.image}>
                    <img
                      src={item.image[0]?.publicUrl}
                      width={"100%"}
                      height={"100%"}
                      alt="img"
                    />
                  </div>
                  <div
                    className={`${s.content} p-4 d-flex flex-column justify-content-between`}
                  >
                    <Link href={`/products/${item.id}`}>
                      <a className={"fw-semi-bold"}>
                        More about product
                        <img
                          src={arrowRight}
                          alt={"arrow"}
                          className={"ml-2"}
                        />
                      </a>
                    </Link>
                    <h6 className={`text-muted`}>
                      {item.categories[0].title[0].toUpperCase() +
                        item.categories[0].title.slice(1)}
                    </h6>
                    <h4 className={"fw-bold"}>{item.title}</h4>
                    <div className={"d-flex align-items-center"}>
                      <img src={rating} alt={"rating"} />
                      <p className={"text-primary ml-3 mb-0"}>12 reviews</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Vestibulum ultricies aliquam.
                    </p>
                    <div className={"d-flex"}>
                      <div
                        className={
                          "d-flex flex-column mr-5 justify-content-between"
                        }
                      >
                        <h6 className={"fw-bold text-muted text-uppercase"}>
                          Quantity
                        </h6>
                        <div className={"d-flex align-items-center"}>
                          <Button
                            className={`bg-transparent border-0 p-1 fw-bold mr-3 ${s.quantityBtn}`}
                            onClick={() => {
                              if (quantity === 1) return;
                              setQuantity((prevState) => prevState - 1);
                            }}
                          >
                            -
                          </Button>
                          <p className={"fw-bold mb-0"}>{quantity}</p>
                          <Button
                            className={`bg-transparent border-0 p-1 fw-bold ml-3 ${s.quantityBtn}`}
                            onClick={() => {
                              if (quantity < 1) return;
                              setQuantity((prevState) => prevState + 1);
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div
                        className={"d-flex flex-column justify-content-between"}
                      >
                        <h6 className={"fw-bold text-muted text-uppercase"}>
                          Price
                        </h6>
                        <h6 className={"fw-bold"}>{item.price}$</h6>
                      </div>
                    </div>
                    <div className={"d-flex mt-5"}>
                      <Button
                        outline
                        color={"primary"}
                        className={"flex-fill mr-4 text-uppercase fw-bold"}
                        style={{ width: "50%" }}
                        onClick={() => {
                          toast.info(
                            "products successfully added to your cart"
                          );
                          addToCart();
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Link
                        href={"/billing"}
                        className={"d-inline-block flex-fill"}
                      >
                        <Button
                          color={"primary"}
                          className={"text-uppercase fw-bold"}
                          style={{ width: "50%" }}
                        >
                          Buy now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Modal>
              <div style={{ position: "relative" }}>
                <Link href={`/products/${item.id}`}>
                  <a>
                    <div
                      style={{
                        background: `url(${item.image[0]?.publicUrl}) no-repeat center`,
                        backgroundSize: "contain",
                        transition: "all .65s ease",
                      }}
                      className={s.productImage}
                    />
                  </a>
                </Link>
                <div
                  className={`d-flex flex-column justify-content-center ${s.product__actions}`}
                  style={{
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    right: 15,
                  }}
                >
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      addToWishlist(item.id);
                      toast.info(
                        "products successfully added to your wishlist"
                      );
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__heart}`} />
                  </Button>
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      dispatch({ type: `open${index}` });
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__max}`} />
                  </Button>
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      addToCart(item.id);
                      toast.info("products successfully added to your cart");
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__cart}`} />
                  </Button>
                </div>
              </div>
              <div className={s.productInfo}>
                <div>
                  <Link href={`/category/${item.categories[0].id}`}>
                    <a className={"mt-3 text-muted mb-0 d-inline-block"}>
                      {item.categories[0].title[0].toUpperCase() +
                        item.categories[0].title.slice(1)}
                    </a>
                  </Link>
                  <Link href={`/products/${item.id}`}>
                    <a>
                      <h6
                        className={"fw-bold font-size-base mt-1"}
                        style={{ fontSize: 16 }}
                      >
                        {item.title}
                      </h6>
                    </a>
                  </Link>
                  <h6 style={{ fontSize: 16 }}>${item.price}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className={"d-flex justify-content-center"}>
          <Link href={"/shop"}>
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
      <section className={s.promo}>
        <Container className={"h-100"}>
          <Row className={"h-100"}>
            <Col
              md={6}
              xs={12}
              className={
                "h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start"
              }
            >
              {/* <h5 className={"text-uppercase fw-bold mb-3"}>
                news and inspiration
              </h5> */}
              <h1
                className={`text-uppercase fw-bold mb-0 ${s.newArrivals}`}
                style={{ fontSize: 50 }}
              >
                new arrival
              </h1>
              <div
                className={`${s.stroke} mt-4`}
                style={{ marginBottom: 30 }}
              />
              <Countdown />
              <section className={"d-flex mt-5 align-itens-center"}>
                <h2
                  className={"text-muted mr-3 mb-0 d-flex align-items-center"}
                >
                  <del>$ 140,56</del>
                </h2>
                <h1 className={"text-primary fw-bold mb-0"}>$ 70</h1>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewArrivals;
