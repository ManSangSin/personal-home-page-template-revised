var sheep_counter, other_counter;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


let element_sheep_count = document.getElementById('sheep_count');
element_sheep_count.innerText = 0;
let element_other_count = document.getElementById('other_count');
element_other_count.innerText = 0;


document.getElementById('button').addEventListener('click', (event) => {
  let element_text = document.getElementById('text');
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    sheep_counter = (typeof sheep_counter === 'number' ? sheep_counter : 0) + 1;
    let element_sheep_count2 = document.getElementById('sheep_count');
    element_sheep_count2.innerText = sheep_counter;
  } else {
    other_counter = (typeof other_counter === 'number' ? other_counter : 0) + 1;
    let element_other_count2 = document.getElementById('other_count');
    element_other_count2.innerText = other_counter;
  }

});