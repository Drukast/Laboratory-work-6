/*Для любого задания лабораторыных работ №5 и №6 реализовать ввод, формирование/обработку и вывод массивов с применением функций*/
function form_matrix(N, M) {
    matrix = []
    for (var i = 0; i < M; i++) {
        let submatrix = [];
        for (var j = 0; j < N; j++) {
            submatrix.push(Math.round((Math.random() * 100)));
        }
        matrix.push(submatrix);
    }
    return matrix
}