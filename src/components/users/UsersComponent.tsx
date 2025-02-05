import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {

    const users = await getAllUsers();

    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                    <Link href={{
                        pathname: '/users/' + user.id.toString(),
                        query: {data: JSON.stringify(user)}
                    }}>{user.id} {user.name}</Link>
                </div>)
            }
        </div>
    );
};

//query: {name:user.name} - це коли передавати кожну хар-ку окремо.

//query: {...user} - це щоб отримати відразу всі хар-ки.

//query: {data: JSON.stringify(user)} - тепер серчпарамс буде складатись з хар-ки data і застрінгіфаєного вашого
// обєкту, а на сторінці користувача їх вже можна спокійно перетворити назад: JSON.parse(sp.data). Отримуєте обєкт.
// Після цього цим обєктом можете працювати як вам необхідно.