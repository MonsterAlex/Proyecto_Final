<?ph
//Obtencion del archivo data-1.json
    $json_url = "data-1.json";
    $json = file_get_contents($json_url);
    $data = json_decode($json, TRUE);

//obtencion de datos provenientes del archivo data1.json    
    $Id = $_GET['Id'];
    $Direccion = $_GET['Direccion'];
    $Ciudad = $_GET['Ciudad'];
    $Telefono = $_GET['Telefono'];
    $Codigo_Postal = $_GET['Codigo_Postal'];
    $Tipo = $_GET['Tipo'];
    $Precio = $_GET['Precio'];

//mostrar datos en un select usando ajax para los select
//mostraar resultados en un div
//todos los procesos ajax van en js
?>