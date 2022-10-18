const hidePlaceholder = ($target) => {
  if ($target.val() !== '') {
    $target.nextAll('.input__placeholder').first().addClass('focused');
  } else {
    $target.nextAll('.input__placeholder').first().removeClass('focused');
  }
};

const addFocusEventListeners = (targetclass) => {
  $(targetclass).on('focusout', (e) => {
    hidePlaceholder($(e.target));
  });

  $(targetclass).on('focusin', (e) => {
    $(e.target).nextAll('.input__placeholder').first().addClass('focused');
  });
};

export const inputInit = () => {
  const array = ['.js-input'];
  array.forEach(function (item) {
    addFocusEventListeners(item);
  });
};
