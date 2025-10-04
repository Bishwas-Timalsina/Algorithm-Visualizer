import { ChevronRight, LayoutGrid } from "lucide-react";
 
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  const paths = segments.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <div className="flex items-center text-gray-400 space-x-2">
      <LayoutGrid className="w-4 h-4" />
      <span className="text-sm">|</span>

      <nav className="flex items-center space-x-1">
        <Link to="/" className="text-sm hover:text-gray-300 transition">
          Home
        </Link>

        {paths.map((segment, i) => (
          <div key={i} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4" />
            {i === paths.length - 1 ? (
              <span className="text-sm text-white font-medium">
                {segment.name}
              </span>
            ) : (
              <Link
                to={segment.path}
                className="text-sm hover:text-gray-300 transition"
              >
                {segment.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
export default Breadcrumb;
