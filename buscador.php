<?php
////////////////// VARIABLES DE CONSULTA////////////////////////////////////

    $where="";
    $ciudad=$_POST['ciudad'];
    $tipo=$_POST['tipo'];


////////////////////// BOTON BUSCAR //////////////////////////////////////

    if (isset($_POST['buscar']))
    {
        $json_url = "data-1.json";
        $data=file_get_contents($json_url);
        $propiedades=json_decode($data,true);
        
	   if (empty($_POST['tipo']))
	   {
           $where="where nombre like '".$ciudad."%'";
	   }
	   else if (empty($_POST['ciudad']))
	   {
		  $where="where tipo='".$tipo."'";
	   }
	   else
	   {
		  $where="where ciudad like '".$ciudad."%' and tipo='".$tipo."'";
	   }
    }

/////
    if(isset($_GET['todos']))
    {
        $json_url = "data-1.json";
        $data=file_get_contents($json_url);
        $propiedades=json_decode($data,true);


        for($i=0;$i<count($propiedades);$i++) 
        {

            $ciudad=$propiedades[$i]["Ciudad"];
            $tipo=$propiedades[$i]["Tipo"];
            $precio=$propiedades[$i]["Precio"];
            $direccion=$propiedades[$i]["Direccion"];
            $codigo_postal=$propiedades[$i]["Codigo_Postal"];
            $telefono=$propiedades[$i]["Telefono"];
        }
    }   
?>