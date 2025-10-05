// Contact Page Component
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:your.email@example.com";
  };

  return (
    <div className="pt-32 fade-in">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold gradient-text mb-12">
            Wanna get in touch?
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-12 border border-gray-800 max-w-lg">
            <i className="fas fa-envelope text-6xl gradient-text mb-6"></i>
            <p className="text-2xl mb-8">your.email@example.com</p>

            <button
              onClick={handleEmailClick}
              className="gradient-bg text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
            >
              SAY HELLO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
