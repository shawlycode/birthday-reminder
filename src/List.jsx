import React ,{useState} from 'react'

const List = ({people}) =>{
    return (
        <>
           {people.map((person)=>{
               const { Id,name,age,image} = person;
               return <article key={Id} className="person">
                   <img src={image} alt={name} />
                   <div>
                       <h4>{name}</h4>
                       <p>{age} years</p>
                   </div>

               </article>
           })}
        </>
    )
}

export default List
