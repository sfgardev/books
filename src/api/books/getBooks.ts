import { API_KEY, BASE_URL } from "../config";
import { appendParams } from "../utils/appendParams";
import { GetBooksParams, GetBooksResponse } from "./types";

export async function getBooks(params: GetBooksParams) {
  const url = appendParams(`${BASE_URL}/volumes?key=${API_KEY}`, params);

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Could not get books");
    return response.json() as Promise<GetBooksResponse>;
  } catch (error) {
    console.log(error);
  }
}
