'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Auth() {
  const searchParams = useSearchParams();
  const session = searchParams.get('session');
  const router = useRouter();
  useEffect(() => {
    if (session) {
      const userInfo = JSON.parse(session);
      localStorage.setItem('accessToken', userInfo.accessToken);
      localStorage.setItem('accessTokenExp', userInfo.accessTokenExp.toString());
      localStorage.setItem('refreshToken', userInfo.refreshToken);

      router.replace('/');
    }
  }, []);

  return <div>page</div>;
}
