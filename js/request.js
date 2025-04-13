export async function login (user) {
 const req= await fetch("https://json-api.uz/api/project/fn37/auth/login", {
    method:"POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(user),
  })
  const res = await req.json()
  if(req.status===200){
    return res
  }else{
    throw new Error("Hatolik bo'ldi")
  }
  
   
}

export async function register (user) {
  const req= await fetch("https://json-api.uz/api/project/fn37/auth/register", {
     method:"POST",
     headers: {
         "Content-Type":"application/json"
     },
     body: JSON.stringify(user),
   })
   const res = await req.json()
  return res
    
 }
 