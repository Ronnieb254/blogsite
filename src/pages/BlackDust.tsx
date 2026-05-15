import { useState } from "react";

const episodes = [
  {
    n: "01",
    t: "Black Dust",
    hook: "Every empire starts with someone willing to get dirty.",
    synopsis:
      "We meet Zara Otieno collecting debts in Mathare for Mama Sula's syndicate. A routine shakedown goes wrong when the debtor turns out to be a Mombasa cartel scout. Zara eliminates the threat — and inadvertently announces that Nairobi has a problem.",
    cliff:
      "A parcel arrives at Mama Sula's compound. Inside: the scout's ID card — and a message. 'We're already here.'"
  },
  {
    n: "02",
    t: "Mathare Rules",
    hook: "Where you grow up is either your shield or your grave.",
    synopsis:
      "Zara Otieno is tasked with locating the cartel’s entry point into Nairobi. Meanwhile, Kofi Mensah appears undercover as a Ghanaian import broker. Zara immediately senses he is an outsider — but not yet a cop.",
    cliff:
      "Zara invites Kofi to a back-room meeting. If he's cartel, she'll know by morning. If he's law, she'll know by dawn."
  },
  {
    n: "03",
    t: "The Broker",
    hook: "Everyone in Nairobi is selling something.",
    synopsis:
      "Kofi walks the line between his cover and his conscience as Zara tests him with a small run — moving counterfeit duty stamps through Westlands. He passes the test, but trust is not granted. Their first real conversation happens in a Parklands diner over bad coffee at 2 a.m.",
    cliff:
      "DCI command orders acceleration of the operation. Kofi requests more time — and is denied."
  },
  {
    n: "04",
    t: "Mama's Table",
    hook: "You don't get invited to her table. You get summoned.",
    synopsis:
      "Zara brings Kofi to meet Mama Sula in a tense dinner where every word is a test. Mama Sula unexpectedly approves of him, unsettling Zara. Meanwhile, Damu Kairo arrives in Nairobi and disrupts the balance of power in a single day.",
    cliff:
      "Damu leaves a note on Zara’s windshield: 'I know who the broker really is. Lunch?'"
  },
  {
    n: "05",
    t: "Kairo",
    hook: "The scariest men are the ones who don't need to prove it.",
    synopsis:
      "An insight into Damu Kairo’s past, discipline, and purpose. He meets Zara privately and offers a partnership. She refuses. Meanwhile, Shida discovers a hidden financial ledger tied to government officials.",
    cliff:
      "Shida calls Zara: there is a second ledger — and it implicates someone in power."
  },
  {
    n: "06",
    t: "The Second Ledger",
    hook: "The truth is always in the numbers.",
    synopsis:
      "Zara and Shida uncover that Mama Sula has been quietly selling Westlands territory to a Treasury official. It is not an invasion — it is a planned transfer of power. Mama Sula is preparing to retire.",
    cliff:
      "Zara confronts Mama Sula. Mama Sula slaps her and says: 'You think I built this for you?'"
  },
  {
    n: "07",
    t: "Loyalty Tax",
    hook: "Betrayal isn't a moment. It's a direction you've been walking for years.",
    synopsis:
      "Zara confides in Kofi, revealing more than she should. Kofi disables his wire, choosing silence over protocol. His handler detects the breach and escalates the case.",
    cliff:
      "A second DCI operative is deployed to Nairobi. Kofi is unaware. Zara is unaware. Damu is not."
  },
  {
    n: "08",
    t: "The Second Operative",
    hook: "When your own people are watching you, who do you trust?",
    synopsis:
      "Agent Pendo begins independently mapping Zara’s network, tightening the net around Kofi’s identity. Damu unexpectedly joins a meeting with Mama Sula, forcing a power shift in real time.",
    cliff:
      "Mama Sula looks at Damu and says: 'I've been expecting you.'"
  },
  {
    n: "09",
    t: "The Arrangement",
    hook: "Peace between criminals is just war with better manners.",
    synopsis:
      "A long-hidden agreement between Mama Sula, Damu, and a Treasury official is revealed: a controlled redistribution of Nairobi’s underground economy. Zara realizes she was never part of the plan — only leverage.",
    cliff:
      "Kofi’s cover is exposed after an internal DCI report flags his compromised status. He becomes a target overnight."
  },
  {
    n: "10",
    t: "Running Hot",
    hook: "When everyone is hunting you, the city gets very small.",
    synopsis:
      "Kofi goes on the run. Zara races across Nairobi to reach him first. Damu observes both sides without intervening. Shida destroys the second ledger under pressure from Mama Sula’s enforcers.",
    cliff:
      "Kofi finally tells Zara everything — and she asks: 'How much of it was real?' He answers: 'All of it.'"
  },
  {
    n: "11",
    t: "Black Market Sunrise",
    hook: "Sometimes justice and crime want the same thing. Just for different reasons.",
    synopsis:
      "A coordinated operation targets the Treasury official behind the entire scheme. The mission succeeds, but collateral damage follows. Shida is critically injured in the crossfire, and Mama Sula disappears before dawn.",
    cliff:
      "The official is arrested. Shida survives — barely. Mama Sula is gone."
  },
  {
    n: "12",
    t: "Dust Settles",
    hook: "The city keeps moving. It always does.",
    synopsis:
      "After the fallout, Kofi is recalled to Accra. Zara walks through a fractured Nairobi as the syndicate collapses into smaller factions. Damu sends a final message with an address in Mombasa.",
    cliff:
      "Zara boards a bus to Mombasa. The screen fades to black: 'SEASON 2 — MOMBASA.'"
  }
];

export default function BlackDustSeriesPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="page">

        {/* FLOATING DUST BACKGROUND */}
        <div className="dust"></div>

        {/* HERO */}
        <div className="hero">
          <h1 className="title">BLACK DUST</h1>
          <p className="tagline">
            Crime • Drama • Thriller set in the underground of Nairobi
          </p>
        </div>

        {/* EPISODE GRID */}
        <div className="grid">
          {episodes.map((ep, i) => (
            <div
              key={i}
              className="ep-card"
              onClick={() => setSelected(i)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="ep-number">EP {ep.n}</div>
              <div className="ep-title">{ep.t}</div>
              <div className="ep-hook">{ep.hook}</div>
            </div>
          ))}
        </div>

        {/* FULL SCREEN EPISODE VIEW (NETFLIX STYLE TRANSITION) */}
        {selected !== null && (
          <div className="viewer" onClick={() => setSelected(null)}>
            <div
              className="viewer-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close" onClick={() => setSelected(null)}>
                ✕
              </button>

              <div className="viewer-header">
                <div className="ep-tag">EP {episodes[selected].n}</div>
                <h2>{episodes[selected].t}</h2>
                <p className="hook">"{episodes[selected].hook}"</p>
              </div>

              <div className="viewer-body">
                <p>{episodes[selected].synopsis}</p>

                <div className="cliff">
                  <strong>Cliffhanger:</strong> {episodes[selected].cliff}
                </div>
              </div>

              <div className="next-bar">
                {selected < episodes.length - 1 && (
                  <button onClick={() => setSelected(selected + 1)}>
                    Next Episode →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 30%, rgba(200,169,110,0.08), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05), transparent 45%),
            linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.95)),
            url('https://images.unsplash.com/photo-1532372816041-35d5f8a5a7d6?auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 3rem;
          color: #F0EBE0;
          font-family: 'IBM Plex Mono', monospace;
          overflow-x: hidden;
          position: relative;
        }

        /* 🌫️ ANIMATED DUST LAYER */
        .dust {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          animation: drift 12s linear infinite;
        }

        @keyframes drift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-200px); }
        }

        .hero {
          text-align: center;
          margin-bottom: 3rem;
        }

        .title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5rem;
          letter-spacing: 4px;
          text-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }

        .tagline {
          color: rgba(255,255,255,0.6);
          margin-top: 1rem;
        }

        /* EPISODE GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .ep-card {
          background: rgba(17,17,16,0.85);
          padding: 1.5rem;
          border: 1px solid rgba(200,169,110,0.15);
          cursor: pointer;
          transition: 0.4s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ep-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(200,169,110,0.6);
        }

        .ep-number {
          font-size: 0.7rem;
          color: #C8A96E;
          margin-bottom: 0.5rem;
        }

        .ep-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .ep-hook {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
        }

        /* 🎬 FULLSCREEN VIEWER (STREAMING TRANSITION) */
        .viewer {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: zoomIn 0.35s ease;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        .viewer-content {
          width: 90%;
          max-width: 800px;
          background: #111110;
          border: 1px solid rgba(200,169,110,0.3);
          padding: 2rem;
          position: relative;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 15px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .ep-tag {
          color: #C8A96E;
          font-size: 0.7rem;
          margin-bottom: 0.5rem;
        }

        .viewer-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
        }

        .hook {
          color: #C8A96E;
          font-style: italic;
          margin: 1rem 0;
        }

        .viewer-body {
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
        }

        .cliff {
          margin-top: 1rem;
          color: #D08080;
        }

        .next-bar {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        }

        .next-bar button {
          background: #C8A96E;
          border: none;
          padding: 10px 16px;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
