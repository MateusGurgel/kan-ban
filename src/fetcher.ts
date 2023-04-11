import { api } from './config';
import { UserService } from './services/UserService';

const fetcher = async (url: string) => {

  if (UserService.token.get()){
    UserService.token.addInAuthorizationHeader()
  }

  const response = await api.get(url);
  return response.data;
};

export default fetcher;