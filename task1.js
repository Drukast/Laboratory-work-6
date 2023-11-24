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

let a, b, c
a = Number(prompt('Введите число a:', ''))
b = Number(prompt('Введите число b:', ''))
c = Number(prompt('Введите число c:', ''))
if (!(isNaN(a)) && !(isNaN(b)) && !(isNaN(c))) {
    alert(`${search_max(a, b, c)}`)
} else {
    alert('Введены нечисловые значения!')
}

