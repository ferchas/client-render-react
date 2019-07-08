import Config from '../../../../config/default.json';

const headlines = (category = null) => {
  return fetch(`${Config.api.host}${Config.api.basePath}/top-headlines?country=${Config.api.country}${category ? `&category=${category}`: ''}&apiKey=${Config.api.apiKey}`)
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export default headlines;