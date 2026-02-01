import "./ProfileCard.css";

export default function ProfileCard({ name, role, email, photo }) {
  return (
    <div className="profile-card">
      <div className="profile-left">
        {photo ? (
          <img className="profile-photo" src={photo} alt={`${name} profile`} />
        ) : (
          <div className="profile-avatar">{name?.charAt(0)}</div>
        )}
      </div>

      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-role">{role}</p>
        <p className="profile-email">{email}</p>
      </div>
    </div>
  );
}