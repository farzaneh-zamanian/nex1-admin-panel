
//Userrname validation
export const validateUsername = (name, value) => {
      //alphanumeric, length
      if (!value || value.trim() === "") {
            return "نام کاربری نباید خالی باشد.";
      }
      if (value.length < 3 || value.length > 20) {
            return "نام کاربری باید بین 3 تا 20 کاراکتر باشد.";
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
            return "نام کاربری باید  شامل حروف و عدد باشد.";
      }
      return "";


}
// Password validation  
export const validatePassword = (name, value) => {
      if (!value || value.trim() === "") {
            return "پسورد نباید خالی باشد.";
      }
      // Check for minimum length
      if (value.length < 4) {
            return "پسورد باید حداقل بیشتز از 4 کاراکتر باشد ";
      }

      // //complexity
      // if (!/[A-Z]/.test(value)) {
      //       return "پسورد باید حداقل یک حرف بزرگ داشته باشد ";
      // }
      // if (!/[a-z]/.test(value)) {
      //       return "پسورد باید حداقل یک حرف کوچک داشته باشد ";

      // }
      // if (!/[0-9]/.test(value)) {
      //       return "پسورد باید حداقل شامل یک عدد باشد ";

      // }
      // if (!/[!@#$%^&*]/.test(value)) {
      //       return "پسورد باید حداقل یک کاراکتر خاص   !@#$%^&* داشته باشد ";

      // }
      return "";
}



export const validateInput = (name, value) => {
      switch (name) {
            case "username":
                  return validateUsername(name, value);
            case "password":
                  return validatePassword(name, value);
            default:
                  return "";
      }
}