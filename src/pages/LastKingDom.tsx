import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "Sands Remember the King",
    hook: "An empire never truly dies. It waits to be forgotten.",
    synopsis:
      "Prince Amani returns from exile after twelve years. Napata is controlled by foreign advisors. The King has vanished for 87 days.",
    cliffhanger: "Amani finds the royal crown melted into blackened gold."
  },
  {
    id: 2,
    title: "The Missing Pharaoh",
    hook: "A king doesn’t disappear without someone replacing him.",
    synopsis:
      "Amani uncovers hidden tunnels and erased records. A slave boy claims the King was taken—not killed.",
    cliffhanger: "The boy’s hand holds a foreign seal."
  },
  {
    id: 3,
    title: "Foreign Blood in the Court",
    hook: "Not all invaders carry swords.",
    synopsis:
      "Foreign advisors rewrite Kush laws. Betrayal grows within Amani’s own circle.",
    cliffhanger: "A message: The King is alive—but watching."
  },
  {
    id: 4,
    title: "The Desert Tribunal",
    hook: "Justice in Kush is not blind. It is bought.",
    synopsis:
      "Elders offer Amani a deal: accept foreign rule or destroy Kush’s remains.",
    cliffhanger: "He is declared a threat to his own kingdom."
  },
  {
    id: 5,
    title: "The Scarab Network",
    hook: "Every empire has a hidden economy.",
    synopsis:
      "A spy reveals a trafficking network moving gold and royal bloodlines.",
    cliffhanger: "A royal shipment leaves Napata tonight."
  },
  {
    id: 6,
    title: "The Auction of Blood",
    hook: "Even kings can be sold.",
    synopsis:
      "Amani infiltrates a desert auction. His father is alive—being sold.",
    cliffhanger: "Amani’s name appears in the auction ledger."
  },
  {
    id: 7,
    title: "The Crown Breaks Twice",
    hook: "Power doesn’t fall. It fractures.",
    synopsis:
      "Kush splits into factions. Amani is betrayed from within his rebellion.",
    cliffhanger: "His location is sold."
  },
  {
    id: 8,
    title: "The Sun Burial Protocol",
    hook: "Some kingdoms choose to die with dignity.",
    synopsis:
      "Kush begins erasing itself—burning records and collapsing temples.",
    cliffhanger: "The King activated it."
  },
  {
    id: 9,
    title: "The Last King Speaks",
    hook: "A king’s final order can end a dynasty.",
    synopsis:
      "Truth revealed: Kush was sold internally to prevent greater destruction.",
    cliffhanger: "Submit—or be erased."
  },
  {
    id: 10,
    title: "Ashes of Kush",
    hook: "Empires don’t end. They become legends.",
    synopsis:
      "Amani refuses submission and triggers total collapse of Kush identity.",
    cliffhanger: "Kush was only the beginning."
  }
];



export default function LastKingdomOfKush() {
  const [selected, setSelected] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  // const playSoundForEpisode = (id: number) => {
  //   Object.values(sounds).forEach((s) => {
  //     s.pause();
  //     s.currentTime = 0;
  //   });

  //   if (id <= 3) {
  //     sounds.wind.loop = true;
  //     sounds.wind.volume = 0.4;
  //     sounds.wind.play();
  //   } else if (id <= 7) {
  //     sounds.desert.loop = true;
  //     sounds.desert.volume = 0.4;
  //     sounds.desert.play();
  //   } else {
  //     sounds.war.loop = true;
  //     sounds.war.volume = 0.5;
  //     sounds.war.play();
  //   }
  // };

  const goToNextEpisode = () => {
    if (selected === null) return;

    setTransitioning(true);

    setTimeout(() => {
      const next = selected + 1;

      setSelected(null);

      setTimeout(() => {
        if (next <= episodes.length) {
          setSelected(next);
          // playSoundForEpisode(next);
        }
        setTransitioning(false);
      }, 500);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-black text-[#F0EBE0] overflow-hidden relative">

      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-110 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.15),transparent_60%)]" />
      </div>

      {/* TRANSITION OVERLAY */}
      {transitioning && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
          <div className="text-center">
            <h2 className="text-3xl font-['Bebas_Neue'] mb-4">Loading Next Episode...</h2>
            <div className="w-16 h-16 border-4 border-yellow-400/50 border-t-yellow-400 rounded-full animate-spin mx-auto" />
          </div>
        </div>
      )}

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
        <h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl">
          THE LAST KINGDOM
          <br />
          OF KUSH
        </h1>

        <p className="max-w-xl mt-6 text-sm text-white/60 italic">
          An empire collapses from within as betrayal rewrites history.
        </p>
      </div>

      {/* EPISODES */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-[10px] tracking-[0.4em] text-yellow-400/50 mb-6">
          EPISODES
        </h2>

        <div className="space-y-2">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              onClick={() => {
                setSelected(ep.id);
                // playSoundForEpisode(ep.id);
              }}
              className="cursor-pointer bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
            >
              <div className="flex justify-between">
                <h3 className="font-['Bebas_Neue'] text-xl">
                  {ep.id}. {ep.title}
                </h3>
                <span className="text-yellow-400/60 text-xs">▶</span>
              </div>
              <p className="text-xs text-white/40 italic">{ep.hook}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50">
          <div className="max-w-2xl w-full bg-black border border-yellow-400/20 p-6">
            <button
              onClick={() => setSelected(null)}
              className="text-yellow-400 text-xs flex items-center gap-2 mb-4"
            >
              <ArrowLeft size={14} /> Back
            </button>

            <h2 className="font-['Bebas_Neue'] text-3xl mb-2">
              Episode {selected}: {episodes[selected - 1].title}
            </h2>

            <p className="text-yellow-400/70 italic mb-4">
              {episodes[selected - 1].hook}
            </p>

            <p className="text-white/70 text-sm leading-relaxed">
              {episodes[selected - 1].synopsis}
            </p>

            <div className="mt-4 border-l-2 border-red-500 pl-3 text-xs text-red-300">
              Cliffhanger: {episodes[selected - 1].cliffhanger}
            </div>

            <button
              onClick={goToNextEpisode}
              className="mt-6 px-4 py-2 text-xs border border-yellow-400/30 text-yellow-300 hover:bg-yellow-400/10"
            >
              ▶ Next Episode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}