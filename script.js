const valueInput = document.querySelector('#value');
const progressValue = document.querySelector('.progress-value');
const hideInput = document.querySelector('#hide');
const progress = document.querySelector('.progress');
const animateInput = document.querySelector('#animate')
const progressRing = document.querySelector('.progress-ring')

function updateProgress() {
  const enteredValue = Number(valueInput.value);
  const value = Math.max(0, Math.min(100, enteredValue));
  const offset = 100 - value;

  if (value === 0) {
    progressValue.style.strokeDasharray = '0 100';
  } else if (value === 100) {
    progressValue.style.strokeDasharray = 'none';
  } else {
    progressValue.style.strokeDasharray = '100 100';
  }

  progressValue.style.strokeDashoffset = offset;
}

function updateHidden() {
  progress.hidden = hideInput.checked;
}

function updateAnimated() {
  progressRing.classList.toggle('is-animated', animateInput.checked);
}

valueInput.addEventListener('input', updateProgress);
hideInput.addEventListener('change', updateHidden);
animateInput.addEventListener('change', updateAnimated);

updateProgress();
updateHidden();
updateAnimated();
