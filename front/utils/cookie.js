function setCookie(name, value) {
      const maxAge = 30 * 24 * 60 * 60;
      document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function getCookie(name) {

      // In a server-side environment (like when Next.js is rendering a page on the server), there is no document object available
      if (typeof document === 'undefined') {
            return null; 
        }
      const value = `; ${document?.cookie}`;
      const parts = value?.split(`; ${name}=`);
      if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

export { setCookie, getCookie };
