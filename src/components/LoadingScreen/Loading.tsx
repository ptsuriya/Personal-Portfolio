'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Loading.css';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface LoadingProps { }

const Loading: React.FC<LoadingProps> = () => {
  const router = useRouter();
  const [showText, setShowText] = useState(true);
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    let i = 0;
    const pollDOM = () => {
      if (i < 1) {
        console.log(i);
        i++;
        if (i >= 0) {
          setShowBox(false);
          
        }
      }
      else{
        setShowText(false);
        console.log(showText);
        console.log('หยุด');
        router.push('/extention_file');
      }
    };

    const interval = setInterval(pollDOM, 1000);
    return () => clearInterval(interval);
  }, [showText]);

  return (
    <section className='overflow-hidden'>
      {showText &&
        <div className="preload">

          {showBox ? 
          <Image className='pic-box'
            src="/image/loader/Box.png"
            width={300}
            height={300}
            alt="Picture of the author" /> : 
            <Image className='pic-unbox'
              src="/image/loader/unbox.png"
              width={300}
              height={300}
              alt="Picture of the author" />}
          {showBox ? <div></div> :           
          <Image className='pic-firework'
              src="/image/loader/firework.png"
              width={325}
              height={325}
              alt="Picture of the author" /> }
          {showBox ? <div></div> :           
          <Image className='pic-inbox'
              src="/image/loader/inbox.png"
              width={275}
              height={275}
              alt="Picture of the author" /> }


        </div>
      }
    </section>
  );
};

export default Loading;
