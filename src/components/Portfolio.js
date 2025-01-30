import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev text-decoration-none">
                <span />
              </a>
              <a href="#" className="next text-decoration-none">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/1.png" />
              </div>
              <div className="title_holder">
                <p>Crypto Exchange, Blockchain, Fintech</p>
                <h3>
                  <a href="#" className="text-decoration-none">Twin Exchange - Plataforma Cripto</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Crypto Exchange, Blockchain, Fintech</p>
                <h3 className="fn__title">Twin Exchange - Plataforma Cripto</h3>
                <p className="fn__desc">
                  Desarrollo e implementación de plataforma de intercambio de criptomonedas.
                  Implementación de MVP Fintech y desarrollo de Token ERC-20.
                  Gestión de equipo y supervisión de proyecto.
                  Desarrollo de aplicaciones móviles y web para trading de criptoactivos.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/2.png" />
              </div>
              <div className="title_holder">
                <p>Azure, .NET Core, Angular</p>
                <h3>
                  <a href="#" className="text-decoration-none">Grupo Monge - Plataforma Financiera</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Azure, .NET Core, Angular</p>
                <h3 className="fn__title">Grupo Monge - Plataforma Financiera</h3>
                <p className="fn__desc">
                  Desarrollo y mantenimiento de aplicaciones web financieras para Grupo Monge.
                  Implementación de pasarelas de pago y arquitectura de microservicios con Azure App Registration.
                  Optimización de frontend en Angular para plataforma financiera.
                  Gestión de equipo y coordinación de proyectos fintech.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/3.jpg" />
              </div>
              <div className="title_holder">
                <p>Crypto Exchange, Blockchain, Fintech</p>
                <h3>
                  <a href="#" className="text-decoration-none">Twin Exchange - Exchange Platform</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">Crypto Exchange, Blockchain, Fintech</p>
                <h3 className="fn__title">Twin Exchange - Exchange Platform</h3>
                <p className="fn__desc">
                  Desarrollo e implementación de plataforma de intercambio de criptomonedas.
                  Implementación de MVP Fintech y desarrollo de Token ERC-20.
                  Gestión de equipo y supervisión de proyecto.
                  Desarrollo de aplicaciones móviles y web para trading de criptoactivos.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/4.png" />
              </div>
              <div className="title_holder">
                <p>AWS Lambda, DynamoDB, React</p>
                <h3>
                  <a href="#" className="text-decoration-none">BEDER - Aplicación Financiera</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">AWS Lambda, DynamoDB, React</p>
                <h3 className="fn__title">BEDER - Aplicación Financiera</h3>
                <p className="fn__desc">
                  Desarrollo de servicios basados en AWS Lambda.
                  Implementación de base de datos DynamoDB para gestión de datos financieros.
                  Optimización de frontend y conexión con servicios Microsoft.
                  Desarrollo de aplicaciones móviles y gestión de proyecto.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/5.jpg" />
              </div>
              <div className="title_holder">
                <p>PHP, Laravel, ReactJS, Mobile</p>
                <h3>
                  <a href="#" className="text-decoration-none">Xpress Processing - E-Wallet</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">PHP, Laravel, ReactJS, Mobile</p>
                <h3 className="fn__title">Xpress Processing - E-Wallet</h3>
                <p className="fn__desc">
                  Desarrollo de servicios REST para billetera digital (e-wallet).
                  Implementación de frontend en ReactJS para plataforma de pagos.
                  Desarrollo de aplicaciones móviles para gestión de billetera electrónica.
                  Stack tecnológico: PHP, Laravel, ReactJS, Bootstrap.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModal(true);
                setModalValue(6);
              }}
              data-index={6}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                <div className="abs_img" data-bg-img="img/portfolio/6.jpg" />
              </div>
              <div className="title_holder">
                <p>React Native, Redis, Google APIs</p>
                <h3>
                  <a href="#" className="text-decoration-none">Cooqs - Plataforma de Delivery</a>
                </h3>
              </div>
              <div className="fn__hidden">
                <p className="fn__cat">React Native, Redis, Google APIs</p>
                <h3 className="fn__title">Cooqs - Plataforma de Delivery</h3>
                <p className="fn__desc">
                  Desarrollo de arquitectura de sincronización para tres aplicaciones: cliente, chef y delivery.
                  Implementación de sistema de rutas y coordenadas con Redis.
                  Integración con APIs de Google y herramientas de geolocalización.
                  Optimización de experiencia de usuario en tiempo real.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;