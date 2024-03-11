import CryptoJS from 'crypto-js';

export function useGetPassword() {
  const timestamp = new Date().toISOString().slice(0, 10).split('-').join('');
  const password = 'Valantis';
  const data = `${password}_${timestamp}`;

  const authorizationString = CryptoJS.MD5(data).toString();

  return authorizationString;
}