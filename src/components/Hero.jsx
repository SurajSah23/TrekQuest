import { ArrowRight } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';
import BookingModal from './BookingModal';

export default function Hero() {
  const { isModalOpen, closeModal, handleBooking } = useBooking();

  const scrollToAdventures = () => {
    document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mountain landscape"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Discover Your Next</span>
              <span className="block text-indigo-400">Adventure</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Embark on unforgettable journeys to the world is most breathtaking destinations. 
              Experience nature is wonders with our expert guides.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button 
                onClick={scrollToAdventures}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={scrollToAbout}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleBooking}
      />
    </>
  );
}
