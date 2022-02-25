import { useState } from 'preact/hooks';

export function App() {
  const [position, setPosition] = useState('10356');
  const [jog, setJog] = useState(1);
  const [imgNum, setImgNum] = useState('200');
  const [shootSpeed, setShootSpeed] = useState('0.5');
  const [jogSpeed, setJogSpeed] = useState('1');
  const [deshakeDelay, setDeshakeDelay] = useState('5');
  const [shootDelay, setShootDelay] = useState('0.5');
  
  return (
    <div className="w-full min-h-screen p-4 bg-slate-200">

      {/* MAIN CONTROLS */}
      <div class="inline-flex justify-between items-center w-full" >
        <div>
          <div class="my-2">
            <p class="space-y-4 font-medium text-gray-800">Current position</p>
            <div class="flex text-2xl items-center relative p-4 w-full rounded-lg overflow-hidden shadow hover:shadow-md bg-slate-300">
                {`${position} mm`}
            </div>
          </div>

          {/* Jog buttons */}
          <div class="my-8">
            <p class="space-y-4 font-medium text-gray-800">Jog increment</p>
            <div class="inline-flex items-center overflow-hidden bg-slate-300 rounded">
              <button onClick={() => setJog(1)} className={`p-3 focus:outline-none ${jog === 1 && "bg-slate-400"}`} type="button">
                1 mm
              </button>
              <span class="w-px h-4 bg-white/25"></span>
              <button onClick={() => setJog(2)} className={`p-3 focus:outline-none ${jog === 2 && "bg-slate-400"}`} type="button">
                0.5 mm
              </button>
              <span class="w-px h-4 bg-white/25"></span>
              <button onClick={() => setJog(3)} className={`p-3 focus:outline-none ${jog === 3 && "bg-slate-400"}`} type="button">
                0.1 mm
              </button>
            </div>
          </div>

          {/* NUM IMAGES */}
          <div class="my-8">
            <p class="space-y-4 font-medium text-gray-800">Number of images</p>
            <input 
              class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" 
              type="number"
              value={imgNum}
              onChange={(ev) => {
                setImgNum((ev.target as HTMLInputElement).value || '0')
              }}
              />
          </div>
        </div>

        <div>
          {/* Buttons move */}
          <div class="inline-flex flex-col items-center overflow-hidden text-white bg-blue-600 rounded">
            <button class="p-8 bg-blue-600 focus:outline-none focus:bg-blue-700 active:bg-blue-500" type="button">
              <span class="sr-only"> UP </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 20 20 " fill="currentColor">
              <path fill-rule="evenodd" d="M14.701 12.713a1 1 0 0 1-1.414 0L9.994 9.42l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414z" clip-rule="evenodd"/>
              </svg>
            </button>

            <span class="w-4 h-px bg-white/25"></span>

            <button class="p-8 bg-blue-600 focus:outline-none focus:bg-blue-700 active:bg-blue-500" type="button">
              <span class="sr-only"> DOWN </span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.299 7.299a1 1 0 0 1 1.414 0l3.293 3.293 3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="inline-flex justify-between items-center w-full" >
        {/* POINT BUTTONS */}
        <div class="inline-flex flex-col items-center overflow-hidden ">
          <button class="inline-block mt-2 px-6 py-3 text-sm font-medium bg-blue-300 rounded active:text-indigo-500 " href="/download">
            Set Start Point
          </button>
          <button class="inline-block mt-2 px-6 py-3 text-sm font-medium bg-blue-300 rounded active:text-indigo-500 " href="/download">
            Set End Point
          </button>
          <button class="inline-block mt-2 px-6 py-3 text-sm font-medium bg-slate-300 rounded active:text-indigo-500 " href="/download">
            Test Image
          </button>
        </div>
        {/* SHOTTING BUTTONS */}
        <div class="inline-flex flex-col items-center overflow-hidden ">
          <button class="inline-block mt-2 px-8 py-8 text-sm font-medium bg-slate-300 rounded active:text-indigo-500 " href="/download">
            Start Shotting
          </button>
          <button class="inline-block mt-2 px-6 py-3 text-sm font-medium bg-slate-300 rounded active:text-indigo-500 " href="/download">
            Abort Shotting
          </button>
        </div>
      </div>

      {/* STATS  */}
      <div class="my-4">
        <p class="space-y-4 font-medium text-gray-800">Stats</p>
        <div class="inline-flex justify-between w-3/5">
          <span>Range</span><span>{`${"2.67"} mm`}</span>
        </div>
        <div class="inline-flex justify-between w-3/5">
          <span>Increment</span><span>{`${"0.0134"} mm`}</span>
        </div>
        <div class="inline-flex justify-between w-3/5">
          <span>Shooting time</span><span>{`${"23.7"} min`}</span>
        </div>
      </div>

      {/* SETTINGS  */}
      <div class="my-4">
        <p class="space-y-4 font-medium text-gray-800">Settings</p>
        <div class="inline-flex items-baseline w-full">
          <span class="w-32">Shooting Speed</span> <input 
              class="p-px mt-1 h-30 text-sm border-2 border-gray-200 rounded" type="number"
              value={shootSpeed}
              onChange={(ev) => {
                setShootSpeed((ev.target as HTMLInputElement).value || '0')
              }}
              /> <span>mm/s</span>
        </div>
        <div class="inline-flex items-baseline w-full">
          <span class="w-32">Jog Speed</span> <input 
              class="p-px mt-1 h-30 text-sm border-2 border-gray-200 rounded" type="number"
              value={jogSpeed}
              onChange={(ev) => {
                setJogSpeed((ev.target as HTMLInputElement).value || '0')
              }}
              /> <span>mm/s</span>
        </div>
        <div class="inline-flex items-baseline w-full">
          <span class="w-32">Deshake delay</span> <input 
              class="p-px mt-1 h-30 text-sm border-2 border-gray-200 rounded" type="number"
              value={deshakeDelay}
              onChange={(ev) => {
                setDeshakeDelay((ev.target as HTMLInputElement).value || '0')
              }}
              /> <span>s</span>
        </div>
        <div class="inline-flex items-baseline w-full">
          <span class="w-32">Shoot delay</span> <input 
              class="p-px mt-1 h-30 text-sm border-2 border-gray-200 rounded" type="number"
              value={shootDelay}
              onChange={(ev) => {
                setShootDelay((ev.target as HTMLInputElement).value || '0')
              }}
              /> <span>s</span>
        </div>
      </div>
    </div>
  )
}