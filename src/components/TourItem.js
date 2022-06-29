import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const TourItem = ({ tourItem }) => (
  <li className="list__item column">
    <div className="card">
      <div className="card__picture">
        <img src={tourItem.image_url} alt={'tour image '.concat(tourItem.id)} />
      </div>
      <h4 className="card__heading">
        <span className="card__heading-span">{tourItem.name}</span>
      </h4>
      <div className="card__details">
        <ul>
          <li>
            {tourItem.duration}
            {' '}
            day tours
          </li>
          <li>
            Difficulty:
            {tourItem.difficulty}
          </li>
        </ul>
      </div>
    </div>
    <Link to={`/details/${tourItem.name.replace(/ /, '-')}`} state={tourItem}>DETAILS</Link>
  </li>
);

TourItem.propTypes = {
  tourItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TourItem;
