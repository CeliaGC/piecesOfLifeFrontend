import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";



const LayoutPublic = () => {

    // const navigation = useNavigation()

    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutPublic;