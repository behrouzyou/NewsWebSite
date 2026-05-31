import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/userRoute.js"
import categoryRoutes from "./routes/categoryRoute.js"
import videoRoutes from "./routes/videoRoutes.js"
import newsRoutes from "./routes/newsRoute.js"
import commentRoutes from "./routes/commentRoute.js"
import sendEmailRoutes from "./routes/sendEmailRouter.js"
import cors from "cors";


dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("database connected");
    //  await db.sync()
} catch (error) {
     console.log(error)
}

app.use(cors({credentials: true, origin: "http://localhost:5173"}))
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"))
app.use(cookieParser());
app.use(userRoutes);
app.use(categoryRoutes);
app.use(videoRoutes);
app.use(newsRoutes);
app.use(commentRoutes);
app.use(sendEmailRoutes);

// async function startServer() {
//   try {
//     // db.sync() جدول‌ها را بر اساس مدل‌ها می‌سازد
//     // alter: true باعث می‌شود اگر تغییری در مدل‌ها داده‌اید، جدول‌ها هم آپدیت شوند (بدون پاک شدن داده‌ها)
//     // force: true باعث پاک شدن کامل جدول‌های قبلی و ساخت مجدد آن‌ها می‌شود (فقط در صورت نیاز استفاده کنید)
//     await db.sync({ alter: true });
//     console.log("All models were synchronized successfully.");

//     // اینجا کدهای راه‌اندازی سرور Express را قرار دهید
//     // const app = express();
//     // ...
//     // app.listen(PORT, () => console.log('Server is running on port ' + PORT));

//   } catch (error) {
//     console.error("Unable to connect to the database or sync models:", error);
//   }
// }

// startServer();

app.listen(5000, ()=> console.log("server is running"))
