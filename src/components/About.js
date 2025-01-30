import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`Professional enthusiast of software engineering, music, design and photography.
                A professional with the ability to acquire new technical knowledge on their own.
                Always aware that technology is advancing and we must do it with it and always be at the forefront.
                He is very aware that the work and order together manage to give the best results, he is a responsible,
                creative, very detailed and thorough person in every project he performs. As developer, he is guided by his
                pleasure in creating solutions to help optimize processes, making these easier and faster, 
                this facilitating the functions of those who make use them.
                Its objective is to give a feeling of satisfaction in the client by creating appropriate 
                solutions for the needs.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Deivy Mejia</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>12th April 2000</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>25 years</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>San José, Costa Rica</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+50686767543">(+506) 8676 7543</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:deiby.mejia1204@gmail.com">
                        deiby.mejia1204@gmail.com
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:dmr1204">dmr1204</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="pdf/cv.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Beder</h5>
                          <span>( Ago 2023 — Actualmente )</span>
                        </div>
                        <h3>Full-Stack Engineer</h3>
                        <p>
                          • Desarrollo y mantenimiento de aplicaciones web<br />
                          • Desarrollo y mantenimiento de aplicaciones móviles<br />
                          • Manejo y atención a desarrolladores en proyectos con orientados a traveltech<br />
                          • Optimización de frontend en Next.JS para plataforma traveltech<br />
                          • Gestión de tareas y avances de proyectos<br />
                          • Integración de LLM's para la optimización de procesos en aplicativos
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item" href="https://www.grupomonge.com/">
                        <div className="item_top">
                          <h5>Grupo Monge</h5>
                          <span>( Jul 2022 — Actualmente )</span>
                        </div>
                        <h3>Tech Lead Engineer</h3>
                        <p>
                          • Desarrollo y mantenimiento de aplicaciones web financieras<br />
                          • Manejo y atención a desarrolladores en proyectos de pasarelas de pagos<br />
                          • Trabajar en arquitectura de micro servicios con Azure y Servicios en .NETCore 3 & 6<br />
                          • Optimización de frontend en Angular para plataforma financiera<br />
                          • Gestión de tareas y avances de proyectos
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Banco Costa Rica</h5>
                          <span>( Nov 2022 — Abr 2023 )</span>
                        </div>
                        <h3>Mobile Engineer</h3>
                        <p>
                          • Desarrollo de Aplicaciones para clientes terceros con iOS Native y Flutter<br />
                          • Mantenimiento de aplicaciones<br />
                          • Desarrollo y mantenimiento de Servicios REST<br />
                          • Atención al cliente con los usuarios
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Instacredit</h5>
                          <span>( Ago 2022 — Ago 2023 )</span>
                        </div>
                        <h3>Tech Lead Engineer</h3>
                        <p>
                          • Supervisión y delegación de tareas en equipo de 5 personas<br />
                          • Trabajar con servicios basados en lambdas (AWS)<br />
                          • Optimización de frontend y conexión con servicios Microsoft<br />
                          • Gestión de datos con DynamoDB<br />
                          • Desarrollo de aplicaciones móviles y gestión de proyectos
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>CFIA</h5>
                          <span>( Ene 2021 — Feb 2022 )</span>
                        </div>
                        <h3>Mobile Engineer</h3>
                        <p>
                          • Optimización de aplicación React Native para gestión de empleados<br />
                          • Trabajo con servicios creados con C# y tecnologías Microsoft
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Cooqs</h5>
                          <span>( Nov 2021 — Jun 2022 )</span>
                        </div>
                        <h3>Tech Lead Engineer</h3>
                        <p>
                          • Desarrollo de arquitectura de sincronización para tres apps<br />
                          • Desarrollo de funciones para cliente, chef y delivery<br />
                          • Gestión de rutas y coordenadas con Redis<br />
                          • Integración con APIs de Google y herramientas open source
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>MiBO Exchange</h5>
                          <span>( Feb 2021 — Actualmente )</span>
                        </div>
                        <h3>CEO & Founder</h3>
                        <p>
                          • Supervisión y delegación de tareas en equipo de 4 personas<br />
                          • Desarrollo de servicios REST para plataforma Exchange<br />
                          • Desarrollo de contratos inteligentes y Token ERC-20<br />
                          • Orquestación de servicios con Docker y Kubernetes<br />
                          • Desarrollo e Implementación de MVP Fintech
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Twin Business</h5>
                          <span>( Feb 2021 — Nov 2021 )</span>
                        </div>
                        <h3>Tech Lead & Blockchain Engineer</h3>
                        <p>
                          • Desarrollo de servicios REST y aplicaciones Exchange<br />
                          • Configuración de nodos para carteras y transacciones<br />
                          • Gestión de datos con Redis y MongoDB<br />
                          • Integración con sistemas de pago (Stripe, Conekta, STP)<br />
                          • Desarrollo de Token ERC-20 (Twin)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>SUTEL</h5>
                          <span>( Feb 2020 — Nov 2020 )</span>
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                          • Desarrollo de plataforma para aplicar tests<br />
                          • Desarrollo de arquitectura Backend con C# y .NET Core<br />
                          • Desarrollo de UI para usuarios
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>MIT Family</h5>
                          <span>( Feb 2020 — Nov 2020 )</span>
                        </div>
                        <h3>Mobile & Blockchain Engineer</h3>
                        <p>
                          • Desarrollo de soluciones web y móviles<br />
                          • Desarrollo de monedero electrónico para cripto y fiat<br />
                          • Implementación de pagos de servicios con crypto<br />
                          • Desarrollo de soluciones blockchain para seguros
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Arcade</h5>
                          <span>( Mar 2019 — Nov 2019 )</span>
                        </div>
                        <h3>Mobile Engineer</h3>
                        <p>
                          • Desarrollo de aplicaciones con NodeJS, Angular, Ionic y React Native<br />
                          • Desarrollo y mantenimiento de Servicios REST<br />
                          • Atención al cliente
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Xpress Processing</h5>
                          <span>( Feb 2018 — Nov 2019 )</span>
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                          • Desarrollo de Servicios REST para billetera digital<br />
                          • Desarrollo frontend para e-wallet<br />
                          • Desarrollo de aplicaciones móviles para e-wallet<br />
                          • Tecnologías: PHP, Laravel, ReactJS, Bootstrap
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}

              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Universidad Castro Carazo</h5>
                          <span>( 2018 — Actualmente )</span>
                        </div>
                        <h3>Bachillerato Ingenieria de Software</h3>
                        <p>
                          • 2 Cuatrimestres completos<br />
                          • Formación en ingeniería de software y desarrollo de aplicaciones
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}

              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Javascript & TypeScript</h3>
                      <span className="progress_percent" style={{ right: "5%" }}>95%</span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">React & React Native</h3>
                      <span className="progress_percent" style={{ right: "10%" }}>90%</span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Node.js & NestJS</h3>
                      <span className="progress_percent" style={{ right: "10%" }}>90%</span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Blockchain & Smart Contracts</h3>
                      <span className="progress_percent" style={{ right: "15%" }}>85%</span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Progress Bar */}

                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    Desarrollador Full Stack con amplia experiencia en tecnologías web y móviles.
                    Especializado en JavaScript y su ecosistema, desarrollo blockchain, y arquitecturas cloud.
                    Experiencia comprobada liderando equipos y desarrollando soluciones empresariales.
                    Dominio de diversas tecnologías incluyendo: JavaScript, TypeScript, React, React Native,
                    Node.js, NestJS, Solidity, AWS, Azure, Docker, Kubernetes entre otras.
                  </p>
                </div>
              </div>
              {/* /#3 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;