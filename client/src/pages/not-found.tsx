import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-jjm-primary to-jjm-accent">
      <div className="text-center text-white px-6">
        <h1 className="text-8xl font-bold mb-8">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8 opacity-90">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-white text-jjm-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}