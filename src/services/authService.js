import { signUp } from '../resources/authResource'
import { mapToCreated, mapToBadRequest } from './service'

export const signUpService = async (data) => {
  return signUp(data)
    .then(mapToCreated)
    .catch(mapToBadRequest)
}
