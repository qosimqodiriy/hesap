export default {
  async getImages(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/images', {
          headers: {
            Language: params,
          },
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
