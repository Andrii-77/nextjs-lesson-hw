const UsersPage = async () => {


    // const users = await fetch('https://jsonplaceholder.typicode.com/users') - за цих умов це звичайна статична
    // сторікнка.

    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 0}}) - робить
    // сторінку динамічною.

    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"}) - так само буде
    // перетворено на динамічну генерацію.

    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 5}}) -
    // ревалідація на сервері буде кожні 5 сек.

    const users = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})
        .then(value => value.json());

    return (
        <div>

            <h2>{Date.now()}</h2>

            {
                users.map((user: { id: number, name: string }) => (<div key={user.id}>
                    {user.name}
                </div>))
            }
        </div>
    );
};

export default UsersPage;
