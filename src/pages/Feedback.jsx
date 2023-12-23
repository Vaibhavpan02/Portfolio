// // const Feedback = () => {
// //   return <div>Feedback</div>;
// // };
// // export default Feedback;
// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';



// const Feedback = () => {
//   return (
//     <div className='container-max min-h-screen'>
//       <h1 className='text-2xl my-4 font-bold'>Contact</h1>
//       <div>
//         <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
//         <p className='text-lg'>{details.bio}</p>

//         <div className='my-4 space-y-2'>
//           <h3 className='text-lg font-semibold'>Connect with me</h3>
//           <p className='flex flex-wrap items-center gap-2'>
//             <span className='font-semibold'>Gmail: </span>
//             <a href={details.contact.email} className='flex items-center gap-1'>
//               {details.contact.email}
//               <ArrowTopRightOnSquareIcon className='w-4 h-4' />
//             </a>
//           </p>
//           <p className='flex flex-wrap items-center gap-2'>
//             <span className='font-semibold'>Github: </span>{' '}
//             <a
//               href={details.contact.github}
//               className='flex items-center gap-1'
//             >
//               {details.contact.github}
//               <ArrowTopRightOnSquareIcon className='w-4 h-4' />
//             </a>
//           </p>
//           <p className='flex flex-wrap items-center gap-2'>
//             <span className='font-semibold'>Linkedin: </span>{' '}
//             <a
//               href={details.contact.linkedin}
//               className='flex items-center gap-1'
//             >
//               {details.contact.linkedin}
//               <ArrowTopRightOnSquareIcon className='w-4 h-4' />
//             </a>
//           </p>
//           <p className='flex flex-wrap items-center gap-2'>
//             <span className='font-semibold'>Twitter: </span>{' '}
//             <a
//               href={details.contact.twitter}
//               className='flex items-center gap-1'
//             >
//               {details.contact.twitter}
//               <ArrowTopRightOnSquareIcon className='w-4 h-4' />
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
import React from 'react';
import styled from 'styled-components';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Container = styled.div`
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bold;
`;

const MainContent = styled.div`
  margin-top: 2rem;
`;

const Intro = styled.div`
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1.5rem;
`;

const ConnectSection = styled.div`
  margin-top: 1rem;
`;

const ConnectHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const details = {
  name: 'Vaibhav Pandey',
  bio: 'Frontend Developer',
  contact: {
    email: 'vaibhavpan02@gmail.com',
 
    github: 'https://github.com/Vaibhavpan02',
    linkedin: 'https://www.linkedin.com/in/vaibhpan',
    twitter: 'https://twitter.com/VaibhavPan54034',
  },
};

const Feedback = () => {
  return (
    <Container>
      <Heading>Contact</Heading>
      <MainContent>
        <Intro>
          <h2 className='text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
          <Bio className='text-lg'>{details.bio}</Bio>
        </Intro>
        <ConnectSection>
          <ConnectHeading>Connect with me</ConnectHeading>
          <ContactItem>
            <span className='font-semibold'>Gmail: </span>
            <a href={`mailto:${details.contact.email}`}>
              {details.contact.email}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </ContactItem>
          <ContactItem>
            <span className='font-semibold'>Github: </span>
            <a href={details.contact.github}>
              {details.contact.github}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </ContactItem>
          <ContactItem>
            <span className='font-semibold'>Linkedin: </span>
            <a href={details.contact.linkedin}>
              {details.contact.linkedin}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </ContactItem>
          <ContactItem>
            <span className='font-semibold'>Twitter: </span>
            <a href={details.contact.twitter}>
              {details.contact.twitter}
              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            </a>
          </ContactItem>
        </ConnectSection>
      </MainContent>
    </Container>
  );
};

export default Feedback;
