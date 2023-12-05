const Contact = ()=>{
    return (
        <div>
          <h1 className="font-bold p-2 m-2 text-center text-lg"> This is contact </h1>
          <form>
            <input type="text" placeholder="name" className="border border-black p-2 m-2"/>
            <input type="text" placeholder="number" className="border border-black p-2 m-2"/>
            <button className="border border-black p-2 m-2">submit</button>
          </form>
        </div>
        
    )
}

export default Contact;