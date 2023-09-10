import { API_KEY, BASE_URL } from "../config";
import { BookModel } from "./types";

export async function getBookById(bookId: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/volumes/${bookId}?key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Could not get book");
    return response.json() as Promise<BookModel>;
  } catch (error) {
    console.log(error);
  }
}
