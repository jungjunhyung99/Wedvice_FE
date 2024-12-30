import { ax } from './axios';

interface PostRequest {
  title: string;
  body: string;
  userID: number;
}

interface PostResponse {
  id: number;
  title: string;
  body: string;
  userID: number;
}

const test = {
  postAPI: async (request: PostRequest): Promise<PostResponse> => {
    try {
      const res = await ax.post<PostResponse>('/posts', request);
      return res.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};

export default test;
