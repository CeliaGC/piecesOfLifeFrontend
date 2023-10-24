import { Outlet } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";




function Root() {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;
