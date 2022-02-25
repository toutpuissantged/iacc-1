export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  {' '}
                  <i className="numero">{d.number}</i>
                  <i className={d.icon}><img src={d.image} alt="" /></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
