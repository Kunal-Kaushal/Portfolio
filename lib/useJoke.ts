import { useCallback, useState } from "react";

export interface Joke {
  setup: string;
  punchline: string;
}

const JOKE_URL =
  "https://official-joke-api.appspot.com/jokes/programming/random";

/** Fetches a random programming joke. Each call site gets its own state. */
export function useJoke() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(JOKE_URL);
      const data = await res.json();
      const j = Array.isArray(data) ? data[0] : data;
      setJoke({ setup: j.setup, punchline: j.punchline });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { joke, loading, error, fetchJoke };
}
