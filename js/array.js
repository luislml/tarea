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
Array.prototype.Eliminarduplicados = function(){
	var vec = this.slice();
	var aux;
	for (var j = 0; j < this.length; j++) {
	
		for (var i = 0; i < this.length; i++) {
			aux=this[i]	
			this.splice(i,1);
			if(this.indexOf(aux)>=0)
			{	
			}	
			else	
			{	
				this.push(aux);
			}	
		}
	}
		
}