"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSET_BASE } from "@/lib/assets";
import "./Navbar.css";

const links = [
  { label: "Service", href: "#service" },
  { label: "Destination", href: "#destination" },
  { label: "Booking", href: "#booking" },
  { label: "Testimonial", href: "#testimonial" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className='navbar-container'>
        <a href='#' className='navbar-logo'>
          <Image
            src={`${ASSET_BASE}/img/logo.svg`}
            alt='Jadoo logo'
            width={110}
            height={32}
            priority
          />
        </a>

        <ul className='navbar-links'>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className='navbar-actions'>
          <a href='/login'>Login</a>

          <a href='/signup' className='signup-btn'>
            Sign Up
          </a>
        </div>

        <button
          className='mobile-menu-btn'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className='mobile-menu'>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}

          <a href='/login'>Login</a>

          <a href='/signup' className='mobile-signup'>
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
}
