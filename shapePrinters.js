console.log("this is working");

boxPrinter = function (width, height) {
  rowValue = "";
  finalOutput = "";
  for (i = 0; i < width; i++) {
    rowValue = rowValue + "*";
  }
  for (j = 0; j < height; j++) {
    finalOutput = finalOutput + rowValue + "\n";
  }
  console.log(finalOutput);
  document.getElementById("boxOutput").value = finalOutput;
  return true;
};
checkeredPrinter = function (width, height) {
  finalOutput = "";
  fullRow = "";
  smallRow = "";
  var width = width;

  if (width % 2 == 1) {
    for (i = 0; i < width; i++) {
      if (i % 2 == 0) {
        fullRow = fullRow + "*";
      } else {
        fullRow = fullRow + " ";
      }
    }
    for (j = 0; j < width - 1; j++) {
      if (j % 2 == 0) {
        smallRow = smallRow + "*";
      } else {
        smallRow = smallRow + " ";
      }
    }
    for (k = 0; k < height; k++) {
      if (k % 2 == 0) {
        finalOutput = finalOutput + fullRow + "\n";
      } else {
        finalOutput = finalOutput + " " + smallRow + "\n";
      }
    }
  } else {
    width = width - 1;
    for (i = 0; i < width; i++) {
      if (i % 2 == 0) {
        fullRow = fullRow + "*";
      } else {
        fullRow = fullRow + " ";
      }
    }
    for (j = 0; j < width - 1; j++) {
      if (j % 2 == 0) {
        smallRow = smallRow + "*";
      } else {
        smallRow = smallRow + " ";
      }
    }
    for (k = 0; k < height; k++) {
      if (k % 2 == 0) {
        finalOutput = finalOutput + fullRow + "\n";
      } else {
        finalOutput = finalOutput + " " + smallRow + "\n";
      }
    }
  }
  document.getElementById("checkeredOutput").value = finalOutput;
};
crossPrinter = function (height) {
  //need two functions to print each half of the cross.
  finalOutput = "";
  newRow = "";
  space = " ";
  height = height;
  console.log("height", height);

  topHalf = function (rows) {
    for (i = rows; i > 0; i--) {
      newRow =
        space.repeat(rows - i) + "*" + space.repeat((i - 1) * 2) + "*" + "\n";
      finalOutput += newRow;
    }
  };
  bottomHalf = function (rows) {
    for (j = 1; j < rows + 1; j++) {
      newRow =
        space.repeat(rows - j) + "*" + space.repeat((j - 1) * 2) + "*" + "\n";
      finalOutput += newRow;
    }
  };
  middleRow = function (spacing) {
    newRow = space.repeat(spacing) + "*" + "\n";
    finalOutput += newRow;
  };
  evenFullCross = function (height) {
    topHalf(height / 2);
    bottomHalf(height / 2);
  };
  oddFullCross = function (height) {
    topHalf(height / 2);
    middleRow(height / 2);
    bottomHalf(height / 2);
  };
  if (height % 2 == 0) {
    evenFullCross(height);
  } else {
    oddFullCross(height - 1);
  }
  document.getElementById("crossOutput").value = finalOutput;

  console.log(finalOutput);
};
lowTrianglePrinter = function (length) {
  finalOutput = "";
  newRow = "";
  characterValue = "*";

  for (i = 0; i < length; i++) {
    newRow = characterValue.repeat(i + 1) + "\n";
    finalOutput = finalOutput + newRow;
  }
  document.getElementById("lowTriangleOutput").value = finalOutput;
};
highTrianglePrinter = function (length) {
  finalOutput = "";
  newRow = "";
  characterValue = "*";
  space = " ";

  for (i = length; i > 0; i--) {
    newRow = space.repeat(length - i) + characterValue.repeat(i) + "\n";
    finalOutput = finalOutput + newRow;
  }
  document.getElementById("highTriangleOutput").value = finalOutput;
};
trapezoidPrinter = function (width, height) {
  finalOutput = "";
  newRow = "";
  characterValue = "*";
  space = " ";
  w = width;
  spacing = 0;

  for(i=0; i<height; i++){
      if(w<0){
          finalOutput = "Impossible Shape!";
      }else{
        newRow = space.repeat(spacing) + characterValue.repeat(w) + "\n";
        finalOutput = finalOutput + newRow;
        spacing ++;
        w = w-2;
      }
  }
  document.getElementById("trapezoidOutput").value = finalOutput;

};
