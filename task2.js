function form_matrix(N, M) {
    let matrix = [];
    for (var i = 0; i < M; i++) {
        let submatrix = [];
        for (var j = 0; j < N; j++) {
            submatrix.push(Math.round((Math.random() * 100)));
        }
        matrix.push(submatrix);
    }
    return matrix;
}

function show_matrix(matrix) {
    let matrix_out = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix_out.push(matrix[i].join('     '));
    }
    alert(matrix_out.join('\n'));
}

function search_max_in_rows(matrix) {
    let max = -999, row = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                rows = [];
                max = matrix[i][j];
                rows.push(i + 1);
            } else if (matrix[i][j] == max) {
                rows.push(i + 1);
            }
        }
    }
    alert(`Максимальный элемент содержится в строках: ${rows}`);
}

let N, M;
M = Number(prompt("Введите Кол-во Строк", ""));
N = Number(prompt("Введите Кол-во столбцов", ""));
if ((!(isNaN(M)) && (M % 1 == 0) && (M > 0)) && (!(isNaN(N)) && (N % 1 == 0) && (N > 0))) {
    Matrix = form_matrix(N, M);
    show_matrix(Matrix);
    search_max_in_rows(Matrix);
}