import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";

function MainLayout() {
    return (
        <>
            {/* This navbar is the shared UI we want to across pages */}
            <Navbar /> 
            {/* The actual page which will be rendered along with navbar */}
            <Outlet />
        </>
    )
}

export default MainLayout;