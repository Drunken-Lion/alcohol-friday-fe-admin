import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen bg-white text-black">
      <div className="flex flex-row gap-4 items-center justify-center mt-56">
        <Button color="primary" size="lg" as={Link} href="/members">
          사용자 관리
        </Button>
        <Button size="lg">레스토랑 관리</Button>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center mt-3">
        <Button size="lg">스토어 관리</Button>
        <Button size="lg">고객센터 관리</Button>
      </div>
    </main>
  );
}
