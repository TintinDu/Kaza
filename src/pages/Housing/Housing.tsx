import { useParams } from 'react-router-dom';

export const Housing = () => {
  const { housingId } = useParams();
  return (

    <div>
        <h1>Housing</h1>
        <h2>Housing {housingId}</h2>
    </div>
  );
};
