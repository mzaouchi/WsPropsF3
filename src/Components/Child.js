import PropTypes from 'prop-types';
const Child=({name,age,pays,user,salle,handleAlert,handleNAlert,show,children})=>{

    // const Child=(props)=>{
    //     console.log(props)
    return(
        <div>
             {
                children
            }
           
            {/* <h2>Child Component</h2>
            <h3>My name is {props.name}</h3>
            <h3>My age is {props.age}</h3>
            <h4>I am from {props.pays[0]}</h4>
            <ul>
                {
                    props.pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h3>Car : {props.user.car} , City : {props.user.city}</h3>
            <h3>{props.user.lolo.fofo}</h3> */}
            <h2>Child Component</h2>
            <h3>My name is {name}</h3>
            <h3>My age is {age}</h3>
            <h4>I am from {pays[0]}</h4>

            <ul>
                {
                    pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>

            <h3>Car : {user.car} , City : {user.city}</h3>
            <h3>{user.lolo.fofo}</h3>
            <h2>{salle}</h2>

            <button onClick={handleAlert}>Alert</button>
            <button onClick={()=>handleNAlert(name)}>Click</button>

            {/* Conditional Rendering */}
            {
                show ?
                <h2>Hello i am Olfa</h2>
                :
                <h2>Hello i am Rayhana</h2>
            }
            
           
        </div>
    )
}

Child.defaultProps={
    name : 'Olfa',
    age : 100
}

Child.propTypes = {
   name: PropTypes.string,
   age : PropTypes.number
}

export default Child