export const MissionList = (props) => {
    return (
      <div id='missionlist' className='text-center'>
          <div className='section-title'>
            <h2></h2>
          </div>
          <div className="tris">
            <div className="col-md-2">
              <p>Liste des missions</p>
            </div>
            <div className="col-md-4 text-left pt-0">
              <div className="form-row m-0">
                 <form action="" method="post" >
                    <div className=" col-md-4">
                       <select name="" id="" className="form-control selectmissions">
                         <option value="">Types</option>
                         <option value="">Ventes</option>
                         <option value="">Prise de RDV</option>
                         <option value="">Télé secrétariat</option>
                         <option value="">qualification de fiches</option>
                         <option value="">Sondages et enquêtes téléphoniques</option>
                         <option value="">Assistance virtuel</option>
                       </select>
                    </div>
                    <div className="form-group col-md-4">
                       <select name="" id="" className="form-control selectmissions">
                         <option value="">Secteur d’activités </option>
                         <option value="">Télé secrétariat</option>
                         <option value="">qualification de fiches</option>
                         <option value="">Sondages et enquêtes téléphoniques</option>
                         <option value="">Assistance virtuel</option>
                       </select>
                    </div>
                    <div className="form-group col-md-4">
                       <select name="" id="" className="form-control selectmissions">
                         <option value="">Cibles </option>
                       </select>
                    </div>
                 </form>
              </div>
            </div>
          </div>

      <div className="container">
		          <div className="mission " title="Cliquez pour Afficher">
			              <div id="" className="background-secteur">
				                  <div className="couleur-background">
					                     <div className="categorie-mission ao">Une offre</div>
					                     <div className="row">
						                      <div className="col-md-1">
							                         <img className="rounded-circle" src="img/logo/logo-1.jpeg" alt=""/>
						                      </div>
						                      <div className="col-md-10">
							                         <h2 className="nom-mission">Ringover L’opération: Vente BtoB</h2>
						                      </div>
					                      </div>
				                  </div>
			               </div>
                     <div className="content-mission">
                        <div className="row">
                          <div className="content-label">
                            <div className="cible col-md-2">
                              <p>CIBLE</p>
                            </div>
                            <div className="contenu">
                            <p> Tout type de professionnel ayant besoin de téléphone fixe ou mobile. La solution est parfaite pour les professionnels qui ont beaucoup de déplacement ou susceptibles de faire du télétravail.</p>
                            </div>
                          </div>
                           <div className="conntent-footer row">
                              <div className="col-md-4"> <a href="" className=" btn btn-custom">Voir le CDC</a> </div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom">Contacter l’entreprise</a></div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom">Faire </a></div>
                           </div>
                        </div>
                     </div>  
		          </div>
       </div>
       <div className="container">
		          <div className="mission " title="Cliquez pour Afficher">
			              <div id="" className="background-secteur">
				                  <div className="couleur-background">
					                     <div className="categorie-mission ao">Une offre</div>
					                     <div className="row">
						                      <div className="col-md-1">
							                         <img className="rounded-circle" src="img/logo/logo-1.jpeg" alt=""/>
						                      </div>
						                      <div className="col-md-10">
							                         <h2 className="nom-mission">Prise de RDV Panneaux Photovoltaïque</h2>
						                      </div>
					                      </div>
				                  </div>
			               </div>
                     <div className="content-mission">
                        <div className="row">
                          <div className="content-label">
                            <div className="cible col-md-2">
                              <p>CIBLE</p>
                            </div>
                            <div className="contenu">
                            <p>Propriétaire d’une Maison  67 ans maximum  Pas au chômage ni en arrêt maladie  Propriétaire depuis plus d’un an  Pas sur un site classé  Revenu mensuel <span>(au moins 1000 euros par mois)</span> </p>
                            </div>
                          </div>
                           <div className="conntent-footer row">
                              <div className="col-md-4"> <a href="" className=" btn btn-custom">Voir le CDC</a> </div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom" title="Contacter l'entreprise">Contacter l’entreprise</a></div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom">Faire </a></div>
                           </div>
                        </div>
                     </div>
		          </div>
       </div>
       <div className="container">
		          <div className="mission " title="Cliquez pour Afficher">
			              <div id="" className="background-secteur">
				                  <div className="couleur-background">
					                     <div className="categorie-mission ao">Une offre</div>
					                     <div className="row">
						                      <div className="col-md-1">
							                         <img className="rounded-circle" src="img/logo/logo-1.jpeg" alt=""/>
						                      </div>
						                      <div className="col-md-10">
							                         <h2 className="nom-mission">AUDIT ENERGETIQUE GRATUITE</h2>
						                      </div>
					                      </div>
				                  </div>
			               </div>
                     <div className="content-mission">
                        <div className="row">
                          <div className="content-label">
                            <div className="cible col-md-2">
                              <p>CIBLE</p>
                            </div>
                            <div className="contenu">
                            <p>L'audit énergétique vise à établir et planifier un programme de travaux visant à améliorer la performance énergétique d'un bien. Il s'agit donc d'évaluer les points forts et les points faibles en termes de ...</p>
                            </div>
                          </div>
                           <div className="conntent-footer row">
                              <div className="col-md-4"> <a href="" className=" btn btn-custom">Voir le CDC</a> </div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom" title="Contacter l'entreprise">Contacter l’entreprise</a></div>
                              <div className="col-md-4"><a href="" className=" btn btn-custom">Faire </a></div>
                           </div>
                        </div>
                     </div>
		          </div>
       </div>
</div>

    )
  }