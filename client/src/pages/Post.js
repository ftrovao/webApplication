import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";

function Post(){
    let {id} = useParams({});
    //==================================================
    //estados
    //==================================================
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    //--------------------------------------------------
    //                Functions :-)
    //--------------------------------------------------
    const addComment = () => {
        axios.post("http://localhost:3001/comments", {
            commentBody: newComment,
            PostId:id })
        .then((response)=>{
        const commentToAdd = {commentBody: newComment};  
        setComments([...comments, commentToAdd]);
        setNewComment("");
        })
    };



    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
       //console.log(response);
      setPostObject(response.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
          //console.log(response);
          setComments(response.data);
        });


    },[]
    );

 
    return(
        <div className='postPage'>
            <div className="leftSide">
                <div className='post' id='individual'>
                    <div className='title'>{postObject.title}</div>
                    <div className='postText'>{postObject.postText}</div>
                    <div className='footer'>{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className='addCommentContainer'>
                <input type="text" 
                    placeholder='Comment...' 
                    autoComplete='off'
                    value={newComment}
                    onChange={(event)=>{setNewComment(event.target.value)}}
                />
                <button onClick={addComment}> Add Comment </button>
                </div>
                <div className='listOfComments'>
                    {comments.map((comment, key)=> {
                        return <div key={key} className='comment'> {comment.commentBody}</div>
                    } )}
                </div>
                
            </div>
        
       

{/* {"id: " + id}
        {postObject.title}
        {postObject.map((item)=>(
            <div>{item.title}</div>+
            <div>{item.postText}</div>+
            <div>{item.username}</div>
        ))} */}
        </div>

        
    )
}

export default Post;