

export default class Helper {
    static async getEdad(fechaNac: any) {
        var fecha1: any = new Date();
        var fecha2: any = new Date(fechaNac);
        
        var diferencia= Math.abs(fecha1-fecha2);
        var edad = (diferencia / (1000 * 3600 * 24))/365
        return  Math.floor(edad);      
    }

    static async getPromedioEdades(clientes: any) {
        var sumaEdades = 0;
        var promedioEdad = 0.0;
        for (let i = 0; i < clientes.length; i++) {
            sumaEdades = sumaEdades + clientes[i].edad;
        }
        promedioEdad = sumaEdades / clientes.length;
        return promedioEdad;
    }

    static async getDesviacionEstandar(clientes: any) {
        var desviacionEstandarEdad = 0.0;
        var promedioEdad = await Helper.getPromedioEdades(clientes);
        var sd = [];
        var desviacionEstandarEdad = 0.0;
        for (let i = 0; i < clientes.length; i++){
            sd[i] = Math.pow(clientes[i].edad - promedioEdad, 2);
            desviacionEstandarEdad = desviacionEstandarEdad + sd[i];
        }
        return desviacionEstandarEdad;
    }

    static async getfechaProbableMuerte(cliente: any) {
        const EVPeru = 74;///esperanza de vida años en Peru
        const fechaNac = new Date(cliente.fecha_nacimiento);
        const fechaMuerte = (fechaNac.getFullYear() + EVPeru)+'-'+(fechaNac.getMonth()+1)+'-'+fechaNac.getDate();
        const newCliente = {
            id: cliente.id,
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            fecha_nacimiento: cliente.fecha_nacimiento,
            fecha_probable_muerte: fechaMuerte
        };
        return newCliente;
    }
}