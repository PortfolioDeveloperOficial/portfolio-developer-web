import { PORTFOLIO_DEVELOPER_API } from './api'

export const signUp = (data) => {
  return PORTFOLIO_DEVELOPER_API.post('/api/v1/sign-up', data);
}
