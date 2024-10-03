import "../styles/sidebar.scss";

export default function SideBar() {
  return (
    <div className="sidebar-main">
      <div className="doping-symbol">
        <img src="/icons/doping-hafiza-logo.svg"></img>
      </div>

      <div className="group1">
        <img src="/icons/anasayfa.svg"></img>
        <img src="/icons/dersler.svg"></img>
        <img src="/icons/sorubankasi.svg"></img>
        <img src="/icons/denemesinavlari.svg"></img>
        <img src="/icons/rehberlikvideolari.svg"></img>
        <img src="/icons/istatistik.svg"></img>
        <img src="/icons/olcmedegerlendirme.svg"></img>
      </div>

      <div className="group2">
        <img src="/icons/cozucu.svg"></img>
        <img src="/icons/simdianladim.svg"></img>
        <img src="/icons/kocumyanimda.svg"></img>
      </div>

      <div className="suggest-symbol">
        <img src="/icons/suggestions.svg"></img>
      </div>
    </div>
  );
}
