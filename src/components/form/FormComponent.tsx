'use client'

// import Form from "next/form";
import {saveCar} from "@/server-actions/serverActions";
import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
import carValidator from "@/validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";

export const FormComponent = () => {

    const {register, formState: {errors, isValid}}
        = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    return (
        <div>
            {/*<form action={saveCar} onSubmit={handleSubmit(customHandler)}>*/}
            <form action={saveCar}>
                <div>
                    <input type="text" {...register('brand')} placeholder={'Brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('price')} placeholder={'Price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('year')} placeholder={'Year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>
                <button disabled={!isValid}>Save Car</button>
            </form>
        </div>
    );
};