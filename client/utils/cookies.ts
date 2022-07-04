export const createCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}`
}

export const removeCookie = (name: string) => {
    document.cookie = `${name}` +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const getCookie = (name: string) => {
    if (typeof window !== "undefined") {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }