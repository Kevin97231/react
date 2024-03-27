/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Jsx(){
    
    const title = <h1>Bonjour tout le monde, bienvenue sur notre appli. React !!</h1>

    const title2 = 'Bonjour tout <strong>le monde,</strong> bienvenue sur notre appli. React !!'
  
    const user = {
      firstName: 'John',
      lastName: 'Doe'
    }
  
    const style = {color: 'blue', backgroundColor: "gray"}
  
    // const user = undefined;
  
    const formatName = (user) => `${user.firstName} ${user.lastName}`
  
    const img = "../src/assets/react.svg"
  
    const fruits = ['banane', 'abricot', 'pomme']
  
    const jsxTable = fruits.map( (fruit) => <li key={fruit}>{fruit}</li>)
  
    return (
      <>
        {title}
        <h2>{title2}</h2>
  
        {/* Très déconseillé ! */}
        <h2 dangerouslySetInnerHTML={{__html: title2}}></h2>
  
        {/* <h1 id="title" className='title'>Bonjour {formatName(user)}</h1> */}
  
  
        <div>
          <img src={img} alt=""/>
        </div>
  
        {/* {
          user ? <h1>Bonjour {formatName(user)}</h1> : <h1>Bonjour !</h1>
        } */}
  
        { user && <h1>Bonjour {formatName(user)}</h1> }
  
        <h1 className="border" style={style}>Test</h1>
  
        <ul>
          { fruits.map( (fruit) => 
            <li key={fruit}>{fruit}</li>
          )}
          { jsxTable }
        </ul>
  
        {/* <Chidlren /> */}
         <Chidlren color='blue' user={user}/> 
  
         <Chidlren color='blue' user={user}>Voici un texte, mon enfant !</Chidlren>   
      </>
    );
  }
  
  const Chidlren = ({color, user,children = 'Passe moi un texte !'}) => {
    console.log('props children', color)
    return(
      <div className="border m-5">
        <p>Je suis ton enfant</p>
        <p>Voici l'utilisateur envoyé: </p>
        
          <p>name: {user.firstName} </p>
          <p>lastName: {user.lastName}</p>
        
        {children}
      </div>
      
    )

}

export default Jsx;