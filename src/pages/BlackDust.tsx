import { useState } from "react";

const characters = [
  {
    role: "Protagonist",
    name: "Zara Otieno",
    bio: "A feared debt collector raised in Nairobi’s underground empire. Loyal, sharp, and emotionally guarded — until the city begins turning against her."
  },
  {
    role: "Undercover Detective",
    name: "Kofi Mensah",
    bio: "A Ghanaian DCI operative sent deep into Nairobi’s criminal economy. Calm under pressure, but dangerously close to losing objectivity."
  },
  {
    role: "Crime Matriarch",
    name: "Mama Sula",
    bio: "The woman who built Nairobi’s underground trade routes. Elegant, terrifying, and impossible to predict."
  },
  {
    role: "Cartel Enforcer",
    name: "Damu Kairo",
    bio: "The brutal strategist from Mombasa. Intelligent, charismatic, and always three moves ahead."
  },
  {
    role: "Financial Ghost",
    name: "Shida Waweru",
    bio: "The syndicate accountant who secretly controls the money flow beneath the empire."
  }
];

const settings = [
  "Mathare Underground Markets",
  "Westlands Luxury Crime Networks",
  "Industrial Embakasi Safehouses",
  "Mombasa Cartel Ports",
  "Rain-soaked Nairobi Rooftops",
  "Underground Casinos & Smuggling Routes"
];

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
      "Mama Sula tasks Zara with finding the cartel's entry point into the city. Meanwhile, a new face appears at the underground market: Kofi Mensah, posing as a Ghanaian import broker. Zara clocks him immediately as an outsider — but not as a cop.",
    cliff:
      "Zara invites Kofi to a back-room meeting. If he's cartel, she'll know by morning. If he's law, she'll know by dawn."
  },

  {
    n: "03",
    t: "The Broker",
    hook: "Everyone in Nairobi is selling something. The smart ones sell nothing.",
    synopsis:
      "Kofi walks the line between his cover and his conscience as Zara tests him with a small run — moving counterfeit duty stamps through Westlands. He passes. She still doesn't trust him. Their first real conversation happens at 2am over bad coffee in a Parklands diner. It crackles.",
    cliff:
      "DCI command calls Kofi in. They want to accelerate the operation. He asks for more time. They say no."
  },

  {
    n: "04",
    t: "Mama's Table",
    hook: "You don't get invited to her table. You get summoned.",
    synopsis:
      "Zara brings Kofi to meet Mama Sula — a tense, theatrical dinner where every word is a test. Mama Sula approves of Kofi, which terrifies Zara for reasons she can't articulate. Meanwhile, Damu Kairo arrives in Nairobi and immediately disrupts the market's balance in one afternoon.",
    cliff:
      "Damu leaves a note on Zara's windshield: 'I know who the broker really is. Lunch?'"
  },

  {
    n: "05",
    t: "Kairo",
    hook: "The scariest men are the ones who don't need to prove it.",
    synopsis:
      "A tense, character-driven episode following Damu — his backstory, his code, and why the Mombasa cartel sent their best. He and Zara meet alone. He doesn't threaten her. He offers her a partnership. She refuses. He nods, unsurprised.",
    cliff:
      "Shida calls Zara: she's found a second set of books. Mama Sula has been selling territory quietly for six months. To someone in the government."
  },

  {
    n: "06",
    t: "The Second Ledger",
    hook: "The truth is always in the numbers. That's why they hide them.",
    synopsis:
      "Zara and Shida dig into the ledger and discover Mama Sula has been quietly offloading Westlands operations to a shadow shell company. The buyer: a senior Treasury official. The cartel move isn't a hostile takeover — it was invited. Mama Sula is planning to retire, and she never told anyone.",
    cliff:
      "Zara confronts Mama Sula. Mama slaps her — the first time in twenty years. 'You think I built this for you?'"
  },

  {
    n: "07",
    t: "Loyalty Tax",
    hook: "Betrayal isn't a moment. It's a direction you've been walking for years.",
    synopsis:
      "Reeling, Zara goes to Kofi — not as a mark, but as a person. She tells him almost everything. He listens without recording. He turns off his wire. His DCI handler watches the dead feed in real time and makes a call.",
    cliff:
      "DCI sends a second operative to Nairobi. Kofi doesn't know. Zara doesn't know. Damu does."
  },

  {
    n: "08",
    t: "The Second Operative",
    hook: "When your own people are watching you, who do you trust?",
    synopsis:
      "The second DCI operative, a sharp woman named Agent Pendo, begins mapping Zara's network independently — and starts pulling on threads that could expose Kofi's feelings as a liability. Damu, meanwhile, makes his first real play: he walks into a Mama Sula meeting and sits down uninvited.",
    cliff:
      "Mama Sula smiles at Damu across the table. 'I've been expecting you,' she says. Zara wasn't told about this meeting."
  },

  {
    n: "09",
    t: "The Arrangement",
    hook: "Peace between criminals is just war with better manners.",
    synopsis:
      "Mama Sula and Damu have been negotiating for weeks. The deal: Mombasa gets Westlands, Mathare stays Sula's, and the Treasury official provides cover for everyone. Zara finds out and feels the ground disappear beneath her — she was never part of the plan. She was the distraction.",
    cliff:
      "Kofi's cover breaks. Not because of Zara — because Agent Pendo files a report that exposes his compromised status. By morning, Mama Sula's people are looking for him."
  },

  {
    n: "10",
    t: "Running Hot",
    hook: "When everyone is hunting you, the city gets very small.",
    synopsis:
      "The series' most kinetic episode. Kofi runs. Zara runs to find him before Mama's people do. Damu watches both with professional admiration and does nothing — for now. Shida burns the second ledger on Mama Sula's order. Zara reaches Kofi in an industrial estate in Embakasi with ten minutes to spare.",
    cliff:
      "Kofi tells Zara everything — who he is, what he was sent to do, what he didn't do. She doesn't speak for a long time. Then: 'How much of it was real?' He answers immediately. 'All of it.'"
  },

  {
    n: "11",
    t: "Black Market Sunrise",
    hook: "Sometimes justice and crime want the same thing. Just for different reasons.",
    synopsis:
      "Zara makes a choice: she'll help Kofi bring down the Treasury official — the real target, the one who laundered the whole arrangement — but Mama Sula and Damu walk. Kofi agrees. It's not justice. It's the best they can do. The operation runs across one night and two districts. It is tense, precise, and costly.",
    cliff:
      "It works. The official is arrested. But in the chaos, Shida is caught in a crossfire. She survives — barely. And Mama Sula vanishes from the city before dawn."
  },

  {
    n: "12",
    t: "Dust Settles",
    hook: "The city keeps moving. It always does.",
    synopsis:
      "Aftermath. Kofi is recalled to Accra — commendation pending, relationship unresolved. Zara walks the Mathare streets she grew up on. Without Mama Sula, the syndicate splinters. Damu sends Zara a single message: an address in Mombasa and a question mark. The final scene: Zara at a bus stop, bag at her feet, looking at her phone. The bus to Mombasa arrives. She picks up her bag.",
    cliff:
      "She gets on the bus. The screen goes black. Then a title card: 'SEASON 2 — MOMBASA.'"
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

        {/* ATMOSPHERIC DUST */}
        <div className="dust"></div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-badges">
              <span>CRIME DRAMA</span>
              <span>2026</span>
              <span>NETFLIX ORIGINAL STYLE</span>
            </div>

            <h1 className="title">
              BLACK
              <br />
              DUST
            </h1>

            <p className="tagline">
              In the shadows of Nairobi's underground economy,
              loyalty is currency and betrayal is survival.
            </p>

            <div className="meta">
              <div>
                <small>EPISODES</small>
                <strong>12</strong>
              </div>

              <div>
                <small>SETTING</small>
                <strong>Nairobi, Kenya</strong>
              </div>

              <div>
                <small>LANGUAGE</small>
                <strong>Swahili • English</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SERIES */}
        <section className="section">
          <p className="section-label">ABOUT THE SERIES</p>

          <div className="about">
            Deep inside Nairobi’s forgotten estates and luxury crime corridors,
            Zara Otieno navigates a collapsing criminal empire built on blood,
            politics, and loyalty. When an undercover detective infiltrates the
            syndicate she serves, a brutal war begins between survival and truth.
            BLACK DUST is a cinematic African crime thriller blending corruption,
            romance, cartel warfare, and psychological betrayal.
          </div>
        </section>

        {/* SETTINGS */}
        <section className="section">
          <p className="section-label">WORLD & SETTINGS</p>

          <div className="settings-grid">
            {settings.map((item, i) => (
              <div key={i} className="setting-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CHARACTERS */}
        <section className="section">
          <p className="section-label">MAIN CHARACTERS</p>

          <div className="character-grid">
            {characters.map((char, i) => (
              <div key={i} className="character-card">
                <div className="role">{char.role}</div>
                <div className="name">{char.name}</div>
                <p>{char.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EPISODES */}
        <section className="section">
          <p className="section-label">EPISODES</p>

          <div className="episode-grid">
            {episodes.map((ep, i) => (
              <div
                key={i}
                className="episode-card"
                onClick={() => setSelected(i)}
              >
                <div className="ep-number">EP {ep.n}</div>

                <div className="ep-title">{ep.t}</div>

                <div className="ep-hook">
                  "{ep.hook}"
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FULL SCREEN VIEWER */}
        {selected !== null && (
          <div className="viewer">
            <div className="viewer-bg"></div>

            <div className="viewer-content">

              <button
                className="close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <div className="viewer-header">
                <div className="viewer-ep">
                  EPISODE {episodes[selected].n}
                </div>

                <h2>{episodes[selected].t}</h2>

                <p className="viewer-hook">
                  "{episodes[selected].hook}"
                </p>
              </div>

              <div className="viewer-body">
                <p>{episodes[selected].synopsis}</p>

                <div className="cliff">
                  <span>CLIFFHANGER</span>
                  {episodes[selected].cliff}
                </div>
              </div>

              <div className="viewer-controls">
                {selected > 0 && (
                  <button onClick={() => setSelected(selected - 1)}>
                    ← Previous
                  </button>
                )}

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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #080808;
        }

        .page {
          min-height: 100vh;
          color: #F0EBE0;
          font-family: 'IBM Plex Mono', monospace;
          overflow-x: hidden;
          background:
            linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.98)),
            url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .dust {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.07;
          background-image:
            radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 4px 4px;
          animation: drift 18s linear infinite;
        }

        @keyframes drift {
          from { transform: translateY(0px); }
          to { transform: translateY(-300px); }
        }

        .hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 5rem 8%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right,
            rgba(0,0,0,0.95),
            rgba(0,0,0,0.5),
            transparent);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .hero-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .hero-badges span {
          border: 1px solid rgba(200,169,110,0.3);
          color: #C8A96E;
          font-size: 0.6rem;
          padding: 6px 12px;
          letter-spacing: 3px;
        }

        .title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 12vw, 10rem);
          line-height: 0.85;
          letter-spacing: 5px;
        }

        .tagline {
          margin-top: 1.5rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          max-width: 600px;
        }

        .meta {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .meta small {
          display: block;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.5rem;
          letter-spacing: 3px;
          font-size: 0.55rem;
        }

        .meta strong {
          color: #C8A96E;
        }

        .section {
          padding: 5rem 8%;
        }

        .section-label {
          color: rgba(200,169,110,0.5);
          letter-spacing: 5px;
          font-size: 0.6rem;
          margin-bottom: 2rem;
        }

        .about {
          max-width: 900px;
          line-height: 2;
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
        }

        .settings-grid,
        .character-grid,
        .episode-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .setting-card,
        .character-card,
        .episode-card {
          background: rgba(15,15,15,0.9);
          border: 1px solid rgba(200,169,110,0.15);
          padding: 1.5rem;
          transition: 0.4s ease;
        }

        .setting-card:hover,
        .character-card:hover,
        .episode-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200,169,110,0.5);
        }

        .role {
          color: #C8A96E;
          font-size: 0.6rem;
          letter-spacing: 3px;
          margin-bottom: 0.5rem;
        }

        .name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          margin-bottom: 0.8rem;
        }

        .character-card p {
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          font-size: 0.85rem;
        }

        .ep-number {
          color: #C8A96E;
          font-size: 0.7rem;
          margin-bottom: 0.6rem;
        }

        .ep-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .ep-hook {
          color: rgba(255,255,255,0.55);
          font-style: italic;
          font-size: 0.8rem;
        }

        .viewer {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .viewer-bg {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.94);
          backdrop-filter: blur(8px);
        }

        .viewer-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          background: #111110;
          border: 1px solid rgba(200,169,110,0.2);
          padding: 3rem;
          animation: viewerIn 0.35s ease;
        }

        @keyframes viewerIn {
          from {
            opacity: 0;
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .viewer-ep {
          color: #C8A96E;
          letter-spacing: 4px;
          font-size: 0.65rem;
          margin-bottom: 1rem;
        }

        .viewer-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          line-height: 1;
        }

        .viewer-hook {
          margin-top: 1rem;
          color: rgba(200,169,110,0.8);
          font-style: italic;
        }

        .viewer-body {
          margin-top: 2rem;
          line-height: 2;
          color: rgba(255,255,255,0.72);
        }

        .cliff {
          margin-top: 2rem;
          border-left: 2px solid rgba(255,80,80,0.6);
          padding-left: 1rem;
          color: #D08080;
        }

        .cliff span {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.6rem;
          letter-spacing: 3px;
        }

        .viewer-controls {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .viewer-controls button {
          background: #C8A96E;
          border: none;
          padding: 12px 18px;
          cursor: pointer;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 5rem;
          }

          .viewer-content {
            padding: 2rem;
          }

          .viewer-header h2 {
            font-size: 2.5rem;
          }

          .section {
            padding: 4rem 6%;
          }
        }
      `}</style>
    </>
  );
}