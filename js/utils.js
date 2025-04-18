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

export function validator2(obj) {
  if (obj.name.trim() === "") {
    return {
      target: "name",
      message: "Mashina nomi bo'sh bo'lishi mumkin emas",
    };
  }
  if (obj.description.trim() === "") {
    return {
      target: "description",
      message: "Mashina malumoti bo'sh bo'lishi mumkin emas ",
    };
  }
  if (obj.price.trim() === "") {
    return {
      target: "price",
      message: "Mashina narxi bo'sh bo'lishi mumkin emas",
    };
  }

  return false;
}

export async function localgetProduct() {
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars`);
  const res = await req.json();

  if (req.status === 200) {
    return res.data;
  } else {
    throw new console.error("hatolik bo'ldi");
  }
}

export async  function localaddProduct(what, where) {
  const result = [...where, what];
  where.push(what);
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars`);
  const res = await req.json();

  if (req.status === 200) {
    return res.data;
  } else {
    throw new console.error("hatolik bo'ldi");
  }
}

export function localremoveProduct(id, where) {
  const result = where.filter((element) => element.id !== +id);
  return result;
}

export function localudeateProduct(what, where) {
  const result = where.map((element) => {
    if (what.id === element.id) {
      return what;
    } else {
      return element;
    }
  });
  return result;
}
