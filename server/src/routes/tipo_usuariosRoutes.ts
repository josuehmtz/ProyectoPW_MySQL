import { Router } from 'express'; 
import Tipos_UsuariosController from '../controllers/tipo_usuariosControllers';

class tipos_UsuariosRoutes{
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {

        this.router.get('/', Tipos_UsuariosController.list );
        
    }

}   

const Tipos_UsuariosRoutes = new tipos_UsuariosRoutes();
export default Tipos_UsuariosRoutes.router;
