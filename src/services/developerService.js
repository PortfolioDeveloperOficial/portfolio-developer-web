import { developerRetrieveLoggedApi } from '@/resources/developerResource.js'
import { mapToBadRequest, mapToOk } from '@/services/service.js'


export const developerRetrieveLogged = async () => {
  return developerRetrieveLoggedApi()
    .then(mapToOk)
    .catch(mapToBadRequest)
}