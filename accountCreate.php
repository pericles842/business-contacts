<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/styles/css/bootstrap.min.css">
    <title>Business Contacts</title>
    <style>
        .element-create{
            align-items:center;
            margin:20px;
            text-align:center ;
            box-shadow: 5px 5px 4px #00000037;
            padding:15px;
            border-radius:5px;
        }
        .element-create img{
            border-radius:3px;
            margin-bottom:5px;
        }
    </style>
</head>
<body>
    <header>
        <?php require'headeraccount.php'?>
    </header>
    <div class="container">
        <h1 class="text-center pt-5">Comienza a crear tu contactos</h1>
        <input class="form-control bg-primary text-white" id="button-view"  type="submit" value="Abrir panel">
        <div class="contacts pt-5" id="widows" style="display:none;">
            <hr>
            <p>Nombre apellido</p>
            <input class="form-control" type="text"  id="nameAccount" placeholder="Ej. Carlos Quintero">
            <br>
            <p>Correo electronico</p>
            <input class="form-control" type="text"  id="gmailAccount" placeholder="Ej. Carlos@gmail.com">
            <br>
            <p>Numero telefonico</p>
            <input  class="form-control" type="text"  id="numAccount" placeholder="Ej. 04245567789">
            <br>
            <input  class="form-control bg-primary text-white" type="button" id="button-create" value="Crear" >
            <div id="element-create-box" style="display:flex;">
                <div class="element-create" >
                    <img src="assets/styles/images/perfil.png" >
                    <h3> Pedro Davila</h3>
                    <h5>pedro@gmail.com</h5>
                    <p>0424785678</p>
                </div>
                <div class="element-create " >
                    <img src="assets/styles/images/perfil.png" >
                    <h3> Pedro Davila</h3>
                    <h5>pedro@gmail.com</h5>
                    <p>0424785678</p>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="assets/models/js/bootstrap.min.js"></script>
    <script src="assets/models/accountCreate.js"></script>
</body>
</html>