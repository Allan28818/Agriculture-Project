import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Inicio } from './components/Inicio';
import { Cadastrar } from './components/Cadastrar';
import { Logar } from './components/Logar';
import { AuthProvider } from './auth/AuthContext';
import { RotaPrivada} from './auth/RotaPrivada';

import Notes from './pages/notes';
import NotesDetails from './pages/details/noteDetails';

import Products from './pages/products';
import ProductDetails from './pages/details/productDetails';

import PlantationIssues from './pages/plantationPest';

import Statistics from './pages/statistics';

import CreateNote from './Controllers/CreateNote';
import CreateProduct from './Controllers/CreateProduct';

const Routes = () => {
    return(
        <AuthProvider>
        <BrowserRouter>
            <RotaPrivada exact path='/' component={Inicio}/>
  
            <RotaPrivada exact path = '/notes' component={Notes}/>
            <RotaPrivada path='/notes/details/:id' component={NotesDetails} />
  
            <RotaPrivada exact path = '/products' component={Products}/>
            <RotaPrivada path = '/products/details/:id' component={ProductDetails} />
  
            <RotaPrivada path = '/plantation-issues' component={PlantationIssues}/>
  
            <RotaPrivada path = '/statistics' component={Statistics}/>
  
            <RotaPrivada exact path = '/create/notes' component={CreateNote}/>
            <RotaPrivada exact path = '/create/products' component={CreateProduct}/>
          
            
            <Route exact path='/logar' component={Logar}/>
            <Route exact path='/cadastrar' component={Cadastrar}/>
        </BrowserRouter>
      </AuthProvider>
    );
}

export default Routes;