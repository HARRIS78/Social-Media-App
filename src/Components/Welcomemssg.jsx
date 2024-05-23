const Welcomemssg = ({fetchclick}) => {
    return <center className="welcomemssg">
    <h1>THERE are NO POSTS</h1>
    <button type="button" className="btn btn-primary" onClick={fetchclick}>click to fetch posts from server !</button>
    </center>
}

    export default Welcomemssg;