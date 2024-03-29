// import axios from '@/app/_service/axios';

// const CATEGORY_CLASSES_URL = '/category-classes';
// const CATEGORIES_URL = '/categories';

// /**
//  * /v1/admin/category-classes 카테고리 대분류 전체 조회
//  */
// export const getCategoryClasses = async (page?: number, size?: number) => {
//   console.log('CategoriesService - getCategoryClasses');

//   const res = await axios.get(CATEGORY_CLASSES_URL, { params: { page, size } });

//   return res.data;
// };

// /**
//  * /v1/admin/category-classes/{id} 카테고리 대분류 상세 조회
//  */
// export const getCategoryClass = async (id: number) => {
//   console.log('CategoriesService - getCategoryClass');

//   const res = await axios.get(`${CATEGORY_CLASSES_URL}/${id}`);

//   return res.data;
// };

// /**
//  * /v1/admin/categories 카테고리 소분류 전체 조회
//  */
// export const getCategories = async (page?: number, size?: number) => {
//   console.log('CategoriesService - getCategories');

//   const res = await axios.get(CATEGORIES_URL, { params: { page, size } });

//   return res.data;
// };

// /**
//  * /v1/admin/categories/{id} 카테고리 소분류 상세 조회
//  */
// export const getCategory = async (id: number) => {
//   console.log('CategoriesService - getCategory');

//   const res = await axios.get(`${CATEGORIES_URL}/${id}`);

//   return res.data;
// };
