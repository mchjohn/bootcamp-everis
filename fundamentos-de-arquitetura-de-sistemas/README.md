# Tipos de arquitetura



## **Monolito**

Monólito significa “obra construída em uma só pedra” por isso é  utilizado para definir a arquitetura de alguns sistemas, refere-se a  forma de desenvolver um sistema, programa ou aplicação onde todas as  funcionalidades e códigos estejam em um único processo. Essas diversas  funcionalidades estão em um mesmo código fonte e em sua execução  compartilham recursos da mesma máquina, seja processamento, memória,  bancos de dados e arquivos.

Como o sistema está inteiro em um único bloco, seu desenvolvimento é  mais ágil, se comparado com outras arquiteturas, sendo possível  desenvolver uma aplicação em menos tempo e com menor complexidade  inicial, reparem na palavra inicial.



## Vantagens e Desvantagens de um Sistema Monolítico

#### Vantagens

- Baixa complexidade
- Monitoramento simplificado

#### Desvantagens

- Stack única
- Compartilhamento de recurso
- Acoplamento
- Mais complexidade a escalabilidade



​													   *Exemplo de Monolito*

![](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\monolito.png)





## Microserviços

O conceito de microserviço surgiu em 2012 e, de uma maneira geral,  trata-se do desenvolvimento de uma única aplicação como uma suíte de  serviços autônomos e independentes, cada um rodando em seu processo e se comunicando por meio de uma API HTTP e REST.

Em outras palavras,  enquanto uma aplicação monolítica coloca todas as suas funcionalidades  em um único processo e escala replicando-as em vários serviços, a  arquitetura de microserviços coloca cada elemento de funcionalidade em  um serviço separado, e os replica conforme for necessário.

Como  são componentes autônomos e de baixo acoplamento, não existe a  necessidade de que cada serviço seja construído com a mesma linguagem ou sejam processados numa mesma plataforma.

Nesse caso, são  utilizados processos de deploys automatizados, existindo um  gerenciamento centralizado mínimo. O ideal é que cada [microserviço](https://www.grupomult.com.br/microservicos-nova-tendencia/) seja instalado em um “host” diferente, que pode ser uma arquitetura de Light Containers LXC ou VMs, por exemplo.



## Vantagens de um Sistema Microserviços

- cria a oportunidade de os desenvolvedores usarem tecnologias mais atuais, além de maior liberdade para o desenvolvimento dos serviços de forma independente;

- possibilita uma implantação automática por meio de código aberto e integração contínua, como Jenkins, Hudson, etc.;

- a arquitetura é de mais fácil compreensão e muito adaptável às mudanças, resultando em [melhor produtividade da equipe](https://www.grupomult.com.br/como-aplicar-devops-visando-a-integracao-de-dados/) e a facilidade de treinar novos colaboradores;

- inicialização mais rápida do conteiner web;

- possibilita o gerenciamento das falhas de modo otimizado, pois se um serviço falhar, os outros continuarão trabalhando;

- atualizações de funcionalidades menos complexas e sem necessidade de modificar todo o aplicativo;

- o código fica mais organizado e amplia a visão das necessidades dos clientes.



## Distribuição de Microserviços

Existem  várias maneiras de se ter um backend fragmentado em microserviços e o  processo dependerá do tipo de arquitetura de integração já utilizado na  empresa. Mas de uma maneira geral, existem três modelos de implantação:

- Reconstruir o backend já com a arquitetura adequada, o que no caso de grandes  empresas pode ser inadequado por conta do investimento já realizado e  pela complexidade dos processos.

- A criação de uma pequena camada na frente dos serviços já implementados em [SOA](https://www.grupomult.com.br/como-integrar-dados-com-soa/), isto é, um API Front, para que a exposição passe a ser realizada em  REST. Nesse caso, não seriam mais necessários orquestrações e  transformações do ESB.

- Em arquiteturas que ainda não estão  construídas em SOA, será necessário criar um desenho que analise o  projeto para o futuro, pois ele atualmente está desenhado em monolítico. Nesse caso, será preciso contratar uma consultoria especializada, para a otimização do tempo e dos processos. Com o desenho criado, um novo API  Front irá atendê-lo e você terá um tempo maior para realizar o refactory do backend.

  

  ​													   *1 Exemplo de Microserviço*

![](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\microservicos1.png)



## Vantagens e Desvantagens do Microserviço #1

#### Vantagens

- Stack dinâmica
- Simples escalabilidade

#### Desvantagens

- Acoplamento
- Monitoramento mais complexo
- Provisionamento mais complexo



​													   *2 Exemplo de Microserviço*

![microservicos2](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\microservicos2.png)



## Vantagens e Desvantagens do Microserviço #2

#### Vantagens

- Stack dinâmica
- Simples escalabilidade
- Desacoplamento

#### Desvantagens

- Monitoramento mais complexo
- Provisionamento mais complexo



​													   *3  Exemplo de Microserviço*

![microservicos3](C:\Users\miche\Documents\bootcamp-everis\fundamentos-de-arquitetura-de-sistemas\microservicos3.png)



## Vantagens e Desvantagens do Microserviço #3

#### Vantagens

- Stack dinâmica
- Simples escalabilidade
- Desacoplamento
- Menor complexidade

#### Desvantagens

- Provisionamento mais complexo
- Plataforma inteira depende do gerenciamento de pipeline



# Gerenciamento de erros e volume de acesso

Onde é mais complexo?

- Processos assíncronos (Microsserviços #2)
- Pipeline

Solução?

- Dead letter queue
- Filas de re-tentativas





# O que são Web Services?

- São soluções para aplicações se comunicarem independente de linguagens, softwares e hardwares utilizados.

- Inicialmente foi desenvolvido para troca de mensagens utilizando XML (Extensible Markup Language) sobre o protocolo HTTP identificado por URI (Uniform Resource Identifier) (links digitados para acessar um determinado site).

- Web Services são API's que comunicam-se por meio de redes sobre o protocolo HTTP.
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