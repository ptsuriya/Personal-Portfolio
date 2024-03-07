'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Loading.css';
import Image from 'next/image'

interface LoadingProps { }

const Loading: React.FC<LoadingProps> = () => {
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

          console.log("hello");
        }
      }

      else{
        setShowText(false);
        console.log(showText);
        console.log('หยุด');
      }
    };

    const interval = setInterval(pollDOM, 1000);
    return () => clearInterval(interval);
  }, [showText]);

  return (
    <div>
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
          <Image className='pic-inbox'
              src="/image/loader/firework.png"
              width={300}
              height={300}
              alt="Picture of the author" /> }
          {showBox ? <div></div> :           
          <Image className='pic-inbox'
              src="/image/loader/inbox.png"
              width={200}
              height={200}
              alt="Picture of the author" /> }


        </div>
      }
    </div>
  );
};

export default Loading;
