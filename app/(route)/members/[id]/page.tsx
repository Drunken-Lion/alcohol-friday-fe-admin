'use client';

import { useGetMemberDetail } from '@/app/_hooks/useMembers';
import { Checkbox, Input } from '@nextui-org/react';
import React from 'react';

export default function MemberDetailPage({ params: { id } }: { params: { id: number } }) {
  const { member, isLoading } = useGetMemberDetail(id);

  if (!member) {
    return null;
  }

  return (
    <div className="m-auto w-1/3 h-full py-6 rounded-lg my-8 bg-content1 overflow-auto shadow-small">
      <div className="flex flex-col gap-[10px] pl-6">
        <Input
          type="text"
          label="ID"
          labelPlacement="outside-left"
          value={member.id.toString()}
          readOnly
        />
        <Input
          type="text"
          label="name"
          labelPlacement="outside-left"
          value={member.name}
          readOnly
        />
        <Input type="text" label="nickname" labelPlacement="outside-left" value={member.nickname} />
        <Input
          type="email"
          label="email"
          labelPlacement="outside-left"
          value={member.email}
          readOnly
        />
        <Input
          type="text"
          label="role"
          labelPlacement="outside-left"
          value={member.role}
          disabled
        />
        <Input
          type="text"
          label="휴대폰 번호"
          labelPlacement="outside-left"
          value={member.phone.toString()}
        />
        <Input
          type="text"
          label="인증일"
          labelPlacement="outside-left"
          value={member.certifyAt}
          readOnly
        />
        <div className="flex flex-row gap-3">
          <span className="text-sm">이용약관 동의</span>
          <Checkbox defaultSelected={member.agreedToServiceUse} />
        </div>
        <div className="flex flex-row gap-3">
          <span className="text-sm">개인정보 수집 이용 안내 동의</span>
          <Checkbox defaultSelected={member.agreedToServicePolicy} />
        </div>
        <div className="flex flex-row gap-3">
          <span className="text-sm">개인정보 활용 동의</span>
          <Checkbox defaultSelected={member.agreedToServicePolicyUse} />
        </div>
        <Input
          type="text"
          label="가입일"
          labelPlacement="outside-left"
          value={member.createdAt}
          readOnly
        />
        <Input
          type="text"
          label="수정일"
          labelPlacement="outside-left"
          value={member.updatedAt}
          readOnly
        />
        <Input
          type="text"
          label="삭제일"
          labelPlacement="outside-left"
          value={member.deletedAt}
          readOnly
        />
      </div>
    </div>
  );
}
