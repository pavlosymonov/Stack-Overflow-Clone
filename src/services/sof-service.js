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
  getTags() {
    return [
        {
          "count": 2107426,
          "name": "javascript"
        },
        {
          "count": 1723466,
          "name": "java"
        },
        {
          "count": 1563780,
          "name": "python"
        },
        {
          "count": 1442844,
          "name": "c#"
        },
        {
          "count": 1375699,
          "name": "php"
        },
        {
          "count": 1304948,
          "name": "android"
        },
        {
          "count": 1029575,
          "name": "html"
        },
        {
          "count": 999693,
          "name": "jquery"
        },
        {
          "count": 696695,
          "name": "c++"
        },
        {
          "count": 688899,
          "name": "css"
        },
        {
          "count": 643118,
          "name": "ios"
        },
        {
          "count": 609825,
          "name": "mysql"
        }
    ];
  }
};

export default new SofService();