import { Request, Response} from 'express';
import pool from '../database';

class calendarioController{

   public async list (req: Request, res: Response) : Promise<void> {
        await pool.query('SELECT * FROM eventos', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response) : Promise<void> {
      const { id } = req.params;
      await pool.query('SELECT * FROM eventos where id_user = ?', [id], function(err, result, fields) {
          if (err) throw err;
          if (result.length > 0 ){
             return res.json(result[0]);
          }
          res.status(404).json({text: 'El usuario no ha sido encontrado'});
      });
  }

   public async create(req : Request, res: Response): Promise<void>{
      await pool.query('INSERT INTO eventos set ?', [req.body]);
      console.log(req.body);
      res.json({message: 'Usuario creado'}); 
  }

  public async delete(req: Request, res: Response): Promise<void>{
   const { id } = req.params;
   await pool.query('DELETE FROM eventos WHERE id_user = ?', [id]);
   res.json({text: 'Usuario eliminado con exito'});
  }

  public async update(req: Request, res: Response): Promise<void>{
   const { id } = req.params;
   await pool.query('UPDATE eventos set ? WHERE id_user = ?', [req.body,id]);
   res.json({message: 'Datos actualizados'});
  }

}

export const CalendarioController = new calendarioController();
export default CalendarioController;