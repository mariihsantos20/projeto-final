import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Informacoes = ({ title, informations }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-3 text-[#ffffff]">{title}</h3>
      <ul className="flex flex-col gap-2">
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link} className="text-[#ffffff] hover:text-[#ffffff] hover:underline">
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


Informacoes.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Informacoes;
