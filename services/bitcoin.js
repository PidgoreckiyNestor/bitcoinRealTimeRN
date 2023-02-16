import axiosInstance from './axiosInstance';

const bitcoin = {
  getBitcoinLatest: () => {
    const url = `/v1/cryptocurrency/quotes/latest`;
    return axiosInstance.get(url, {params: {id: 1, CMC_PRO_API_KEY: 'b86ff6c0-b87c-4b41-8b6a-185d906cc383'}});
  },
};
export default bitcoin;
