import * as axios from 'axios';

const ins = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2/'
});

class SofService {
  getResponse = async (url) => {
    const res = await ins.get(url);

    if (res.statusText !== "OK") {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    
    return res.data;
  }
  getQuestions = (url) => {
    return this.getResponse(url);
  }
  getTags(url) {
    return this.getResponse(url)
  }
};

export default new SofService();