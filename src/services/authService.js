import { signConfirm, signIn, signUp } from '../resources/authResource'
import { mapToCreated, mapToBadRequest, mapToOk } from './service'

export const signUpService = async (data) => {
  return signUp(data)
    .then(mapToCreated)
    .catch(mapToBadRequest)
}

export const signInService = async (data) => {
  return signIn(data)
    .then(mapToOk)
    .catch(mapToBadRequest)
}

export const signConfirmService = async (data) => {
  return signConfirm(data)
    .then(mapToOk)
    .catch(mapToBadRequest)
}