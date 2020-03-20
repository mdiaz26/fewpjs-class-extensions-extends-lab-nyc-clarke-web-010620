class Polygon {
    constructor(arrayOfIntegers) {
        this.sideLengths = arrayOfIntegers
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        return this.sideLengths.reduce(function(accumulator, currentValue){return accumulator + currentValue}, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if ((this.sideLengths[0] + this.sideLengths[1] > this.sideLengths [2]) &&
        (this.sideLengths[1] + this.sideLengths[2] > this.sideLengths[0]) &&
        (this.sideLengths[0] + this.sideLengths[2] > this.sideLengths[1])){
            return true
        } else {return false}
    }
}

class Square extends Polygon {
    get isValid() {
        let average = (this.sideLengths.reduce(function(accumulator, currentValue){return accumulator + currentValue}, 0))/4
        return (average === this.sideLengths[0])
    }

    get area(){
        return this.sideLengths[0] ** 2
    }
}