const getInfo = (data) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ticket de Compra</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      :root {
        --FONT_SIZE_1: 13px;
        --FONT_SIZE_2: 10pt;
        --FONT_SIZE_3: 9pt;
        --COLOR_1: #000;
        --COLOR_2: #323232;
      }
      table {
        width: 100%;
        margin-bottom: 30px;
      }
      h1 {
        font-size: var(--FONT_SIZE_1);
      }

      * {
        font-size: var(--FONT_SIZE_1);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
      }

      body {
        font-family: Arial, sans-serif;
      }
      .container {
        width: 8cm;
        padding: 30px;
        padding-top: 0pt;
        background-color: #ffffff;
      }
      .header {
        align-content: center;
        align-items: center;
      }
      .address {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 10pt;
      }

      .subHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: var(--FONT_SIZE_1);
      }

      .section {
        padding-top: 20pt;
        padding-bottom: 20pt;
      }
      .rowItem {
        display: flex;
        justify-content: space-between;
        padding-top: 5pt;
        padding-bottom: 5pt;
      }
      .mountPerItem {
        width: 35%;
        margin-bottom: 10pt;
        display: flex;
        justify-content: space-between;
      }
      .footerHeader {
        margin-top: 20pt;
        margin-bottom: 50pt;
      }
      .mt {
        margin: 50px 0px;
      }

      .py {
        padding: 10px 0px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <section class="section header">
        <h5 style="text-align: center">
          INVERSIONES MEDICAS DE ORIENTE SA DE CV
        </h5>
        <div class="address">
          <p>Final 9a Avenida Sur y Calle La Paz</p>
          <p>Ba. La Merced Atras Hotel Tropico Inn</p>
          <p>San Miguel, El Salvador, C.A.</p>
          <p>I.V.A DL 796</p>
        </div>
      </section>
      <section class="section">
        <div class="subHeader">
          <p>Telefax:</p>
          <p id="telefax">(503) 2661-0001</p>
        </div>
        <div class="subHeader">
          <p>Giro:</p>
          <p>Servicios Medicas Hospltalarios.</p>
        </div>
        <div class="subHeader">
          <p>Nrc:</p>
          <p id="nrc">50470-9/N1t:0614-150591-187-9</p>
        </div>
        <div class="subHeader">
          <p>Fecha:</p>
          <p id="fecha">23-05-7073 05:78:35 PM</p>
        </div>
        <div class="subHeader">
          <p>Venta No.</p>
          <p id="venta">13751978</p>
        </div>
        <div class="subHeader">
          <p>Nombre del Cliente:</p>
          <p id="cliente">CLIENTE GENERAL</p>
        </div>
      </section>
      <section style="width: 100%; margin-bottom: 20px">
        <table>
          <thead>
            <tr>
                <th style="width: 35%;">PRODUCTO</th>
                <th style="width: 35%; text-align: center;">CANTIDAD</th>
                <th style="width: 35%; text-align: end;">GRAVADA</th>
            </tr>
          </thead>

          <tbody id="tBody">
            
              ${data
                .map((data) => (
                  `<tr>
                    <td class='py'>${data.name}</td>
                    <td class='py' style='text-align: center'>
                      ${data.cantidad}
                    </td>
                    <td class='py'>
                      <div
                        style='
                      display: flex;
                      justify-content: flex-end;
                      align-items: center;
                      '
                      >
                        <p>$ </p>
                        <p>${data.gravada}</p>
                      </div>
                    </td>
                  </tr>`
                ))
                .join('')}
                         
            
          </tbody>
        </table>
      </section>
      <section>
        <div class="rowItem">
          <p>SUB-TOTAL:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>10.98</p>
          </div>
        </div>
        <div class="rowItem">
          <p>VENTA NO SUJETA:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>1000000.98</p>
          </div>
        </div>
        <div class="rowItem">
          <p>VENTA NO EXENTA:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>5500.98</p>
          </div>
        </div>

        <div class="rowItem">
          <p>SUB-TOTAL:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>

        <div class="rowItem">
          <p>DESCUENTO:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>

        <div class="rowItem">
          <p>TOTAL VENTA:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>

        <div class="rowItem">
          <p>RECIBIDO:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>
        <div class="rowItem">
          <p>DEVUELTO:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>

        <div class="rowItem">
          <p>BONO:</p>
          <div class="mountPerItem">
            <p>$</p>
            <p>100.98</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="footerHeader">
          <p>Persona que realiza Compra:</p>
          <p>FIRMA:</p>
        </div>
        <hr style="height: 1px; background-color: #000; margin-bottom: 30pt" />
        <div class="subHeader">
          <p>Cajero/a:</p>
          <p>YNAVARRETE</p>
        </div>
        <div class="subHeader">
          <p>Caja No:</p>
          <p>CAJA GLORIETA</p>
        </div>
        <div class="subHeader">
          <p>Ticket No.:</p>
          <p>52/666</p>
        </div>
        <div class="subHeader">
          <p>Fecha:</p>
          <p id="fecha">23-05-7073 05:78:35 PM</p>
        </div>
        <div class="subHeader">
          <p>Serie:</p>
          <p>1650800800051</p>
        </div>
        <div class="subHeader">
          <p>Nombre del Cliente:</p>
          <p id="cliente">CLIENTE GENERAL</p>
        </div>
      </section>
      <p style="margin-bottom: 10px">REST:</p>
    </div>
   
  </body>
</html>`;
module.exports = getInfo;
