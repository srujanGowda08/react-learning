function Random(){
    let number = Math.floor(Math.random()*100+1);
    return <h1 style={{'background-color': '#727234'}}>Random number is: {number}</h1>
}

export default Random;