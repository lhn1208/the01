import { useEffect } from 'react'
import supabase from '../config/supabaseClient';

const Home = () => {

  useEffect(()=>{
    const fetchSmoothies = async () => {
    const { data, error } = await supabase
      .from('smoothies')
      .select()
      console.log(data);
    }
    fetchSmoothies()
  },[]);
  return (
    <div>Home

    </div>
  ) 
}

export default Home