// wip
export const SideBar = () => {
  return (
    <nav>
      <div className="nav_logo-wrapper">
        <p className="nav_logo">SNS</p>
      </div>

      <div className="menu_options active">
        <span className="material-icons">home</span>
        <h2>ホーム</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">search</span>
        <h2>検索</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">notifications</span>
        <h2>通知</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">email</span>
        <h2>メッセージ</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">bookmark</span>
        <h2>ブックマーク</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">person</span>
        <h2>プロフィール</h2>
      </div>

      <div className="menu_options">
        <span className="material-icons">more_horiz</span>
        <h2>もっと見る</h2>
      </div>
    </nav>
  );
};
