import { Router } from "express";
import clienteService from "../services/clienteServices";

class ClienteRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //CREATE USER
        /**
         * @swagger
         * components:
         *  schemas:
         *   Cliente:
         *    type: object
         *    properties:
         *     nombre:
         *      type: string
         *      description: Nombre del cliente
         *     apellido:
         *      type: string
         *      description: Apellido del cliente
         *     edad:
         *      type: integer
         *      description: edad del cliente
         *     fecha_nacimiento:
         *      type: date
         *      description: fecha nacimiento del cliente
         *    required:
         *     - nombre
         *     - apellido
         *     - fecha_nacimiento
         *    example:
         *     nombre: maik
         *     apellido: rog
         *     edad: 20
         *     fecha_nacimiento: 2002-06-05
        */
        
        /**
         * @swagger
         * /api/creaclientes:
         *  post:
         *   summary: crear nuevo cliente
         *   tags: [Cliente]
         *   requestBody:
         *    required: true
         *    content:
         *     application/json:
         *      schema:
         *       type: object
         *       $ref: '#/components/schemas/Cliente'
         *   responses:
         *    200:
         *     description: Nuevo Cliente creado
         */
        this.router.post('/creaclientes', clienteService.create);
        /**
         * @swagger
         * /api/kpideclientes:
         *  get:
         *   summary: KPI de los clientes
         *   tags: [Cliente]
         *   responses:
         *    200:
         *     description: KPI de los clientes
         *     content:
         *      application/json:
         *       schema:
         *        type: object
         */
        this.router.get('/kpideclientes', clienteService.kpiDeClientes);
        /**
         * @swagger
         * /api/listclientes:
         *  get:
         *   summary: Lista de los clientes
         *   tags: [Cliente]
         *   responses:
         *    200:
         *     description: lista de los clientes con posible fecha de muerte
         *     content:
         *      application/json:
         *       schema:
         *        type: object
         */
        this.router.get('/listclientes',clienteService.listClientes);
    }
}

const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;