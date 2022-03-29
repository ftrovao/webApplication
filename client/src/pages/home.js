import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
//In react-router-dom v6 useHistory() is replaced by useNavigate()
//import {useHistory} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Home(){
    const [listOfPosts, setListOfPosts] = useState([]);

    let navigate = useNavigate()


    useEffect (()=>{
        axios.get("http://localhost:3001/posts").then((response) => {
        setListOfPosts(response.data);
        });}
    , []);

    return(
        <div>
        {listOfPosts.map((value, key)=> {
        return (
            //stackoverflow com mudancas history para navigate.
            //https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom  
            // <div className='post' onClick={()=> {navigate(`/post/${value.id}`);console.log("navigate")}}> 
            <div className='post' onClick={()=> {navigate(`/post/${value.id}`)}}> 

                <div className='title'> {value.title} </div> 
                <div className='body'> {value.postText} </div> 
                <div className='footer'> {value.footer} </div> 
            </div>)
      })}
        </div>
    )
}

export default Home