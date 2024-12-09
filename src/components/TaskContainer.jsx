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
        <p>concluir o desenvolvimento do projeto de front end usando HTML , CSS e JavaScript.</p>
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



