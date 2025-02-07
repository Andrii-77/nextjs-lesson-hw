import Link from "next/link";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cars">Cars</Link>
                </li>
                <li>
                    <Link href="/cars/create">Create</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};