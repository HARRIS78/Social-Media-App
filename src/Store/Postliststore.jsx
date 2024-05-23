import { createContext, useReducer } from "react";



export const PostList = createContext({
    postList : [],
    addpost : () =>{},
    addinitialpost : () => {},
    deletepost : () => {}
});

const PostListReducer = (currPostList, action)=>{
    let newpostlist = currPostList;
    if(action.type === 'DELETE-POST'){
            newpostlist = currPostList.filter((post) => post.id !== action.payload.postid);
    }
    else if ((action.type === 'ADD_INITIAL_POST')){
        newpostlist= action.payload.posts;
}
    else if ((action.type === 'ADD-POST')){
            newpostlist= [action.payload,...currPostList];
    }
   

    return newpostlist;
}


const PostListProvider = ({children})=>{
    
    const [postList, dispatchPostList] = useReducer(PostListReducer,[]);



    const addpost = (userid,posttitle,postbody,reactions,tags) =>{ 
        dispatchPostList({
            type: 'ADD-POST',
            payload:{
                id: Date.now(),
        title : posttitle,
        body : postbody,
        reactions : reactions,
        userId : userid,
        tags: tags,
            }
        })
        

    };


    const addinitialpost = (posts) =>{ 
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload:{
                posts
            }
        });
        

    };


    const deletepost = (postid) => {
       dispatchPostList({
        type: "DELETE-POST",
        payload:{
            postid,
        },
       });
    };
    

    return   <PostList.Provider value = {{postList,addpost,deletepost,addinitialpost}}>
        {children}</PostList.Provider>
}



export default PostListProvider;  