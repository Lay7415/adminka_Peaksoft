export const sendRequest = async (requestConfig) => {
    const requestOptions = {
       method: requestConfig.method || 'GET',
       headers: {
          'Content-Type': 'application/json',
       },
    }
 
    if (requestConfig.method !== 'GET' && requestConfig.body) {
       requestOptions.body = JSON.stringify(requestConfig.body)
    }
    const response = await fetch(requestConfig.url, requestOptions)
   //  if (!response.ok) {
   //     throw new Error(response.message)
   //  }
 
    const contentType = response.headers.get('content-type')
 
    if (contentType.includes('text/plain')) {
       return response.text()
    }
 
    if (contentType.includes('application/json')) {
       return response.json()
    }
 
    return {}
 }