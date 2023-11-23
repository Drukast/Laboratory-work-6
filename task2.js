/*Для любого задания лабораторыных работ №5 и №6 реализовать ввод, формирование/обработку и вывод массивов с применением функций*/
function form_matrix(N, M) {
    matrix = [];
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
    matrix_out = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix_out.push(matrix[i].join('     '));
    }
    alert(matrix_out.join('\n'));
}

function search_max_in_rows(matrix) {
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