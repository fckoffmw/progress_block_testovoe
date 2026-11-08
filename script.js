const valueInput = document.querySelector('#value');
const hideInput = document.querySelector('#hide');
const progress = document.querySelector('.progress');
const animateInput = document.querySelector('#animate')

function createProgress(root) {
  const progressValue = root.querySelector('.progress-value');
  const progressRing = root.querySelector('.progress-ring')

  function setValue(enteredValue) {
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

  function setHidden(isHidden) {
    root.hidden = isHidden;
  }

  function setAnimated(isAnimated) {
    progressRing.classList.toggle('is-animated', isAnimated);
  }

  return { setValue, setHidden, setAnimated };
}

const indicator = createProgress(progress)

function updateProgress() {
  const enteredValue = Number(valueInput.value);
  indicator.setValue(enteredValue);
}

function updateHidden() {
  indicator.setHidden(hideInput.checked)
}

function updateAnimated() {
  indicator.setAnimated(animateInput.checked)
}

valueInput.addEventListener('input', updateProgress);
hideInput.addEventListener('change', updateHidden);
animateInput.addEventListener('change', updateAnimated);

updateProgress();
updateHidden();
updateAnimated();
