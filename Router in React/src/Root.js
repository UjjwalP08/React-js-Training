import MainNaviagtion from "./Components/MainNaviagtion";
import { Outlet } from "react-router-dom";
import classes from './Root.module.css'

const Root = ()=>{
    return( <>
    {/* <h1>Root Page</h1> */}
    <MainNaviagtion />
    <main className={classes.content}>
    <Outlet/>
    </main>
    
    </>);
}

export default Root;