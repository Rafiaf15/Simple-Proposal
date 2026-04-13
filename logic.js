"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);

  const moveNoButton = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setNoCount((prev) => prev + 1);

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 150,
      vy: (Math.random() - 0.5) * 150,
      life: 100,
      size: Math.random() * 8 + 3,
      color: ["emerald", "cyan", "amber", "rose", "violet"][
        Math.floor(Math.random() * 5)
      ],
    }));
    setParticles((prev) => [...prev, ...newParticles]);

    const maxX = 100;
    const maxY = 50;
    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * maxY * 2;

    setNoPosition({ x, y });
    setTimeout(() => setIsAnimating(false), 200);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.02,
            y: p.y + p.vy * 0.02,
            life: p.life - 1,
            vx: p.vx * 0.97,
            vy: p.vy * 0.97,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    const confetti = Array.from({ length: 40 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 + 20,
      y: -10,
      vx: (Math.random() - 0.5) * 120,
      vy: Math.random() * 80 + 40,
      life: 120,
      size: Math.random() * 6 + 3,
      color: ["emerald", "cyan", "lime", "rose", "indigo", "pink"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setParticles((prev) => [...prev, ...confetti]);

    setTimeout(() => router.push("/thank-you"), 1500);
  };

  const particleClass = (color) => {
    if (color === "emerald") return "particle-emerald";
    if (color === "cyan") return "particle-cyan";
    if (color === "amber") return "particle-amber";
    if (color === "rose") return "particle-rose";
    if (color === "violet") return "particle-violet";
    if (color === "lime") return "particle-lime";
    if (color === "indigo") return "particle-indigo";
    if (color === "pink") return "particle-pink";
    return "particle-default";
  };

  return (
    <main className="proposal-page">
      <div className="proposal-bg-overlay" />
      <div className="proposal-bg-glow">
        <div className="glow-left" />
        <div className="glow-right" />
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particleClass(particle.color)}`}
          style={{
            left: `calc(50% + ${particle.x}px)`,
            top: `calc(50% + ${particle.y}px)`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.life / 120,
            transform: `translate(-50%, -50%) scale(${particle.life / 120})`,
          }}
        />
      ))}

      <section className="proposal-card">
        <div className="bubble bubble-top-right" />
        <div className="bubble bubble-bottom-left" />

        <div className="proposal-header">
          <p className="proposal-eyebrow">My Finesh Girlfriend✨</p>
          <h1 className="proposal-title">NINA / LILY KOPLING</h1>
          <p className="proposal-subtitle">
            sebenernya bikin ini udah lama, cuman saat itu aku masih ragu dan malu untuk bilang.
          </p>
        </div>

        <div className="confession-box">
          <p className="question-text">Will u be my girlfriend?</p>
        </div>

        <div className="button-row">
          <button onClick={handleYesClick} className="btn btn-yes">
            Yes 💚
          </button>

          <button
            onClick={moveNoButton}
            disabled={isAnimating}
            className="btn btn-no"
            style={{
              transform: `translate3d(${noPosition.x}px, ${noPosition.y}px, 0)`,
            }}
          >
            Belum 😏
          </button>
        </div>

        {noCount > 8 && noCount < 10 && (
          <p className="teaser-text">Eitssss ga kenaaa 😋</p>
        )}
        {noCount >= 10 && noCount < 12 && (
            <p className= "teaser-text">masa pilih gamauu 😢</p>
        )}
      </section>
    </main>
  );
}