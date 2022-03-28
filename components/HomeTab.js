import React from "react";
import { Img, Flex,Box, Text } from "@chakra-ui/react";


export default function HomeTab(){
    return(
<>
    <Box w='100%'>
        <Flex justifyContent='flex-start' backgroundColor='rgba(78,75,75)'>
            <Img src="../images/mostar.jpg" w="60%" ></Img>
            <Flex color='white' m='10%'>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum mi ut orci interdum facilisis. Aliquam at velit sed nisi suscipit blandit eget nec nisi. Nulla viverra consectetur finibus. Mauris mollis placerat erat quis consequat. Vestibulum posuere interdum nulla sed dictum. Duis at lectus justo. Aliquam venenatis nec sapien at mattis. Sed commodo est vel auctor convallis. Mauris pellentesque sem id odio mollis fermentum. Nullam vitae porta arcu. Sed blandit sollicitudin augue et suscipit.</Text>
            </Flex>
        </Flex>
        <Flex justifyContent='flex-end' backgroundColor='rgba(78,75,75)' >
            <Img src="../images/intera.jpg" w="60%"></Img>
        </Flex>
    </Box>
</>
    )
}
