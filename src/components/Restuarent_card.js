import { RES_LOGO } from "../utils/content";


const Restuarent_card=({res_Data})=>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality}=res_Data?.info    //optional chaining
    return(
    <div className="res_card">
        <div className="rest_logo">
            <img className="res_image"src={RES_LOGO+cloudinaryImageId }/>
        </div>
        <div className="res_desc">
          <p>{name}</p>  
          <p>{cuisines.slice(0,2).join(',')}...</p>  
          <p>{avgRating}</p>  
          <p>{costForTwo}</p>  
          <p>{locality}</p>  
        </div>
    </div>
    )
}

export default Restuarent_card;