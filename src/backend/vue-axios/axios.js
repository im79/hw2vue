/* global localStorage */

import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL  || 'http://authserver'

export default axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Access-Control-Allow-Origin, access-control-allow-headers',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})