import {FC} from "react";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}
//такий тип пропсів з офіційної документації. Його прописувати саме так!!!
//Каже: буде динамічне поле зі значенням або стрінг, або стрінг-масив, або андефайнд.


const SubmitPage: FC<Props> = async ({searchParams}) => {

    // fetch('YOURURL', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     key1: 'value1',
    //     key2: 'value2',
    //   })
    // })
    // Це вже для відправки інф-ії на сервір.

    const awaitedSP = await searchParams;


    return (
        <>
            This is page after submitting {awaitedSP.name}
        </>
    );
};

export default SubmitPage;

//Після відправки форми ми приходимо на конкретну сторінку. Тепер на цій сторінці потрібно відхопити дані, які
// передаються з інпутів. Це робиться з допомогою пропсів <Props>.

//Звичайна форма на нексті - це виключно гетові запити з переходом ня якусь сторінку і ніякої сенсетів інф-ії.