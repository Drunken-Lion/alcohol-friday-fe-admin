import axios from '@/app/_service/axios';

const QUESTIONS_URL = '/questions';

/**
 * /v1/admin/questions 전체 문의사항 조회
 */
export const getQuestions = async (page?: number, size?: number) => {
  console.log('QuestionsService - getQuestions');

  const res = await axios.get(QUESTIONS_URL, { params: { page, size } });

  return res.data;
};

/**
 * /v1/admin/questions/{id} 문의사항 상세 조회
 */
export const getQuestion = async (id: number) => {
  console.log('QuestionsService - getQuestion');

  const res = await axios.get(`${QUESTIONS_URL}/${id}`);

  return res.data;
};
