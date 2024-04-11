const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  KAKAO: 'Kakao',
  NOSIGNIN: 'NoLogin',
} as const;

const bottomtabNavigations = {
  HOME: 'Home',
  STORE: 'Store',
  PRODUCT: 'Product',
  REVIEW: 'Review',
  MYPAGE: 'MyPage',
} as const;

export {authNavigations, bottomtabNavigations};
