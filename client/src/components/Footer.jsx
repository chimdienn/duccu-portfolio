// Footer Component

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/chimdienn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://www.facebook.com/duckukie/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-facebook text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/_duckieee_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/quytrongductran/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin text-2xl text-gray-400 hover:text-white"></i>
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-2">Quy Trong Duc Tran</h3>
          <p className="text-gray-400 text-sm">
            Copyright © 2025 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
