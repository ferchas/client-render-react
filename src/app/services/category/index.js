import Config from '../../../../config/default.json';

const category = () => {
  return fetch(`${Config.api.host}${Config.api.basePath}/sources?apiKey=${Config.api.apiKey}`)
    .then(res => res.json())
    .then(data => {
      let newList = [];
      data['sources'].forEach(element => {
        if (!newList.includes(element.category)) {
          newList.push(element.category);
        }
      });
      return newList;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default category;