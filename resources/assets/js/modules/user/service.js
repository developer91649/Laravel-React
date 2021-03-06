import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as userActions from './store/actions'


function transformRequest(params) {
    return Transformer.send(params)
}

function transformResponse(params) {
    return Transformer.fetch(params)
}

export function userUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('/companies/su', Transformer.send(params))
        .then(res => {
          const data = Transformer.fetch(res.data)
          dispatch(userActions.userUpdate(transformResponse(data)))
          return resolve(data)
        })
          .catch((err) => {
              const statusCode = err.response.status;
              const data = {
                  error: null,
                  statusCode,
              };

              if (statusCode === 422) {
                  const resetErrors = {
                      errors: err.response.data.errors,
                      replace: false,
                      searchStr: '',
                      replaceStr: '',
                  };
                  data.error = Transformer.resetValidationFields(resetErrors);
              } else if (statusCode === 401) {
                  data.error = err.response.data.message;
              }
              return reject(data);
          })
    })
  )
}

export function getUsers(){
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('companies/ul')
                .then(res => {
                    const data = Transformer.fetch(res.data)
                    dispatch(userActions.getUsers(transformResponse(data)))
                    return resolve()
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

export function addUser(user){
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('companies/su', transformRequest(user))
                .then((res) => {
                    const data = transformResponse(res.data);
                    dispatch(userActions.addUser(data))
                    return resolve(data)
                })
                .catch((err) => {
                    // TODO: handle err
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

export function getUser(user){
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('companies/gu', transformRequest(user))
                .then((res) => {
                    const data = transformResponse(res.data);
                    dispatch(userActions.getUser(data))
                    return resolve(data)
                })
                .catch((err) => {
                    // TODO: handle err
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

export function deleteUser(user){
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('companies/du', transformRequest(user))
                .then((res) => {
                    const data = transformResponse(res.data);
                    dispatch(userActions.deleteUser(data))
                    return resolve(data)
                })
                .catch((err) => {
                    // TODO: handle err
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}

export function updateUserStatus(params) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('/companies/sus', Transformer.send(params))
                .then(res => {
                    const data = Transformer.fetch(res.data)
                    dispatch(userActions.userUpdateStatus(transformResponse(data)))
                    return resolve(data)
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };

                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    return reject(data);
                })
        })
    )
}
