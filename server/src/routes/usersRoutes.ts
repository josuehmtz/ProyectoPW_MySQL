import { Router } from 'express'; 
import UsersController from '../controllers/usersControllers';
class usersRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {

        this.router.get('/', UsersController.list );
        this.router.get('/:id', UsersController.getOne );
        this.router.post('/', UsersController.create);
        this.router.delete('/:id',UsersController.delete);
        this.router.put('/:id', UsersController.update);
        
    }

}   

const UsersRoutes = new usersRoutes();
export default UsersRoutes.router;