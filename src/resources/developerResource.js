import { PORTFOLIO_DEVELOPER_API } from './api'

export const developerRetrieveLoggedApi = () => {
  return PORTFOLIO_DEVELOPER_API.get('/api/v1/developers', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });
}