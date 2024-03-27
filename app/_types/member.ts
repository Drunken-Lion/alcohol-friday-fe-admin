export interface Member {
  id: number;
  email: string;
  name: string;
  nickname?: string;
  phone: number;
  provider: string;
  role: String;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface MemberDetail {
  id: number;
  email: string;
  name: string;
  nickname?: string;
  phone: number;
  provider: string;
  role: string;
  certifyAt: string;
  agreedToServiceUse: boolean;
  agreedToServicePolicy: boolean;
  agreedToServicePolicyUse: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface AllMemberResponse {
  data: Member[];
  pageInfo: {
    size: number;
    count: number;
  };
}
