interface Profile {
  id: number;
  email: string;
  nickname: string | null;
  imgageUri: string | null;
  kakakoImageUri: string | null;
  loginType: 'kakao' | 'email' | 'apple' | 'google';
}

export type {Profile};
