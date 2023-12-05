import { CDN_LINK } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Card = (props)=>{
    const {loggedInUser} = useContext(UserContext);
    const {resData} = props
    const {cloudinaryImageId,name,costForTwo,cuisines,avgRating} = resData?.info;
    // console.log(resData)
  return (

      <div data-testid = "rescard" className="m-[6px] p-4 w-[290px] rounded-lg bg-gray-200 hover:bg-gray-300">
          <img className="rounded-lg" src={CDN_LINK+cloudinaryImageId}/>
          <h2 className="text-lg py-3 font-bold">{name}</h2>
          <h3>{costForTwo}</h3>
          <h3 className="break-words">{cuisines.join(",")}</h3>
          <h3>{avgRating}</h3>
          <h3>User:{loggedInUser}</h3>
      </div>

  )
}

export const WithPromotedLabel = (Card) =>{
    return (props) =>{
        return(
            <div>
               <label className="absolute rounded-lg bg-black text-white p-1 m-2">Open</label>
               <Card {...props}/>
            </div>
            
        )
    }
}

export default Card;