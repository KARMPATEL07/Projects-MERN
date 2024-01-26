import React, { useState ,useCallback,useEffect,useRef} from 'react'

const App = () => {
  const [length,setLength] = useState(8);
  const [numAllow,setNumAllow] = useState(false);
  const [charAllow,setCharAllow] = useState(false);
  const [pass,setPass] = useState('');

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    document.querySelector(".btn").innerHTML = "Copy";
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow){
      str+="0123456789";
    }
    if(charAllow){
      str+="!@#$%^&*()_+";
    }
    for(let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length));
    }
    setPass(pass);
  },[length,numAllow,charAllow,setPass]);

  useEffect(() => {
    passGen();
  }, [length,numAllow,charAllow,passGen]);



  const Copypass = useCallback(() => {
    passRef.current?.select();
    // document.execCommand("copy");
    window.navigator.clipboard.writeText(pass);
    // alert("Password Copied");
    document.querySelector(".btn").innerHTML="Copied";

  },[pass]);



  return (
    
    <div>
      <h1 className="text-4xl text-center font-bold text-white">
        Password Generator
      </h1>
      <div className="w-full h-screen flex flex-col items-center justify-center mt-10 bg-gray-500">
        <div className="flex flex-row items-center justify-center bg-">
          <label className="text-white text-lg">Password Length : {length}</label>
          <input
            className="w-10 h-10 text-center ml-2"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex flex-row items-center justify-center mt-3">
          <label className="text-white text-lg">Include Numbers</label>
          <input
            className="w-10 h-10 ml-2"
            type="checkbox"
            checked={numAllow}
            onChange={(e) => setNumAllow(e.target.checked)}
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-3">
          <label className="text-white text-lg">
            Include Special Characters
          </label>
          <input
            className="w-10 h-10 ml-2"
            type="checkbox"
            checked={charAllow}
            onChange={(e) => setCharAllow(e.target.checked)}
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-3">
          <button
            className="btn w-40 h-10 bg-blue-500 rounded-md text-white text-lg"
            onClick={Copypass}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-row items-center justify-center mt-3">
          <input className="w-80 h-10 text-center" type="text" value={pass} ref={passRef}/>
        </div>
      </div>
    </div>
  );
};

export default App