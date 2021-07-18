import {useEffect,useState} from 'react'
import UserDetails from './UserDetails'


const Home = () => {

      const[users,setusers] = useState([])
      const [count , setcount] = useState(1)

      useEffect(() => {   
            fetchusers();
      },[]);
      
      console.log(count);

      const fetchusers = async() => {
            try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${count}&_limit=10`)
            const data = await res.json();
            setusers(data)
            } 
            catch (error) {
                  console.log(error);
            }
      }

     
       
      
     
    
      return (
            <>
                <UserDetails users={users} />  

             
            </>
      )
}

export default Home
