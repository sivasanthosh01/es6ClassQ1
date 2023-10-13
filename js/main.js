class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log(this.height*this.width,"Area");
    }
    perimeter(){
        console.log(2*(this.width+this.height),"Perimeter");
    }
}
let rect=new Rectangle(15,10);
rect.area();
rect.perimeter();