import Members from '@/app/_components/Members';
import { getMembers } from '@/app/_service/members';

export default async function MembersPage() {
  // 데이터 확인용 (vscode 터미널에 로그 출력)
  const res = await getMembers();
  console.log(res.data);

  return (
    <div>
      MembersPage
      {/* 컴포넌트에서 데이터 확인시, 브라우저 콘솔에 로그 출력 */}
      {/* <Members /> */}
    </div>
  );
}
