import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get Adventure Updates
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Subscribe to our newsletter for exclusive deals and travel tips
          </p>
        </div>

        <form className="mt-8 sm:flex justify-center max-w-2xl mx-auto">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full sm:w-auto rounded-md px-4 py-3 bg-white text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span className="flex items-center justify-center">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
