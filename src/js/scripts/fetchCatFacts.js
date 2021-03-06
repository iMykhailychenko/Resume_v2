export default {
  fetchFacts(callback, page) {
    const url = `https://catfact.ninja/`;
    const param = `facts?limit=10&page=${page}`;

    return fetch(url + param)
      .then(response => response.json())
      .then(info => {
        callback(info.data);
      })
      .catch(error => {
        console.warn('Fetch Error:' + error);
      });
  },
};