// Define the parallax animation
// anime({
//     targets: '.topleftimg',
//     translateY: {
//       value: ['-10%', '10%'],
//       duration: 2000,
//       easing: 'easeInOutQuad',
//       loop: true
//     }
//   });

console.log("hello");
// const rolly = new Rolly('.topleftimg', { speed: 0.4 });
// rolly.init();
var desc = new Rellax('.desc', {
    wrapper:'.features',
    // relativeToWrapper: true
  });

var rellax = new Rellax('.topleftimg', {
    wrapper:'.features',
    // relativeToWrapper: true
  });

var rellax2 = new Rellax('.bottomrightimg', {
    wrapper:'.features',
    // relativeToWrapper: true
  });

//rellax for 4th element
// var desc4 = new Rellax('.desc4', {
//   wrapper:'.features',
//   relativeToWrapper: true
// });

// var rellax4 = new Rellax('.topleftimg4', {
//   wrapper:'.features',
//   relativeToWrapper: true
// });

// var rellax4 = new Rellax('.bottomrightimg4', {
//   wrapper:'.features',
//   relativeToWrapper: true
// });

// Create Rellax instance
// var rellaxdest = new Rellax('.rellax');

// Destroy Rellax instance when user scrolls to the end of the section

function dest(){
    console.log("destroying");
    rellax.destroy();
    rellax2.destroy();
    desc.destroy();
  }