import axiosInstance from './axiosInstance';

const bitcoin = {
  getBitcoinLatest: () => {
    const url = `pokemon/?offset=${0}&limit=${10}`;
    return axiosInstance.get(url);
  },
};
export default bitcoin;
