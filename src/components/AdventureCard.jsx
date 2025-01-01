import PropTypes from 'prop-types'; // Import PropTypes
import { Calendar, MapPin, Users } from 'lucide-react';

function AdventureCard({
  title,
  location,
  duration,
  groupSize,
  image,
  price,
  difficulty
}) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-indigo-600">{price}</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Define prop types for validation
AdventureCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  groupSize: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['Easy', 'Moderate', 'Hard']).isRequired
};

export default AdventureCard;
