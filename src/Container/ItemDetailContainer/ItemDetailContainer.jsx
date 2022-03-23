import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { getItems } from '../../helpers/getItem';
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemDetail from '../../components/ItemDetail/ItemDetail';



function ItemDetailContainer () {
    const [ loading, setLoading ] = useState(true)
    const [prod, setProds ] = useState({})
    const { id } = useParams()
    
    


    console.log(id)
    console.log(prod)
    

    useEffect (() => {
        getItems        
        .then(prod => setProds(prod.find(prod => prod.id === parseInt(id))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))           
      
  }, [])
  

   return (
     
     <div>
     {       loading ? <Spinner animation="grow" /> 
                      :
                          <ItemDetail products={prod} />
                  }
                  
                  </div>
  
   )
}

export default ItemDetailContainer