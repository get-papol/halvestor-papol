const PlayIcon = () => (
  <svg
    className="w-6 h-6 fill-current text-secondary-400 group-hover:text-primary-600 flex-shrink-0"
    viewBox="0 0 16 16"
  >
    <polygon points="5,3 14,8 5,13" />
  </svg>
);

const PlayButton = () => (
  <button
    type="button"
    className="w-auto absolute top-full left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl hover:shadow-2xl transition-shadow"
    aria-label="play video"
  >
    <PlayIcon />
    <span className="ml-3">Watch: How Halvestor Works (3 min)</span>
  </button>
);

const VideoSection = () => (
  <section className="bg-gradient-to-b from-secondary-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col max-w-4xl mx-auto pt-28 pb-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">See Halvestor in Action</h2>
          <p className="text-lg text-secondary-600">
            Discover how easy it is to invest according to your Islamic values with our platform.
          </p>
        </div>
        <div className="w-full">
          <div className="relative shadow-2xl mx-6 lg:mx-0">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg aspect-video flex items-center justify-center">
              {/* Video placeholder - replace with actual video */}
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-secondary-600 font-medium">Interactive Demo Video</p>
              </div>
            </div>
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
