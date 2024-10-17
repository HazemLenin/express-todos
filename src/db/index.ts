import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

export default drizzle(process.env.DB_FILE_NAME!);
