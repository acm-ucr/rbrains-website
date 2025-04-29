import CssGrid from "./components/CssGrid";

function App() {
  const galleryTextStyle = {
    fontFamily: "Besley, sans-serif",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "rgba(68, 47, 44, 1)",
    marginLeft: "50px", // Move text to the right
  };

  return (
    <div className="min-h-screen bg-[#FFF5E1]">
      <h1 style={galleryTextStyle}>Gallery</h1>
      <CssGrid />
    </div>
  );
}

export default App;
