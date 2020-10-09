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
            if (this.width > 600 && this.height > 600) {
                alert('Shape is too big! Try again!');
            } else if (this.height > 600) {
                alert('Height is too big! Try again!');
            } else if (this.width > 600) {
                alert('Width is too big! Try again!');

            } else {
                this.div = document.createElement('div');
                this.div.style.width = `${this.width}px`;
                this.div.style.height = `${this.height}px`;
                this.div.className = "shape";
                shapeContainer.appendChild(this.div);
            };


        }
        describe() {

        }
    }

    class Circle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.id = "circle";
        }
        describe() {

        }
    }

    class Triangle extends Shape {
        constructor() {
            super(height, width);
            this.div.id = "triangle"
        }
        describe() {

        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.id = "rectangle";
            if (this.div.id === undefined) {
                
            }


        }
        describe() {

        }
    }

    class Square extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.id = "square";
        }
        describe() {

        }
    }

    rectangleButton.addEventListener('click', function newRectangle() {
        new Rectangle(rectangleInputH.value, rectangleInputW.value)
        if 
    });

    squareButton.addEventListener('click', function newSquare() {
        new Square(squareInput.value, squareInput.value);
    });
    circleButton.addEventListener('click', function newCircle() {
        new Circle(circleInput.value, squareInput.value)
    });

    // triangleButton.addEventListener('click', new Triangle());



    // document.getElementById('field').value;

    ///end of body
});
