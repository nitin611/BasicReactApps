import React,{useState} from 'react'
import Button from './Button.jsx'
import axios from 'axios';
 const Joke = () => {
        const [jokes,setJokes]=useState("");
        
        const fetchApi=()=>{
            try {
                const res=axios.get("https://official-joke-api.appspot.com/random_joke")
                .then((res)=>{
                    const data=res.data;
                    setJokes(`${data.setup}-${data.punchline}`);
                });
            } catch (err) {
                console.log("error in fetching ",err)
                setJokes("failed to fetch jokes,please try again");
            }
        }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-md shadow-md">
        <Button callApi={fetchApi}/>
       <p className="text-gray-800 font-medium text-lg">{jokes || "click button to get the jokes"}</p>
        
        </div>
  )
}
export default Joke
