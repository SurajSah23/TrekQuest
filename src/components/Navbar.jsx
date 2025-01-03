import { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';
import BookingModal from './BookingModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isModalOpen, openModal, closeModal, handleBooking } = useBooking();

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TrekQuest</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</a>
                <a href="#adventures" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Adventures</a>
                <a href="#destinations" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Destinations</a>
                <a href="#about" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">About</a>
                <button 
                  onClick={openModal}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#adventures" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Adventures</a>
              <a href="#destinations" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Destinations</a>
              <a href="#about" className="block text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</a>
              <button 
                onClick={openModal}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleBooking}
      />
    </>
  );
}
