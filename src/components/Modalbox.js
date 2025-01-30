import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Twin Exchange - Plataforma Cripto",
      tag: "Crypto Exchange, Blockchain, Fintech",
      desc: [
        { p: "Desarrollo e implementación de plataforma de intercambio de criptomonedas. La plataforma permite a los usuarios realizar operaciones de compra y venta de criptoactivos de manera segura y eficiente. Implementación de MVP Fintech que incluye funcionalidades como wallet digital, sistema de órdenes, y panel de administración." },
        { p: "Desarrollo de Token ERC-20 propio, implementando smart contracts en la red Ethereum. Gestión de equipo de desarrollo y supervisión de todas las etapas del proyecto. Desarrollo de aplicaciones móviles y web para facilitar el trading de criptoactivos, con funcionalidades en tiempo real y alta seguridad." }
      ]
    },
    {
      name: "Grupo Monge - Plataforma Financiera",
      tag: "Azure, .NET Core, Angular",
      desc: [
        { p: "Desarrollo y mantenimiento de aplicaciones web financieras para Grupo Monge, incluyendo sistemas de gestión de créditos y pagos. Implementación de pasarelas de pago y arquitectura de microservicios con Azure App Registration, garantizando alta disponibilidad y escalabilidad." },
        { p: "Optimización de frontend en Angular para plataforma financiera, mejorando la experiencia de usuario y el rendimiento general. Gestión de equipo y coordinación de proyectos fintech, asegurando el cumplimiento de objetivos y plazos establecidos." }
      ]
    },
    {
      name: "Twin Exchange - Exchange Platform",
      tag: "Crypto Exchange, Blockchain, Fintech",
      desc: [
        { p: "Plataforma de intercambio desarrollada con tecnologías blockchain, permitiendo operaciones de trading seguras y eficientes. Implementación de sistema de carteras digitales con múltiples criptomonedas y gestión avanzada de activos." },
        { p: "Desarrollo de contratos inteligentes para automatización de procesos y garantizar la seguridad de las transacciones. Integración con diversos protocolos blockchain y implementación de sistemas de seguridad avanzados." }
      ]
    },
    {
      name: "BEDER - Aplicación Financiera",
      tag: "AWS Lambda, DynamoDB, React",
      desc: [
        { p: "Desarrollo de servicios basados en AWS Lambda, implementando arquitectura serverless para optimizar costos y escalabilidad. Implementación de base de datos DynamoDB para gestión eficiente de datos financieros y transacciones." },
        { p: "Optimización de frontend y conexión con servicios Microsoft, mejorando la experiencia de usuario y el rendimiento. Desarrollo de aplicaciones móviles y gestión integral del proyecto, asegurando la calidad y cumplimiento de objetivos." }
      ]
    },
    {
      name: "Xpress Processing - E-Wallet",
      tag: "PHP, Laravel, ReactJS, Mobile",
      desc: [
        { p: "Desarrollo de servicios REST para billetera digital (e-wallet), implementando sistema completo de gestión de transacciones y pagos. Implementación de frontend en ReactJS para plataforma de pagos, con interfaz intuitiva y responsive." },
        { p: "Desarrollo de aplicaciones móviles para gestión de billetera electrónica, facilitando pagos y transferencias desde dispositivos móviles. Stack tecnológico: PHP, Laravel, ReactJS, Bootstrap, garantizando un sistema robusto y escalable." }
      ]
    },
    {
      name: "Cooqs - Plataforma de Delivery",
      tag: "React Native, Redis, Google APIs",
      desc: [
        { p: "Desarrollo de arquitectura de sincronización para tres aplicaciones: cliente, chef y delivery, asegurando comunicación en tiempo real. Implementación de sistema de rutas y coordenadas con Redis, optimizando la gestión de entregas y seguimiento." },
        { p: "Integración con APIs de Google y herramientas de geolocalización para mejorar la precisión en el tracking de pedidos. Optimización de experiencia de usuario en tiempo real, garantizando una plataforma eficiente y fácil de usar." }
      ]
    }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des, i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 6 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 6 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;