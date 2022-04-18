import React from 'react';
import { motion } from "framer-motion"
import {
  Box,
} from '@chakra-ui/react';
import IsolatedModal from '../hooks/CareerHook';

const CareerCards = [
  {
    jobTitle: 'Backend developer',
    type: 'Full-time',
    location: 'Mostar/Remote',
    startingDate: 'As soon as possible, the position will remain open until it is filled',
    shortDescription: 'NodeJS backend developer',
    longDescription: [
      'We are looking for competent backend developers in Node.js / Javascript that have 3+ years experience. We are still a small company, so you we expect you to take responsibility for your role and be a leading person in the tech team.',
      'You have a genuine interest in consumer app solutions and are passionate about changing a traditional industry.',
      'You have got experience from working with companies in their early stages with a strong entrepreneurial culture, and are eager to join a fast-scaling startup in its international expansion journey.',
      'You have got at least 3 years of experience as a backend app developer in Javascript.',
      'You are familiar with our tech stack: Node.js, React, MongoDB, Unit testing libraries, CI/CD. A great plus if you also know React and/or React Native',
      'Experience in micro services as well as monolithic structures.',
      'These words tickle you: optimization, large-scale data, high load applications, crowdsourcing, machine learning, agile processes, leading teams, coaching, having a strong business mindset...',
      'You can plan for a future ahead, ensuring great scalability – while at the same time being pragmatic, understanding our business goals and not over-doing it by building a high-tech rocket ship just for the sake of it.',
      'You live in Sweden, want to be part of building our culture at the office but at the same time communicate and lead work with our remote team.',
      'You are fluent in English (and preferably also in Swedish).'
    ]
  },
  {
    jobTitle: 'Frontend developer',
    type: 'Full-time',
    location: 'Mostar/Remote',
    startingDate: 'As soon as possible, the position will remain open until it is filled',
    shortDescription: 'ReactJS frontend developer',
    longDescription: [
      'Prefearly 4-5 years of experience are what we believe you have in your baggage.',
      'Expert/Ninja in Javascript, frameworks, API integration and related stuff.',
      'Master of CSS with design, styling and general cleverness applied.',
      'Experience with mobile hybrid frameworks (We use React Native).',
      'Experienced in API Design, LCM & implementations (like REST API, OpenAPI specs).',
      'Experienced with CD/CI.',
      'Worked in fast paced environments with Lean Startup, Agile and similar methodologies.',
      'Eager to learn, show off and teach others about new findings, technologies and methods.',
      'Very good skills in english, spoken and written. Communication is everything! We do dailys.',
      'You are fluent in English (and preferably also in Swedish).'
    ]
  },
  {
    jobTitle: 'Mobile developer',
    type: 'Full-time',
    location: 'Mostar/Remote',
    startingDate: 'As soon as possible, the position will remain open until it is filled',
    shortDescription: 'React Native mobile developer',
    longDescription: [
      'Prefearly 2+ years of experience are what we believe you have in your baggage.',
      'Expert/Ninja in React Native.',
      'Master of CSS with design, styling and general cleverness applied.',
      'Experienced in API Design, LCM & implementations (like REST API, OpenAPI specs).',
      'Experienced with CD/CI.',
      'Native side knowledge is a plus (Kotlin/Swift)',
      'Worked in fast paced environments with Lean Startup, Agile and similar methodologies.',
      'Eager to learn, show off and teach others about new findings, technologies and methods.',
      'Very good skills in english, spoken and written. Communication is everything! We do dailys.',
    ]
  }
]

export default function CareerCard() {
  return (
    <Box overflowX={'hidden'}>
      {CareerCards.map((card, index) => (
        <IsolatedModal key={index} cards={card}></IsolatedModal>
      ))}
    </Box>
  )
}