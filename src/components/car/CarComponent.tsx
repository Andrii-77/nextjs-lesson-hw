import {ICar} from "@/models/ICar";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            <div>
                {car.id} {car.brand} {car.year} {car.price}
            </div>
        </div>
    );
};