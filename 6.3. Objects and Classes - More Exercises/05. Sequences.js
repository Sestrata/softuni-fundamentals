function solve(input) {

        input = input.map(el => JSON.parse(el));
        input.forEach(el => el.sort((a, b) => b - a));
        let outputArr = [];
        let isUnique = true;

        for (let i = 0; i < input.length; i++) {
            let currentArray = input[i];
            for (let j = 0; j < outputArr.length; j++) {
                let nextArray = outputArr[j];
                if (nextArray.toString() === currentArray.toString()) {
                    isUnique = false;
                    break;
                }
            }
            if (isUnique) {
                outputArr.push(currentArray);
            }
        }
        outputArr.sort((a, b) => a.length - b.length);
        outputArr.forEach(el => console.log(`[${el.join(', ')}]`));
}
