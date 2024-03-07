import Restuarent_card from "./Restuarent_card";
import resList  from "../utils/mockdata";
import {useState} from "react";

const style={paddingLeft:"20px" };
const Body=()=>{
   const [listOFres,setListOFres]=useState(resList)
    return(
    <div className="body">
        <div className="searchbar" style={style}>
            <button className="filter-btn"
            onClick={()=>{
                filterlist=listOFres.filter((res)=>res.info.avgRating>4.2)
                setListOFres(filterlist);
            }
        }
            >Top Restuarents</button>
        </div>
        <div className="Restuarent_block">
            {
                listOFres.map((rest)=> (<Restuarent_card key={rest.info.id} res_Data={rest}/>))  //map to fetch data
            }
        </div>
    </div>
    )
}

export default Body;