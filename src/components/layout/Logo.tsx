import { Link } from 'react-router-dom';
import logoPng from '../../assets/logo.png'; // Importa la imagen PNG

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center" style={{ width: '150px' }}>
      <img src={logoPng} alt="Futurlogix Logo" className="h-10 w-auto" />
    </Link>
  );
};
export default Logo;