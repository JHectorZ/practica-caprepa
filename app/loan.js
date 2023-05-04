const option_selector_client = document.querySelector('select[name="cliente"]');
const option_selector_mont = document.querySelector('select[name="monto"]');
const option_selector_pla = document.querySelector('select[name="plazo"]');


function select_generator(array, selector){
    for (client of array){
        let option = document.createElement('option');
        option.value = client.value
        option.textContent = client.text
    
        selector.appendChild(option)
    }
}


const array_client = [
    { value: '1', text: 'Cliente 1' },
    { value: '2', text: 'Cliente 2' },
    { value: '3', text: 'Cliente 3' }
];
select_generator(array_client, option_selector_client)

const array_mont = [
    { value: 1500, text: '1500' },
    { value: 2000, text: '2000' },
    { value: 2500, text: '2500' },
    { value: 3000, text: '2500' },
    { value: 3500, text: '3500' },
    { value: 4000, text: '4000' }
];
select_generator(array_mont, option_selector_mont)

const array_pla = [
    { value: '2', text: 'En plazo de 2' },
    { value: '4', text: 'En plazo de 4' },
    { value: '6', text: 'En plazo de 6' },
    { value: '8', text: 'En plazo de 8' },
    { value: '10', text: 'En plazo de 10' },
    { value: '12', text: 'En plazo de 12' }
];
select_generator(array_pla, option_selector_pla)