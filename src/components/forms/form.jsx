import "./form.scss";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" />
      <button className="btn">Submit</button>
    </form>
  );
}
