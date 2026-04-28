import Image from "next/image";

interface IgStory {
  type: "story";
  handle: string;
  image: string;
  caption: string;
  rotate: string;
  className: string;
  alt: string;
}

interface DmBubble {
  type: "dm";
  handle: string;
  body: string;
  rotate: string;
  className: string;
}

interface PhotoTile {
  type: "photo";
  image: string;
  rotate: string;
  className: string;
  alt: string;
}

type Tile = IgStory | DmBubble | PhotoTile;

const TILES: Tile[] = [
  {
    type: "story",
    handle: "@abenak.london",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=70",
    caption: "Three weeks in. My skin has never been calmer 🧡 #odobyfelicia",
    rotate: "-rotate-3",
    className: "top-0 left-0 sm:left-[2%] w-44 sm:w-56 z-20",
    alt: "Selfie of woman holding Odo bar",
  },
  {
    type: "dm",
    handle: "ktr_____",
    body: "Reading your story now and I'm already obsessed. I bought a £40 ‘clean’ soap last month that turned out to be full of phthalates — your transparency is a relief. Thank you 🙏🏾",
    rotate: "rotate-2",
    className: "top-8 sm:top-6 left-[40%] sm:left-[28%] w-52 sm:w-64 z-30",
  },
  {
    type: "photo",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=70",
    rotate: "rotate-1",
    className: "top-2 right-0 sm:right-[2%] w-40 sm:w-52 z-10",
    alt: "Woman applying skincare",
  },
  {
    type: "story",
    handle: "@nana.glow",
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=800&q=70",
    caption: "Glow is BACK. This bar is unreal ✨",
    rotate: "rotate-3",
    className: "top-44 sm:top-48 left-[5%] sm:left-[12%] w-44 sm:w-56 z-30",
    alt: "Smiling woman with radiant skin",
  },
  {
    type: "dm",
    handle: "tom__",
    body: "Hey — bought the Ritual Set for my mum's birthday and she actually called me crying. The handwoven pouch sealed it. Best £35 I've ever spent.",
    rotate: "-rotate-2",
    className: "top-56 sm:top-64 right-[3%] sm:right-[6%] w-52 sm:w-64 z-20",
  },
  {
    type: "photo",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=70",
    rotate: "-rotate-3",
    className: "top-72 sm:top-[19rem] left-[40%] sm:left-[36%] w-40 sm:w-52 z-10",
    alt: "Hand holding a bar of natural soap",
  },
  {
    type: "story",
    handle: "@drsarah_skin",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=70",
    caption: "An ingredient list I can stand behind. Recommending to all my sensitive-skin patients.",
    rotate: "rotate-1",
    className: "top-[26rem] sm:top-[30rem] left-[3%] sm:left-[8%] w-44 sm:w-56 z-20",
    alt: "Dermatologist headshot",
  },
  {
    type: "dm",
    handle: "akosua.m",
    body: "As a Ghanaian woman this feels like coming home. The scent, the texture, the story behind it — Felicia has bottled something truly special 🇬🇭",
    rotate: "rotate-3",
    className: "top-[27rem] sm:top-[31rem] right-[2%] sm:right-[10%] w-52 sm:w-64 z-30",
  },
  {
    type: "photo",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=70",
    rotate: "-rotate-1",
    className: "top-[30rem] sm:top-[34rem] left-[42%] sm:left-[40%] w-44 sm:w-56 z-10",
    alt: "Handmade soap bars",
  },
];

const REVIEWS = [
  {
    quote:
      "I'd struggled with hormone imbalances for years and had no idea my soap could be a contributing factor. Since switching to Odo, my skin feels completely different — softer, calmer, alive. I'll never go back.",
    name: "Abena K.",
    location: "London, UK",
    stars: 5,
  },
  {
    quote:
      "As a Ghanaian woman, this soap feels like coming home. The scent, the texture, the story behind it — Felicia has bottled something truly special. It's ancestral wisdom in your hands.",
    name: "Akosua M.",
    location: "Accra, Ghana",
    stars: 5,
  },
  {
    quote:
      "I'm a dermatologist and I'm genuinely impressed. The ingredient list is something I can actually stand behind — no parabens, no sulphates, no synthetic fragrance. My patients with sensitive skin love it.",
    name: "Dr. Sarah T.",
    location: "Birmingham, UK",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 bg-brand-black-soft overflow-hidden">
      <div className="w-full max-w-7xl xl:max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="adinkra-line w-8 sm:w-10" />
            <span className="text-xs tracking-[0.28em] uppercase text-brand-purple-light">Stories</span>
            <div className="adinkra-line w-8 sm:w-10" />
          </div>
          <h2 className="font-display font-bold text-brand-cream
            text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl mb-5">
            What women are <span className="gradient-text">actually saying</span>
          </h2>
          <p className="text-brand-cream/60 text-base sm:text-lg xl:text-xl leading-relaxed max-w-2xl">
            We don&apos;t pay for testimonials and we don&apos;t curate them. These are the DMs, the stories, and the reposts —
            messy, real, and rolling in faster than we can answer.
          </p>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 mb-12 sm:mb-14 py-5 px-6 rounded-2xl bg-brand-black-card/60 border border-white/5">
          <TrustItem big="4.9" small="Average rating · 207 reviews" />
          <TrustDivider />
          <TrustItem big="3,400+" small="Happy customers in 14 countries" />
          <TrustDivider />
          <TrustItem big="91%" small="Buy again within 90 days" />
          <TrustDivider />
          <TrustItem big="0" small="Synthetic ingredients · ever" />
        </div>

        {/* Collage */}
        <div className="relative w-full h-[44rem] sm:h-[44rem] lg:h-[40rem] mb-14 sm:mb-16">
          {TILES.map((tile, i) => (
            <Tile key={i} tile={tile} />
          ))}
        </div>

        {/* Card reviews */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <span className="text-xs tracking-[0.28em] uppercase text-brand-amber mb-3">Verified reviews</span>
          <h3 className="font-display font-bold text-brand-cream text-2xl sm:text-3xl xl:text-4xl">
            Felt by those who know
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 2xl:gap-8">
          {REVIEWS.map(({ quote, name, location, stars }) => (
            <div key={name} className="flex flex-col p-7 xl:p-8 rounded-2xl bg-brand-black-card border border-white/5 hover:border-brand-purple/20 transition-all duration-300">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-brand-amber text-lg">★</span>
                ))}
              </div>
              <p className="text-brand-cream/70 text-sm xl:text-base leading-relaxed flex-1 mb-6">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {name[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm xl:text-base font-medium text-brand-cream truncate">{name}</p>
                  <p className="text-xs xl:text-sm text-brand-cream/30 truncate">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TrustItem({ big, small }: { big: string; small: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-display text-2xl sm:text-3xl font-bold text-brand-amber leading-none mb-1.5">{big}</span>
      <span className="text-[11px] sm:text-xs tracking-wide text-brand-cream/50">{small}</span>
    </div>
  );
}

function TrustDivider() {
  return <div className="hidden sm:block w-px h-10 bg-white/10" />;
}

function Tile({ tile }: { tile: Tile }) {
  const base = `absolute ${tile.className} ${tile.rotate} transition-transform duration-300 hover:rotate-0 hover:scale-[1.04] hover:z-40 cursor-default`;
  if (tile.type === "story") return <StoryTile tile={tile} className={base} />;
  if (tile.type === "dm") return <DmTile tile={tile} className={base} />;
  return <PhotoTileEl tile={tile} className={base} />;
}

function StoryTile({ tile, className }: { tile: IgStory; className: string }) {
  return (
    <div className={className}>
      <div className="rounded-2xl overflow-hidden bg-brand-black border-[3px] border-white shadow-2xl">
        {/* Story header */}
        <div className="px-2.5 py-2 flex items-center gap-2 bg-gradient-to-r from-brand-orange/95 to-brand-purple/95">
          <div className="w-6 h-6 rounded-full bg-white/30 border-2 border-white shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold text-white truncate">{tile.handle}</span>
        </div>
        {/* Image */}
        <div className="relative aspect-[3/4] bg-brand-black-card">
          <Image src={tile.image} alt={tile.alt} fill sizes="240px" className="object-cover" />
          <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/85 to-transparent">
            <p className="text-[10px] sm:text-[11px] text-white font-medium leading-snug line-clamp-2">{tile.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DmTile({ tile, className }: { tile: DmBubble; className: string }) {
  return (
    <div className={className}>
      <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* DM header */}
        <div className="px-3 py-2 border-b border-gray-200 flex items-center gap-2">
          <span className="text-gray-400 text-base leading-none">‹</span>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple shrink-0" />
          <span className="text-[10px] sm:text-xs text-gray-700 font-medium truncate flex-1">{tile.handle}</span>
          <span className="text-gray-300 text-xs">ⓘ</span>
        </div>
        {/* Bubble */}
        <div className="px-3 py-3 bg-white">
          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2.5">
            <p className="text-[10px] sm:text-[11px] text-gray-800 leading-snug">{tile.body}</p>
          </div>
          <p className="text-[9px] text-gray-400 mt-1.5 ml-1">just now</p>
        </div>
      </div>
    </div>
  );
}

function PhotoTileEl({ tile, className }: { tile: PhotoTile; className: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-black-card border-[3px] border-white shadow-2xl">
        <Image src={tile.image} alt={tile.alt} fill sizes="220px" className="object-cover" />
      </div>
    </div>
  );
}
