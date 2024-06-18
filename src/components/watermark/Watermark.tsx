// import './style-watermark.css'

function Watermark({ text, className}) {

  return (
    <>
      <h1 className={`watermark ${className} `}>{text}</h1>
    </>
  );
}

export default Watermark;
