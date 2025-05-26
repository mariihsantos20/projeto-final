
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const isCentered = titleAlign === 'center';

  return (
    <section className="w-full">
      <div
        className={`flex items-center justify-between ${
          isCentered ? 'flex-col text-center ' : 'flex-row'
        }`}
      >
        <h2
          className={`text-[24px] font-semibold text-[#4B4B4B] ${
            isCentered ? 'mb-2' : ''
          }`}
        >
          {title}
        </h2>

        {link && !isCentered && (
          <Link
            to={link.href}
            className="text-[#EC4899] text-[18px] hover:underline"
          >
            {link.text}
          </Link>
        )}
      </div>

      <div >
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }),
  children: PropTypes.node,
  titleClassName: PropTypes.string 
};

export default Section;
