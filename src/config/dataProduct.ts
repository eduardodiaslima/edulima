import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://edulima_user:EmXma1QLqwws0SiwnIJ02LJOl7UWudTD@dpg-crbq90l6l47c73d8ibcg-a.oregon-postgres.render.com/edulima";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
