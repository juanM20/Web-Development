var menu_btn = document.getElementById('header-menu-icon');
var menu_list = document.getElementById('menu-list');
var state = false;

menu_btn.addEventListener('click', () => {

    if(!state) {
        menu_list.style.display = "flex";
        state = true
    }
    else {
        menu_list.style.display = "none";
        state = false
    }
});
