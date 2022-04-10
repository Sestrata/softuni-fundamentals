function solve(mapInfo, commands) {

       let mapOfSofia = mapInfo.map(number => number.split(' ').map(Number))

       while (commands.length > 0) {
              let currentArr = commands.shift()
              let currentEl = currentArr.split(' ');
              let currentForce = currentEl[0];
              let currentValue = Number(currentEl[1]);

              switch (currentForce) {
                     case 'breeze':
                            mapOfSofia = breeze(mapOfSofia, currentValue)
                            break;
                     case 'gale':
                            mapOfSofia = gale(mapOfSofia, currentValue)
                            break;
                     case 'smog':
                            mapOfSofia = smog(mapOfSofia, currentValue)
                            break;
                     default:
                            break;
              }
       }

       function breeze(arr, index) {
              for (let col = 0; col < arr.length; col++) {
                     let current = arr[index][col];
                     if (current - 15 >= 0) {
                            arr[index][col] -= 15
                     } else {
                            arr[index][col] = 0
                     }
              }
              return arr
       }

       function gale(arr, index) {
              for (let row = 0; row < arr.length; row++) {
                     let current = arr[row][index];
                     if (current - 20 >= 0) {
                            arr[row][index] -= 20;
                     } else {
                            arr[row][index] = 0;
                     }
              }
              return arr
       }

       function smog(arr, value) {
              for (let row = 0; row < arr.length; row++) {
                     for (let col = 0; col < arr.length; col++) {
                            arr[row][col] += value;
                     }
              }
              return arr
       }

       let result = 'Polluted areas: '

       // FIRST METHOD:
       // mapOfSofia.forEach((line, rowIndex) => {
       //        line.forEach((number, colIndex) => {
       //               if (number >= 50) {
       //                      return (result += `[${rowIndex}-${colIndex}], `);
       //               }
       //        });
       // });
       
       // SECOND METHOD:
       for (let rows = 0; rows < mapOfSofia.length; rows++) {
           for (let cols = 0; cols < mapOfSofia.length; cols++) {
               let currentValue = mapOfSofia[rows][cols];

               if (currentValue >= 50) {
                   result += `[${rows}-${cols}], `
               }
           }
       }
       console.log(result === 'Polluted areas: ' ? result = 'No polluted areas' : result.slice(0, -2))
}