const apiKey = 'ff8829d2-9293-40b0-96b8-60c98e828e80';

// 고양이 품종 리스트 불러오는 함수 Cats.js에서 호출
export const getCatBreeds = async (currentPage, limit = 6) => {
  if (typeof currentPage !== 'number') {
    throw new Error('getCatBreeds 함수의 currentPage 파라미터는 number 형식이어야 합니다.');
  }
  if (typeof limit !== 'number') {
    throw new Error('getCatBreeds 함수의 limit 파라미터는 number 형식이어야 합니다.');
  }
  const response = await fetch(`https://api.thecatapi.com/v1/breeds?page=${currentPage}&limit=${limit}`, {
    headers: {
      'x-api-key': apiKey,
    },
  });
  const catBreeds = response.json();

  return catBreeds;
};

//고양이 품종 상세검색
export const getCatDetail = async (catid) => {
  if (typeof catid !== 'string'){
    throw new Error('catId 파라미터는 string 형식이어야 합니다.')
  }
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${catid}`, {
    headers: {
      'x-api-key': apiKey,
    },    
  });
  const catDetail = response.json();
  // console.log(catDetail);
  return catDetail;
}