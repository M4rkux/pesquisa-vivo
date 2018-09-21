const URL_API = 'https://formcarry.com/s/6N2Chqopqjz/'
export class SurveyService {
  static create (survey) {
    return window.fetch(URL_API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(survey)
    })
  }
}
