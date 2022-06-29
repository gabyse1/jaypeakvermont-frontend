import { Link, useLocation } from 'react-router-dom';

const TourItemDetails = () => {
  const { state } = useLocation();

  const setCurrencyFormat = (number) => (
    number.toLocaleString('en-US', { style: 'currency', currency: 'USA' })
  );

  return (
    <div className="section__main">
      <div className="section__main-image">
        <img src={state.image_url} alt={'Tour photo '.concat(state.id)} />
      </div>
      <div className="section__main-features">
        <h2>{state.name}</h2>
        <p>{state.description}</p>
        <ul>
          <li>
            <span>Duration:</span>
            <span>{`${state.duration} days tour`}</span>
          </li>
          <li>
            <span>Up to:</span>
            <span>{`${state.capacity} people`}</span>
          </li>
          <li>
            <span>Tour guides:</span>
            <span>{state.guides}</span>
          </li>
          <li>
            <span>Sleep in:</span>
            <span>{state.lodging}</span>
          </li>
          <li>
            <span>Difficulty:</span>
            <span>{state.difficulty}</span>
          </li>
          <li>
            <span>Price:</span>
            <span>{setCurrencyFormat(state.price)}</span>
          </li>
        </ul>
        <Link to="/reserve" state={state} />
      </div>
      <div className="section__main-options">
        <Link to="/reserve" state={state} className="link__btn">RESERVE</Link>
      </div>
    </div>
  );
};

export default TourItemDetails;
