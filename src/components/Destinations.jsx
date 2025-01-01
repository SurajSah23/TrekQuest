import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    name: "Nepal",
    description: "Home to Mount Everest and ancient temples",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Iceland",
    description: "Land of fire and ice, northern lights",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Peru",
    description: "Ancient Incan ruins and Andean peaks",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Destinations</h2>
          <p className="mt-4 text-xl text-gray-600">Explore our most sought-after locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  <p className="text-gray-200">{destination.description}</p>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-indigo-400" />
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-white">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
