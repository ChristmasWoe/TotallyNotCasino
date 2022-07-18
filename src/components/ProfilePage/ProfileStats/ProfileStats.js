import React from "react";
import "./ProfileStats.css";

const ProfileStats = () => {
  const profileStats = {
    generalDeposit: 15000,
    generalWithdraw: 15000,
    generalPrize: 100000,
    allWins: 256,
    allLosses: 256,
  };

  return (
    <div className="profile-stats-block">
      <div className="profile-stats-title">Статистика профиля</div>
      <div className="profile-stats">
        <div className="deposit-stat stat">
          <p>
            Пополнение: <span>{profileStats.generalDeposit}</span>
          </p>
        </div>
        <div className="win-stat stat">
          <p>
            Побед: <span>{profileStats.allWins}</span>
          </p>
        </div>
        <div className="lose-stat stat">
          <p>
            Проигрышей: <span>{profileStats.allLosses}</span>
          </p>
        </div>
        <div className="withdraw-stat stat">
          <p>
            Вывод: <span>{profileStats.generalWithdraw}</span>
          </p>
        </div>
        <div className="all-games-stat stat">
          <p>
            Всего игр:{" "}
            <span>{profileStats.allLosses + profileStats.allWins}</span>
          </p>
        </div>
        <div className="general-profit-stat stat">
          <p>
            Весь выигрыш: <span>{profileStats.generalPrize}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
