import axios from "axios";

export interface Book {
  bookId: number;
  title: string;
  subTitle: string;
  songs: number;
  enabled: boolean;
}

interface ApiResponse {
  count: number;
  data: Book[];
}

export const fetchBooks = async (): Promise<ApiResponse | null> => {
  try {
    const response = await axios.get<ApiResponse>("https://songlive.vercel.app/api/book");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
};
