import Card from './Card'
function Main({products}) {

  return (
    <div className='row'>

      {
        products.map((product, index)=>{
          return <div key={index} className='col-md-3'>
            <Card product={product}/>
          </div>
        } )
      }
            
    </div>
  )
}

export default Main
