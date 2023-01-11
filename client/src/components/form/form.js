import useStyles from "./styles"
import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { updatePost } from "../../../../server/controllers/posts";


//GeT THe CURRENT ID


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });



    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();

    const dispatch = useDispatch();

useEffect(() => {
    if(post) setPostData(post)
}, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
           
        } else {
            dispatch(createPost(postData));
           
        }   
        clear();
    
    }

    const clear = () => {
        setCurrentId(null);

        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }



    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth
                    // create state
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth
                    // create state - 2
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField name="message" variant="outlined" label="Message" fullWidth
                    // create state - 3
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth
                    // create state - 4
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>
                    SUBMIT
                </Button>
                <Button variant="contained" color="secondary" onClick={clear} size="small" fullWidth>
                    Clear
                </Button>

            </form>
        </Paper>
    )



}





export default Form;