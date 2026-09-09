"use client";

import Image from "next/image";
import { useState } from "react";
import { ASSET_BASE } from "@/lib/assets";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="container-custom newsletter-section">
      <div className="newsletter-card relative overflow-hidden px-8 py-14 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold max-w-xl mx-auto mb-8">
          Subscribe to get information, latest news and other interesting
          offers about Cobham
        </h2>

        <form
          onSubmit={handleSubmit}
          className="newsletter-form flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-5 py-3">
            <Image
              src={`${ASSET_BASE}/img/cta/mail.svg`}
              alt=""
              width={18}
              height={18}
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 outline-none text-dark text-sm"
            />
          </div>
          <button
            type="submit"
            className="newsletter-button bg-danger text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-sm text-white/90">
            Thanks — you&apos;re subscribed!
          </p>
        )}
      </div>
    </section>
  );
}
