const quickSort = (originalList) => {
    const list = [...originalList]

    if (list.length < 2) {
        return list
    }

    const pivot = list[0]

    const smaller = list.filter((item) => item < pivot)
    const bigger = list.filter((item) => item > pivot)

    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

const a = [1, 6, 3, 4, 5, 1, 0, 4, 8]

console.log(quickSort(a))
//[0, 1, 1, 3, 4, 4, 5, 6, 8

console.log(a)