import { Router } from 'express'; 
import {indexController} from '../controllers/indexController'

class indexRoutes{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }

}   

const IndexRoutes = new indexRoutes();
export default IndexRoutes.router;