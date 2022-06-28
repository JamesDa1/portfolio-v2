export const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <h1>Contact Me</h1>
        <form action="/">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Enter subject" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label> <br />
          <textarea name="" id="message" cols="30" rows="10"></textarea>
          <input className="formBtn" type="submit" value="Send" />
        </form>
      </div>
    </>
  )
}
