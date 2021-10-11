
import  { useEffect, useState } from "react";
import { MainSide, Name, SideBarLink, SideImg, UserButton, Welcome } from '../Styled-components/SidebarStyle';
import {Link} from "react-router-dom"
import SidebarLinks from "./SidebarLinks";
import { sidebardata } from "./SidebarLinksData";
import { useDispatch, useSelector } from "react-redux";
const URL = "https://randomuser.me/api/";
export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar;
    // const [user, setUser] = useState({});
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData)
    
    // useEffect is a hook
    // hook that fires when the component is mounted
    useEffect(() => {
      const getNewsData = async () => {
        const getTheNews = await fetch(URL, {
          method: "GET",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonNews = await getTheNews.json();
        
        dispatch({
          // ...jsonNews.results[0],
          type: "GET_USER",
          payload: {...jsonNews.results[0]}
          // userImage: jsonNews?.results[0]?.picture?.thumbnail,
        });
      };
      getNewsData();
      return () => {};
    }, [counter]);
  


    return (
      <>
      {viewSidebar ?  <MainSide>
            
            <Welcome>
            <SideImg src={user?.userData.picture?.large} alt="alsd" />
            
              <Name>Welcome {user?.userData.name?.first} {""} {user?.userData.name?.last}</Name>
             </Welcome>
            {/* <p>{user?.location?.city}</p> */}
            <UserButton onClick={() => setCounter(counter + 1)}>
             Get New User
            </UserButton>


            {sidebardata?.map((linkData) => (
              <SidebarLinks linkData={linkData} />
            ))}


        </MainSide> : <></>}
       </>
    )
}
