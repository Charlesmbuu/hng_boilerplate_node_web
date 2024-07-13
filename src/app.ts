import express from "express";
import routes from "./routes";
import setupSwagger from "./swagger";

const app = express();

app.use(express.json());

//Routes
app.use("/", routes);

// Swagger integration
setupSwagger(app);

export default app;
