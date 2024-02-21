function analyzeCarMileage(objArr) {
    const totalMileage = objArr.reduce((acc, curr) => {
        return acc + curr.mileage;
    }, 0);

    const averageMileage = totalMileage / objArr.length;

    const highestMileageCar = objArr.filter((car) => {
        return car.mileage === Math.max(...objArr.map((car) => car.mileage));
    });

    const lowestMileageCar = objArr.filter((car) => {
        return car.mileage === Math.min(...objArr.map((car) => car.mileage));
    });

    return {
        averageMileage: Number(averageMileage.toFixed(2)),
        highestMileageCar: highestMileageCar[0],
        lowestMileageCar: lowestMileageCar[0],
        totalMileage: Number(totalMileage.toFixed(2)),
    };
}

module.exports = analyzeCarMileage;

// function analyzeCarMileage(cars) {
// let mileage = cars[0].mileage;

// const result = cars.reduce(
// (res, cur) => {
// if (cur.mileage > cars[0].mileage) res.highestMileageCar = cur;

// if (cur.mileage < cars[0].mileage) res.lowestMileageCar = cur;

// res.totalMileage += cur.mileage;
// res.averageMileage = parseFloat(
// (res.totalMileage / cars.length).toFixed(2)
// );
// return res;
// },
// {
// highestMileageCar: cars[0],
// lowestMileageCar: cars[0],
// totalMileage: 0,
// averageMileage: 0,
// }
// );
// return result;
// }
