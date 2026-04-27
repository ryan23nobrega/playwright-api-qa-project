class ApiHelper {
  constructor(request) {
    this.request = request;
  }

  async get(url) {
    return await this.request.get(url);
  }

  async post(url, data) {
    return await this.request.post(url, { data });
  }

  async put(url, data) {
    return await this.request.put(url, { data });
  }

  async patch(url, data) {
    return await this.request.patch(url, { data });
  }

  async delete(url) {
    return await this.request.delete(url);
  }
}

module.exports = { ApiHelper };