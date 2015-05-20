
  // var solution = [];
  // var board = new Board({n: n});
  // var r=0, c=0;

  // var hasConflict = function () {
  //   return board.hasAnyRowConflicts() && board.hasAnyColConflicts;
  // };

  // var run = function (row, col) {
  //   board.toggle(row,col);
  //   if(hasConflict) {
  //     board.toggle(row,col);
  //     c++;
  //     if (c < board.attributes.n) {
  //       run(r,c);
  //     }
  //   }
  //   else {
  //     if (r === board.attributes.n-1) {
  //       return;
  //     }
  //     c=0;
  //     r++;
  //     if (r < board.attributes.n) {
  //       run(r,c);
  //     }
  // };

  // run(0,0);

  // for (var i=0; i<board.attributes.n; i++) {
  //   solution.push(board.attributes[i]);
  // }

/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({'n':n});
  var hasConflict = function () {
    return board.hasAnyRowConflicts() || board.hasAnyColConflicts();
  };
  var solution = [];

  var run = function(r) {
    for(var i = 0; i < board.attributes.n; i++) {
      board.togglePiece(r, i);
      if(!hasConflict()) {
        if(r+1 < board.attributes.n) {
          run(r+1);
        } else if (r === board.attributes.n - 1) {
          for (var j = 0; j < board.attributes.n; j++) {
            solution.push(board.attributes[j]);
            //  ;
          }
        }
      } else {
          board.togglePiece(r, i);
      }
    }
  };
  // debugger
  run(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
 var board = new Board({'n':n});
 var solutionCount = 0;


 var find = function(r){

  if(r === n) {
    solutionCount++;
    return;
  }

  for (var i = 0; i < n; i++) {
    board.togglePiece(r, i);
    if (!board.hasAnyRooksConflicts()) {
      find(r+1);
    }
    board.togglePiece(r, i);
  }
 }

 find(0);

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0 || n === 2 || n === 3) {
    var board = new Board ({n: n});
    return board.rows();
  }

  var solution=[];
  var board = new Board({'n':n});

  var find = function(r){

   if(r === n) {
    // debugger;
     solution = JSON.parse(JSON.stringify(board.rows().slice()));
     return ;
   }

   for (var i = 0; i < n; i++) {
     board.togglePiece(r, i);
     if (!board.hasAnyQueensConflicts()) {
       // debugger;
       find(r+1);
     }
     board.togglePiece(r, i);
   }
  }

  find(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({'n':n});
  var solutionCount = 0;

  var find = function(r){
  // debugger;
   if(r === n) {
     solutionCount++;
     return;
   }

   for (var i = 0; i < n; i++) {
     board.togglePiece(r, i);
     if (!board.hasAnyQueensConflicts()) {
       // debugger;
       find(r+1);
     }
     board.togglePiece(r, i);
   }
  }

  find(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
