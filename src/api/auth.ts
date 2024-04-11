import axios from 'axios';
import axiosInstance from './axios';

type RequestUser = {
  email: string;
  password: string;
};

const postSignUp = async ({email, password}: RequestUser): Promise<void> => {
  const {data} = await axiosInstance.post('/auth/signip', {email, password});

  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const {data} = await axiosInstance.post('/auth/signin', {email, password});

  return data;
};

// 로그인한 유저의 프로필 정보를 요청
const getProfile = async () => {};

// 토큰을 리프레쉬 하는 api
const getAccessToken = async () => {};

// 로그아웃 함수
const logout = async () => {
  await axiosInstance.post('/auth/logout');
};

/* Kakao Login muataion 구현*/
const kakaoLogin = async (token: string): Promise<ResponseToken> => {
  const {data} = await axiosInstance.post('/auth/oauth/kakao', {token});

  return data;
};

export type {RequestUser, ResponseToken};
export {postLogin, logout, kakaoLogin};
