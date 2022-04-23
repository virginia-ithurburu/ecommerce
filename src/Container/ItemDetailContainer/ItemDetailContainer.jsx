import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from '@firebase/firestore';




function ItemDetailContainer () {
    const [ loading, setLoading ] = useState(true)
    const [prod, setProds ] = useState({})
    const { id } = useParams()
    
    

    useEffect (() => {
        const dataBase = getFirestore()
        const queryDoc = doc( dataBase, 'items', id)  
        getDoc(queryDoc)    
        .then(resp => setProds({ id: resp.id, ...resp.data()}))
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