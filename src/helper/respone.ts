function responseApi<T>(code: number, message: string, data: T[] | T = []) {
  return {
    status: code,
    message: message,
    body: {
      data: data,
    },
  };
}

export { responseApi };
