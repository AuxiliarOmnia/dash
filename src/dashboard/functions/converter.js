export const converter = (data, translate) => {
    let label = [];
    let value = [];
    for (let index of Object.keys(data)){
        if (!(index === 'todos')){
            label.push(translate[index])
            value.push(data[index]);
        }
    }
    return {
    	label: label,
        value: value
    }
}