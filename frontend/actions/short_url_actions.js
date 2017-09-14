import * as APIUtil from '../util/short_url_api_util';

const RECEIVE_SHORT_URL = 'RECEIVE_SHORT_URL'
const RECEIVE_SHORT_URLS = 'RECEIVE_SHORT_URLS'

export const receiveShortUrl = (shortUrl) => ({
  type: RECEIVE_SHORT_URL,
  shortUrl
})

export const receiveShortUrls = (shortUrls) => ({
  type: RECEIVE_SHORT_URLS,
  shortUrls
})

export const requestShortUrls = () => dispatch => (
  APIUtil.fetchShortUrls()
    .then((shortUrls) => (
      dispatch(receiveShortUrls(shortUrls))
    ))
);

export const createShortUrl = (shortUrl) => dispatch => (
  APIUtil.createShortUrl(shortUrl)
    .then((shortUrl) => (
      dispatch(receiveShortUrls(shortUrl))
    ))
);

export const updateLead = (shortUrl) => dispatch => (
  APIUtil.updateShortUrl(shortUrl)
    .then((shortUrl) => (
      dispatch(receiveShortUrls(shortUrl))
    ))
);
