import axios from '@/app/_service/axios';

const CATEGORY_CLASSES_URL = '/category-classes';

/**
 * /v1/admin/category-classes 카테고리 대분류 전체 조회
 */
export const getCategoryClasses = async (page?: number, size?: number) => {
  console.log('CategoriesService - getCategoryClasses');

  const res = await axios.get(CATEGORY_CLASSES_URL, { params: { page, size } });

  return res.data;
};
