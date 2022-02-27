export const Slider = (props) => {
    return (
    <header id="home">
    <div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="item active bg-slider-1">
          <div className="caption">
            <h1 className="animated fadeInLeftBig">Bienvenue sur IACC GROUPES</h1>
            <p className="animated fadeInRightBig">L’espace dédié aux centres d’appels</p>
            <p className="animated fadeInRightBig">Sécurité, Transparence, Adapter à votre taille</p>
            <a data-scroll className="btn btn-custom animated fadeInUpBig btn-lg page-scroll" href="#services">Créer un compte</a>
            <a data-scroll className="btn btn-custom animated fadeInUpBig btn-lg page-scroll" href="#services">En savoir plus</a>
          </div>
        </div>
        <div className="item bg-slider-2">
          <div className="caption">
          <h1 className="animated fadeInLeftBig">Bienvenue sur IACC GROUPES</h1>
            <p className="animated fadeInRightBig">L’espace dédié aux centres d’appels</p>
            <p className="animated fadeInRightBig">Sécurité, Transparence, Adapter à votre taille</p>
            <a data-scroll className="btn btn-custom animated fadeInUpBig" href="#services">Créer un compte</a>
            <a data-scroll className="btn btn-custom animated fadeInUpBig" href="#services">En savoir plus</a>
          </div>
        </div>
        <div className="item bg-slider-3" >
          <div className="caption">
          <h1 className="animated fadeInLeftBig">Bienvenue sur IACC GROUPES</h1>
            <p className="animated fadeInRightBig">L’espace dédié aux centres d’appels</p>
            <p className="animated fadeInRightBig">Sécurité, Transparence, Adapter à votre taille</p>
            <a data-scroll className="btn btn-custom animated fadeInUpBig" href="#services">Créer un compte</a>
            <a data-scroll className="btn btn-custom animated fadeInUpBig" href="#services">En savoir plus</a>
          </div>
        </div>
      </div>
      <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
      <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>

      <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>

    </div>
  </header>

    )
  }
  