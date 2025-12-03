import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary-light border-b-2 border-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <img src="/src/images/HeaderIcon.png" alt="Logo" className="w-10" />
            <Link to="/" className="text-2xl font-black italic text-primary">
              Kaelan
            </Link>
          </div>
          <div className="flex gap-8">
            <Link
              to="/"
              className="text-primary hover:text-accent-dark transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/cv"
              className="text-primary hover:text-accent-dark transition-colors font-medium"
            >
              CV
            </Link>
            <Link
              to="/writing"
              className="text-primary hover:text-accent-dark transition-colors font-medium"
            >
              Writing
            </Link>
            {/* <Link
              to="/art"
              className="text-primary hover:text-accent-dark transition-colors font-medium"
            >
              Art
            </Link> */}
            <Link
              to="/portfolio"
              className="text-primary hover:text-accent-dark transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="https://kaelan.substack.com"
              className="text-accent hover:text-accent-dark transition-colors font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
