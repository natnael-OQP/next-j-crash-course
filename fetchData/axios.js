import axios from 'axios'

export const fetcher  = async () =>  await (await axios.get('/api/cats')).data
export const idFetcher  = async (url) =>  await (await axios.get(`/api/cats/${url}`)).data