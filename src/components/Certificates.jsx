import React from 'react';
import { useTheme } from './ThemeContext.jsx';
import Card from './ui/CardSwap.jsx';
import TypewriterText from './ui/TyperwriterText.jsx';

const certificates = [
  {
    card_title: 'Leadership Certificate',
    certificate: '/Leadership.png'
  },
  {
    card_title: 'C MOOC Certificate',
    certificate: '/Mooc_C.png'
  },
  {
    card_title: 'React Certificate',
    certificate: '/reactCertificate.png'
  },
];

const transformStyles = [
  'rotate(5deg) translate(-70px)',
  'rotate(-5deg) translate(70px)'
];

const Certificates = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Certifications Heading */}
      <div className="absolute top-20 left-0 right-0 text-center z-10">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white"
          style={{ fontFamily: 'Raleway, cursive' }}
        >
          <TypewriterText
            words={['Certifications']}
            typeSpeed={120}
            deleteSpeed={80}
            pauseDuration={2000}
          />
        </h2>
      </div>

      {/* Certificate Cards */}
      <Card
        className="custom-bounceCards"
        images={certificates.map(({ certificate }) => certificate)}
        containerWidth={300}
        containerHeight={300}
        animationDelay={0.2}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={true}
      />
    </section>
  );
};

export default Certificates;