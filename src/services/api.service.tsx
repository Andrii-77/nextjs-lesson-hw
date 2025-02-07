// import {ICar} from "@/models/ICar";
//
// export const getAllCars = async (): Promise<ICar[]> => {
//     const cars = await fetch('http://185.69.152.209/carsAPI/v1/cars')
//         .then(value => value.json());
//     return cars;
// }
//
// export const addCar = async (car: ICar): Promise<void> => {
//     const car = await fetch('http://185.69.152.209/carsAPI/v1/cars', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             brand: 'brand',
//             price: 'price',
//             year: 'year'
//         })
//     });
//
// }

import axios from "axios";
import {ICar} from "@/models/ICar";
import {baseUrl} from "@/constants/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'},
});

export const getAllCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    const cars = axiosResponse.data;
    return cars;
}

export const addCar = async (car: ICar): Promise<void> => {
    await axiosInstance.post('/cars', car);
}