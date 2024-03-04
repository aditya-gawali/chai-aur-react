import { useCallback, useState, useEffect, useRef } from "react"


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "01234567890"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
  }, [Password])


  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
          className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white px-3 text-center py-0.5 shrink-0" onClick={copyPasswordToClipboard} >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              min={6}
              max={100}
              value={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed(prev => !prev)
              }}
            />
            <label>Numbers</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              min={6}
              max={100}
              value={charAllowed}
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed(prev => !prev)
              }}
            />
            <label>Characters</label>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
