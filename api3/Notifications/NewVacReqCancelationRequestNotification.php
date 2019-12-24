<?php
require_once 'NotificationTemplate.php';

class NewVacReqCancelationRequestNotification extends NotificationTemplate
{
    protected $title = "{OWNER_NAME} pediu o cancelamento de um pedido!";

    protected $bodyForMobile = '{OWNER_NAME} pediu o cancelamento de um pedido!';

    protected $bodyForHTMLMail = '
            <html>
                <head>
                    <style>
                        #main-Wrapper {
                            margin: 0 auto;
                            width: 80%;
                            background: rgb(242, 242, 242) !important;
                            border-radius: 10px;
                            min-height: 200px;
                            text-align: center;
                        }

                        #data-table {
                            margin: 20px;
                        }

                        #action {
                            padding: 40px;
                            padding: 20px;
                        }

                        .logo {
                            max-width: 15%;
                            margin: 20px;
                        }

                        .btn {
                            background-color: #063f57;
                            border-radius: 10px;
                            padding: 10px;
                            color: white !important;
                            text-decoration: none;
                        }

                        .btn:hover {
                            background-color: #060606;
                            transition: 0.5s;
                        }

                        tr {
                            padding: 10px
                        }

                        td {
                            padding: 10px
                        }
                    </style>
                </head>

                <body>
                    <div id="main-Wrapper">
                        <img class="logo" src="https://life.enso-origins.com/web/img/logo.png">
                        <h1></h1>
                        <div id="data-table">
                            <center>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Tipo de Notificação: </td>
                                            <td>{NOTIFICATION_TYPE}</td>
                                        </tr>
                                        <tr>
                                            <td>Pedido feito por: </td>
                                            <td>{OWNER_NAME}</td>
                                        </tr>
                                        <tr>
                                            <td>ID do Pedido: </td>
                                            <td>{ID_VAC}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>

                        </div>
                        <div id="action">
                            <a href="https://life.enso-origins.com/gateway.html" class="btn waves-effect waves-light btn">Ir para Enso Life</a>
                        </div>
                        <p style="text-align: justify; padding: 10">Está a receber esta notificação porque se encontra registado para
                            esse efeito em <a href="https://life.enso-origins.com/">life.enso-origins.com</a>. Contacte um administrador
                            se tiver qualquer questão.</p>
                    </div>

                </body>

                </html>
        ';

    public function getBodyForMobile($args)
    {
        if ($args['ownerName']) {
            $ownerName = $args['ownerName'];
        } else {
            $ownerName = 'Desconhecido';
        }

        /* $temp = str_replace("{NAME}", $name, $this->bodyForMobile); */

        $temp = $this->bodyForMobile;
        $temp = str_replace("{OWNER_NAME}", $ownerName, $temp);

        return $temp;
    }

    public function getBodyForHTMLMail($args)
    {
        if ($args['ownerName']) {
            $ownerName = $args['ownerName'];
        } else {
            $ownerName = 'Desconhecido';
        }


        if ($args['idVac']) {
            $idVac = $args['idVac'];
        } else {
            $idVac = 'Desconhecido';
        }

        $temp = str_replace("{NOTIFICATION_TYPE}", "$ownerName pediu o cancelamento de um pedido!", $this->bodyForHTMLMail);
        $temp = str_replace("{OWNER_NAME}", $ownerName, $temp);

        $temp = str_replace("{ID_VAC}", $idVac, $temp);

        return $temp;
    }

}
