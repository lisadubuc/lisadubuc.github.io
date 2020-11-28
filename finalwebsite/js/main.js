var items = document.querySelector(".page-container ul");
var active = 0;

function startOver() {
    active = -1;
    changeOrder();
}

function changeOrder() {
    var length = items.children.length;
    var order = 0;

    // start at the item AFTER the active one.
    var index = active + 1;

    /* if the active item was the last one, we're now out of bounds so
    set to the first item */
    if (index >= length) {
        return;
    }

    active = index;

    // now run through adding the orders
    while (order < length) {
        // add 1 to the order - order cannot be 0.
        order++;

        // check the item definitely exists :)
        var item = items.children[index];
        if (item && item.style) {
            // new order value
            item.style.order = order;
        }

        /* as we are working from active we need to go back to
           the start if we reach the end of the item list */
        if (index < length - 1) {
            index++;
        } else {
            index = 0;
        }
    }
}