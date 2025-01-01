import { Compass, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">TrekQuest</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Embark on unforgettable journeys to the world is most breathtaking destinations. 
              Experience nature is wonders with our expert guides.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#adventures" className="text-gray-400 hover:text-white">Adventures</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">1234 Adventure Ave</li>
              <li className="text-gray-400">Explorers Valley, EX 12345</li>
              <li className="text-gray-400">contact@trekquest.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} TrekQuest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
