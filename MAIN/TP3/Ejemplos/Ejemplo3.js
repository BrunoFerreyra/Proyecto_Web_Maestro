function imprimirCuerpo()
{
    const div = document.getElementById("contenido");
    div.innerHTML = '<h2> Seccion escrita con Javascript <h2>'
}
imprimirCuerpo();

function escribirArticulo(){
    const article = document.getElementById("articulo2");
    article.innerHTML = `
    <h3>Registro de nuevo usuario:</h3>
        <form id="idFormu" name="formu" method="post" action="Codigo_93.php">
            <fieldset id="campos" name="campos">
                <legend>Ingrese los siguientes datos:</legend><br>

                Usuario: 
                <input name="nomUsuario" type="text" id="idNomUsuario" size="30" maxlength="15"
                autofocus="autofocus" placeholder="Maximo 15 letras"> <br><br>
                
                Contraseña:
                <input name="passUsuario"  type="text" id="idPassUsuario" size="30" maxlength="8" 
                placeholder="Maximo 8 caracteres alfanumericos"><br><br>
                
                Fecha de nacimiento:
                <input type="date" id="idNacUsuario" name="nacUsuario" min="1995-01-01" max="2022-12-31"> <br><br>
                
                Edad padre:
                <input type="number" id="idEdadPadreUsuario" name="edadPadreUsuario" min="18" max="99"> <br><br>
                
                Edad Madre:
                <input name="edadMadreUsuario" type="range" id="idEdadMadreUsuario" min="18" max="99" > <br><br>
                
                Correo electronico:
                <input name="mailUsuario" type="email" id="idMailUsuario" size="30" maxlength="25"
                placeholder="M&aacute;ximo"> <br><br>
                
                Web personal:
                <input name="webUsuario" type="url" id="idWebUsuario" size="30" maxlength="30"
                autofocus="autofocus" placeholder=""> <br><br>
                
                Intereses:
                <textarea name="intUsuario" placeholder="Ingrese los intereses separados por ;" id="idIntUsuario"
                rows="3" cols="40"></textarea><br><br>
                <input type="submit" name="Enviar" id="idEnviar" value="Enviar" title="Pulse para Enviar">
            </fieldset>
        </form> `;
}


let abierto = false;

function toggleArticulo(){
    const articulo = document.getElementById("articulo3");

    if (!abierto) {
        articulo.innerHTML = `
        <table>
                <tr>
                    <th>Rutinas ABRIL</th>
                </tr>
                <tr>
                    <td>
                        <a href="">Dia 1</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="">Dia 2</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="">Dia 3</a>
                    </td>
                </tr>
            </table>`;
        articulo.style.display = "block";
        abierto = true;
    } else {
        articulo.style.display = "none";
        abierto = false;
            
    }
}