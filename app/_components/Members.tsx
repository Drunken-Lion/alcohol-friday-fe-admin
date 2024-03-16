'use client';

import { useEffect } from 'react';
import { getMembers } from '../_service/members';

export default function Members() {
  useEffect(() => {
    memberList();
  }, []);

  const memberList = async () => {
    const res = await getMembers();
    console.log(res);
  };

  return <div>Members</div>;
}
