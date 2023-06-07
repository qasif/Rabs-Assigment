import React from "react";
import "./Home.scss";
import {AiFillPlayCircle , AiOutlinePlusCircle} from 'react-icons/ai'


const Home = () => {
    return (<>
            <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/voaKRrYExZNkf1E4FZExU7fTd8w.jpg)`}}>
                    <h1>Terra e Paixão</h1>
                <div className="d-flex align-items-center">
                <div className="play-btn button-4"> <AiFillPlayCircle/> <span> PLAY</span> </div>
                <div className="add-list-btn button-4"><AiOutlinePlusCircle/> <span>ADD LIST</span> </div>
                </div>
            </div>
    </>);
};

export default Home;
