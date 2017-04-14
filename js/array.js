Array.prototype.buscar = function(element){
	for (var i = 0; i < this.length; i++) {
		if(this[i] === element )
		{
			alert("Existe el nombre:"+this[i]);
		}
	}
}