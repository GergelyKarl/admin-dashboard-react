import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUser__title">New User</h1>
      <form action="" className="newUser__form">
        <div className="newUser__item">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="pussycat89" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="John Snow" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="johnsnow@gmail.com" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+36 30 333 8974" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Adress</label>
          <input type="text" placeholder="Budapest,Hungary" />
        </div>
        <div className="newUser__item">
          <label htmlFor="">Gender</label>
          <div className="newUser__gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="newUser__item">
          <label htmlFor="">Active</label>
          <select className="newUser__select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser__button">Create</button>
      </form>
    </div>
  );
}
