const valueInput = document.querySelector('#value');
const progressValue = document.querySelector('.progress-value');

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

valueInput.addEventListener('input', updateProgress);

updateProgress();
