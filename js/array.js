Array.prototype.buscar = function(element){
	for (var i = 0; i < this.length; i++) {
		if(this[i] === element )
		{
			alert("Existe el nombre:"+this[i]);
		}
	}
}
Array.prototype.borrar = function(element){
	for (var i = 0; i < this.length; i++) {
		if(this[i] === element )
		{
			alert("Se elimino el nombre:"+this[i]);
			this.splice(i,1);
		}
	}
}