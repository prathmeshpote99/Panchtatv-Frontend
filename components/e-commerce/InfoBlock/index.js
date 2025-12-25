import React, { useEffect, useRef } from "react";
import { Container, Col, Row } from "reactstrap";
import { gsap } from "gsap";

import car from "public/images/e-commerce/home/carp.svg";
import call from "public/images/e-commerce/home/headphonesp.svg";
import moneyBack from "public/images/e-commerce/home/Syncp.svg";
import s from "./InfoBlock.module.scss";

const InfoBlock = () => {
  const carRef = useRef(null);
  const callRef = useRef(null);
  const syncRef = useRef(null);

  useEffect(() => {
    /* 🚗 Car animation with smoke */
    const car = carRef.current;
    if (car) {
      const wrapper = car.parentElement;

      const createSmokeParticle = () => {
        const smoke = document.createElement("span");
        smoke.className = s.smoke;
        wrapper.appendChild(smoke);

        const size = gsap.utils.random(8, 14);
        const driftX = gsap.utils.random(-30, -50);
        const driftY = gsap.utils.random(-10, -25);

        gsap.fromTo(
          smoke,
          {
            x: 0,
            y: 0,
            scale: 0.6,
            opacity: 0.6,
          },
          {
            x: driftX,
            y: driftY,
            scale: gsap.utils.random(1.4, 2),
            opacity: 0,
            duration: gsap.utils.random(0.8, 1.2),
            ease: "power1.out",
            onComplete: () => smoke.remove(),
          }
        );
      };

      const emitSmoke = () => {
        for (let i = 0; i < 3; i++) {
          createSmokeParticle();
        }
      };

      const tl = gsap.timeline({ paused: true });
      tl.to(car, {
        x: 120,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
        onStart: emitSmoke,
        onUpdate: emitSmoke,
      })
        .set(car, { x: -80 })
        .to(car, {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        });

      wrapper.addEventListener("mouseenter", () => tl.restart());
    }

    /* 🎧 Headphone vibration (call effect) */
    const call = callRef.current;
    if (call) {
      const tl = gsap.timeline({ paused: true });
      tl.to(call, {
        rotation: -8,
        duration: 0.06,
      })
        .to(call, { rotation: 8, duration: 0.06 })
        .to(call, { rotation: -6, duration: 0.06 })
        .to(call, { rotation: 6, duration: 0.06 })
        .to(call, { rotation: 0, duration: 0.08 });

      call.parentElement.addEventListener("mouseenter", () => {
        tl.restart();
      });
    }

    /* 🔄 Sync rotation (unchanged, but smoother) */
    const sync = syncRef.current;
    if (sync) {
      sync.parentElement.addEventListener("mouseenter", () => {
        gsap.to(sync, {
          rotation: 360,
          duration: 0.8,
          ease: "power2.inOut",
        });
      });
    }
  }, []);

  return (
    <>
      <hr />
      <div className={s.info}>
        <Container className="h-100">
          <Row className="h-100 justify-content-between flex-column flex-md-row align-items-center">
            {/* 🚗 Free Shipping */}
            <Col xs={12} md={4} className={s.info__item}>
              <section className={s.info__content}>
                <img ref={carRef} src={car} />
                <div>
                  <h5 className="fw-bold text-uppercase">free shipping</h5>
                  <p className="text-muted mb-0">On all orders of $150</p>
                </div>
              </section>
            </Col>

            {/* 🎧 Support */}
            <Col xs={12} md={4} className={s.info__item}>
              <section className={s.info__content}>
                <img ref={callRef} src={call} />
                <div>
                  <h5 className="fw-bold text-uppercase">24/7 support</h5>
                  <p className="text-muted mb-0">Get help when you need it</p>
                </div>
              </section>
            </Col>

            {/* 🔄 Money Back */}
            <Col xs={12} md={4} className={s.info__item}>
              <section className={s.info__content}>
                <img ref={syncRef} src={moneyBack} />
                <div>
                  <h5 className="fw-bold text-uppercase">100% money back</h5>
                  <p className="text-muted mb-0">30 day money back guarantee</p>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
    </>
  );
};

export default InfoBlock;
