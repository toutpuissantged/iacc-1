export const ServicesHome = (props) => {
    return (
      <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Nos Services</h2>
  
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <i className={d.icon}><img src={d.image} alt="" className="imgser"/></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'Chargement en cours'}
          </div>
        </div>
      </div>
    )
  }
  