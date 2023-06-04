export default (posts=[],action)=>{

    console.log('in reducer',action)
    switch(action.type){
        case 'FETCH_POSTS':
            console.log('in fectch')
            return action.payload;

        case 'POST_POST':
            console.log('post refucer',posts,action.payload)
            return [...posts,action.payload]

        case 'POST_LIKE':
            const liked=posts.map(likepost=>(likepost.id==action.payload?{...likepost,likes:likepost.likes+1}:likepost));
            console.log('liked',liked)
            return posts.map(likepost=>(likepost.id==action.payload?{...likepost,likes:likepost.likes+1}:likepost))

        case 'DELETE_POST':
            return posts.filter(post=>post.id!=action.payload)
        default: return posts;
    }
}