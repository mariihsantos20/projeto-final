import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import { Image } from 'primereact/image';
import logo from '../assets/logo-header.svg';


const Logo = () => {
    return ( <div>
        <Image
        src={logo}
        alt="Logo"
        width="253px"
        height="44px"

        />

    </div>
  );
}
 
export default Logo;