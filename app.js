window.addEventListener('DOMContentLoaded', function () {

    const rectangleButton = document.getElementById('rectangleButton');
        const rectangleInputH = document.getElementById('rectangleInputH');
       const rectangleInputW = document.getElementById('rectangleInputW');
        // squareButton = document.getElementById('squarebutton'),
        // squareInput = document.getElementById('squareInput'),
        // circleButton = document.getElementById('circleButton'),
        // circleInput = document.getElementById('circleInput'),
        // triangleButton = document.getElementById('triangleButton'),
        // triangleInput = document.getElementById('triangleInput'),
        // shapeContainer = document.getElementById('shapeContainer'),
        // shapeInfo = document.getElementById('shapeInfo'),
        // widthInfo = document.getElementById('widthInfo'),
        // heightInfo = document.getElementById('heightInfo'),
        // radiusInfo = document.getElementById('radiusInfo'),
        // areaInfo = document.getElementById('areaInfo'),
        // perimeterInfo = document.getElementById('perimeterInfo');


    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            this.div = document.createElement('div');
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            shapeContainer.appendChild(this.div);
            


        }
        describe() {

        }
    }

    class Circle extends Shape {
        constructor() {
            super(height, width);
            this.div.idName = "circle";
        }
        describe() {

        }
    }

    class Triangle extends Shape {
        constructor() {
            super(height, width);
            this.div.idName = "triangle"
        }
        describe() {

        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.id = "rectangle";
            
            
        }
        describe() {

        }
    }

    class Square extends Shape {
        constructor() {
            super(height, width);
            this.div.idName = "square";
        }
        describe() {

        }
    }

rectangleButton.addEventListener('click', function newRectangle() {
    new Rectangle(rectangleInputH.value, rectangleInputW.value)
});
// squareButton.addEventListener('click', new Square());
// circleButton.addEventListener('click', new Circle());
// triangleButton.addEventListener('click', new Triangle());



// document.getElementById('field').value;

    ///end of body
});
