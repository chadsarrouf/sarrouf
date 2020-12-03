import logo from './logo.svg';
import sun from './sun5.svg';

import './App.css';

function App() {
  return (
    <div className="App">
		<header className="App-header">
		  	<div class="container">
          		<img src={sun} class="sun" alt="logo" />
		  		
				<div class="bird-container">
					<div class="bird bird--one"></div>
				</div>
				
				<div class="bird-container-2">
					<div class="bird bird--two"></div>
				</div>
			</div>
			<p>	Hi, I'm Chad. </p>
			
		</header>
    </div>
  );
}

export default App;
 