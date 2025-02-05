import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
    return (
        <div className={styles.page}>

            {/*<form action="/submit" method="POST">*/}
            {/*<form action="/submit">*/}
            {/*    <input type="text" name={'name'} placeholder={'login'}/>*/}
            {/*    <input type="text" name={'password'} placeholder={'password'}/>*/}
            {/*    <button>submit</button>*/}
            {/*</form>*/}

            <Form action={'/submit'}>
                <input type="text" name={'name'} placeholder={'login'}/>
                <button>send</button>
            </Form>

        </div>
    );
}

//<form action="/submit" method="POST">  - якщо зробити так, щоб інфа не попадала в урлу, то інф-ія буде йти в
// нікуди. Щоб робити постові запити, які будуть стукатись безпосередньо до сервера, існує сервер екшнс енд
// мютейшнс. Це про безпеку.
//Штука зверху викор-ся суто для акумуляції інф-ії.