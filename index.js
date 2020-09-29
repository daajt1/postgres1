const { Pool }= require('pg');

const config = 
    {
        user: 'postgres',
        host: 'localhost',
        password: '74/x/25/12',
        database: 'dlibrary'
    }


const pool = new Pool (config)

const getSample = async ()=> {
  try {
    const res =  await pool.query('select * from dmuestra')
    console.log(res);
  } catch (e){
      console.log(e);
  }
}

const insertSample= async() => {
    try {
      const text = "INSERT INTO users(username,password) values ($1,$2)"
      const value = ['juan','jaua12']
    }catch (e) {
        console.log(e)
    }


    const res = await pool.query(text,value);
    console.log(res);
}

const deleteSample= async() => {
    try {
      const text = "DELETE FROM users WHERE username ($1)"
      const value = ['juan']
    }catch (e) {
        console.log(e)
    }


    const res = await pool.query(text);
    console.log(res);
}

const deleteSample= async() => {
    try {
      const text = "UPDATE users SET username = $1 WHERE username = $2"
      const value = ['user1','user2']
    }catch (e) {
        console.log(e)
    }


    const res = await pool.query(text);
    console.log(res);
}