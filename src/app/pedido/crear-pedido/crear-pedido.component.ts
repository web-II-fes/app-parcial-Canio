import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  pedidoForm: FormGroup;
  
  pedidos: any[] = [];
  idPedido: any;

  pedido : any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    debugger;
    this.getPedido();
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.pedido = this.param;
    } 

    this.initForm(this.pedido);

    this.route.paramMap.subscribe((param) => {
			debugger;
			this.idPedido = param.get('id');

			if (this.idPedido !== 'new') {
				this.getPedidoById(this.idPedido);
			}
    });
    
  }

  
  initForm(editarPedido : Pedido){
    this.pedidoForm = this.fb.group({
      nombreCliente : [editarPedido ? editarPedido.nombreCliente:'', Validators.required],
      direccion : [editarPedido ? editarPedido.direccion:'', Validators.required],
      pedido : [editarPedido ? editarPedido.pedido:'', Validators.required],
      fechaEntrega : [editarPedido ? editarPedido.fechaEntrega:'', Validators.required]
    
    });
  }

 
 getPedido(){
    this.pedidoService.getPedidos().subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  getPedidoById(idPedido: String) {
		this.pedidoService.getPedidoById(idPedido).subscribe((data) => {
			debugger;
			let pedidoId = data;

			this.pedidoForm.patchValue(pedidoId);
		});
  }
  
  submit(){
    debugger;
    if (this.idPedido){
      this.pedidoService.editarPedido(this.idPedido, this.pedidoForm.value).subscribe((pedido) => {
      });
    } else{
      this.pedidoService.guardarPedido(this.pedidoForm.value).subscribe(pedido => {
        let pedidoNuevo = pedido;
      });
    }

    this.router.navigate(['/mostrarPedido']);
    
  }

}
