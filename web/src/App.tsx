import React, { useState, useCallback } from "react";
import { Shell } from "./components/Shell";

const JOKES = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why can’t you hear a pterodactyl using the restroom? Because the ‘P’ is silent.",
  "What do you call a factory that makes good products? A satisfactory!"
];

function getRandomJoke(exclude?: string): string {
  const filtered = exclude ? JOKES.filter(j => j !== exclude) : JOKES;
  const idx = Math.floor(Math.random() * filtered.length);
  return filtered[idx];
}

const App: React.FC = () => {
  const [joke, setJoke] = useState<string>(getRandomJoke());
  const handleNewJoke = useCallback(() => {
    setJoke(prev => getRandomJoke(prev));
  }, []);

  return (
    <Shell nav={[{ label: "Joke", icon: "😂", to: "/" }]}> 
      <main className="flex flex-col items-center justify-center h-full px-4 pt-16 md:pt-32">
        <h1 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-8 font-semibold text-center">Joke Generator</h1>
        <div className="bg-[var(--panel)] rounded-2xl p-6 shadow max-w-xl w-full text-center mb-8 border border-[var(--line)]">
          <p className="text-lg md:text-2xl font-medium text-[var(--ink)] transition-all min-h-[4rem] flex items-center justify-center">{joke}</p>
        </div>
        <button
          className="bg-[var(--accent)] text-white font-semibold px-8 py-3 rounded-xl text-lg shadow hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition"
          style={{ borderRadius: '0.75rem' }}
          aria-label="Get a new joke"
          onClick={handleNewJoke}
        >
          Get a Joke
        </button>
      </main>
    </Shell>
  );
};

export default App;
