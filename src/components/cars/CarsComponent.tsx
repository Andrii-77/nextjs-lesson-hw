import {getAllCars} from "@/services/api.service";
import {CarComponent} from "@/components/car/CarComponent";

export const CarsComponent = async () => {

    const cars = await getAllCars();

    return (
        <div>
            {
                cars.map((car) => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};