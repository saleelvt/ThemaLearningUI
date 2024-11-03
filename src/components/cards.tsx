
const CurvedSliderCards = () => {
    return (
      <div className="relative w-full bg-white">
        {/* Top curved divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-16"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z"
              className="fill-purple-50"
            />
          </svg>
        </div>
  
        {/* Content section */}
        <div className="bg-gradient-to-r from-yellow-50 to-purple-100 py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-8 shadow-lg w-64 text-center transform hover:-translate-y-2 transition-transform duration-300 ">
  <div className="text-6xl font-bold text-purple-800">3</div>
  <div className="text-purple-600 mt-2">main layout variations</div>
</div>


              {/* Card 2 */}
              <div className="bg-white rounded-lg p-8 shadow-lg w-64 text-center transform hover:-translate-y-2 transition-transform duration-300 rotate-3">
                <div className="text-6xl font-bold text-purple-800">20</div>
                <div className="text-purple-600 mt-2">prebuilt static pages</div>
              </div>
  
              {/* Card 3 */}
              <div className="bg-white rounded-lg p-8 shadow-lg w-64 text-center transform hover:-translate-y-2 transition-transform duration-300 rotate-12 bg-inherit">
                <div className="text-6xl font-bold text-purple-800">10</div>
                <div className="text-purple-600 mt-2">ready-made CMS pages</div>
              </div>
  
              {/* Card 4 */}
              <div className="bg-white rounded-lg p-8 shadow-lg w-64 text-center transform hover:-translate-y-2 transition-transform duration-300 rotate-45">
                <div className="text-6xl font-bold text-purple-800">50+</div>
                <div className="text-purple-600 mt-2">sections in the UI Kit</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom curved divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-16"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  export default CurvedSliderCards;