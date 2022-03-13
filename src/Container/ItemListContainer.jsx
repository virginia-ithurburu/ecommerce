import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { getItem } from '../helpers/getItem';
import ItemList from '../components/ItemList/ItemList';
import Spinner from 'react-bootstrap/esm/Spinner'


function ItemListContainer ( { saludar } ) {
  const [ loading, setLoading ] = useState(true)
  const [prods, setProds ] = useState([])
  const { id } = useParams()

  useEffect (() => {
    if (id) {
      getItem        
      .then(resp => setProds(resp.filter(prod=> prod.category === id)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))           
  } else {
      getItem       
      .then(resp => setProds(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))            
  }

}, [id])


 return (
   <>
   <div>{saludar}</div>
   {       loading ? <Spinner animation="grow" /> 
                    :
                        <ItemList prods={prods} />
                }
                
            </>

 )
}

export default ItemListContainer