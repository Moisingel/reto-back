import express, { Application, json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

// import { validarToken } from "./middlewares/validarToken";
import clienteRoutes from "./routes/clienteRoutes";


class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static(path.join(__dirname, "public")));
  }

  routes(): void {
    this.app.use('/api', clienteRoutes);
    const swaggerSpec = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "reto-back",
          version: "1.0.0"
        },
        servers: [{
          url:"http://localhost:3000"
        }]
      },
      apis:[`${path.join(__dirname,'./routes/*.js')}`]
    };
    this.app.use('/api-doc', swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
