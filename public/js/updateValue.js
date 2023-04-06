const updateValueFunction = () => {
    let inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            let id = input.getAttribute('id');
            let valor = input.value;
            updateValue(id, valor);
        });
    });


    const updateValue = (id, valor) => {
        fetch('/update-value', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id, valor: valor })
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Ocurrió un error al guardar el nombre');
            }
            console.log('Valor guardado correctamente!');
        })
        .catch(error => {
            console.error(error);
        });

    };
};

