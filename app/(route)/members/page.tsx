import Members from '@/app/_components/Members';
import { getMembers } from '@/app/_service/members';

export default async function MembersPage() {
  // 데이터 확인용
  const res = await getMembers();
  console.log(res.data);

  return (
    <div>
      MembersPage
      {/* <Members /> */}
    </div>
  );
}
