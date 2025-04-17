import "./protector.js";
export async function login(user) {
  const req = await fetch("https://json-api.uz/api/project/fn37/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}

export async function addProduct(obj) {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });
  const res = await req.json();
  if (req.status === 200) {
    return res;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}

export async function deleteProduct(id) {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (req.status === 200) {
    return id;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}


export async function getProduct() {
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars`)
  
  const res = await req.json();
  if (req.status === 200) {
    return res.data;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}

export async function updeateProduct(obj) {
  const token=JSON.parse(localStorage.getItem("user"))?.access_token;
  const req = await fetch(`https://json-api.uz/api/project/fn37/cars${obj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
        Authorization:`Bearer ${token}`
    },
    body: JSON.stringify(obj),
  });

  const res = await req.json();

  if (req.status === 200) {
    return res;
  } else {
    throw new Error("Hatolik bo'ldi");
  }
}