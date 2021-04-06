class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async videos(id) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async channels(id) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics${id}&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;
