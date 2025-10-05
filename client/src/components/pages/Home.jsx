// Home Page Component
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 fade-in">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-6">
            Hello, I'm <span className="gradient-text">Quy Trong Duc Tran</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            A passionate full-stack developer with expertise in creating elegant
            solutions to complex problems. I specialize in building modern web
            applications that deliver exceptional user experiences.
          </p>

          <div className="gradient-border rounded-lg mb-16 max-w-2xl">
            <div className="gradient-border-inner">
              <h2 className="text-2xl font-semibold mb-4">
                Interested? Find out more about my technical skills and
                background
              </h2>
              <button
                onClick={() => navigate("/about")}
                className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/experience"
              className="card-hover bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <i className="fas fa-briefcase text-4xl gradient-text mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Experience</h3>
              <p className="text-gray-400">
                Explore my professional journey and achievements
              </p>
            </Link>

            <Link
              to="/projects"
              className="card-hover bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <i className="fas fa-code text-4xl gradient-text mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Projects</h3>
              <p className="text-gray-400">
                Discover my latest work and innovations
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
