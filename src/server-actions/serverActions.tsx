'use server';

import {addCar} from "@/services/api.service";


export const saveCar = async (formData: FormData) => {
    console.log(formData);
    await addCar(formData);
//     Не розумію, як тут прописати правильну типізацію. Прошу допомогти.
}