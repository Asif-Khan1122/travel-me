"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import styles from "@/app/account/page.module.css";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setLoading(true);
    setError("");
    const supabase = createClient();

    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      setError("Unable to log out right now. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div>
      <button
        className={styles.logout}
        onClick={handleLogout}
        disabled={loading}
      >
        {loading ? "Logging out..." : "Log out"}
      </button>
      {error && <p className={styles.logoutError} role='alert'>{error}</p>}
    </div>
  );
}
