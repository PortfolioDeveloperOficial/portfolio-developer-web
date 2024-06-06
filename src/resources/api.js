import axios from 'axios'

const PORTFOLIO_DEVELOPER_API = axios.create({
  baseURL: 'http://localhost:8080'
});

export {
  PORTFOLIO_DEVELOPER_API,
}
