export function validator(obj) {
  if (obj.username.trim() === "") {
    return {
        target: "username",
        message: "Foydalanuvchi ismi bo'sh bo'lishi mumkin emas",
    };
  }

  if (obj.password.trim() === "") {
      return {
        target: "password",
        message: "Foydalanuvchi paroli bo'sh bo'lishi mumkin emas",
    };
  }

  return false;
}
