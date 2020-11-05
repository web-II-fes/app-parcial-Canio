import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPedidoComponent } from '../app/pedido/crear-pedido/crear-pedido.component';
import { MostrarPedidoComponent } from '../app/pedido/mostrar-pedido/mostrar-pedido.component';


const routes: Routes = [

  { path: 'crearPedido', component: CrearPedidoComponent  },
  { path: 'mostrarPedido', component: MostrarPedidoComponent  },
  { path: 'crearPedido/:id', component : CrearPedidoComponent },

  { path: '', redirectTo: 'mostrarPedido', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

