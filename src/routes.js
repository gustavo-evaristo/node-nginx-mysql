import { Router } from "express";
import mysql from "mysql";

const routes = Router();

routes.get("/", (req, res) => {
  try {
    const connection = mysql.createConnection({
      host: "mysql",
      user: "root",
      password: "root",
      database: "node_db",
    });

    function getRandomName() {
      const names = [
        "Gustavo",
        "Henrique",
        "Evaristo",
        "Eduarda",
        "Adriane",
        "Gabriella",
        "Jefferson",
        "Vasco",
        "Rodrigo",
      ];

      const index = Math.floor(Math.random() * names.length);

      return names[index];
    }

    const randomName = getRandomName();

    const insert = `INSERT INTO people(name) values('${randomName}')`;

    connection.query(insert);

    const select = `SELECT name FROM people`;

    function callback(users = []) {
      const html = `
        <h1>Full Cycle Rocks!</h1>

        <ul>
          ${users.map((user) => `<li>${user?.name}</li>`)}
        </ul>
      `;

      return res.send(html);
    }

    connection.query(select, (error, results) => {
      if (error) {
        console.error("Erro ao buscar usuários:", error);

        return res.send("<h1>Full Cycle Rocks!</h1>");
      }

      callback(results);
    });

    connection.end();
  } catch (err) {
    console.error(err);
  }
});

export default routes;
