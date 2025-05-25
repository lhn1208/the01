import { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient';
import SmoothieCard from '../component/SmoothieCard';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);   
  const [orderBy, setOrderBy] = useState('created_at');

  const handleDelete = (id) =>{
    setSmoothies(
      (prevSmoothies) =>{
        return prevSmoothies.filter(sm => sm.id !== id)
      }
    )
  }
  useEffect(()=>{
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()
        .order(orderBy,{ascending:false})
        if(error){
          setFetchError('could not fetch the smooties')
          setSmoothies(null)
        }
        if(data){
          setSmoothies(data)
          setFetchError(null)
        }
    }
    fetchSmoothies()
  },[orderBy]);
  return (
    <div>
      {setFetchError && (<p>{fetchError}</p>)}
      {
        smoothies&&(
          <div className='smoothies'>
            <div className='order-by'>
              <p>Order By</p>
              <button onClick={() => setOrderBy('created_at')}>Time Created</button>
              <button onClick={() => setOrderBy('title')}>Title</button>
              <button onClick={() => setOrderBy('rating')}>rating</button>
            </div>
            <div className='smoothie-grid'>
                {
                  smoothies.map(smoothie =>(
                    <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete} />
                  ))
                }
            </div>
          </div>
        )
      }
    </div>
  ) 
}

export default Home