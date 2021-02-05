export class RemoteRequest {
  /**
     * Get text from URL
     * @param path 
     * @param args 
     */
  static async get<T>(
    path: string,
    args: { [x: string]: unknown } = {},
  ): Promise<T> {
    const request = await fetch(path);
    if (
      request.headers.get("content-type")?.toString().match("application/json")
    ) {
      return await request.json() as unknown as T;
    } else {
      return await request.text() as unknown as T;
    }
  }
}
