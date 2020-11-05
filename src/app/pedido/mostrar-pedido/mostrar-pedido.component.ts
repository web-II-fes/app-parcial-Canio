import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { CrearPedidoComponent } from '../crear-pedido/crear-pedido.component';

@Component({
  selector: 'app-mostrar-pedido',
  templateUrl: './mostrar-pedido.component.html',
  styleUrls: ['./mostrar-pedido.component.css']
})
export class MostrarPedidoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCliente', 'direccion', 'pedido', 'fechaEntrega', 'borrar', 'editar'];
  dataSource : any[] = [];
  idPedido: any;
  pedidoForm: FormGroup;

  constructor(private pedidoService : PedidoService, private router : Router) { }

  ngOnInit(): void {
   debugger;
   this.getPedidos();
  }

  getPedidos(){
    this.pedidoService.getPedidos().subscribe((data: any) => {
      
      this.dataSource = data;
    });
  }

  recibePedido(pedido : CrearPedidoComponent){

    this.dataSource.push(pedido);
  }

  borrarPedido(pedido: any){
    this.idPedido = pedido._id;
    this.pedidoService.borrarPedido(this.idPedido).subscribe( respuesta  => {
     let borrarPedido = pedido;
    });
    this.ngOnInit();
  }

  editarPedido(idPedido) {

    this.router.navigate(['/crearPedido/' + idPedido]);
    
    debugger;	
  }


}
