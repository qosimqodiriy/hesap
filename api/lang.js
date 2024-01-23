/* eslint-disable */

export default {
  async getTranslations(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/translations', {
          headers: {
            Language: lang,
          },
        })
        return res
      }
      return res.data.data
    } catch (e) {
      console.log(e)
    }
  },
}
