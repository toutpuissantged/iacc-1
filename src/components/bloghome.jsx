export const BlogHome = (props) => {
    return (
      <div id="bloghome">
        <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title text-center'>
          <h2 >NOTRE BLOG</h2>
          <p>
          Lisez un peu plus sur nos expertises 
          </p>
        </div>
        <div id='row' className="row sec-blog">
            <div className="col-md-6 blog-sec">
                <img src="img/blog-home/telesecretaire-acceuil.jpg" alt="" className="telesec"/>
            </div>
            <div className="col-md-6 text-center text-telesec" >
                <h3 className=""><span>D</span>écouvrez le métier de télésecrétariat ?</h3>
                <p className="">Les télésecrétariats existent depuis les années 80 particulièrement, à l’époque où l’externalisation des tâches administratives est apparue. Généralement employés par des entreprises pour leur propre compte, le télésecrétariat est une forme de sous-traitance directe au profit du client donneur d’ordre. Petit retour sur la définition du métier, souvent soumise à interprétations.</p>
            </div>
        </div>
        <div id='row' className="row">
        <div className="col-md-6 text-center text-use" >
                <h3 className=""><span>P</span>ourquoi utiliser iacc groupes pour accoitre votre entreprise ?</h3>
                <p className="since">Depuis la création de notre plateforme, Iacc Groupes s’est développé grâce à une équipe de passionnés. Une volonté nous anime : révolutionner le marché du service client.
                </p>
            </div>
        <div className="col-md-6 blog-sec logo-blog">
                <img src="img/logo/logo-1.jpeg" alt="Logo iacc" className="use-img"/>
        </div>


        </div>
      </div>
      </div>
    );
  };
  