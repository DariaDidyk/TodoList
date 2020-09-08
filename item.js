class Item {
    constructor(content){
        this.content = content;
        this.state = false;
    }
    toggleState() {
        this.state = !this.state;
    }
}