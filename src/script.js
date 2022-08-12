var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



var item, shopping_array, custom_item;

// Describe this function...
function reset_array() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  shopping_array = [];
}

// Describe this function...
function reset_list() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shopping_list = document.getElementById('shopping-list');
  element_shopping_list.replaceChildren();
}

// Describe this function...
function build_shopping_list() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  shopping_array.forEach((item) => {
    let element_shopping_list2 = document.getElementById('shopping-list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    new_li.addEventListener('click', (event) => {
      new_li.setAttribute("class", 'strikethrough');

    });
    element_shopping_list2.appendChild(new_li);
  });
}

// Describe this function...
function reset_build_list() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  reset_list();
  build_shopping_list();
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


reset_array();


document.getElementById('btn-eggs').addEventListener('click', (event) => {
  shopping_array.push('Eggs');
  reset_build_list();

});

document.getElementById('btn-bacon').addEventListener('click', (event) => {
  shopping_array.push('Bacon');
  reset_build_list();

});

document.getElementById('btn-bread').addEventListener('click', (event) => {
  shopping_array.push('Bread');
  reset_build_list();

});

document.getElementById('btn-tom').addEventListener('click', (event) => {
  shopping_array.push('Tomoatoes');
  reset_build_list();

});

document.getElementById('btn-mush').addEventListener('click', (event) => {
  shopping_array.push('Mushrooms');
  reset_build_list();

});

document.getElementById('btn-hash').addEventListener('click', (event) => {
  shopping_array.push('Hash brown');
  reset_build_list();

});

document.getElementById('btn-remove').addEventListener('click', (event) => {
  shopping_array.pop();
  reset_build_list();

});

document.getElementById('btn-reset').addEventListener('click', (event) => {
  reset_array();
  reset_list();

});

document.getElementById('btn-other').addEventListener('click', (event) => {
  custom_item = getNumberOrString(document.getElementById('input-ingredients').value);
  if (custom_item != 0) {
    shopping_array.push(getNumberOrString(document.getElementById('input-ingredients').value));
    reset_build_list();
  }

});

var url, text_cache, page, count, text, url_cache, temp_text, temp_url, item;

// Describe this function...
function rebuild_array_cache_temp() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  text_cache = [];
  url_cache = [];
  temp_text = [];
  temp_url = [];
  url.forEach((item) => {
    url_cache.push(item);
  });
  text.forEach((item) => {
    text_cache.push(item);
  });
}

// Describe this function...
function get_url_text_for_current_page() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  count = 0;
  while (!(count == page)) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    count = (typeof count === 'number' ? count : 0) + 1;
    temp_text.push(text_cache.shift());
    temp_url.push(url_cache.shift());
  }
  let element_storyline = document.getElementById('storyline');
  element_storyline.innerText = temp_text.slice(-1)[0];
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", temp_url.slice(-1)[0]);
}

// Describe this function...
function show_hide_prev_next_buttons() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (page > 1) {
    let element_button_prev = document.getElementById('button_prev');
    element_button_prev.style.visibility = (true) ? 'visible' : 'hidden';
  } else {
    let element_button_prev2 = document.getElementById('button_prev');
    element_button_prev2.style.visibility = (false) ? 'visible' : 'hidden';
  }
  if (page == 6) {
    let element_button_next = document.getElementById('button_next');
    element_button_next.style.visibility = (false) ? 'visible' : 'hidden';
  } else {
    let element_button_next2 = document.getElementById('button_next');
    element_button_next2.style.visibility = (true) ? 'visible' : 'hidden';
  }
}

// Describe this function...
function reset_build_show() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  rebuild_array_cache_temp();
  get_url_text_for_current_page();
  show_hide_prev_next_buttons();
  highlight_button();
}

// Describe this function...
function reset_button_bg() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_button_1 = document.getElementById('button_1');
  element_button_1.style.backgroundColor = 'transparent';
  let element_button_2 = document.getElementById('button_2');
  element_button_2.style.backgroundColor = 'transparent';
  let element_button_3 = document.getElementById('button_3');
  element_button_3.style.backgroundColor = 'transparent';
  let element_button_4 = document.getElementById('button_4');
  element_button_4.style.backgroundColor = 'transparent';
  let element_button_5 = document.getElementById('button_5');
  element_button_5.style.backgroundColor = 'transparent';
  let element_button_6 = document.getElementById('button_6');
  element_button_6.style.backgroundColor = 'transparent';
}

// Describe this function...
function highlight_button() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  reset_button_bg();
  if (page == 1) {
    let element_button_12 = document.getElementById('button_1');
    element_button_12.style.backgroundColor = '#779AF6';
  } else if (page == 2) {
    let element_button_22 = document.getElementById('button_2');
    element_button_22.style.backgroundColor = '#8C9CE4';
  } else if (page == 3) {
    let element_button_32 = document.getElementById('button_3');
    element_button_32.style.backgroundColor = '#A89ECF';
  } else if (page == 4) {
    let element_button_42 = document.getElementById('button_4');
    element_button_42.style.backgroundColor = '#C7A1B7';
  } else if (page == 5) {
    let element_button_52 = document.getElementById('button_5');
    element_button_52.style.backgroundColor = '#E7A3A1';
  } else {
    let element_button_62 = document.getElementById('button_6');
    element_button_62.style.backgroundColor = '#E7A3A1';
  }
}


url = ['https://images.unsplash.com/photo-1522100199172-e0d85a587108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80', 'https://images.unsplash.com/photo-1519255122284-c3acd66be602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1395&q=80', 'https://images.unsplash.com/photo-1516239326301-621ff6b49067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80', 'https://images.unsplash.com/photo-1506623059607-3e499dc1ec5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80', 'https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80', 'https://images.unsplash.com/photo-1505495288623-91760e0986db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80'];
text = ['Strangers waitin\'', 'Up and down the boulevard', 'Their shadows searchin\' in the night', 'Streetlights, people', 'Livin\' just to find emotion', 'Hidin\', somewhere in the night'];
page = 1;
reset_build_show();


document.getElementById('button_next').addEventListener('click', (event) => {
  page = (typeof page === 'number' ? page : 0) + 1;
  reset_build_show();

});

document.getElementById('button_prev').addEventListener('click', (event) => {
  page = (typeof page === 'number' ? page : 0) + -1;
  reset_build_show();

});

document.getElementById('button_1').addEventListener('click', (event) => {
  page = 1;
  reset_build_show();

});

document.getElementById('button_2').addEventListener('click', (event) => {
  page = 2;
  reset_build_show();

});

document.getElementById('button_3').addEventListener('click', (event) => {
  page = 3;
  reset_build_show();

});

document.getElementById('button_4').addEventListener('click', (event) => {
  page = 4;
  reset_build_show();

});

document.getElementById('button_5').addEventListener('click', (event) => {
  page = 5;
  reset_build_show();

});

document.getElementById('button_6').addEventListener('click', (event) => {
  page = 6;
  reset_build_show();

});


var item, total_cost_array, apple_cost_array, apple_count_array, coffee_count_var, total_count_array, orange_cost_array, apple_count_var, orange_count_array, orange_count_var, coffee_count_array, coffee_cost_array, egg_count_array, egg_count_var, bacon_count_array, bacon_count_var, egg_cost_array, bacon_cost_array, total_cost_var, total_count_var;

// Describe this function...
function reset_arrays() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  apple_cost_array = [];
  orange_cost_array = [];
  coffee_cost_array = [];
  egg_cost_array = [];
  bacon_cost_array = [];
  total_cost_array = [];
  total_count_array = [];
}

// Describe this function...
function build_and_display_count() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  apple_count_array.forEach((item) => {
    apple_cost_array.push(2.99);
  });
  if (apple_count_var >= 0) {
    let element_apple_count = document.getElementById('apple-count');
    element_apple_count.innerText = apple_count_var;
  }
  orange_count_array.forEach((item) => {
    orange_cost_array.push(0.3);
  });
  if (orange_count_var >= 0) {
    let element_orange_count = document.getElementById('orange-count');
    element_orange_count.innerText = orange_count_var;
  }
  coffee_count_array.forEach((item) => {
    coffee_cost_array.push(3.69);
  });
  if (coffee_count_var >= 0) {
    let element_coffee_count = document.getElementById('coffee-count');
    element_coffee_count.innerText = coffee_count_var;
  }
  egg_count_array.forEach((item) => {
    egg_cost_array.push(2.29);
  });
  if (egg_count_var >= 0) {
    let element_egg_count = document.getElementById('egg-count');
    element_egg_count.innerText = egg_count_var;
  }
  bacon_count_array.forEach((item) => {
    bacon_cost_array.push(4.39);
  });
  if (bacon_count_var >= 0) {
    let element_bacon_count = document.getElementById('bacon-count');
    element_bacon_count.innerText = bacon_count_var;
  }
  build_and_display_total();
}

// Describe this function...
function reset_all() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total_cost_array = [];
  total_count_array = [];
  apple_count_array = [];
  apple_cost_array = [];
  orange_count_array = [];
  orange_cost_array = [];
  coffee_count_array = [];
  coffee_cost_array = [];
  egg_count_array = [];
  egg_cost_array = [];
  bacon_count_array = [];
  bacon_cost_array = [];
}

// Describe this function...
function build_and_display_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  apple_cost_array.forEach((item) => {
    total_cost_array.push(item);
  });
  apple_count_array.forEach((item) => {
    total_count_array.push(item);
  });
  orange_cost_array.forEach((item) => {
    total_cost_array.push(item);
  });
  orange_count_array.forEach((item) => {
    total_count_array.push(item);
  });
  coffee_cost_array.forEach((item) => {
    total_cost_array.push(item);
  });
  coffee_count_array.forEach((item) => {
    total_count_array.push(item);
  });
  egg_cost_array.forEach((item) => {
    total_cost_array.push(item);
  });
  egg_count_array.forEach((item) => {
    total_count_array.push(item);
  });
  bacon_cost_array.forEach((item) => {
    total_cost_array.push(item);
  });
  bacon_count_array.forEach((item) => {
    total_count_array.push(item);
  });
  total_cost_var = total_cost_array.reduce((a,b) => a+b, 0);
  total_count_var = total_count_array.reduce((a,b) => a+b, 0);
  let element_count_total = document.getElementById('count-total');
  element_count_total.innerText = total_count_var;
  let element_cost_total = document.getElementById('cost-total');
  element_cost_total.innerText = total_cost_var;
}


reset_all();


document.getElementById('btn-apple-add').addEventListener('click', (event) => {
  reset_arrays();
  apple_count_array.push(1);
  apple_count_var = (typeof apple_count_var === 'number' ? apple_count_var : 0) + 1;
  build_and_display_count();

});

document.getElementById('btn-apple-sub').addEventListener('click', (event) => {
  if (apple_count_var > 0) {
    reset_arrays();
    apple_count_array.pop();
    apple_count_var = (typeof apple_count_var === 'number' ? apple_count_var : 0) + -1;
    build_and_display_count();
  }

});

document.getElementById('btn-orange-add').addEventListener('click', (event) => {
  reset_arrays();
  orange_count_array.push(1);
  orange_count_var = (typeof orange_count_var === 'number' ? orange_count_var : 0) + 1;
  build_and_display_count();

});

document.getElementById('btn-orange-sub').addEventListener('click', (event) => {
  if (orange_count_var > 0) {
    reset_arrays();
    orange_count_array.pop();
    orange_count_var = (typeof orange_count_var === 'number' ? orange_count_var : 0) + -1;
    build_and_display_count();
  }

});

document.getElementById('btn-coffee-add').addEventListener('click', (event) => {
  reset_arrays();
  coffee_count_array.push(1);
  coffee_count_var = (typeof coffee_count_var === 'number' ? coffee_count_var : 0) + 1;
  build_and_display_count();

});

document.getElementById('btn-coffee-sub').addEventListener('click', (event) => {
  if (coffee_count_var > 0) {
    reset_arrays();
    coffee_count_array.pop();
    coffee_count_var = (typeof coffee_count_var === 'number' ? coffee_count_var : 0) + -1;
    build_and_display_count();
  }

});

document.getElementById('btn-egg-add').addEventListener('click', (event) => {
  reset_arrays();
  egg_count_array.push(1);
  egg_count_var = (typeof egg_count_var === 'number' ? egg_count_var : 0) + 1;
  build_and_display_count();

});

document.getElementById('btn-egg-sub').addEventListener('click', (event) => {
  if (egg_count_var > 0) {
    reset_arrays();
    egg_count_array.pop();
    egg_count_var = (typeof egg_count_var === 'number' ? egg_count_var : 0) + -1;
    build_and_display_count();
  }

});

document.getElementById('btn-bacon-add').addEventListener('click', (event) => {
  reset_arrays();
  bacon_count_array.push(1);
  bacon_count_var = (typeof bacon_count_var === 'number' ? bacon_count_var : 0) + 1;
  build_and_display_count();

});

document.getElementById('btn-bacon-sub').addEventListener('click', (event) => {
  if (bacon_count_var > 0) {
    reset_arrays();
    bacon_count_array.pop();
    bacon_count_var = (typeof bacon_count_var === 'number' ? bacon_count_var : 0) + -1;
    build_and_display_count();
  }

});

document.getElementById('btn-reset2').addEventListener('click', (event) => {
  reset_all();
  coffee_count_var = 0;
  apple_count_var = 0;
  orange_count_var = 0;
  egg_count_var = 0;
  bacon_count_var = 0;
  build_and_display_count();

});