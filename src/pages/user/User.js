import "./User.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TodayIcon from "@mui/icons-material/Today";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="user__title__container">
        <h1 className="user__title">Edit User</h1>
        <Link to="/newuser">
          <button className="user__addButton">Create </button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__display">
          <div className="user__display__top">
            <img
              className="user__display__image"
              src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
            <div className="user__display__top__title">
              <span className="user__display__username">Mocking Man</span>
              <span className="user__display__title">Javascript Developer</span>
            </div>
          </div>
          <div className="user__display__bottom">
            <span className="user__display__title">Account Details</span>
            <div className="user__display__info">
              <PermIdentityIcon className="user__display__icon" />
              <span className="user__display__info__title">mockito</span>
            </div>
            <div className="user__display__info">
              <TodayIcon className="user__display__icon" />
              <span className="user__display__info__title">21.01.1986</span>
            </div>
            <div className="user__display__info">
              <span className="user__display__title">Contact Details</span>
            </div>
            <div className="user__display__info">
              <LocalPhoneIcon className="user__display__icon" />
              <span className="user__display__info__title">+36 30 7894562</span>
            </div>
            <div className="user__display__info">
              <EmailIcon className="user__display__icon" />
              <span className="user__display__info__title">mockitoman@gmail.com</span>
            </div>
            <div className="user__display__info">
              <LocationSearchingIcon className="user__display__icon" />
              <span className="user__display__info__title">Budapest,Hungary</span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__update__title">Edit</span>
          <form action="" className="user__update__form">
            <div className="user__update__left">
              <div className="user__update__item">
                <label>Username</label>
                <input type="text" placeholder="pussycat89" className="user__update__input" />
              </div>
              <div className="user__update__item">
                <label>Full Name</label>
                <input type="text" placeholder="John Snow" className="user__update__input" />
              </div>
              <div className="user__update__item">
                <label>Email</label>
                <input type="email" placeholder="johnsnow@gmail.com" className="user__update__input" />
              </div>
              <div className="user__update__item">
                <label>Phone</label>
                <input type="text" placeholder="" className="user__update__input" />
              </div>
              <div className="user__update__item">
                <label>Adress</label>
                <input type="text" placeholder="" className="user__update__input" />
              </div>
            </div>
            <div className="user__update__right">
              <div className="user__update__upload">
                <img
                  className="user__update__image"
                  src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
                <label htmlFor="fileupload">
                  <PublishIcon className="user__update__upload__icon" />
                </label>
                <input type="file" id="fileupload" style={{ display: "none" }} />
              </div>
              <button className="user__update__button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
