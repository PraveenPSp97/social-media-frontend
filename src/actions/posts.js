import * as api from '../api'


export const getPosts=()=>async(dispatch)=>{
    try {
        const post= await api.fetchPosts()
        dispatch({type:'FETCH_POSTS',payload:post})
    } catch (error) {
        
    }
}

export const postPost=(post)=>async(dispatch)=>{
    console.log('in POSTPOST',post)
    try {

      
        const newPost=await api.postPost(post)
        dispatch({type:'POST_POST',payload:newPost})
    } catch (error) {
        console.log('error',error)
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
        const like=await api.likePost(id);
        dispatch({type:'POST_LIKE',payload:id})
    } catch (error) {
        
    }
}

export const deletePosts=(id)=>async(dispatch)=>{
    try {
        
        const deleted=await api.deletePost(id);
        dispatch({type:'DELETE_POST',payload:id})
    } catch (error) {
        
    }
}