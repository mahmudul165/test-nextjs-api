import React from 'react';
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json()
    return {
        props:{data}
    }
}
const user = ({data}) => {
    return (
        <div>
            <h1>i am from user { users.length}</h1>
        </div>
    );
};

export default user;