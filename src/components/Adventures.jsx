import AdventureCard from './AdventureCard';

const adventures = [
  {
    title: "Mount Everest Base Camp Trek",
    location: "Nepal",
    duration: "14 Days",
    groupSize: "8-12 People",
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$2,999",
    difficulty: "Hard"
  },
  {
    title: "Amazon Rainforest Expedition",
    location: "Brazil",
    duration: "7 Days",
    groupSize: "6-10 People",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$1,899",
    difficulty: "Moderate"
  },
  {
    title: "Iceland Northern Lights Tour",
    location: "Iceland",
    duration: "5 Days",
    groupSize: "10-15 People",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    price: "$1,499",
    difficulty: "Easy"
  }
];

export default function Adventures() {
  return (
    <section id="adventures" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Adventures</h2>
          <p className="mt-4 text-xl text-gray-600">Choose your next unforgettable experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.title} {...adventure} />
          ))}
        </div>
      </div>
    </section>
  );
}
