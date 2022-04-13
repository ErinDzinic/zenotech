import React from 'react';
import { motion } from "framer-motion"
import {
    Box,
  } from '@chakra-ui/react';
  import  IsolatedModal from '../hooks/CareerHook';

  const CareerCards = [
    {
      jobTitle: '.Net Core',
      shortDescription:'Type: Full-time permanent,Location: Sarajevo/Mostar office or Remote Starting date: As soon as possible, negotiable Application deadline: The position will remain open until it is filled',
      longDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.'
    },
    {
      jobTitle: 'React Native',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.',
      longDescription: ''
    }
    ,
    {
      jobTitle: 'Frontend developer ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.',
      longDescription: ''
    },
    {
      jobTitle: 'Frontend developer ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc leo, consectetur et interdum vitae, egestas dignissim nunc. Donec nec fringilla turpis. Phasellus gravida tortor lectus, mattis semper mauris dictum in. Aliquam erat volutpat. Integer nec nisi at urna hendrerit molestie id sagittis ipsum. In dignissim urna eget ex mattis molestie. Donec vel justo at sapien tristique porta.',
      longDescription: ''
    }
]
  
export default function CareerCard(){
    return(
      <Box overflowX={'hidden'}>
         {CareerCards.map((card,index)=>(
          <IsolatedModal key={index} cards={card}></IsolatedModal>
            ))}
  </Box>
    )
}