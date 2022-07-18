import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("Мужской");

  return (
    <div className="profile-settings">
      <div className="settings-title">Настройки профиля</div>
      <div className="settings-block">
        <div className="setting">
          <label className="settings-input-label">Введите имя</label>
          <input type="text" className="settings-input" />
        </div>
        <div className="setting">
          <label className="settings-input-label">Введите фамилию</label>
          <input type="text" className="settings-input" />
        </div>
        <div className="setting">
          <label className="settings-input-label">Введите номер телефона</label>
          <input type="tel" className="settings-input" />
        </div>
        <div className="setting">
          <label className="settings-input-label">Введите Вашу страну</label>
          <input type="text" className="settings-input" />
        </div>
        <div className="setting">
          <label className="settings-input-label">Укажите Ваш пол</label>
          <div onClick={() => setOpen(!open)} className="settings-input">
            <div className="your-gender">{value}</div>
            <div
              className={`option ${open ? "" : "visible"}`}
              onClick={() =>
                setValue(value === "Мужской" ? "Женский" : "Мужской")
              }
            >
              {value === "Мужской" ? "Женский" : "Мужской"}
            </div>
          </div>
        </div>
        <div className="setting">
          <label className="settings-input-label">Введите Вашу почту</label>
          <input type="email" className="settings-input" />
        </div>
      </div>
      <div className="save-btn">
        <button>Сохранить</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
