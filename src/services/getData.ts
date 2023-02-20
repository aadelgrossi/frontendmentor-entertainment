import data from './data';

const getData = (query = '') => {
  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  return results;
};

export default getData;
