import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AllMemberResponse, MemberDetail } from '../_types/member';
import { getMember, getMembers } from '../_service/members';

export const useGetMembers = (page = 0, size = 20) => {
  const { data: members, isLoading } = useQuery<AllMemberResponse, AxiosError>({
    queryKey: ['get-members', page],
    queryFn: () => getMembers(page, size),
    placeholderData: keepPreviousData,
  });

  return { members, isLoading };
};

export const useGetMember = (id: number) => {
  const { data: member, isLoading } = useQuery<MemberDetail, AxiosError>({
    queryKey: ['get-member', id],
    queryFn: () => getMember(id),
    placeholderData: keepPreviousData,
  });

  return { member, isLoading };
};
