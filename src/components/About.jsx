import { Heart, Globe, Users } from 'lucide-react';

const stats = [
  { label: 'Happy Travelers', value: '10,000+', icon: Heart },
  { label: 'Destinations', value: '50+', icon: Globe },
  { label: 'Expert Guides', value: '100+', icon: Users }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Your Journey Begins with TrekQuest
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Since 2010, TrekQuest has been crafting unforgettable adventures for travelers 
              seeking authentic experiences. Our commitment to responsible tourism and 
              sustainable practices ensures that we preserve the beauty of our destinations 
              for future generations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With expert local guides and carefully curated itineraries, we provide 
              immersive experiences that go beyond typical tourism. Join us in exploring 
              the world is most remarkable destinations.
            </p>
          </div>

          <div className="mt-10 lg:mt-0 grid grid-cols-1 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
