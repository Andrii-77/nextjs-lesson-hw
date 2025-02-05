import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
    //так інтелідж не буде давати помилку і казати що ми не працюємо з промісом.
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'User Page Title' + id,
    }
}

const UserPage: FC<Props> = async ({searchParams}) => {

    let obj = null;
    const {data} = await searchParams;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IUser;
    }
    // цю всю логіку треба виносити в helper (допоміжний сервіс)!!! Це в пейджі не робиться.

    return (
        <div>
            {
                obj && <>User Page Content {obj.id} {obj.name}</>
                // будуємо фрагмент, перевіряємо обєкт на присутність, і якщо він є то робим необхідну дію.
            }
        </div>
    );
};

export default UserPage;
