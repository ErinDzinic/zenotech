import {
    Box,
    Divider,
    Heading,
    SimpleGrid,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFileSignature, FaHandsHelping, FaHeadset, FaMobileAlt } from 'react-icons/fa';
import { GiTeamUpgrade } from 'react-icons/gi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { Feature } from './FeaturesDesign'
import Fade from 'react-reveal/Fade';


//   ========== THIS IS COMPONENT FOR 2x3 column of ICONS BELOW OUR PARTNERS ================

export default function Features() {
    return (

        <Box bgColor={'white'} align='center'>
            <Divider w='80%' my="20" opacity={1} />
            <Fade top>
                <Box align='center' pb='80px'>
                    <Heading size={'4xl'} fontFamily='Rajdhani'>What do we offer</Heading>
                </Box>
            </Fade>
            <SimpleGrid
                paddingTop={'2rem'}
                alignItems={'center'}
                columns={{
                    base: 1,
                    md: 4,
                }}
                spacing={{
                    base: '5',
                    md: '5',
                }}
            >

                {/* =============================================================
            KEEP EVERYTHING INSIDE OF FADE COMPONENT. ADD MORE JUST COPY PAStE , 
            FOR YOUR OWN PURPOSES CHANGE THE ICONS WHICEVER YOU FIT THE MOST 
            =================================================================*/}

                <Fade bottom>
                    <Feature title="Dedicated teams" icon={<GiTeamUpgrade />}>
                        Hire our consultant who will give you the best services.
                    </Feature>
                    <Feature title="App development" icon={<FaMobileAlt />}>
                        We create innovative app with modern design.
                    </Feature>
                    <Feature title="Collaborate with partners" icon={<FaHandsHelping />}>
                        Collaborate with our partners and share your ideas.
                    </Feature>
                    <Feature title="Software development" icon={<HiOutlineDesktopComputer />}>
                        Building software solutions. We integrate existing systems or we build them from scratch.
                    </Feature>
                </Fade>
                <Divider my="10" opacity={0} />
            </SimpleGrid>
        </Box>
    )
}
