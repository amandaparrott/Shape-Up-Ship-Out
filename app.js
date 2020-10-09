window.addEventListener('DOMContentLoaded', function () {

    const rectangleButton = document.getElementById('rectangleButton');
    const rectangleInputH = document.getElementById('rectangleInputH');
    const rectangleInputW = document.getElementById('rectangleInputW');
    const squareButton = document.getElementById('squareButton');
    const squareInput = document.getElementById('squareInput');
    const circleButton = document.getElementById('circleButton');
    const circleInput = document.getElementById('circleInput');
    const triangleButton = document.getElementById('triangleButton');
    const triangleInput = document.getElementById('triangleInput');
    const shapeContainer = document.getElementById('shapeContainer');
    const shapeInfo = document.getElementById('shapeInfo');
    const widthInfo = document.getElementById('widthInfo');
    const heightInfo = document.getElementById('heightInfo');
    const radiusInfo = document.getElementById('radiusInfo');
    const areaInfo = document.getElementById('areaInfo');
    const perimeterInfo = document.getElementById('perimeterInfo');



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
                let x = getRandomNumber();
                let y = getRandomNumber();
                this.div.style.left = `${x}px`;
                this.div.style.top = `${y}px`;
            };
            this.div.addEventListener('dblclick', () => this.deleteShape());
        }
        deleteShape() {
            this.div.remove();
        }
    }

    class Circle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.classList.add('circle');
            this.div.addEventListener('click', () => this.describe());
        }
        describe() {
            shapeInfo.innerText = 'Circle';
            widthInfo.innerText = `${this.width}`;
            heightInfo.innerText = `${this.height}`;
            radiusInfo.innerText = circleInput.value;
            areaInfo.innerText = Math.floor(Math.PI * circleInput.value * circleInput.value);
            perimeterInfo.innerText = Math.floor(2 * Math.PI * circleInput.value);
}
    }

    class Triangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.classList.add('triangle');
            this.div.style.borderBottom = `${this.width}px solid rgb(241, 241, 107)`;
            this.div.style.borderRight = `${this.height}px solid transparent`;
            this.div.addEventListener('click', () => this.describe());
        }
        describe() {
            shapeInfo.innerText = 'Triangle';
            widthInfo.innerText = `${this.width}`;
            heightInfo.innerText = `${this.height}`;
            radiusInfo.innerText = `N/A`;
            areaInfo.innerText = .5 * triangleInput.value * triangleInput.value;
            perimeterInfo.innerText = Math.floor(2 * triangleInput.value + Math.sqrt(2) * triangleInput.value);
        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.classList.add('rectangle');
            this.div.addEventListener('click', () => this.describe());
        }
        describe() {
            shapeInfo.innerText = 'Rectangle';
            widthInfo.innerText = `${this.width}`;
            heightInfo.innerText = `${this.height}`;
            radiusInfo.innerText = `N/A`;
            areaInfo.innerText = rectangleInputH.value * rectangleInputW.value;
            perimeterInfo.innerText = (rectangleInputH.value * 2) + (rectangleInputW.value * 2);
        }
    }

    class Square extends Shape {
        constructor(height, width) {
            super(height, width);
            this.div.classList.add('square');
        }
        describe() {
            shapeInfo.innerText = 'Square';
            widthInfo.innerText = `${this.width}`;
            heightInfo.innerText = `${this.height}`;
            radiusInfo.innerText = `N/A`;
            areaInfo.innerText = squareInput.value * squareInput.value;
            perimeterInfo.innerText = (SquareInput.value * 2) + (squareInput.value * 2);
        }
    }

    rectangleButton.addEventListener('click', function newRectangle() {
        new Rectangle(rectangleInputH.value, rectangleInputW.value);
    });

    squareButton.addEventListener('click', function newSquare() {
        new Square(squareInput.value, squareInput.value);
    });
    circleButton.addEventListener('click', function newCircle() {
        new Circle((circleInput.value * 2), (circleInput.value * 2));
    });

    triangleButton.addEventListener('click', function newTriangle() {
        new Triangle(triangleInput.value, triangleInput.value);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * 600);
    };

        


    

    ///end of body
});
