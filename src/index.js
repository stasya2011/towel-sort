// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix) {

        matrix.filter((elem, index) => {
            if (index % 2 != 0 && index != 0) {
                elem = elem.reverse();
            }else{
              elem = elem
            }
        })
        return matrix.flat()
    } else {
        return []
    }
}
