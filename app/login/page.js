"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.push("/account");
      router.refresh();
    } catch {
      setError("Unable to log in right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Link href='/' className={styles.logo}>
          Jadoo
        </Link>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Welcome back</p>
          <h1 className={styles.title}>Log in to your account</h1>
          <p className={styles.subtitle}>
            Continue planning unforgettable journeys with Jadoo.
          </p>
        </div>

        <form onSubmit={handleLogin} className={styles.form}>
          <label className={styles.field}>
            Email address
            <input
              className={styles.input}
              type='email'
              autoComplete='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className={styles.field}>
            Password
            <input
              className={styles.input}
              type='password'
              autoComplete='current-password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && (
            <p className={styles.error} role='alert'>
              {error}
            </p>
          )}

          <button className={styles.button} type='submit' disabled={loading}>
            {loading ? "Signing you in..." : "Log in"}
          </button>
        </form>

        <p className={styles.footer}>
          Don't have an account?{" "}
          <Link href='/signup' className={styles.link}>Create one</Link>
        </p>
      </div>
    </main>
  );
}
