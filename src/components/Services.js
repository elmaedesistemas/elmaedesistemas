const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Servicios</h3>
            <h3 className="title">Lo que hago</h3>
            <p className="desc">
              Especializado en desarrollo de soluciones tecnológicas de alto impacto,
              desde aplicaciones web y móviles hasta sistemas blockchain y fintech.
              Enfocado en crear productos escalables y de alta calidad.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Desarrollo Blockchain & DeFi</h3>
                    <p>
                      Desarrollo de smart contracts, tokens ERC-20, plataformas de exchange,
                      e integración con diferentes redes blockchain. Experiencia en
                      desarrollo de soluciones DeFi y sistemas de pagos cripto.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Tecnologías</p>
                    <h3>Solidity, Rust, Cairo, Web3</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Desarrollo Full Stack</h3>
                    <p>
                      Desarrollo de aplicaciones web y móviles con arquitecturas modernas
                      y escalables. Experiencia en microservicios, APIs REST, y bases de
                      datos SQL/NoSQL. Especializado en JavaScript/TypeScript y su ecosistema.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Stack Principal</p>
                    <h3>Next.js, Angular, React Native</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Cloud & DevOps</h3>
                    <p>
                      Implementación y gestión de infraestructura en la nube, CI/CD,
                      y orquestación de contenedores. Experiencia con servicios de AWS,
                      Azure y herramientas de automatización.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Herramientas</p>
                    <h3>Azure, AWS, Docker, K8s</h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Arquitectura & Liderazgo Técnico</h3>
                    <p>
                      Diseño de arquitecturas de software, liderazgo de equipos técnicos,
                      y gestión de proyectos de desarrollo. Enfoque en buenas prácticas,
                      código limpio y entrega continua.
                    </p>
                  </div>
                  <div className="item_right">
                    <p>Especialidad</p>
                    <h3>Tech Lead Position's</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;