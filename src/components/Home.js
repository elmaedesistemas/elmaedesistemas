const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="text-blue-400 text-xl font-medium">Innovando en Web3</h3>
            <h3 className="text-5xl font-bold text-white mb-6">Desarrollador Blockchain</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Desarrollo soluciones descentralizadas y dApps de próxima generación.
              Especializado en smart contracts, DeFi y NFTs, construyendo el futuro
              de las finanzas y la Web3 con tecnologías blockchain de vanguardia.
            </p>
            <img src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
