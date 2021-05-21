import { Request, Response } from 'express';
import pool from '../database';

class tipo_usuariosController{

   public async list (req: Request, res: Response) : Promise<void> {
        await pool.query('SELECT * FROM tipo_usuarios', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
}

export const Tipo_UsuariosController = new tipo_usuariosController();
export default Tipo_UsuariosController;
