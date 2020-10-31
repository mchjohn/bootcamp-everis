# O que é Promise?

- É um objeto que representa o sucesso ou falha de uma operação assíncrona.

- Uma Promise pode envolver/encapsular operações síncronas.

### Vantagens em usar Promises

- Você ganha mais controle e legibilidade no fluxo de lógicas assíncronas.
- Reduz o acoplamento entre funções de callback
- Mais previsibilidade e detalhamento no tratamento de erros.



# O que é operação Assíncrona?

- O código JavaScript é executado em uma única thread, por tanto ele só pode fazer uma operação de cada vez.

- Código assíncrono pode iniciar um processo agora e finalizar o processo posteriormente.

- Requests são exemplos de operação assíncrona.
- O JavaScript escrito normalmente é executado em um única thread, mas requests, requisições são entregues para uma thread separada que é executada fora da thread do JavaScript. Por conta disso que o restante do código é executado em quanto o requeste é processado.

​														 Exemplo de código assíncrono

![](C:\Users\miche\Documents\bootcamp-everis\promises\Screenshot_1.png)