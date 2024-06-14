export const mapToOk = (response) => {
  return { status: response.status, data: response.data };
}

export const mapToCreated = (response) => {
  return { status: response.status };
}

export const mapToBadRequest = (error) => {
  return { status: error.status, data: error.response.data };
}
