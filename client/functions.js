$(function() {

    var circles = [];
    var squares = [];

    randomShapeGenerator();

    function randomShapeGenerator() {
        for(var i = 0; i <= 50; i++){
            circles.push(randomNumber(1, 100));
            squares.push(randomNumber(1, 100));
        }
        sortShapes(circles, squares);
    }

    function sortShapes(circles, squares){
        var circleArray = circles.sort(function(a, b){return b-a});
        var squareArray = squares.sort(function(a, b){return b-a});

        for(var i = 0; i < 50; i++){
            appendShapes(circleArray[i], squareArray[i]);
        }

        function appendShapes(circleDiameter, squareSide){
            $('#circleSlider').append(
                '<div class="circleContainer">' +
                '<div class="circleCounter"></div>' +
                '<div class="shapeWrapper">' +
                '<div id="shape" class="circle" style="height:' + circleDiameter + 'px; width:' + circleDiameter + 'px;"></div>'+
                '</div>'+
                '<button id="areaButton">Get area</button>'+
                '<button id="toStringButton">Show Radius and Area</button>'+
                '<div id="areaField" class="areaCircle"></div></div>');
            $('#squareSlider').append(
                '<div class="squareContainer">'+
                '<div class="squareCounter"></div>' +
                '<div class="shapeWrapper">' +
                '<div id="shape" class="square" style="height:' + squareSide + 'px; width:' + squareSide + 'px;"></div>'+
                '</div>'+
                '<button id="areaButton">Get area</button>'+
                '<button id="toStringButton">Show Size and Area</button>'+
                '<div id="areaField" class="areaSquare"></div></div>');
        }
    }

    $(".slider").on("click","#areaButton",function() {
        var height = $(this).siblings('.shapeWrapper').find('#shape').height();
        var shapeClass = $(this).siblings('.shapeWrapper').find('#shape').attr("class");
        console.log(shapeClass);
        getArea(shapeClass, height);
    });

    $(".slider").on("click","#toStringButton",function() {
        var height = $(this).siblings('.shapeWrapper').find('#shape').height();
        var shapeClass = $(this).siblings('.shapeWrapper').find('#shape').attr("class");
        toString(shapeClass, height);
    });

    function getArea(shapeClass, height) {
        if(shapeClass == "circle"){
            $('.areaCircle p').empty();
            var radius = height/2;
            var area = 3.14 * Math.pow(radius, 2);
            area = Math.ceil(area);
            $('.areaCircle').append("<p>"+area+"px</p>");
        }

        if(shapeClass == "square"){
            $('.areaSquare p').empty();
            var area = Math.pow(height, 2);
            area = Math.ceil(area);
            $('.areaSquare').append("<p>"+area+"px</p>");
        }
    }

    function toString(shapeClass, height){
        if(shapeClass == "circle"){
            $('.areaCircle p').empty();
            var radius = height/2;
            var area = 3.14 * Math.pow(radius, 2);
            area = Math.ceil(area);
            $('.areaCircle').append("<p>Circle: Radius = "+ radius +"px, Area = "+ area +"px</p>")
        }

        if(shapeClass == "square"){
            $('.areaSquare p').empty();
            var side = height;
            var area = Math.pow(side, 2);
            area = Math.ceil(area);
            $('.areaSquare').append("<p>Square: Size = "+ side +"px, Area = "+ area +"px</p>");
        }
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

/////////////////////////////////////////
//CIRCLE SLIDER
/////////////////////////////////////////

    var currentIndex = 0,
    items = $('.circleContainer'),
    itemAmt = items.length;
    fillCircleHeader();
    cycleItems();

    function cycleItems() {
      var item = $('.circleContainer').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }

    $('.nextCircle').click(function() {
      currentIndex += 1;
      $('.areaCircle p').empty();
      fillCircleHeader();
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
        fillCircleHeader();
      }
      cycleItems();
    });

    $('.prevCircle').click(function() {
      currentIndex -= 1;
      fillCircleHeader();
      $('.areaCircle p').empty();
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });

    function fillCircleHeader(){
        $('.circleCounter').empty();
        $('.circleCounter').append('<p id="header" class="circleHeader">Circle #'+ (currentIndex + 1) +'</p>');
    }

/////////////////////////////////////////
//SQUARE SLIDER
/////////////////////////////////////////

    var currentPlace = 0,
    objects = $('.squareContainer'),
    objectsAmt = objects.length;
    fillSquareHeader()
    cycleObjects();

    function cycleObjects() {
      var object = $('.squareContainer').eq(currentPlace);
      objects.hide();
      object.css('display','inline-block');
    }

    $('.nextSquare').click(function() {
      currentPlace += 1;
      fillSquareHeader()
      $('.areaSquare p').empty();
      if (currentPlace > objectsAmt - 1) {
        currentPlace = 0;
        fillSquareHeader()
      }
      cycleObjects();
    });

    $('.prevSquare').click(function() {
      currentPlace -= 1;
      fillSquareHeader()
      $('.areaSquare p').empty();
      if (currentPlace < 0) {
        currentPlace = objectsAmt - 1;
      }
      cycleObjects();
    });

    function fillSquareHeader(){
        $('.squareCounter').empty();
        $('.squareCounter').append('<p id="header" class="squareHeader">Square #'+ (currentPlace + 1) +'</p>');
    }
});
