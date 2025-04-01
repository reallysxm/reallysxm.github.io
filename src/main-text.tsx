import "./main-text.css";

function MainText() {
  return (
    <h1 className='main-text'>
      {["S", "O", "O", "N"].map((char, index) => {
        const randomDelay = Math.random() * 1.5;
        return (
          <span key={index} style={{ animationDelay: `${randomDelay}s` }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
}

export default MainText;
