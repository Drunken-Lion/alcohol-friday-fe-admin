import { Member } from './member';

export interface Session {
  user: Member;
  accessToken: string;
  accessTokenExp: number;
  refreshToken: string;
}
