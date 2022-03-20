console.dir(document);
document.title = 'DOM';
var titulo = document.querySelector(".title");
var bate = document.querySelector('#sub-title');
var cuerpo = document.getElementById('cuerpo');


function pulsar()
{
	titulo.innerHTML = "ManoterasImperium";
	titulo.style.fontSize = "50px";
	titulo.style.color = "whitesmoke";
	cuerpo.style.backgroundColor = "blue";
}
function btn()
{
	bate.innerHTML = '<h2 style="color:yellow;">Cabezones</h2>'
	bate.style.fontSize = "60px";
	titulo.innerHTML = "Os Desea";
	titulo.style.color = "yellow";
	titulo.style.fontSize = "50px";
	cuerpo.style.backgroundColor = "red";
}
//otro intento
function move()
{
	var pos = 0;
	var tiempo = setInterval(frame, 10);
	function frame()
	{
		if(pos >=450)
		{
			clearInterval(tiempo);
			cambio();
		}
		else
		{
			pos++;		
			titulo.style.marginLeft=pos + 'px';
			titulo.style.textTransform = "uppercase";
			bate.style.marginLeft=pos + 'px';
			bate.style.textTransform = "uppercase";

		}
	}
}
function cambio()
{
	titulo.innerHTML = "Felices";
	titulo.style.fontSize = "70px";
	titulo.style.color = "red";	
	bate.innerHTML = "Fiestas";
	bate.style.fontSize = "70px";
	bate.style.color = "red";
	cuerpo.style.backgroundColor = "black";
	titulo.style.transform = "rotate(-360deg)";
	titulo.style.transition='5s';
	bate.style.transform = "rotate(360deg)";
	bate.style.transition='5s';
}




