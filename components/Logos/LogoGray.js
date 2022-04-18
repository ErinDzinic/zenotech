import React from "react"
import { Box, Img, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image";
import MeneaLogo from '../../public/images/MeneaLogo.png';
import BuddyCompanyLogo from '../../public/images/BuddyCompanyLogo.png';

export default function Logo(props) {
    console.log('Props ', props.companyLogo);
    let partnerURL;
    switch (props.companyLogo) {
        case 'buddycompany':
            partnerURL = BuddyCompanyLogo;
            break;
        case 'menea':
            partnerURL = MeneaLogo;
            break;
        default:
            break;
    }

    console.log('Par ', partnerURL);

    return (

        <Box {...props}>
            <Link _hover={{cursor:'default'}} _focus={{ border: 'none' }}>
                {
                    props.companyLogo
                        ?
                        <Box w='200px' h={'60px'} display={'flex'}>
                            <Image
                                src={partnerURL}
                                alt='logo' />
                        </Box>
                        :
                        <Box p='15px' pt='10px'>
                            <Img p='15px' pt='10px' w='200px' src={'../images/ztgr.png'} alt='logo' />
                        </Box>
                }
            </Link>
        </Box>
    )
}