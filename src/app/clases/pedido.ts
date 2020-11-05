export class Pedido {
    constructor(
		public nombreCliente: string,
		public direccion: string,
        public pedido: string,
        public fechaEntrega: Date
    ){}
}