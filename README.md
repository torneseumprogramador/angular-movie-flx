# MovieFlx

Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) na versão 19.2.0.

## Servidor de Desenvolvimento

Para iniciar o servidor local de desenvolvimento, execute:

```bash
ng serve
```

Uma vez que o servidor estiver rodando, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que houver modificações nos arquivos-fonte.

## Estrutura do Projeto

Estamos desenvolvendo o layout do MovieFlx baseado no design disponível no Figma:

🔗 [Protótipo no Figma](https://www.figma.com/proto/FSkHiMRTRa09CljCjXmedJ/P%C3%A1ginas-Hor%C3%A1cio?node-id=195-21)

### Desenvolvimento com Mocks

Inicialmente, utilizaremos **mocks** para simular os dados da aplicação e validar a interface de usuário antes de integrar com o backend.

### Integração com o Backend

Após a validação do layout e funcionalidades com mocks, faremos a integração com o backend desenvolvido em **Java**. O código do backend pode ser encontrado no seguinte repositório:

🔗 [Repositório do Backend](https://github.com/renanlessa/miniature-fortnight/tree/main/src/main/java/dev/flix/entity)

## Gerando Componentes

O Angular CLI oferece ferramentas poderosas para a criação de componentes. Para gerar um novo componente, utilize o seguinte comando:

```bash
ng generate component nome-do-componente
```

Para visualizar a lista completa de **schematics** disponíveis (como `components`, `directives`, ou `pipes`), execute:

```bash
ng generate --help
```

## Construção do Projeto

Para compilar o projeto, execute:

```bash
ng build
```

Os arquivos de saída serão armazenados no diretório `dist/`. Por padrão, a build de produção otimiza a aplicação para melhor desempenho e velocidade.

## Testes Unitários

Para executar os testes unitários utilizando o [Karma](https://karma-runner.github.io), utilize o comando:

```bash
ng test
```

## Testes End-to-End

Para realizar testes end-to-end (e2e), execute:

```bash
ng e2e
```

O Angular CLI não inclui um framework de testes e2e por padrão. Você pode escolher e configurar um que atenda às suas necessidades.

## Recursos Adicionais

Para mais informações sobre o Angular CLI e sua documentação detalhada, acesse:

🔗 [Documentação do Angular CLI](https://angular.dev/tools/cli)

