"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import styles from "./page.module.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setError("");
    setMessage("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            name: name.trim(),
          },
        },
      });

      if (error) {
        setError(error.message);
        return;
      }

      setMessage("Account created. Please check your email to confirm your account.");
      setPassword("");
      setConfirmPassword("");
    } catch {
      setError("Unable to create your account right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Link href='/' className={styles.logo}>Jadoo</Link>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Start your journey</p>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.subtitle}>
            Join Jadoo and keep your travel plans in one place.
          </p>
        </div>

        <form onSubmit={handleSignup} className={styles.form}>
          <label className={styles.field}>
            Full name
            <input className={styles.input} type='text' autoComplete='name'
              placeholder='Your name' value={name}
              onChange={(e) => setName(e.target.value)} required />
          </label>
          <label className={styles.field}>
            Email address
            <input className={styles.input} type='email' autoComplete='email'
              placeholder='you@example.com' value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className={styles.field}>
            Password
            <input className={styles.input} type='password' autoComplete='new-password'
              placeholder='At least 6 characters' value={password}
              onChange={(e) => setPassword(e.target.value)} minLength={6} required />
          </label>
          <label className={styles.field}>
            Confirm password
            <input className={styles.input} type='password' autoComplete='new-password'
              placeholder='Repeat your password' value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} minLength={6} required />
          </label>

          {error && <p className={styles.error} role='alert'>{error}</p>}
          {message && <p className={styles.success} role='status'>{message}</p>}

          <button className={styles.button} type='submit' disabled={loading}>
            {loading ? "Creating your account..." : "Create account"}
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{" "}
          <Link href='/login' className={styles.link}>Log in</Link>
        </p>
      </div>
    </main>
  );
}
