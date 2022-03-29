import React, { useState } from 'react';
import { Formik, Form, Field, FieldsetHTMLAttributes, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function CreatePost(){
    const initialValues = {
        title:"",
        postText:"",
        username:""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    });

    const onSubmit = (data)=>{
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log(" it worked");
            navigate('/');
            //setListOfPosts(response.data);
        });
        // console.log("onsubmit")
        // console.log("data: ", data)
    };

    let navigate = useNavigate();
    return (
    <div className="createPostPage">
            <button onClick={()=>console.log("console test")}>console log test</button>
        <Formik  
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Title</label>
                <ErrorMessage name="title" component="span"/>
                <Field autocomplete="off" id="inputCreatePost" name="title" placeholder="title"/>

                <label>Post:</label>
                <ErrorMessage name="postText" component="span"/>
                <Field autocomplete="off" id="inputCreatePost" name="postText" placeholder="postText"/>
           
                <label>Username:</label>
                <ErrorMessage name="username" component="span"/>
                <Field autocomplete="off" id="inputCreatePost" name="username" placeholder="username"/>

                <button type="submit">Create Post</button>
            </Form>

          
        </Formik>
    </div>);
}

export default CreatePost;