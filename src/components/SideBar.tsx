import "../styles/sidebar.scss";

export default function SideBar() {
  return (
    <div className="sidebar-main">
      <div className="doping-symbol">
        <img src="/icons/sidebar/doping-hafiza-logo.svg" />
      </div>

      <div className="group1">
        <img src="/icons/sidebar/anasayfa.svg" />
        <img src="/icons/sidebar/dersler.svg" />
        <img src="/icons/sidebar/sorubankasi.svg" />
        <img src="/icons/sidebar/denemesinavlari.svg" />
        <img src="/icons/sidebar/rehberlikvideolari.svg" />
        <img src="/icons/sidebar/istatistik.svg" />
        <img src="/icons/sidebar/olcmedegerlendirme.svg" />
      </div>

      <div className="group2">
        <img src="/icons/sidebar/cozucu.svg" />
        <img src="/icons/sidebar/simdianladim.svg" />
        <img src="/icons/sidebar/kocumyanimda.svg" />
      </div>

      <div className="suggest-symbol">
        <img src="/icons/sidebar/suggestions.svg" />
      </div>
    </div>
  );
}
