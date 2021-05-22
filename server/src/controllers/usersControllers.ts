import { NextFunction, Request, Response} from 'express';
import pool from '../database';

const jwt = require('jsonwebtoken');
class usersController{

   public async list (req: Request, res: Response) : Promise<void> {
        await pool.query('SELECT * FROM usuarios', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    

    public async getOne (req: Request, res: Response) : Promise<void> {
      const { id } = req.params;
      await pool.query('SELECT * FROM usuarios where id_user = ?', [id], function(err, result, fields) {
          if (err) throw err;
          if (result.length > 0 ){
             return res.json(result[0]);
          }
          res.status(404).json({text: 'El usuario no ha sido encontrado'});
      });
  }

   public async create(req : Request, res: Response): Promise<void>{
      await pool.query('INSERT INTO usuarios set ?', [req.body]);
      console.log(req.body);
      res.json({message: 'Usuario creado'}); 
  }

  public async delete(req: Request, res: Response): Promise<void>{
   const { id } = req.params;
   await pool.query('DELETE FROM usuarios WHERE id_user = ?', [id]);
   res.json({text: 'Usuario eliminado con exito'});
  }

  public async update(req: Request, res: Response): Promise<void>{
   const { id } = req.params;
   await pool.query('UPDATE usuarios set ? WHERE id_user = ?', [req.body,id]);
   res.json({message: 'Datos actualizados'});
  }


  public async getUsuarios(req:Request, res:Response) :Promise<void>{
      await pool.query('SELECT * FROM usuarios', function (err,result,fields){
          if(err) throw err;
          res.json(result);
      })
  }

  email = 'test@admin.com'
  password= '123'

  public async signin(req:Request, res:Response):Promise<void>{
      const {email,password} = req.params;
      await pool.query('SELECT email,password FROM usuarios WHERE id_tipo_usuario = 1', [email,password],
      function (err,result,fields){
          if(err) throw err
          if (result.length > 0 ){
            //return res.json(result[0]);
            let data = JSON.stringify(result[0])
            const token = jwt.sign(data,'admin')
            res.json(token)
         }
          res.json('Usuario o clave incorrectos');
      }
      )
  }

  public async verifyToken(req:Request, res:Response, next:NextFunction){
      if(!req.headers.authorization) return res.status(401).json('No autorizado')
      const token = req.headers.authorization.substr(7);
     if(token !==''){
         const content = jwt.verify(token, 'admin');
         req.params = content;
         console.log(req.params);
         next();
     } res.json('token vacio')
  }

  public async validar (req:Request, res:Response):Promise<void>{
    res.json('Informacion secreta');
}

}


export const UsersController = new usersController();
export default UsersController;