// document.addEventListener('DOMContentLoaded', () => {
//     (function () {
//       const texts = [
//         ['Play', 'Win', 'Earn'],
//         ['खेलो', 'जीतो', 'कमाओ'],
//         ['ಆಟ', 'ಗೆಲ್ಲು', 'ಗಳಿಸು'],
//         ['விளையாடு', 'வெற்றி', 'சம்பாதிக்க'],
//       ];
//       const doors = document.querySelectorAll('.door');
//       let currentTextSetIndex = 0;
  
//       document.querySelector('#spinner').addEventListener('click', spin);
//       document.querySelector('#reseter').addEventListener('click', reset);
  
//       function init() {
//         const textSet = texts[currentTextSetIndex];
  
//         for (let i = 0; i < doors.length; i++) {
//           const door = doors[i];
//           const boxes = door.querySelector('.boxes');
//           const boxesClone = boxes.cloneNode(false);
//           const text = textSet[i];
  
//           const box = document.createElement('div');
//           box.classList.add('box');
//           box.style.width = door.clientWidth + 'px';
//           box.style.height = door.clientHeight + 'px';
//           box.textContent = text;
//           boxesClone.appendChild(box);
  
//           door.replaceChild(boxesClone, boxes);
//         }
//       }
  
//       async function spin() {
//         const boxHeight = doors[0].clientHeight;
//         const duration = 500; // Animation duration in milliseconds
//         const delay = 500; // Delay between each iteration in milliseconds
//         const staggerDelay = 100; // Delay between each door animation in milliseconds
      
//         // Animate existing text to move down
//         for (let i = 0; i < doors.length; i++) {
//           const door = doors[i];
//           const boxes = door.querySelector('.boxes');
//           const existingTextHeight = boxes.clientHeight;
      
//           boxes.style.transition = `transform ${duration / 1000}s ease-in-out`;
//           boxes.style.transform = `translateY(${existingTextHeight}px`;
      
//           await new Promise((resolve) => setTimeout(resolve, duration));
//         }
      
//         if (currentTextSetIndex === texts.length - 1) {
//           currentTextSetIndex = 0;
//         } else {
//           currentTextSetIndex++;
//         }
      
//         init();
      
//         await new Promise((resolve) => requestAnimationFrame(resolve));
      
//         // Animate new text to move in
//         for (let i = 0; i < doors.length; i++) {
//           const door = doors[i];
//           const boxes = door.querySelector('.boxes');
//           const boxHeight = door.clientHeight;
      
//           const textSet = texts[currentTextSetIndex];
//           const text = textSet[i];
      
//           const box = document.createElement('div');
//           box.classList.add('box');
//           box.style.width = door.clientWidth + 'px';
//           box.style.height = door.clientHeight + 'px';
//           box.textContent = text;
      
//           const newBoxes = document.createElement('div');
//           newBoxes.classList.add('boxes');
//           newBoxes.style.transition = 'transform 0s';
//           newBoxes.style.transform = `translateY(-${boxHeight}px)`;
//           newBoxes.appendChild(box);
      
//           door.replaceChild(newBoxes, boxes);
      
//           await new Promise((resolve) => setTimeout(resolve, i * staggerDelay));
      
//           newBoxes.style.transition = `transform ${duration / 1000}s ease-in-out`;
//           newBoxes.style.transform = 'translateY(0)';
      
//           await new Promise((resolve) => setTimeout(resolve, duration));
//         }
      
//         // Delay between each iteration
//         await new Promise((resolve) => setTimeout(resolve, delay));
      
//         // Call the spin function recursively
//         spin();
//       }
  
//       function reset() {
//         currentTextSetIndex = 0;
//         init();
//       }
  
//       init();
//     })();
//   });

document.addEventListener('DOMContentLoaded', () => {
    (function () {
      const texts = [
        ['Play', 'Win', 'Earn'],
        ['खेलो', 'जीतो', 'कमाओ'],
        ['ಆಟ', 'ಗೆಲ್ಲು', 'ಗಳಿಸು'],
        ['விளையாடு', 'வெற்றி', 'சம்பாதிக்க'],
      ];
      const doors = document.querySelectorAll('.door');
      let currentTextSetIndex = 0;
  
      function init() {
        const textSet = texts[currentTextSetIndex];
  
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i];
          const boxes = door.querySelector('.boxes');
          const boxesClone = boxes.cloneNode(false);
          const text = textSet[i];
  
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = door.clientWidth + 'px';
          box.style.height = door.clientHeight + 'px';
          box.textContent = text;
          boxesClone.appendChild(box);
  
          door.replaceChild(boxesClone, boxes);
        }
      }
  
      async function spin() {
        const boxHeight = doors[0].clientHeight;
        const duration = 600;
        const staggerDelay = 100;
  
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i];
          const boxes = door.querySelector('.boxes');
          const existingTextHeight = boxes.clientHeight;
  
          boxes.style.transition = `transform ${duration / 1000}s ease-in-out`;
          boxes.style.transform = `translateY(${existingTextHeight}px`;
  
          await new Promise((resolve) => setTimeout(resolve, duration));
        }
  
        if (currentTextSetIndex === texts.length - 1) {
          currentTextSetIndex = 0;
        } else {
          currentTextSetIndex++;
        }
  
        init();
  
        await new Promise((resolve) => requestAnimationFrame(resolve));
  
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i];
          const boxes = door.querySelector('.boxes');
          const boxHeight = door.clientHeight;
  
          const textSet = texts[currentTextSetIndex];
          const text = textSet[i];
  
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = door.clientWidth + 'px';
          box.style.height = door.clientHeight + 'px';
          box.textContent = text;
  
          const newBoxes = document.createElement('div');
          newBoxes.classList.add('boxes');
          newBoxes.style.transition = 'transform 0s';
          newBoxes.style.transform = `translateY(-${boxHeight}px)`;
          newBoxes.appendChild(box);
  
          door.replaceChild(newBoxes, boxes);
  
          await new Promise((resolve) => setTimeout(resolve, i * staggerDelay));
  
          newBoxes.style.transition = `transform ${duration / 1000}s ease-in-out`;
          newBoxes.style.transform = 'translateY(0)';
  
          await new Promise((resolve) => setTimeout(resolve, duration));
        }
        spin();
      }
  
      init();
      spin();
    })();
  });


