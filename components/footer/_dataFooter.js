import { Badge, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

// ==============================================================================================
// HERE YOU CAN CHANGE EVERYTHING ABOUT FOOTER , FROM LINKS TO HREFS TO EVERYTHING THAT SUITS YOU 
// ==============================================================================================


export const links = [
  {
    title: 'Company',
    links: [
      {
        label: 'Why ZenoTech',
        href: '#stats',
      },
      {
        label: 'Our story',
        href: '#story',
      },
      {
        label: 'Careers',
        href: '#career',
        badge: (
          <LightMode>
            <Badge color="black" fontSize="0.625rem">
              Hiring
            </Badge>
          </LightMode>
        ),
      }
    ],
  },
  {
    title: 'Product',
    links: [
      {
        label: 'How it works',
        href: '#about',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Blog',
        href: '404',
      },
      {
        label: 'Partnerships',
        href: '404',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'info@zenotech.se'
      },
      {
        label: 'Bišće polje bb, Mostar 88000',
        href: 'https://goo.gl/maps/CkX63GbAR86bSUEU6',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebookSquare size='35px'/>,
    href: '#',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram size='35px'/>,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin size='35px'/>,
    href: 'https://www.linkedin.com/company/zenotech-d-o-o/about/',
  },
  
]

