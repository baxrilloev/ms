/////////1
function getLongerName(arr_name) {
    let arr_names = ['Alex', 'George', 'Michael',]

    let max_name = ''
    let arr = []

    arr_names.filter(item => {
        if (item.length > max_name.length) {
            max_name = item
        }
    })


    console.log(max_name);
}
getLongerName()




