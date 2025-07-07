import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center" style={{ width: '150px' }}>
      {/* Más adelante, puedes reemplazar este SVG con tu componente de logo 3D */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="h-10 w-auto">
        <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#logo-gradient)" />
        <path d="M50 12.5L82.45 31.25V68.75L50 87.5L17.55 68.75V31.25L50 12.5Z" stroke="black" strokeWidth="2" />
        <text x="50" y="58" fontFamily="Arial, sans-serif" fontSize="30" fill="white" textAnchor="middle" fontWeight="bold">F</text>
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};
export default Logo;