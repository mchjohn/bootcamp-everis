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

