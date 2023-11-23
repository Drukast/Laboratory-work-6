/* НАписать функцию f(a b c), которая определяет и возвращает максимальное из трех целых чисел, полученных в качестве аргументов */
function search_max(a, b, c) {
    let max;
    if ((b > a) && (b > c)) {
        max = b;
    } else if (a > c) {
        max = a;
    } else {
        max = c;
    }
    return max;
}


