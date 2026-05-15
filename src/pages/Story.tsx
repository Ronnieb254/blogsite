import  { useState } from "react";

type Episode = {
  num: string;
  title: string;
  hook: string;
  synopsis: string;
  cliff: string;
};

type Character = {
  role: string;
  name: string;
  origin: string;
  bio: string;
};

const characters: Character[] = [
  {
    role: "Protagonist",
    name: "Amara Osei",
    origin: "Nairobi, Kenya",
    bio: "Former NIS field agent, disavowed after a mission gone wrong. Sharp, relentless, and haunted by a truth the government wants buried.",
  },
  {
    role: "Antagonist",
    name: "General Bekele Girma",
    origin: "Addis Ababa, Ethiopia",
    bio: "A decorated war hero turned shadow commander controlling THE RIFT network.",
  },
  {
    role: "Ally / Wild Card",
    name: "Darius Mwangi",
    origin: "Mombasa, Kenya",
    bio: "Ex-hacker turned cyber café owner. Loyal, brilliant, and dangerously unpredictable.",
  },
  {
    role: "Handler / Nemesis",
    name: "Director Zawadi Njoro",
    origin: "Nairobi, Kenya",
    bio: "Amara’s former boss at NIS. Calculating, strategic, and impossible to fully trust.",
  },
  {
    role: "Love Interest / Informant",
    name: "Tariq Haile",
    origin: "Dire Dawa, Ethiopia",
    bio: "Investigative journalist unknowingly trapped inside THE RIFT supply chain.",
  },
  {
    role: "Muscle / Loyalist",
    name: "Sila Atieno",
    origin: "Kisumu, Kenya",
    bio: "Mercenary and Amara’s oldest ally. Fiercely protective and morally gray.",
  },
];

const season1: Episode[] = [
  {
    num: "01",
    title: "Ghost Signal",
    hook: "She was declared dead. She just forgot to stay that way.",
    synopsis:
      "Amara Osei, a disavowed NIS agent living under a false identity in Kibera, intercepts a ghost frequency used only by NIS black operations — the same frequency that got her burned three years ago. Against her better judgment, she traces it to a safehouse in Westlands. Inside: a dead informant, a USB drive, and a name she recognizes. Her own.",
    cliff:
      "The USB holds surveillance footage of Amara at a meeting she has no memory of attending. Someone has been building a case against her — or building her as a weapon.",
  },
  {
    num: "02",
    title: "Westlands Burn",
    hook: "The safehouse was supposed to be empty.",
    synopsis:
      "Amara reaches out to Darius, now running a cyber café near the University of Nairobi. He decrypts part of the USB and discovers it's a fragment of a larger encrypted archive called RIFT FILES. Before they can dig deeper, two men in NIS-adjacent gear come for them. The safehouse burns. Darius loses three years of work. Amara loses her only safe house.",
    cliff:
      "As they flee, Amara spots Director Zawadi Njoro in a car across the street — watching, not helping.",
  },
  {
    num: "03",
    title: "The Informant's Wife",
    hook:
      "She didn't know what her husband did. She knew exactly what it cost him.",
    synopsis:
      "The dead informant was a mid-level Ministry of Transport official named Kioni. His wife Priya agrees to meet Amara after recognizing the NIS ghost frequency on her husband's phone. Kioni had been feeding documents to someone he called 'The General.' Priya hands over a burned SIM card. Darius extracts a partial call log and a location: a warehouse in the port of Mombasa.",
    cliff:
      "Priya is picked up by plainclothes officers minutes after Amara leaves. Amara watches helplessly from a rooftop. Her next move just became a rescue or a farewell.",
  },
  {
    num: "04",
    title: "Port of Ghosts",
    hook: "Mombasa never sleeps. It just changes what it hides.",
    synopsis:
      "Amara and Darius travel to Mombasa and infiltrate the warehouse, which fronts as a fish export company. Inside they find encrypted cargo manifests and a server farm. Darius clones the drive. Amara discovers the cargo isn't fish — it's surveillance hardware, small-batch military drones. They escape a six-man security team in a brutal chase through the old town's narrow streets.",
    cliff:
      "The drone manifests list a single end-destination: a private airfield outside Addis Ababa, Ethiopia. Someone is building something across the border.",
  },
  {
    num: "05",
    title: "Director's Game",
    hook:
      "When your handler calls, you answer. When she smiles, you run.",
    synopsis:
      "Director Zawadi Njoro summons Amara through a dead drop — a method only Amara's inner circle would know. They meet on a boat on Lake Naivasha. Zawadi claims she's been running a parallel investigation into General Bekele Girma, a decorated Ethiopian military figure with deep East African political ties. She wants Amara back in the fold. Amara doesn't buy it — but takes the intelligence file Zawadi offers.",
    cliff:
      "The file contains Amara's own psych evaluations, redacted. Someone high up approved her disavowal. Zawadi's signature is on page seven.",
  },
  {
    num: "06",
    title: "Sila",
    hook: "Old debts don't expire. They compound.",
    synopsis:
      "Amara tracks down Sila Atieno in Kisumu, now working private security for a Kenyan mining consortium. He's the only person who can get her into Ethiopia without NIS knowing. Their reunion is tense — Sila blames Amara for a mission that took his brother's life. But he agrees to help. In exchange: the truth about what really happened in Mogadishu, three years ago.",
    cliff:
      "Amara tells him half the truth. The half that makes her look like a victim. The other half — she buries.",
  },
  {
    num: "07",
    title: "Borderline",
    hook:
      "The border between Kenya and Ethiopia is a line on a map. The people who live there drew it in blood.",
    synopsis:
      "The three cross into Ethiopia through the Moyale border, using forged AU humanitarian credentials. The crossing goes wrong when a local militia — on THE RIFT's payroll — intercepts their convoy. A brutal firefight in the scrubland leaves two militia dead and Sila with a gunshot wound. They reach Addis Ababa in the back of a cattle truck.",
    cliff:
      "At the Addis safe house, they find Tariq Haile waiting. He tracked them from Mombasa. He has photographs. He wants a story. Amara wants him gone. But the photographs show something she hasn't seen yet — General Bekele's face.",
  },
  {
    num: "08",
    title: "Addis in the Dark",
    hook:
      "Every empire has a capital. This one just hasn't declared itself yet.",
    synopsis:
      "Amara and Tariq strike a fragile deal: she gives him access, he gives her intel from his embedded journalism work. His source inside the Ethiopian parliament confirms RIFT FILES are part of a broader project — a privatized surveillance state being sold to multiple African governments. Bekele is the supplier. The demand is growing. Amara plants a tracker on a RIFT courier and follows him to an underground server facility below a hotel in Bole district.",
    cliff:
      "Inside the server room, Amara finds a live feed: Priya, the informant's wife. She's alive. She's being questioned. And she's about to give them Amara's name.",
  },
  {
    num: "09",
    title: "The General's Table",
    hook:
      "He invites you to dinner. You don't know if you're the guest or the meal.",
    synopsis:
      "Acting on Tariq's press credentials, Amara attends a gala hosted by General Bekele Girma at the National Palace Hotel. It is a who's-who of East African power — ministers, generals, tech investors, and two European arms brokers. Amara gets close enough to Bekele to plant a micro-recorder. His speech is charming and visionary. The private conversation she records afterward is neither.",
    cliff:
      "Bekele knows someone is investigating him. He names the leak: a woman. An agent. He smiles at the camera — as if he knows exactly where it is.",
  },
  {
    num: "10",
    title: "Season Finale — The Rift Opens",
    hook: "Everything she came for. Everything it cost.",
    synopsis:
      "Amara decrypts enough of the RIFT FILES to confirm: the surveillance network is already operational in four countries, including Kenya. NIS purchased access. Director Zawadi approved the acquisition. Amara transmits the files to Tariq's encrypted server — enough to blow the story open. But before Tariq can publish, he's arrested at his hotel. Sila extracts him. Amara goes for the server directly — and comes face to face with Bekele for the first time.",
    cliff:
      "Bekele tells her she's already too late. The files she sent are corrupted — someone rerouted them. And standing next to him, watching her with cold, professional eyes, is Sila.",
  },
];

const season2: Episode[] = [
  {
    num: "11",
    title: "Ash",
    hook:
      "She trusted the wrong man. Now she has to decide which wrong move to make next.",
    synopsis:
      "Amara is captured and held in a RIFT facility in the Entoto hills above Addis Ababa. Bekele doesn't torture her — he talks to her. He explains his vision: African sovereignty through African surveillance, no longer dependent on Western intelligence systems. It's almost convincing. Amara listens, calculates, and on day three escapes by exploiting a guard rotation she memorized during the speeches.",
    cliff:
      "She retrieves her emergency cache — and finds Darius's emergency signal. He's been taken. Back in Nairobi.",
  },

  // Continue episodes 12–20 exactly the same way...
  {
  num: "12",
  title: "Nairobi Burning",
  hook: "Home is the place they use against you.",
  synopsis:
    "Amara returns to Kenya covertly and links up with a low-level NIS dissident named Ouma who has been quietly documenting Zawadi's corruption. Darius is being held in an NIS black site — not a prison, a server room. They're using him to decrypt the RIFT FILES she transmitted. He's been feeding them false keys to buy time. He won't last much longer.",
  cliff:
    "Ouma is killed by a car bomb outside his apartment. The bomb was planted by someone who knew exactly when he'd leave. Only Amara knew.",
},
{
  num: "13",
  title: "Double Mirror",
  hook: "If everyone is a suspect, she might be one too.",
  synopsis:
    "Amara begins to question whether her own mind has been compromised. The memory she has no record of — the meeting on the USB — is starting to feel real. She tracks down her old NIS psychologist, now retired in Nakuru, who tells her about a classified program: MIRROR. Agents were given false memories as insurance. Amara may have been run as an asset without knowing it.",
  cliff:
    "The psychologist shows her a file. In it: evidence that Amara herself handed over the original intelligence that started the RIFT network. She was the leak — and she never knew.",
},
{
  num: "14",
  title: "Sila's Gospel",
  hook:
    "Every traitor has a reason. His is the only one that makes sense.",
  synopsis:
    "A surprise episode told mostly from Sila's perspective. We see the Mogadishu mission through his eyes — and learn his brother wasn't killed by enemy fire. He was killed by a decision Amara made and never disclosed. Sila was recruited by Bekele three years ago, not for money, but for the chance to expose the NIS officers who covered it up. Including Amara.",
  cliff:
    "Sila is handed Amara's location by Bekele. He drives to find her — and sits in his car outside her building for four hours without moving. Then he calls her.",
},
{
  num: "15",
  title: "The Call",
  hook:
    "Forgiveness isn't peace. It's just the next hard thing.",
  synopsis:
    "Amara and Sila meet in a church in Westlands. The conversation is the rawest in the series — no action, no running, just two people carrying the weight of what they did and what was done to them. Sila agrees to turn double agent inside RIFT. Amara agrees to go public about Mogadishu when this is over. They make the deal. Neither is sure they'll survive to keep it.",
  cliff:
    "Bekele calls Sila mid-meeting. He already knows Sila is with Amara. And he sounds pleased.",
},
{
  num: "16",
  title: "The Architecture",
  hook:
    "She came for the man. She found the machine.",
  synopsis:
    "Using Sila's RIFT access, Amara maps the full network architecture. It isn't one server farm — it's distributed across six facilities in five countries, all synchronized. Shutting down one node does nothing. They need simultaneous takedowns. Darius — finally freed in a midnight extraction — starts building a remote kill protocol. He needs 72 hours. They have 48.",
  cliff:
    "A RIFT alert goes out: Amara's photo, circulated to every security contact on the continent. She has just become Africa's most wanted ghost.",
},
{
  num: "17",
  title: "Dire Dawa",
  hook:
    "The truth is in the city he grew up in. And it's worse than she imagined.",
  synopsis:
    "Tariq takes Amara to Dire Dawa, his hometown, to meet his source inside the Ethiopian parliament: his aunt, a deputy minister. She has the physical originals of the RIFT contracts — signed by defense ministers across the continent. It's the smoking gun. But she won't hand them over without a guarantee of protection that Amara cannot give.",
  cliff:
    "As they leave the meeting, Tariq is shot. Not fatally — but the message is clear. They know where he is. They know who he loves. Give back the drive or the next shot won't miss.",
},
{
  num: "18",
  title: "Sacrifice Protocol",
  hook:
    "She made a choice. This is what it looks like three years later.",
  synopsis:
    "Amara goes to Director Zawadi directly — not to confront her but to make a deal. She offers the corrupted files and her silence in exchange for Darius's freedom, protection for Tariq's aunt, and a 48-hour window to execute the network takedown. Zawadi accepts too easily. Amara knows she's being played but takes the window anyway. Some gambles are necessary.",
  cliff:
    "With two hours left on the clock, Darius's kill protocol hits an unexpected firewall — the sixth node isn't in the system. It's somewhere physical. And it's in Nairobi.",
},
{
  num: "19",
  title: "Node Six",
  hook:
    "The last server was never on any map. Because it was never meant to be found.",
  synopsis:
    "The sixth node is buried beneath the NIS headquarters building — installed during a renovation four years ago, signed off by Zawadi. It's the master node. The others are mirrors. Amara, Sila, and Darius run the most dangerous operation of the series: a direct infiltration of NIS headquarters while Zawadi's people are actively hunting them. The action sequence is the series' most elaborate — three simultaneous threads across four floors.",
  cliff:
    "They reach the node. Darius begins the upload. And Zawadi walks in. Alone. Without her security detail.",
},
{
  num: "20",
  title: "Series Finale — After the Rift",
  hook:
    "She wanted justice. She got something messier: the truth.",
  synopsis:
    "Zawadi reveals she's known about the node for months — and has been running her own takedown operation, needing Amara to draw Bekele's network into the open. The RIFT takedown proceeds. All six nodes go dark simultaneously. General Bekele is arrested by an Ethiopian federal task force tipped off by Tariq's aunt. The story breaks internationally. Sila vanishes before anyone can arrest him. Darius publishes everything. Amara sits across from a parliamentary investigator and tells the truth — all of it, including Mogadishu.",
  cliff:
    "Six months later. Amara is offered reinstatement to NIS under a new director. She reads the file. Opens it. The scene cuts before she answers. Somewhere in Dire Dawa, a city she now knows well, Tariq receives a message from an encrypted number. It says: 'Season 2 was just the beginning.' He looks up — and smiles.",
},
];

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`bg-[#121210] border border-[#2a2418] p-6 cursor-pointer transition-all duration-300 hover:bg-[#1c1c18] ${
        open ? "bg-[#1c1c18]" : ""
      }`}
    >
      <div className="grid grid-cols-[60px_1fr_30px] gap-6">
        <div className="text-5xl font-bold text-[#C9973A]/30 leading-none">
          {episode.num}
        </div>

        <div>
          <h3 className="text-2xl uppercase tracking-wide text-white font-bold">
            {episode.title}
          </h3>

          <p className="italic text-[#8d8574] mt-1">
            "{episode.hook}"
          </p>

          {open && (
            <div className="mt-6 border-t border-[#3a3324] pt-6">
              <p className="text-[#D4B896] leading-7">
                {episode.synopsis}
              </p>

              <div className="mt-5 border-l-2 border-[#8B1A1A] bg-[#8B1A1A]/10 p-4">
                <p className="text-xs uppercase tracking-[4px] text-[#8B1A1A] mb-2">
                  Cliffhanger
                </p>

                <p className="italic text-[#e4b3b3]">
                  {episode.cliff}
                </p>
              </div>
            </div>
          )}
        </div>

        <div
          className={`text-[#777] text-xl transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </div>
      </div>
    </div>
  );
};

export default function RiftSeriesGuide() {
  return (
    <div className="bg-[#0A0A08] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,26,26,0.25),transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,151,58,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,151,58,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <p className="uppercase tracking-[6px] text-[#C9973A] text-xs z-10">
          An East African Action Thriller Series
        </p>

        <h1 className="text-[22vw] leading-none font-black bg-gradient-to-b from-white via-[#C9973A] to-[#8B1A1A] text-transparent bg-clip-text z-10">
          RIFT
        </h1>

        <p className="uppercase tracking-[8px] text-[#D4B896] text-xs z-10">
          Kenya · Ethiopia · 20 Episodes
        </p>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9973A] to-transparent my-10 z-10" />

        <p className="max-w-2xl italic text-[#D4B896] text-xl leading-9 z-10">
          "When the earth splits, so do loyalties. Between Nairobi's shadows
          and Addis Ababa's ancient secrets, one woman must choose between
          justice and survival."
        </p>

        <div className="flex gap-10 mt-14 z-10 flex-wrap justify-center">
          {[
            { label: "Episodes", value: "20" },
            { label: "Seasons", value: "2" },
            { label: "Setting", value: "East Africa" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="uppercase tracking-[4px] text-[#6B6455] text-xs">
                {item.label}
              </p>

              <p className="text-3xl font-bold text-[#C9973A]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 uppercase tracking-[4px] text-xs text-[#6B6455] animate-pulse">
          ↓ explore the series
        </div>
      </section>

      {/* CHARACTERS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[6px] text-[#E85D04] text-xs mb-4">
          The Cast
        </p>

        <h2 className="text-6xl font-black uppercase mb-14">
          Main Characters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#2c2416] border border-[#2c2416]">
          {characters.map((char) => (
            <div
              key={char.name}
              className="bg-[#121210] p-8 hover:bg-[#1C1C18] transition-all duration-300"
            >
              <p className="uppercase tracking-[4px] text-[#E85D04] text-xs mb-2">
                {char.role}
              </p>

              <h3 className="text-3xl text-[#C9973A] font-bold uppercase">
                {char.name}
              </h3>

              <p className="text-[#6B6455] text-sm tracking-[2px] mt-1 mb-5">
                {char.origin}
              </p>

              <p className="text-[#D4B896] leading-7">
                {char.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="text-center text-[#C9973A]/40 text-2xl tracking-[12px]">
        — ✦ —
      </div>

      {/* EPISODES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[6px] text-[#E85D04] text-xs mb-4">
          Season One
        </p>

        <h2 className="text-6xl font-black uppercase mb-16">
          Episodes
        </h2>

        {/* Season 1 */}
        <div className="mb-28">
          <div className="flex items-center gap-8 border-b border-[#3a3324] pb-6 mb-10">
            <div className="text-8xl font-black text-[#C9973A]/10">
              S1
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-[#E85D04] text-xs">
                Season One
              </p>

              <h3 className="text-4xl uppercase font-black">
                The Nairobi Protocol
              </h3>

              <p className="italic text-[#6B6455] mt-2">
                Arc: A disavowed spy uncovers a conspiracy reaching the top.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {season1.map((ep) => (
              <EpisodeCard key={ep.num} episode={ep} />
            ))}
          </div>
        </div>

        {/* Season 2 */}
        <div>
          <div className="flex items-center gap-8 border-b border-[#3a3324] pb-6 mb-10">
            <div className="text-8xl font-black text-[#C9973A]/10">
              S2
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-[#E85D04] text-xs">
                Season Two
              </p>

              <h3 className="text-4xl uppercase font-black">
                Blood & Teff
              </h3>

              <p className="italic text-[#6B6455] mt-2">
                Arc: The war moves to Ethiopia as loyalties collapse.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {season2.map((ep) => (
              <EpisodeCard key={ep.num} episode={ep} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2c2416] py-10 text-center uppercase tracking-[4px] text-xs text-[#6B6455]">
        <span className="text-[#C9973A]">RIFT</span> · An Original African
        Series · Kenya & Ethiopia · 20 Episodes
      </footer>
    </div>
  );
}