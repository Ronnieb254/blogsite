import { ArrowRight, Calendar, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    title: 'RIFT',
    slug: 'rift',
    genre: 'Action Thriller',
    episodes: 20,
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
    description:
      'A disavowed intelligence agent uncovers a continent-wide surveillance conspiracy stretching from Nairobi to Addis Ababa.',
    date: '2026',
  },
  {
    id: 2,
    title: 'BLACK DUST',
    slug: 'black-dust',
    genre: 'Crime Drama',
    episodes: 12,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop',
    description:
      'In the shadows of Nairobi’s underground economy, loyalty is currency and betrayal is survival.',
    date: '2026',
  },
  {
    id: 3,
    title: 'THE LAST KINGDOM OF KUSH',
    slug: 'last-kingdom-of-kush',
    genre: 'Historical Epic',
    episodes: 10,
    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1400&auto=format&fit=crop',
    description:
      'An ancient African kingdom fights to preserve its legacy against invaders and internal betrayal.',
    date: '2027',
  },
];

const Stories = () => {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[6px] text-red-500 text-xs mb-6">
              Original Stories
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Cinematic Universes
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              Explore original African stories, thrillers, crime dramas, and
              cinematic worlds crafted for modern audiences.
            </p>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="py-20">
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Link
                key={story.id}
                to={`/story/${story.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] hover:border-red-500/40 transition-all duration-500 hover:-translate-y-2"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* BADGES */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                      {story.genre}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center text-gray-300 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {story.date}
                    </div>

                    <h2 className="text-3xl font-bold mb-3 transition-colors duration-300 group-hover:text-red-500">
                      {story.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-5 line-clamp-3">
                      {story.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Film className="w-4 h-4 mr-2" />
                        {story.episodes} Episodes
                      </div>

                      <div className="inline-flex items-center text-sm font-semibold uppercase tracking-wide text-white group-hover:text-red-500 transition-colors duration-300">
                        View Story
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stories;