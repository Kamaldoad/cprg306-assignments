import Dog from './dog';

export default function Page() {   
    let dog1 = {
        name: "Rex",
        age: 5,
        breed: "Golden Retriever",
        color: "Golden"
    };

    let dog2 = {
        name: "Bella",
        age: 3,
        breed: "Poodle",
        color: "White"
    };
    let dog3 = {
        name: "Max",
        age: 2,
        breed: "German Shepherd",
        color: "Black and Brown"
    };
    };
    return (
        <main>
            <h1>Week 3</h1>
            <h2>Meet the Dogs</h2>
            <section className="bg-slate-300 m-2 p-2">
                <Dog 
                name={dog1.name} 
                age={dog1.age} 
                breed={dog1.breed} 
                color={dog1.color} 
                />
                <Dog 
                name={dog2.name} 
                age={dog2.age} 
                breed={dog2.breed} 
                color={dog2.color} 
                />
            </section>
        </main>
    );
