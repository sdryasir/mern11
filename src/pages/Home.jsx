import Main from '../components/Main'
import { products, categories, sliders } from '../data/data'

function Home() {


  return (
    <div>      
      <Main products={products} />
    </div>
  )
}

export default Home


