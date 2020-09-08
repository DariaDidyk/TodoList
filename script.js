const list = new List();
list.addItem(new Item('First'));
list.addItem(new Item('Second'));
list.addItem(new Item('Third'));

setTimeout(() => {
    list.toggleItem(1);
}, 1000);