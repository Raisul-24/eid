function greet() {
        var name = prompt("Enter Your Name:");
        if (name != null && name != "") {
          document.getElementById("greeting").innerHTML = "Eid Mubarak, " + name + "!";
        }
      }

      const images = ['image/one.jpeg', 'image/two.avif', 'image/three.aif', 'image/four.webp'];
      let index = 0;
      
      const rotateImage = () => {
              const img = document.getElementById('image');
              img.src = images[index];
              index = (index + 1) % images.length;
      };
      
      setInterval(rotateImage, 5000);
      

const countdown = () => {
	const countDate = new Date('April 22, 2023 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	// Convert time to days, hours, minutes and seconds
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);

	document.getElementById('days').innerText = textDay;
	document.getElementById('hours').innerText = textHour;
	document.getElementById('minutes').innerText = textMinute;
	document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);
const container = document.getElementById("fireworks-container");

function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");

  const xPos = Math.random() * container.clientWidth;
  firework.style.left = `${xPos}px`;

  container.appendChild(firework);

  setTimeout(() => {
    container.removeChild(firework);
  }, 1000);
}

setInterval(createFirework, 500);
