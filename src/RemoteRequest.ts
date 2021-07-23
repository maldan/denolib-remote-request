export class RemoteRequest {
    /**
     * Get text from URL
     * @param path
     * @param args
     */
    static async get<T>(path: string, args: { [x: string]: unknown } = {}): Promise<T> {
        const request = await fetch(path);
        const contentType = request.headers.get("content-type")?.toString() ?? "";

        if (contentType.match("application/json")) {
            return ((await request.json()) as unknown) as T;
        } else {
            return ((await request.text()) as unknown) as T;
        }
    }

    static async getBinary(path: string, args: { [x: string]: unknown } = {}): Promise<Uint8Array> {
        const request = await fetch(path);
        return new Uint8Array(await (await request.blob()).arrayBuffer());
    }
}
