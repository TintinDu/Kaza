import { data } from '../../data/data.ts';

export const Cards = () => {
  console.log(data);

  return (
        <div> {data.map((item) => item.description)}</div>
  );
};
