# O que são Web Services?

- São soluções para aplicações se comunicarem independente de linguagens, softwares e hardwares utilizados.

- Inicialmente foi desenvolvido para troca de mensagens utilizando XML (Extensible Markup Language) sobre o protocolo HTTP identificado por URI (Uniform Resource Identifier) (links digitados para acessar um determinado site).

-  Web Services são API's que comunicam-se por meio de redes sobre o protocolo HTTP.
- Todo Web Service é uma API, porém nem toda API é um Web Service.



O Web Service acessa o banco de dados X, gera uma URI e o banco de dados Y acessa o Web Service através dessa URI, utilizando XML, JSON e etc.



# Vantagens de utilizar Web Service

- Linguagem comum
- Integração
- Reutilização de implementação
- Segurança
- Custos



# Principais tecnologias

- SOAP - Arquitetura - Está muito atrelado ao XML
- REST - Arquitetura - Está muito atrelado ao JSON
- XML
- JSON



# O que é SOAP?

- SOAP - Simple Object Acess Protocol -  Protocolo Simples de Acesso a Objetos.
- É baseado em XML para acessar Web Services principalmente por HTTP.
- É uma definição de como Web Services se comunicam.
- Desenvolvido para facilitar integração entre aplicações.



# Vantagens de utilizar SOAP

- Permite integrações entre aplicações, independente da linguagem, pois traduz tudo para XML.
- É independente de plataformas e softwares.
- Meio de transporte genérico, pode ser usado por outros protocolos além do HTTP.



# O que é XML?

- XML - Extensible Markup Language - Linguagem de Marcação Extensível.
- Linguagem de marcação criada na década de 90 pela W3C.
- Facilita separação de conteúdo.
- Não limita criação de tags.
- Linguagem comum para integração entre aplicações.



# Estrutura de uma mensagem SOAP

Com SOAP sempre será usado XML.

- "SOAP Message" possui uma estrutura única que deve sempre ser seguida.

| **SOAP Envelope** |
| :---------------: |
|  **SOAP Header**  |
|   **SOAP Body**   |



- *SOAP Envelope* responsável por encapsular toda a mensagem SOAP.
- *SOAP Header* possui informações de atributos e metadados da requisição.
- *SOAP Body* contém a mensagem.



# O que é um WSDL?

- WSDL - Web Services Description Language.
- Descreve Web Services, funciona como um contrato do serviço.
- Descrição é feita em um documento XML, onde é descrito o serviço, especificações de acesso, operações e métodos.



# O que é um XSD?

- XSD - XML Schema Definition - Esquema de Definição de XML
- Um esquema no formato XML usado para definir a estrutura de dados que será validada no XML.
- Funciona como uma documentação de como deve ser montado o SOAP Message (XML) que será enviado através do Web Service.



# O que é REST?

- REST - Representational State Transfer - Representação de um estado de transferência.
- Estilo de arquitetura de software, que defina a implementação de um Web Service.
- Trabalha com formatos XML, JSON e outros.



# Vantagens em Utilizar REST

- Permite integração entre aplicações, entre cliente e servidor em páginas web e aplicações.
- Utiliza métodos HTTP para definir a operação que está sendo efetuada.
- Arquitetura de fácil compreensão.



# O que é API?

- API - Application Programming Interface - Interface de programação de aplicativos
- Conjunto de rotinas documentados e disponibilizados por uma aplicação, para que outras aplicações consumam suas funcionalidades.
- Popularizou-se com o aumento dos Web Services.
- As maiores plataformas de tecnologia disponibilizam APIs para acessos de suas funcionalidades, ex: FaceBook, Twitter, Telegram, Whatsapp, GitHub e etc.



# Métodos utilizados pelo REST

- GET - Solicita a representação de um recurso.
- POST - Solicita a criação de um recurso.
- DELETE - Solicita a exclusão de um recurso.
- PUT - Solicita a atualização de um recurso.



# Estrutura de um REST

![](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\Screenshot_1.png)



# Estrutura de um JSON

- JSON - JavaScript Object Notation - Notação de Objeto JavaScript.
- Formatação leve usada para troca de mensagem entre sistemas.
- Usa a estrutura de chave/valor e de listas ordenadas.
- Um dos formatos mais populares e mais utilizados para troca de mensagem entre sistemas.

![](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\Screenshot_2.png)

​																						Estrutura JSON





# Integração com serviços REST

a



# Métodos HTTP na prática

a



# Código de estado HTTP

- Usado pelo servidor para avisar o cliente sobre o estado da operação solicitada.
- 1xx - Informativo
- 2xx - Sucesso
- 3xx - Redirecionamento
- 4xx Erro do Cliente
- 5xx - Erro do Servidor