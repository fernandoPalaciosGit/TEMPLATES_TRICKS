<!-- FIORMATO SOAP -->
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"

  xmlns:ns1="URI_SCHEMA"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:soap-enc="http://schemas.xmlsoap.org/soap/encoding/"
>
	<soap:Body>
		<ns1:getPVP>
			<param0 xsi:type="xsd:string">KSTMSDHC8GB</param0>
		</ns1:getPVP>
	</soap:Body>
</soap:Envelope>





<!-- FORMATO WSDL, se muestra a los usuarios-->
<definitions
  name="WSDLusuario"
  targetNamespace="URI_WSDL"
  xmlns:tns="URI_WSDL"
  xmlns="http://schemas.xmlsoap.org/wsdl/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"                //CUALQUIER DATO
  xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"   //ARRAYS
>
  <types>
    tipos de datos
  </types>
  <message>
    agrupar tipo de datos paraa formar datos de salida.
    Por cada función se crea un mensaje para los parámetros de entrada, y otro para los de salida.
    Dentro de cada mensaje, se incluirán tantos elementos part como sea necesario.
  </message>
  <portType>
    grupo de funciones/operaciones (port)
  </portType>
  <binding>
    com se transmite la informacion que devuelve cada funcion(port)
  </binding>
  <service>
    url de cada funcion(port)
  </service>
</definitions>






<!-- TIPO DE DATOS OMPUESTOS-->
<types>
  <xsd:schema targetNamespace="URI_WSDL">
   <xsd:complexType name="direccion">
    <xsd:all>
      <xsd:element name="ciudad" type="xsd:string"/>
      <xsd:element name="calle" type="xsd:string"/>
      <xsd:element name="numero" type="xsd:string"/>
      <xsd:element name="piso" type="xsd:string"/>
      <xsd:element name="CP" type="xsd:string"/>
    </xsd:all>
   </xsd:complexType>
   <xsd:complexType name="usuario">
    <xsd:all> <!-- sequence || all: con orden de miembros de tipo complejo ||sin -->
      <xsd:element name="id" type="xsd:int"/>
      <xsd:element name="nombre" type="xsd:string"/>
      <xsd:element name="direccion" type="tns:direccion"/>
      <xsd:element name="email" type="xsd:string"/>
    </xsd:all>
   </xsd:complexType>
  </xsd:schema>
</types>




<!-- TIPOS DE DATOS ARRAYS -->
<types>
  <xsd:schema targetNamespace="URI_WSDL">
   <!-- XXX: nombre el tipo de elemento que contiene el array: ArrayOfusuario -->
   <xsd:complexType name="ArrayOfXXX">
    <complexContent>
      <xsd:restriction base="soapenc:Array">
        <xsd:attribute
          ref="soapenc:arrayType" arrayType="tns:usuario[]" />
      </xsd:restriction>
    </complexContent>
   </xsd:complexType>
  </xsd:schema>
</types>



<!-- MENSAJES, PARAMETROS DE ENTRADA / SALIDA -->
<message name="getUsuarioRequest">
  <part name="id" type="xsd:int"/>
</message>

<message name="getUsuarioResponse">
  <part name="getUsuarioReturn" type="tns:usuario"/>
</message>



<!-- DEFINIMOS LAS FUNCIONES / OPERACIONES -->
<portType name="usuarioPortType">
  <operation name="getUsuario">
    <input message="tns:getUsuarioRequest"/>
    <output message="tns:getUsuarioResponse"/>
  </operation>
</portType>

cada operacion recibe su nombre a traves del atributo 'name',
cada operacion debera contener (!!EN ORDEN):
  -un elemento 'input': funciones que solo envian mensajes al servidor
  -'input' + 'output': funciones que reciben un parametro y devuelven un resultado