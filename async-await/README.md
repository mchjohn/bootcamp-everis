## Principal ideia do *async/await*

- A proposta das funções async/await é simplificar o uso de promises.  Assim como promises são similares a callbacks estruturados, as funções  async/await são similares à junção de generators com promises.

- Uma função async é uma syntax sugar para fazer uma function retornar uma promise, uma forma de envolver uma function em uma promise



## Porque é importante aprender *async**/**await*

- Permite escrever códigos baseados em Promises como se fosse síncrono baseado em main thread, de uma maneira mais confortável e mais legível e de fácil compreensão.





## A palavra *async*:

- Funções async sempre retornam uma promise;

- Se a função retorna um valor, a promise será resolvida com esse valor;

- Se a função lança um erro, a promise é rejeitada.

  

  ​				 								*exemplo de código com async*

![](C:\Users\miche\Documents\bootcamp-everis\async-await\Screenshot_1.png)



## A palavra *await*:

- Pode ser usada apenas em funções async;

- Pausa a execução da função, aguardando a promise ser resolvida.

  

  ​										 	 *exemplo de código com async/await*

![](C:\Users\miche\Documents\bootcamp-everis\async-await\Screenshot_2.png)





## Como tratar *erros* em funções async?

- A declaração `try` consiste  em um bloco `try`, que contém uma ou mais declarações, e ao menos uma cláusula `catch`.

- Uma cláusula `catch` contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco `try`. Ou seja, se você quer que o bloco `try `tenha êxito, e caso não tenha, você quer que o controle passe para o bloco `catch`. Caso qualquer declaração dentro do bloco `try` (ou em uma função chamada no interior do bloco `try`) lançar uma exceção o controle imediatamente muda para a cláusula `catch`. Se nenhuma exceção for lançada no bloco `try` a cláusula `catch` é ignorada.

- A cláusula `finally` é executada após a execução do bloco `try` e da(s) cláusula(s) `catch `porém antes das declarações seguintes ao `try`. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

- Você pode aninhar uma ou mais declarações `try`. Caso uma declaração `try` interior não tenha uma cláusula `catch`, a cláusula catch pertencente a declaração `try` que a envolve é introduzida. 

  ​												*tratando erro com try - catch*

![](C:\Users\miche\Documents\bootcamp-everis\async-await\Screenshot_3.png)



## O que são request *paralelos* e *sequenciais*?

#### Requeste sequencial

No código abaixo cada request é obtido de forma sequencial, *pokemon1* faz o request e somente após ele terminar o request é que o request de *pokemon4* é realizado, e após ele o requeste de *pokemon7* é realizado, e após todos os requeste concluírem é que os *console.log()* serão executados.

​														*exemplo de request sequencial*

![](C:\Users\miche\Documents\bootcamp-everis\async-await\Screenshot_4.png)



#### Requeste paralelo

No código abaixo cada request é obtido de forma paralela, ou seja,  *promisePokemon1* faz o request e *promisePokemon4*  não aguarda a conclusão do request de *promisePokemon1* concluir para realizar seu requeste da mesma forma que  *promisePokemon7* não aguarda a conclusão de *promisePokemon4* concluir para realizar seu requeste. O que acontece é que *pokemon1*, *pokemon4*, e *pokemon7* , recebem as *promisePokemon's* após serem resolvidas.

​														*exemplo de request paralela*

![](C:\Users\miche\Documents\bootcamp-everis\async-await\Screenshot_5.png)



## Como *refatorar* requests paralelos?

- 



















- Toda função async retorna implicitamente um Promise.