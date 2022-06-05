import { Request, Response } from "express";
import Helper from "../helpers/helper";
import Cliente from "../models/cliente";

class ClienteService {
    public async create(req: Request, res: Response) {
        try {
            const saveData = req.body;
            const edad = await Helper.getEdad(saveData.fecha_nacimiento);
            saveData.edad = edad
            const dbResponse = await Cliente.create(saveData);
            res.status(200).json({
                status: true,
                msg: 'Cliente guardado',
                data: dbResponse
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        } 
    }
    public async kpiDeClientes(req: Request, res: Response) {
       try {
            
           const dbResponse = await Cliente.findAll();
           const promedioEdad = await Helper.getPromedioEdades(dbResponse);
           const DesviacionEstandarEdades = await Helper.getDesviacionEstandar(dbResponse);

            res.status(200).json({
                status: true,
                msg: 'kpi de Clientes',
                data: {
                    promedioEdad: promedioEdad,
                    desviacionEstandarEdades: DesviacionEstandarEdades
                }
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        }  
    }

    public async listClientes(req: Request, res: Response) {
       try {
           var dbResponse = await Cliente.findAll();
           var listaClientes = [];
           for (let i = 0; i < dbResponse.length; i++){
               var cliente = await Helper.getfechaProbableMuerte(dbResponse[i]);
               listaClientes.push(cliente);
           }

            res.status(200).json({
                status: true,
                msg: 'Lista de clientes',
                data: listaClientes
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                msg: 'Ocurrio un error!',
                dataError:error
            });
        }  
    }

}

const clienteService = new ClienteService();
export default clienteService;