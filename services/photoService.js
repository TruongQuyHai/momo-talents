export default class PhotoService {
  static async getAllPhotos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!res.ok) {
      throw { message: "Something went wrong while get all photos" };
    }
    const data = await res.json();
    return data;
  }
  static async getPhoto(id) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    if (!res.ok) {
      throw { message: `Something went wrong while get photo with id: ${id}` };
    }
    const data = await res.json();
    return data;
  }
}
