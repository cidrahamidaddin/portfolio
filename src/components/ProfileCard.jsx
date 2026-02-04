import "./ProfileCard.css";
import profileImg from "../assets/profilepic.png"; 

export default function ProfileCard({ name, role, email }) {
  return (
    <div className="profile-card">
      <img
        src={profileImg}
        alt="Profile"
        className="profile-avatar"
      />

      <h1>{name}</h1>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}
