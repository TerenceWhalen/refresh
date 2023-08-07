

function MeetupItem() {
  return ( <li>
    <div>
      <img src="{props.image} alt={props.title} />
    </div>

    <div>
      <h3>{props.title}</h3>
      <address>{props.address</address>
      <p>{props.description</p>
    </div>
    <di>
      <button>To Favorites</button>
    </di>
  
    
    </li>
  )
}

export default MeetupItem