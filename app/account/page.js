import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import styles from "./page.module.css";

export default async function AccountPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName =
    user.user_metadata?.name || user.email?.split("@")[0] || "traveler";

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>Jadoo</Link>
        <Link href='/' className={styles.back}>Back to homepage</Link>
      </header>

      <section className={styles.content}>
        <p className={styles.eyebrow}>Your travel space</p>
        <h1 className={styles.title}>Welcome, {displayName}</h1>
        <p className={styles.subtitle}>
          Manage your account and keep your next adventure close.
        </p>

        <div className={styles.card}>
          <p className={styles.label}>Signed in as</p>
          <p className={styles.email}>{user.email}</p>
          <LogoutButton />
        </div>
      </section>
    </main>
  );
}
