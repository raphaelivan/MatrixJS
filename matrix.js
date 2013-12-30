function Matrix(rows, cols) {
		var matrix = new Array();
        
        for (var row = 0; row < rows; row++) {
            matrix[row] = new Array();
        }

        matrix.rows = rows;
        matrix.cols = cols;

        matrix.forEach = function(callback) {
            for (var row = 0; row < this.rows; row++) {
                for (var col = 0; col < this.cols; col++) {
                    callback(row, col);
                };
            };
        }

        matrix.getRandomPosition = function(empty) {
            
            var row, col;
            
            do {    
            
                row = Math.floor((Math.random() * (this.rows-2) )+1),
                col = Math.floor((Math.random() * (this.cols-2) )+1)
            
            } while(matrix[row][col] && empty);

            return {row:row, col:col};
        }

        matrix.getPosition = function(element) {
            return elementsPosition[element].position;
        }

        matrix.getMiddlePosition = function() {
            return {
                row:Math.floor(matrix.rows/2), 
                col:Math.floor(matrix.cols/2)
            };
        }

        matrix.addElement = function(element, position) {
            matrix[position.row][position.col] = element;
            elementsPosition[element] = {position:position};
        }

        matrix.clearPosition = function(row, col) {
            delete(matrix[row][col]);
        }

        return matrix;
}