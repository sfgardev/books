export function appendParams(
  url: string,
  params: Record<string, string | number>
) {
  let result = url;

  for (const [key, value] of Object.entries(params)) {
    result += `&${key}=${value}`;
  }

  return result;
}
