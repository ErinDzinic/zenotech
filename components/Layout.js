import RespNavbar2 from '../components/RespNavbar2'
import Footer from '../components/Footer'
import Home from '../components/HomeTab'
import * as React from "react";
import { motion, useViewportScroll } from "framer-motion";

export default function Layout({children}){
    return(
        <> 
                {children}
        </>
    )
}