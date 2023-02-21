import data from './data';

const getData = (query = '', isTrending?: boolean) => {
  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isTrending)
    return results.filter((item) => item.isTrending === isTrending);

  return results;
};

export default getData;
