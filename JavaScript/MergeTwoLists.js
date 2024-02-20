var mergeTwoLists = function(list1, list2) {
    let list_Unic = list1.concat(list2);// .concat() junta as arrays list1 e list 2 na variavel list_Unic

    let result = list_Unic.sort(function(a, b){ // a função .sort() ordena a variavel list_Unic em ordem crescente por conta da função dentro do .sort()
        return a - b
    })
    return result;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))