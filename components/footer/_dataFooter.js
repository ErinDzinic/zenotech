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
        href: '#about',
      },
      {
        label: 'Our story',
        href: '#',
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
      },
      {
        label: 'Press',
        href: '#',
      },
      {
        label: 'FAQ',
        href: '#',
      },
    ],
  },
  {
    title: 'Product',
    links: [
      {
        label: 'How it works',
        href: '#',
      },
      {
        label: 'Pricing',
        href: '#',
      },
      {
        label: 'Use Cases',
        href: '#',
      },
      {
        label: 'Integrations',
        href: '#',
      },
      {
        label: 'SAML SSO',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Partnerships',
        href: '#',
      },
      {
        label: 'Case studies',
        href: '#',
      },
      {
        label: 'Help Center',
        href: '#',
      },
      {
        label: 'Media Assets',
        href: '#',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: '+387603005860'
      },
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

