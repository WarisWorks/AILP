'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Zap, Share2, Cog } from 'lucide-react';

const colors = {
  primary: '#E63946',
  secondary: '#F1FAEE',
  accent1: '#A8DADC',
  accent2: '#457B9D',
  background: '#1D3557',
  feature: '#2A9D8F',
  ai: '#E9C46A',
  newTech: '#F4A261',
  qa: '#264653',
};

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md">
      <ul className="flex justify-around p-4">
        {['Home', 'Feature', 'AI', 'New Tech', 'QA'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white hover:text-accent1 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AITool: React.FC<{ name: string; description: string; image: string; color: string }> = ({ name, description, image, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="perspective-1000 w-64 h-96 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full absolute"
        animate={{
          background: isHovered 
            ? `linear-gradient(90deg, ${color}, transparent, ${color}, transparent, ${color})`
            : `linear-gradient(90deg, transparent, transparent)`,
          backgroundSize: "300% 100%",
          backgroundPosition: isHovered ? "100% 0%" : "0% 0%"
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="w-full h-full relative transition-all duration-500 transform-style-3d rounded-xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: `0 0 20px ${color}`,
        }}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm" />
          </div>
          <div className="relative z-10 p-4 flex flex-col items-center justify-start h-full">
            <h2 className="text-3xl font-bold text-white mb-6 mt-4">{name}</h2>
            <h2 className="text-2xl text-white text-center">{description}</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TechCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
  return (
    <Tilt
      className="w-full max-w-sm"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="8px"
    >
      <motion.div 
        className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center mb-4">
          <div className="text-4xl text-white bg-gray-800 p-3 rounded-full">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <h2 className="text-gray-400">{description}</h2>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10"></div>
      </motion.div>
    </Tilt>
  );
};

const LightingEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)`,
      }}
    />
  );
};

const UyghurKeyboard: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const sampleText = 'سۈنئىي ئەقىل ياردەمچىسى';

  const keys = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'چ', 'ۋ', 'ې', 'ر', 'ت', 'ي', 'ۇ', 'ئ', 'و', 'پ', '[', ']', '\\'],
    ['Caps', 'ھ', 'س', 'د', 'ا', 'ف', 'گ', 'ق', 'ك', 'ل', '؛', "'", 'Enter'],
    ['Shift', 'ز', 'ش', 'غ', 'ۆ', 'ب', 'ن', 'م', '،', '.', '/', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Fn', 'Ctrl']
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentKeyIndex < sampleText.length) {
        setTypedText(prev => prev + sampleText[currentKeyIndex]);
        setCurrentKeyIndex(prev => prev + 1);
      } else {
        setCurrentKeyIndex(0);
        setTypedText('');
      }
    }, 300);

    return () => clearInterval(typingInterval);
  }, [currentKeyIndex, sampleText]);

  return (
    <div className="mb-8 scale-150 transform origin-top">
      <div className="bg-gray-800 p-4 rounded-lg mb-4 text-right" dir="rtl">
        <p className="text-2xl text-white font-bold">{typedText}</p>
      </div>
      <div className="grid gap-1">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((key, keyIndex) => (
              <motion.button
                key={keyIndex}
                className={`
                  bg-gray-700 text-white p-2 rounded
                  ${sampleText.includes(key) ? 'glow' : ''}
                  ${['Backspace', 'Tab', 'Caps', 'Shift', 'Ctrl', 'Win', 'Alt', 'Fn'].includes(key) ? 'text-xs' : 'text-sm'}
                `}
                style={{
                  flexGrow: key === 'Space' ? 4 : 1,
                  flexBasis: ['Backspace', 'Tab', 'Caps', 'Shift', 'Enter'].includes(key) ? '80px' : 'auto',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {key === 'Space' ? 'بوشلۇق' : key}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TypedEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return <h2 className="text-4xl font-bold mb-8 text-white">{displayedText}</h2>;
};

const WallpaperPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
      const material = new THREE.MeshBasicMaterial({ 
        color: colors.accent1,
        wireframe: true,
      });
      
      const torusKnot = new THREE.Mesh(geometry, material);
      scene.add(torusKnot);

      camera.position.z = 30;

      const animate = () => {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div className="wallpaper-page font-noto-kufi relative">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" style={{ zIndex: -1 }} />
      <div className="relative z-10">
        <NavBar />

        <motion.section
          id="home"
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">سۈنئىي ئەقىل ياردەمچىسى</h1>
            <p className="text-2xl">كەلگۈسىنىڭ تېخنولوگىيىسى بىلەن تونۇشۇڭ</p>
          </div>
        </motion.section>

        <motion.section
          id="feature"
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: `${colors.feature}CC` }}
        >
          <div className="text-white">
            <TypedEffect text="" />
            <UyghurKeyboard />
          </div>
        </motion.section>

        <motion.section
  id="ai"
  className="min-h-screen flex flex-col items-center justify-center py-16"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  style={{
    background: `linear-gradient(135deg, ${colors.ai}CC, ${colors.accent1}CC)`,
  }}
>
  <h2 className="text-4xl font-bold mb-12 text-white">سۈنئىي ئەقىل قوراللىرى</h2>
  <div className="flex flex-wrap justify-center gap-12">
    <AITool
      name="ClaudeAI"
      description=" توسىدىن ياسالغان ئىلغار تىل مودېلى، كۆپ خىل ۋەزىپىلەرنى ئورۇندىيالايدۇ."
      image="/assets/img/ClaudeAI.png"
      color="#7209B7"
    />
    <AITool
      name="ChatGPT"
      description=" نىڭ مەشھۇر چاتبوتى، كۈچلۈك تىل چۈشىنىش ۋە ھاسىل قىلىش ئىقتىدارىغا ئىگە."
      image="/assets/img/ChatGPT.png"
      color="#4361EE"
    />
    <AITool
      name="Midjourney"
      description="تېكىست ئاساسىدا سۈرەت ھاسىل قىلىدىغان AI قورالى، يۇقىرى سۈپەتلىك بەدىئىي ئەسەرلەر يارىتالايدۇ."
      image="/assets/img/Midjourney.png"
      color="#4CC9F0"
    />
  </div>
</motion.section>

<motion.section
          id="new-tech"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LightingEffect />
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-white text-center">يېڭى تېخنولوگىيە</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TechCard
                title="تېكىستتىن سۈرەتكە"
                description="تېكىست تەسۋىرلىرىنى يۇقىرى سۈپەتلىك سۈرەتلەرگە ئايلاندۇرۇڭ."
                icon={<Zap className="text-blue-400" />}
              />
              <TechCard
                title="سۈرەتتىن سىنغا"
                description="ستاتىك سۈرەتلەرنى جانلىق سىنلارغا ئايلاندۇرۇڭ."
                icon={<Share2 className="text-orange-400" />}
              />
              <TechCard
                title="بۇيرۇقتىن كودقا"
                description="تەبىئىي تىلدىكى بۇيرۇقلارنى ئىجرا قىلغىلى بولىدىغان كودقا ئايلاندۇرۇڭ."
                icon={<Cog className="text-yellow-400" />}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="qa"
          className="min-h-screen flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: `${colors.qa}CC` }}
        >
          <h2 className="text-4xl font-bold mb-8 text-white text-right">كۆپ سورالغان سوئاللار</h2>
          <div className="space-y-6 max-w-2xl w-full">
            {[
              {
                question: "بۇ سۈنئىي ئەقىل ياردەمچىسى قانداق ئىشلەيدۇ؟",
                answer: "بىزنىڭ سۈنئىي ئەقىل ياردەمچىمىز ئىلغار ماشىنا ئۆگىنىش ئالگورىتىملىرى ئارقىلىق سىزنىڭ سوئاللىرىڭىزغا جاۋاب بېرىدۇ."
              },
              {
                question: "بۇ قورال بىخەتەرمۇ؟",
                answer: "ھەئە، بىز ئىشلەتكۈچىلەرنىڭ شەخسىي ئۇچۇرلىرىنى قوغداش ئۈچۈن ئەڭ يۇقىرى دەرىجىلىك بىخەتەرلىك تەدبىرلىرىنى قوللىنىمىز."
              },
              {
                question: "بۇ قورالنى قانداق ئىشلىتىمەن؟",
                answer: "سىز پەقەت سوئالىڭىزنى كىرگۈزسىڭىزلا بولىدۇ، سۈنئىي ئەقىل ياردەمچىمىز سىزگە ئەڭ مۇۋاپىق جاۋابنى تېپىپ بېرىدۇ."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 p-6 rounded-lg overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-white text-right">{item.question}</h3>
                <p className="text-white text-right">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <footer className="bg-gray-900 text-white py-4 text-center">
          <p>&copy; 2024 Waris Ruzi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default WallpaperPage;