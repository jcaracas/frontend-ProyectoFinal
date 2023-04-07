import {React,useState,useEffect} from 'react'
import CardPlantas from './CardPlantas'

export default function ContentHome() {
  const [db, setDb] = useState([]);
  
  useEffect(() => {
    GetPublicaciones();
  }, []);
  
  const GetPublicaciones = async () => {
    const data = await fetch("http://localhost:3000/publicaciones")
    const publicaciones = await data.json()
    setDb(publicaciones)
  };
  return (
    <div className='contenedorCard'>
       {db.map((item) =>
          <li key={item.id}>
              <CardPlantas item={item} />
          </li>
        
       )}
    
    </div>
  )
}