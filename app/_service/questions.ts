import axios from '@/app/_service/axios';

const QUESTIONS_URL = '/questions';

/**
 * /v1/admin/questions 전체 문의사항 조회
 */
export const getQuestions = async (page: number, size: number) => {
  console.log('QuestionsService - getQuestions');

  const res = await axios.get(QUESTIONS_URL, { params: { page, size } });

  return res.data;
};
