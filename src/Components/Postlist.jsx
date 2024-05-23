import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListdata} from "../Store/Postliststore";
import Welcomemssg from "./Welcomemssg";




const Postlist = () => {
const {postList,addinitialpost} = useContext(PostListdata);
const fetchclick = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
        addinitialpost(data.posts)
    });
};
    return ( <>
    {postList.length===0 && (<Welcomemssg fetchclick={fetchclick}/>)}
    {postList.map((post) => (
        <Post key = {post.id} post = {post} />
    ))}    

    </>
);
}

export default Postlist;