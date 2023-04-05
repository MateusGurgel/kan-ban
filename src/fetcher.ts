import axios from 'axios';
import { timeout } from './config';

const fetcher = async (url: string) => {
  const config = {
    timeout: timeout,
  };

  const response = await axios.get(url, config);
  return response.data;
};

export default fetcher;