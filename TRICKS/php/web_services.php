<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<p>Cada protocolo del stack de aplicaciones, tienen asignado un puerto TCP que utiliza el servidor para reconocer el tipo de respuesta que tiene que devolver  una peticion del cliente

	PUERTOS DE SERVICIO: cada puerto TCP/UDP es unico para el protocolo que Conduce el servicio, a la escucha de un programa en l servidor:
	http:80 (slicitud d epagina web)
	https:443 (solicitud de paginas web montadas sobre comunicacion SSL-SLT)
	FTP:20-21 (descarga de archivos)
	SMTP: / POP3: / IMAP: (solicitud de correo email)
	RPC: (funciones que ejecuta el servidor a peticion del cliente, se asemeja  alos web services en el tipo de respuesta XML)

	SERVICIOS WEB: son una alternativa a la comiunicacion entre cliente - servidor a traves de un puerto se servicio en el servidor, por lo que siempre estan motados sobre el protocolo HTTP(puerto tcp:80) para la comunicacion.</p>

	<p>PROTOCOLO DE ACCESO A OBJETOS SIMPLES
	utiliza XML para componer los mensajes que se transmiten entre el cliente (que genera una petición) y el servidor (que envía una respuesta) del servicio web.

	SOAP(protocolo montado sobre el http) + WSDL(xml+xslt+xpath)</p>

	<p>Envelope, que es lo que identifica al documento XML como un mensaje SOAP, y donde se deben declarar al menos los siguientes espacios de nombres:


	</p>


</body>
</html>