import Form from "next/form";
import {saveCar} from "@/server-actions/serverActions";

export const FormComponent = () => {
    return (
        <div>
            <Form action={saveCar}>
                <div><input type="text" name={'brand'} placeholder={'Brand'}/></div>
                <div><input type="number" name={'price'} placeholder={'Price'}/></div>
                <div><input type="number" name={'year'} placeholder={'Year'}/></div>
                <button>Save Car</button>
            </Form>
        </div>
    );
};