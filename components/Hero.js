"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSET_BASE } from "@/lib/assets";
import "./Hero.css";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [videoOpen]);

  return (
    <>
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-content'>
          <p className='hero-eyebrow'>Best Destinations around the world</p>

          <h1 className='hero-title'>
            <span>Travel, enjoy</span>
            <span>and live a new</span>
            <span>and full life</span>
          </h1>

          <p className='hero-description'>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className='hero-actions'>
            <a href='#destination' className='hero-cta'>
              Find out more
            </a>

            <button type='button' className='hero-demo' onClick={() => setVideoOpen(true)}>
              <span className='hero-play'>
                <Image
                  src={`${ASSET_BASE}/img/hero/play.svg`}
                  alt=''
                  width={14}
                  height={14}
                />
              </span>
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        <div className='hero-visual'>
          <Image
            src={`${ASSET_BASE}/img/hero/hero-img.png`}
            alt='Traveler exploring the world'
            width={650}
            height={620}
            className='hero-image'
            priority
          />
        </div>
      </div>
    </section>
    {videoOpen && (
      <div className='video-modal' role='dialog' aria-modal='true' aria-label='Jadoo travel video' onClick={() => setVideoOpen(false)}>
        <div className='video-modal-content' onClick={(event) => event.stopPropagation()}>
          <button type='button' className='video-modal-close' onClick={() => setVideoOpen(false)} aria-label='Close video'>×</button>
          <iframe
            src='https://www.youtube.com/embed/_lhdhL4UDIo?autoplay=1'
            title='Jadoo travel video'
            allow='autoplay; encrypted-media; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    )}
    </>
  );
}
