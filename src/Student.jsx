

export default function Student(props) {
  return (
    <div className="student">
        <h1>
            Name: {props.name}
            
        </h1>
        <h1>
            Age: {props.age}
        </h1>
        <h1>
            student :{props.isStudent ? "yes":"no"}
        </h1>

      
    </div>
  )
}

