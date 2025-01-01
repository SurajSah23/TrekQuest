import { useState } from 'react';

export function useBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = (data) => {
    // In a real app, this would make an API call to save the booking
    console.log('Booking submitted:', data);
    alert('Thank you for your booking! We will contact you shortly.');
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal: () => setIsModalOpen(true),
    closeModal: () => setIsModalOpen(false),
    handleBooking,
  };
}
