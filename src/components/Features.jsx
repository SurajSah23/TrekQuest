import { Shield, Map, Award, Clock } from 'lucide-react';

const features = [
  {
    name: 'Expert Guides',
    description: 'Our certified guides have years of experience and local knowledge.',
    icon: Shield
  },
  {
    name: 'Curated Routes',
    description: 'Carefully planned routes that showcase the best of each destination.',
    icon: Map
  },
  {
    name: 'Quality Equipment',
    description: 'Top-grade equipment and gear provided for all adventures.',
    icon: Award
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey.',
    icon: Clock
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose TrekQuest</h2>
          <p className="mt-4 text-xl text-gray-600">We provide everything you need for an unforgettable adventure</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="absolute h-16 w-16 bg-indigo-100 rounded-xl -left-8 -top-8 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
