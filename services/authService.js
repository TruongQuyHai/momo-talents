export default class AuthService {
  /**
   * If other endpoints need to get token to fetch api
   */
  // static _token = "";

  // static async getToken() {
  //   if (!AuthService._token) {
  //     const t = await AsyncStorage.getItem("@login_token");
  //     AuthService._token = t;
  //     return t;
  //   }
  //   return AuthService._token;
  // }

  static async login(email, password) {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { token } = await res.json();
    if (!res.ok) {
      throw { message: data.error };
    }
    if (!token) {
      throw { message: "No token returned" };
    }
    // AuthService._token = token;
    return [res, token];
  }
}
