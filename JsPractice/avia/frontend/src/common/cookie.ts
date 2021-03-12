import Cookies from 'js-cookie';

const getCookie = (name: string) => {
  const cookie = Cookies.get(name);

  return cookie;
};

const setCookie = (name: string, value: any) => {
  Cookies.set(name, value);
};

export { getCookie, setCookie };