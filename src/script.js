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