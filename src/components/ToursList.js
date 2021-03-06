import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TourItem from './TourItem';
import { getToursAPI } from '../redux/tours/toursReducer';

const ToursList = () => {
  const dispatch = useDispatch();
  const toursList = useSelector((store) => store.toursReducer);
  console.log(toursList);

  useEffect(() => {
    dispatch(getToursAPI());
  }, []);

  return (
    <ul className="tours_list row">
      {
        toursList.length > 0 && toursList.map((tour) => <TourItem key={tour.id} tourItem={tour} />)
      }
    </ul>
  );
};

export default ToursList;
