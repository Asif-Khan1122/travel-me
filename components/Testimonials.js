"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSET_BASE } from "@/lib/assets";
import "./Testimonials.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    avatar: "author.png",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike taylor",
    role: "Lahore, Pakistan",
  },
  {
    avatar: "author2.png",
    quote:
      "Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable.",
    name: "Thomas Wagon",
    role: "CEO of Red Button",
  },
  {
    avatar: "author3.png",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Kelly Willium",
    role: "Khulna, Bangladesh",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[active];

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (paused) return undefined;

    const interval = window.setInterval(next, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      id='testimonial'
      className='testimonial-section section-space'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className='container-custom testimonial-layout'>
        <div className='testimonial-intro'>
          <p className='testimonial-eyebrow text-primary font-semibold text-sm tracking-wide mb-2'>Testimonials</p>
          <h2 className='testimonial-heading text-3xl md:text-4xl font-bold'>What people say about Us.</h2>
        </div>
        <div className='testimonial-slider'>
        <div
          className='testimonial-card'
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
        >
          <Image
            src={`${ASSET_BASE}/img/testimonial/${t.avatar}`}
            alt={t.name}
            width={64}
            height={64}
            className='testimonial-avatar rounded-full mx-auto mb-6'
          />
          <p
            className='testimonial-quote text-lg text-dark mb-6'
            aria-live='polite'
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <h3 className='testimonial-name font-semibold'>{t.name}</h3>
          <p className='testimonial-role text-muted text-sm'>{t.role}</p>

          <div className='testimonial-controls flex items-center justify-center gap-4 mt-8'>
            <button
              onClick={prev}
              aria-label='Previous testimonial'
              className='testimonial-arrow w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
            >
              <FiChevronLeft aria-hidden='true' id='arrows' />
            </button>
            <div className='testimonial-dots' aria-label='Choose testimonial'>
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type='button'
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-current={index === active ? "true" : undefined}
                  className={`testimonial-dot ${index === active ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label='Next testimonial'
              className='testimonial-arrow w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
            >
              <FiChevronRight id='arrows' />
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
