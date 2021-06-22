

export const GET_RECOMMENDED_CONTENT = "GET_RECOMMENDED_CONTENT";
export const getRecommendedContent = (content: any) => {
  return { type: GET_RECOMMENDED_CONTENT, payload:content };
};
