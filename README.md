# Documentação do Projeto

- **Data de Execução:** 04/12/2024  
- **Aluno:** Alysson Rodrigo

---

## **Configuração do Projeto com React**

### **Passos Realizados**
1. Criamos o componente `Header` para exibir o título "Gerenciador de Tarefas".  
2. Desenvolvemos o componente `TaskContainer` para exibir uma lista de tarefas fictícias com título e descrição.  
3. Atualizamos o arquivo `App.js` para importar e renderizar os componentes `Header` e `TaskContainer`.  
4. Aplicamos estilização utilizando CSS inline diretamente nos componentes para um layout simples e funcional.  

---

## **Aula 16 - Criando um Gerenciador de Tarefas com React**

### **Descrição das Alterações**
Nesta aula, construímos um gerenciador de tarefas simples em React. As principais mudanças realizadas foram:  

- Criamos o componente `Header`, que exibe o título do aplicativo na parte superior.  
- Criamos o componente `TaskContainer`, que renderiza dinamicamente uma lista de tarefas fictícias.  
- Estilizamos os componentes com CSS inline, utilizando objetos JavaScript na propriedade `style`.  

---

## **Header.js**

### **Descrição**
O componente `Header` é responsável por exibir o título "Gerenciador de Tarefas" na parte superior do aplicativo.  

### **Perguntas e Respostas**

#### **Quais os imports utilizados?**
- `React`: Importado para criar o componente funcional.  

#### **Há componentes? O que fazem?**
- Sim, o componente principal é o `Header`. Ele renderiza um título estilizado.  

#### **Como o estilo foi aplicado?**
- Usamos CSS inline, configurado diretamente no componente através de um objeto `headerStyle`.  

---

### **Bloco de Código**

```javascript
import React from 'react';

function Header() {
return (
    <header style={headerStyle}>
    <h1>Gerenciador de tarefas</h1>
    </header>
);
}

const headerStyle = {
backgroundColor: '#000080',
color: 'white',
textAlign: 'center',
padding: '10px',
};

export default Header;
---
## **TaskContainer.js**

Descrição
O TaskContainer é responsável por exibir uma lista de tarefas fictícias com título e descrição.

Perguntas e Respostas
Quais os imports utilizados?
React: Importado para criar o componente funcional.

Há componentes? O que fazem?
Sim, o componente TaskContainer renderiza dinamicamente as tarefas em uma lista estilizada.

Como as tarefas são exibidas?
Elas são definidas em um array de objetos e renderizadas dinamicamente usando o método .map().

Como o estilo foi aplicado?
Usamos CSS inline para estilizar as tarefas e o contêiner principal.

**bloco de código**

import React from 'react';

function TaskContainer() {
return (
    <div style={containerStyle}>
    <React.Fragment>
        <div style={taskStyle}>
        <h3>atividade 1:Gerenciador de Programação</h3>
        <p> aprender os conceitos básicos do React, como componentes , props e estado.</p>
        </div>
        <div style={taskStyle}>
        <h3>atividade 2:finalizando projeto de Front-end </h3>
        <p>Elaborar refeições compactas e nutritivas para os astronautas durante a viagem.</p>
        </div>
    </React.Fragment>
    </div>
);
}

// Estilos opcionais
const containerStyle = {
margin: '20px auto',
padding: '10px',
maxWidth: '600px',
backgroundColor: '#f4f4f4',
borderRadius: '8px',
};

const taskStyle = {
backgroundColor: '#fff',
padding: '10px',
margin: '10px 0',
border: '1px solid #ccc',
borderRadius: '4px',
};

export default TaskContainer;

---

App.js

Descrição
O App.js é o ponto de entrada do aplicativo. Ele organiza e renderiza os componentes principais do projeto (Header e TaskContainer).

Perguntas e Respostas
Quais os imports utilizados?
React: Importado para criar o componente funcional.
Header, TaskContainer: Componentes personalizados, importados para renderização.

Como o layout foi configurado?
Os componentes Header e TaskContainer foram renderizados dentro de uma div principal.

## **Bloco de código**

import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div>
      <Header />
      <TaskContainer />
    </div>
  );
}

export default App;
---
[print site ](imagem.png-1.jpeg)


**Estilização do Projeto**

A estilização foi realizada por meio de CSS inline, o que significa que os estilos foram inseridos diretamente nos componentes React utilizando a propriedade style. Essa metodologia proporciona uma maneira prática e ágil de aplicar estilos, dispensando a necessidade de arquivos CSS separados. Cada componente possui seus próprios estilos, o que simplifica o código e facilita a sua compreensão. Contudo, apesar de o CSS inline funcionar bem em projetos menores, em projetos de maior envergadura, pode ser necessário implementar outras abordagens, como a utilização de arquivos CSS externos ou bibliotecas de estilização, para assegurar uma melhor organização e escalabilidade do código.