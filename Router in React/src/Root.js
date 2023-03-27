import MainNaviagtion from "./Components/MainNaviagtion";
import { Outlet } from "react-router-dom";

const Root = ()=>{
    return( <>
    {/* <h1>Root Page</h1> */}
    <MainNaviagtion />
    <main>
    <Outlet/>
    </main>
    
    </>);
}

export default Root;