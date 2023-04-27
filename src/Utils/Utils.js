export const getUniqueValues = (val) => {
    var serchkeys = [];
    val.data.map(each => serchkeys.push(each.search_key))
    let outputArray = serchkeys.filter(function (v, i, self) {

        return i == self.indexOf(v);
    });
    outputArray.unshift('All');

    return outputArray;


}