import Card from "./Card";
import React from "react";

function CardList({users}) {
    return(
        <div className='container-fluid mt-5'>
            {
                users.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={users[i].id}
                            name={users[i].name}
                            email={users[i].email} />
                    );
                })
            }
        </div>
    );
}

export default CardList;
