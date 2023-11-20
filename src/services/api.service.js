class ApiService {
  constructor() {
    this.baseUrl = "https://api.disneyapi.dev";
  }

  async fetchCharacters(params) {
    try {
      const response = await fetch(`${this.baseUrl}/character${params ? `?${params}`: ''}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new ApiService();
