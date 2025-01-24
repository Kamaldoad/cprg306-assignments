export default function Dog({name, age, breed, color}) { 

    let name = props.name;
    let age = props.age;
    let breed = props.breed;   
    let color = props.color;

  // other way 
  // let {name, age, breed, color} = props;  

return (
    <div>
        <h1>Week 3</h1>
        <h2>Meet the Dogs</h2>
        <section className="bg-slate-300 m-2 p-2">
            <h3 className="font-bold text-2x1 text-sky-700">{name}</h3>
            <p span className="font-bold">Age: {age}</p>
            <p>Breed: {breed}</p>
            <p>Color: {color}</p>
        <p>Content for week 3</p>
        </section>
    </div>
);
}