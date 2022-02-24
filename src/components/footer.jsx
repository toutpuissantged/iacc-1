export const Footer = (props) => {
    return (
      <div id="footer">
        <div className="container">
          <div className="row haut">
              <div className="col-md-3 localisation">
                  <h5>Challenge business company</h5>
                  <p className="rue">rue 20 de Nantes</p>
                  <p className="pb">5700 Nantes</p>
              </div>
              <div className="col-md-3 help">
              <h5>Aide et soutien</h5>
                  <a href="#" className="rue">Centre d'aide</a> <br />
                  <a href="#" className="pb">Probleme technique </a> <br />
                  <a href="#" className="pb">Discuter avec nos agents</a> <br />
              </div>
              <div className="col-md-3 help">
              <h5>À propos de chalenge business company</h5>
                  <a href="#" className="rue">Nos valeurs</a> <br />
                  <a href="#" className="pb">Comment ça marche ? </a> <br />
                  <a href="#" className="pb">Devenir vendeur</a> <br />
                  <a href="#" className="pb">Contact et FAQ</a> <br />
              </div>
              <div className="col-md-3 ml-5">
                  <h5> Les avis des clients</h5>
                  <img src="img/footer/note.png" alt="" />
                  <img src="img/footer/note.png" alt="" />
                  <img src="img/footer/note.png" alt="" />
                  <img src="img/footer/note.png" alt="" />
                  <img src="img/footer/note-vide.png" alt="" /> 80.00%
                  <p>d’avis positifs sur 10000 commandes notées par les clients de iacc groupes</p>
              </div>           
          </div>
          <div className="row bas">
              <div className="col-md-4">
                  <i className=""> <img src="img/mode-payement/visa.png" alt="" /></i>
                  <i className=""> <img src="img/mode-payement/mastercate.png" alt="" /></i>
                  <i className=""> <img src="img/mode-payement/mastercate.png" alt="" /></i>
              </div>
              <div className="col-md-4">

              </div>
              <div className="col-md-4 reseau">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-youtube"></i>
              </div>
          </div>
        </div>
      </div>
    );
  };
  